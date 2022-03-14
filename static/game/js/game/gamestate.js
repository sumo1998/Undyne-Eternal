var timeText;
var loveText;
var currentAttackText;

function GameState() {
    this.state = "playing";
    this.level = 1;
    
    hpText = new PIXI.extras.BitmapText("04 / 04", {font: "15px Numbers", align: "right"});
    hpText.position.x = 300;
    hpText.position.y = 450;
    
    timeText = new PIXI.extras.BitmapText("00:00:00.00", {font: "15px Numbers", align: "right"});
    timeText.anchor = new PIXI.Point(1, 0);
    timeText.position.x = 523;
    timeText.position.y = 450;
    
    loveText = new PIXI.extras.BitmapText("LV " + this.level, {font: "15px Numbers", align: "left"});
    loveText.position.x = 150;
    loveText.position.y = 450;
    
    currentAttackText = new PIXI.extras.BitmapText(
        String(currentAttackNumber).padStart(2, "0") + " / " + String(attacks.length).padStart(2, "0"),
        {font: "15px Numbers", align: "right"}
    );
    currentAttackText.x = 0;
    currentAttackText.y = 450;
    
    this.selectText = new PIXI.extras.BitmapText("", {font: "18px Undertale"});
    this.selectText.position.set(80, 260);
    this.selectText.visible = false;
    
    gameplayStage.addChild(this.selectText);
}

GameState.prototype.handleInput = function(key) {
    if(undyne.textState !== "none") {
        switch(key) {
            case "A":
                undyne.advanceTextA();
                break;
            case "B":
                undyne.advanceTextB();
                break;
            default:
                break;
        }
    }
    else if(this.state === "playing") {
        switch(key) {
            case "left":
                heart.setShieldDir(1);
                break;
            case "right":
                heart.setShieldDir(3);
                break;
            case "up":
                heart.setShieldDir(2);
                break;
            case "down":
                heart.setShieldDir(0);
                break;
            default:
                break;
        }
    }
};

GameState.prototype.restartGame = function(difficulty) {
    this.difficulty = difficulty;
    
    this.elapsedTime = 0;
    this.state = "playing";
    
    arrows = [];
    nextAttack = null;
    
    heart.hp = heart.maxHp;
    hpText.text = String(heart.hp).padStart(2, "0") + " / " + String(heart.maxHp).padStart(2, "0");
    
    switch(difficulty) {
        case "normal":
            heart.invincibilityIncrement = 1000;
            break;
        case "hard":
            heart.invincibilityIncrement = 500;
            break;
        case "genocide":
            heart.invincibilityIncrement = 100;
            break;
    }
    
    switch(difficulty) {
        case "normal":
            // have a 2-second buffer before the first attack
            attackQueueTime = 2;
            attackQueue = [{time: 2}];
            addNextAttack(ag1);
            break;
        case "hard":
            attackQueueTime = 2;
            attackQueue = [{time: 2}];
            addNextAttack(hAg1);
            break;
        case "genocide":
            // genocide is timed to the music.
            attackQueueTime = 6.4;
            attackQueue = [{time: 6.4}];
            addNextAttack(gAg1);
            break;
    }
    
    box.destLeft = 320 - shieldDistance;
    box.destRight = 320 + shieldDistance;
    box.destTop = 240 - shieldDistance;
    box.destBottom = 240 + shieldDistance;
    heart.sprite.visible = true;
    heart.shieldSprite.visible = true;
    
    switch(difficulty) {
        case "normal":
        case "hard":
            bgmUndyne1.play();
            break;
        case "genocide":
            bgmUndyne2.play();
            break;
    }
    
    switchAttackMode();
};

GameState.prototype.endGame = function() {
    
    // remove all arrows
    
    for(var a = 0; a < arrows.length; ++a) {
        gameplayStage.removeChild(arrows[a].sprite);
    }
    
    if(box.top < 240 - shieldDistance) {
        box.top = 240 - shieldDistance;
    }
    
    heart.shieldSprite.visible = false;
    undyne.opacityG.alpha = 0;
    this.state = "gameover";
    
    this.selectText.text = "Play again?";
    
    switch(this.difficulty) {
        case "normal":
        case "hard":
            bgmUndyne1.stop();
            break;
        case "genocide":
            bgmUndyne2.stop();
            break;
    }
    
    undyne.queueText(endGameText(this.difficulty, this.elapsedTime), () => {
        this.state = "playing";
        currentAttackIdx = 0;
        currentAttackNumber = 1;
        gamestate.restartGame(difficulty);
    });
    
};

var annoyance = 0;
var rumble = {x: 0, y: 0};

function endGameText(diff, survivalTime) {
    switch(diff) {
        case "normal":
            if(survivalTime < 6890) {
                ++annoyance;
                switch(annoyance) {
                    case 1:
                        return [
                            {text: "Look, I gave you\na shield for one\npurpose and one\npurpose only."},
                            {text: "To DEFEND YOURSELF."},
                            {text: "Can't get more\nstraightforward\nthan that."}
                        ];
                    default:
                        return [
                            {text: "Are you just doing\nthat on purpose?", face: 2},
                            {text: "Because it's not\nfunny. Stop it."}
                        ];
                }
            }
            else if(survivalTime < 60000) {
                return [
                    {text: "Is that the best\nyou've got?"},
                    {text: "Pathetic. I know you\ncan do better!"}
                ];
            }
            else if(survivalTime < 120000) {
                return [
                    {text: "Good, but still\nnot good enough."},
                    {text: "Keep trying, human!\nReach for the top!"}
                ];
            }
            else {
                return [
                    {text: "You're doing well,\nbut only because I'm\ngoing easy on you."},
                    {text: "Try something harder next time!"}
                ];
            }
        case "hard":
            if(survivalTime < 60000) {
                return [
                    {text: "Is that the best\nyou've got?"},
                    {text: "Pathetic. I know you\ncan do better!"}
                ];
            }
            else if(survivalTime < 120000) {
                return [
                    {text: "Good, but still\nnot good enough."},
                    {text: "Keep trying, human!\nReach for the top!"}
                ];
            }
            else {
                return [
                    {text: "You're doing well."},
                    {text: "But you can still\ndo better! Let me\ngo harder on you!"}
                ];
            }
        case "genocide":
            return [
                {text: "You're going to have\nto try a little\nharder than THAT."}
            ];
        default:
            return [
                {text: "Is that the best\nyou've got?"},
                {text: "Pathetic. I know you\ncan do better!"}
            ];
    }
}

GameState.prototype.update = function(deltaMs) {
    box.update(deltaMs);
    heart.update(deltaMs);
    undyne.update(deltaMs);
    
    if(this.state === "playing") {
        this.elapsedTime += deltaMs;
        timeText.text = formatTimeLong(this.elapsedTime);
        
        // arrows.update(deltaMs)
        for(var a = 0; a < arrows.length; ++a) {
            arrows[a].update(deltaMs / 1000);
            if(arrows[a].removed) {
                gameplayStage.removeChild(arrows[a].sprite);
                arrows.splice(a, 1);
            }
        }
        
        var currentAttack = attackQueue[0];
        currentAttack.time -= deltaMs / 1000;
        
        if(currentAttack.time <= (currentAttack.bufferTime || 0)) {
            switchAttackMode();
        }
        
    }
    else if(this.state === "gameover") {
        rumble = {x: 0, y: 0};
    }
    else {
        
    }
    
    gameplayStage.position.set(rumble.x, rumble.y);
};

var gamestate;

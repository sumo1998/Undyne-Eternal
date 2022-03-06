var timeText;
var loveText;

function GameState() {
    
    this.state = "playing";
    this.level = 1;
    
    hpText = new PIXI.extras.BitmapText("04 / 04", {font: "15px Numbers", align: "right"});
    hpText.position.x = 300;
    hpText.position.y = 450;
    
    timeText = new PIXI.extras.BitmapText("00:00.00", {font: "15px Numbers", align: "left"});
    timeText.position.x = 500;
    timeText.position.y = 450;
    
    loveText = new PIXI.extras.BitmapText("LV " + this.level, {font: "15px Numbers", align: "left"});
    loveText.position.x = 150;
    loveText.position.y = 450;
    
    this.selectText = new PIXI.extras.BitmapText("", {font: "18px Undertale"});
    this.selectText.position.set(80, 260);
    this.selectText.visible = false;
    
    gameplayStage.addChild(this.selectText);
}

GameState.prototype.handleInput = function(key) {
    
    if(undyne.textState != "none") {
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
    else if(this.state == "playing") {
        switch(key) {
            case "left":
                heart.setShieldDir(2);
                break;
            case "right":
                heart.setShieldDir(4);
                break;
            case "up":
                heart.setShieldDir(3);
                break;
            case "down":
                heart.setShieldDir(1);
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
    spears = [];
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
            attackQueue = [{type: "null", time: 2}];
            addNextAttack(ag1);
            break;
        case "hard":
            attackQueueTime = 2;
            attackQueue = [{type: "null", time: 2}];
            addNextAttack(hAg1);
            break;
        case "genocide":
            // genocide is timed to the music.
            attackQueueTime = 6.4;
            attackQueue = [{type: "null", time: 6.4}];
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
    
    // remove all arrows and spears
    
    for(var a = 0; a < arrows.length; ++a) {
        gameplayStage.removeChild(arrows[a].sprite);
    }
    for(var a = 0; a < spears.length; ++a) {
        gameplayStage.removeChild(spears[a].sprite);
    }
    for(var a = 0; a < pikes.length; ++a) {
        gameplayStage.removeChild(pikes[a].sprite);
    }
    for(var a = 0; a < circleSpears.length; ++a) {
        gameplayStage.removeChild(circleSpears[a].sprite);
    }
    for(var a = 0; a < swarmSpears.length; ++a) {
        gameplayStage.removeChild(swarmSpears[a].sprite);
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
    
    if(this.state == "playing") {
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
        
        // spears.update(deltaMs)
        for(var a = 0; a < spears.length; ++a) {
            spears[a].update(deltaMs);
            if(spears[a].removed) {
                gameplayStage.removeChild(spears[a].sprite);
                spears.splice(a, 1);
            }
        }
        
        // pikes.update(deltaMs)
        for(var a = 0; a < pikes.length; ++a) {
            pikes[a].update(deltaMs);
            if(pikes[a].removed) {
                gameplayStage.removeChild(pikes[a].sprite);
                pikes.splice(a, 1);
            }
        }
        
        // circleSpears.update(deltaMs)
        for(var a = 0; a < circleSpears.length; ++a) {
            circleSpears[a].update(deltaMs);
            if(circleSpears[a].removed) {
                gameplayStage.removeChild(circleSpears[a].sprite);
                circleSpears.splice(a, 1);
            }
        }
        
        // swarm.update(deltaMs)
        for(var a = 0; a < swarmSpears.length; ++a) {
            swarmSpears[a].update(deltaMs);
            if(swarmSpears[a].removed) {
                gameplayStage.removeChild(swarmSpears[a].sprite);
                swarmSpears.splice(a, 1);
            }
        }
        
        var currentAttack = attackQueue[0];
        currentAttack.time -= deltaMs / 1000;
        
        if(currentAttack.type == "spear") {
            spearTime -= deltaMs;
            if(spearTime <= 0) {
                spearTime += spearInterval;
                addNewSpear();
            }
        }
        else if(currentAttack.type == "pike") {
            pikeTime -= deltaMs;
            if(pikeTime <= 0) {
                pikeTime += pikeInterval;
                addNewPike();
            }
        }
        else if(currentAttack.type == "circlespear") {
            circleTime -= deltaMs;
            if(circleTime <= 0) {
                circleTime += circleInterval;
                addNewCircleSpear(circleCount);
            }
        }
        else if(currentAttack.type == "swarmspear") {
            swarmTime -= deltaMs;
            if(swarmTime <= 0) {
                swarmTime += swarmInterval;
                swarmInitialAngle += Math.random() * 0.8 - 0.5;
                addNewSwarmSpear(6, swarmInterval, swarmInitialAngle);
            }
        }
        
        if(currentAttack.time <= 0.4 + (currentAttack.bufferTime || 0) &&
            currentAttack.type != attackQueue[1].type) {
            undyne.swingArm();
        }
        
        if(currentAttack.time <= (currentAttack.bufferTime || 0)) {
            switchAttackMode();
        }
        
    }
    else if(this.state == "gameover") {
        rumble = {x: 0, y: 0};
    }
    else {
        
    }
    
    gameplayStage.position.set(rumble.x, rumble.y);
    
};

var gamestate;

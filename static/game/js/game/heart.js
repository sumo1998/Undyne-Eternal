var heartTexture;
var shieldTexture;
var shieldHitTexture;
var hpText;

var heartColors = {
    "red": 0xff0000,
    "green": 0x00ff00
};

function Heart() {
    this.maxHp = 4; // always starts with 4 HP
    this.hp = this.maxHp;
    this.invincibility = 0;
    this.invincibilityIncrement = 1000;
    
    /* rendering info */
    
    // position relative to the BOX
    // counting from top-left corner
    
    this.posX = 320;
    this.posY = 240;
    
    // relPosX is used in dual dodge+block mode. Don't worry about it for now.
    this.relPosX = 320;
    this.relPosY = 240;
    
    this.colour = "green";
    this.shieldDir = 2;
    
    this.absShieldDir = 2;
    this.targetRotation = Math.PI * 2;
    
    this.shieldHitTimeRemaining = 0;
    
    this.sprite = new PIXI.Sprite(heartTexture);
    this.sprite.anchor.set(0.5, 0.5);
    this.sprite.position.set(this.posX, this.posY);
    this.sprite.tint = heartColors[this.colour];
    this.sprite.visible = false;
    
    this.shieldSprite = new PIXI.Sprite(shieldTexture);
    this.shieldSprite.anchor.set(0.5, 1.4);
    this.shieldSprite.position.set(this.posX, this.posY);
    this.shieldSprite.rotation = Math.PI / 2 * (2 + this.shieldDir);
    this.shieldSprite.visible = false;
    
    this.shieldHitSprite = new PIXI.Sprite(shieldHitTexture);
    this.shieldHitSprite.anchor.set(0.5, 1.4);
    this.shieldHitSprite.position.set(this.posX, this.posY);
    this.shieldHitSprite.rotation = Math.PI / 2 * (2 + this.shieldDir);
    this.shieldHitSprite.visible = false;
    
    const circle = new PIXI.Graphics();
    circle.lineStyle(1, 0x00ff00, 1);
    circle.drawCircle(320, 240, 24);
    
    this.graphics = new PIXI.Graphics();
    gameplayStage.addChild(this.graphics);
    
    gameplayStage.addChild(this.sprite);
    gameplayStage.addChild(this.shieldSprite);
    gameplayStage.addChild(this.shieldHitSprite);
    gameplayStage.addChild(circle);
    
    hpText.text = String(this.hp).padStart(2, "0") + " / " + String(this.maxHp).padStart(2, "0");
}

Heart.prototype.setMaxHP = function(maxhp) {
    
    this.maxHp = maxhp;
    this.hp = maxhp;
    
    hpText.text = String(this.hp).padStart(2, "0") + " / " + String(this.maxHp).padStart(2, "0");
};

Heart.prototype.update = function(deltaMs) {
    
    this.invincibility = Math.max(0, this.invincibility - deltaMs);
    this.sprite.alpha = Math.cos(Math.PI * 2 * this.invincibility / 250) * 0.5 + 0.5;
    
    this.shieldSprite.rotation = 0.6 * this.shieldSprite.rotation + 0.4 * this.targetRotation;
    this.shieldHitSprite.rotation = this.shieldSprite.rotation;
    
    if(gamestate.state === "playing") {
        if(this.colour === "green") {
            this.recenter(deltaMs);
            
            if(this.shieldHitTimeRemaining > 0) {
                this.shieldSprite.visible = false;
                this.shieldHitSprite.visible = true;
                this.shieldHitTimeRemaining -= deltaMs;
            }
            else {
                this.shieldSprite.visible = true;
                this.shieldHitSprite.visible = false;
            }
        }
        else if(this.colour === "red") {
            this.move(deltaMs);
        }
    }
    
};

Heart.prototype.move = function(deltaMs) {
    
    var speed = movementSpeed;
    if(isKeyDown("B")) {
        speed /= 2;
    }
    
    var d = {x: 0, y: 0};
    
    if(keyIsDown["left"]) {
        d.x = -speed * deltaMs;
    }
    if(keyIsDown["right"]) {
        d.x = +speed * deltaMs;
    }
    if(keyIsDown["up"]) {
        d.y = -speed * deltaMs;
    }
    if(keyIsDown["down"]) {
        d.y = +speed * deltaMs;
    }
    
    var f = vnorm(d) === 0 ? d : scalarMult(d, speed * deltaMs / vnorm(d));
    
    this.posX = clamp(this.posX + f.x, box.left + heartSize / 2, box.right - heartSize / 2);
    this.posY = clamp(this.posY + f.y, box.top + heartSize / 2, box.bottom - heartSize / 2);
    
    this.setSpritePosition();
    
};

Heart.prototype.recenter = function(deltaMs) {
    
    if(this.posX < 320) {
        this.posX = Math.min(320, this.posX + boxAdjustSpeed * deltaMs);
    }
    if(this.posX > 320) {
        this.posX = Math.max(320, this.posX - boxAdjustSpeed * deltaMs);
    }
    
    if(this.posY < 240) {
        this.posY = Math.min(240, this.posY + boxAdjustSpeed * deltaMs);
    }
    if(this.posY > 240) {
        this.posY = Math.max(240, this.posY - boxAdjustSpeed * deltaMs);
    }
    
    this.setSpritePosition();
    
};

Heart.prototype.setPosition = function(x, y) {
    if(x != null) {
        this.posX = x;
    }
    if(y != null) {
        this.posY = y;
    }
    this.setSpritePosition();
};

Heart.prototype.setSpritePosition = function() {
    this.sprite.position.set(this.posX, this.posY);
    this.shieldSprite.position.set(this.posX, this.posY);
    this.shieldHitSprite.position.set(this.posX, this.posY);
};

Heart.prototype.setColour = function(colour) {
    
    this.colour = colour;
    this.sprite.tint = heartColors[colour];
    
    switch(colour) {
        case "red":
            this.shieldSprite.visible = false;
            this.shieldHitSprite.visible = false;
            break;
        case "green":
            this.shieldSprite.visible = true;
            break;
    }
    
};

Heart.prototype.setShieldDir = function(dir) {
    // set target rotation to the one with the least distance.
    var newDir = dir;
    
    if(newDir < this.shieldDir) {
        newDir += 4;
    }
    
    if(newDir - this.shieldDir <= 2) {
        this.absShieldDir += newDir - this.shieldDir;
    }
    else {
        this.absShieldDir += newDir - 4 - this.shieldDir;
    }
    
    this.shieldDir = dir;
    this.targetRotation = Math.PI / 2 * (2 + this.absShieldDir);
};

Heart.prototype.takeDamage = function(damage) {
    
    if(this.invincibility > 0) {
        return;
    }
    
    this.invincibility = this.invincibilityIncrement;
    
    seDamage.play();
    this.hp = Math.max(0, this.hp - damage);
    if(this.hp === 0) {
        gamestate.endGame();
    }
    
    hpText.text = String(this.hp).padStart(2, "0") + " / " + String(this.maxHp).padStart(2, "0");
};

Heart.prototype.render = function() {
    
    // draw the rectangle?
    this.graphics.clear();
    this.graphics.beginFill(0xff0000);
    this.graphics.lineStyle(0, 0xFFFFFF);
    this.graphics.drawRect(262, 447, 28, 21);
    this.graphics.beginFill(0xffff00);
    this.graphics.drawRect(262, 447, this.hp * 28 / this.maxHp, 21);
    this.graphics.endFill();
    
};

var heart;

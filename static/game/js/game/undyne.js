var undyne;

var undyneTexture;
var undyneHeadTextures = Array(4);
var undyneBreastplateTexture;
var undyneSkirtTexture;
var undyneLegsTexture;
var undyneRightArmTexture;
var undyneLeftArmTexture;
var undyneHairTextureArr = Array(4);
var groundTextureArr = Array(3);

var speechBubbleTexture;
var speechBubbleText;

function Undyne() {
    
    this.animationState = "breathing";
    this.animationTime = 0;
    
    this.sbtext = null;
    this.textState = "none";
    this.textQueue = [];
    this.textQueueCallback = null;
    this.textChars = 0;
    this.textSe = seUndyne;
    this.cps = 25;
    
    this.sprite = new PIXI.Container();
    this.sprite.alpha = 1;
    
    this.groundSprite1 = new PIXI.Sprite(groundTextureArr[0]);
    this.groundSprite1.anchor.set(0.5, 0.5);
    this.groundSprite1.position.set(320, 360);
    this.groundSprite1.scale.set(2, 2);
    this.groundSprite1.alpha = 0;
    
    this.groundSprite2 = new PIXI.Sprite(groundTextureArr[1]);
    this.groundSprite2.anchor.set(0.5, 0.5);
    this.groundSprite2.position.set(320, 360);
    this.groundSprite2.scale.set(2, 2);
    this.groundSprite2.alpha = 0;
    
    this.groundSprite3 = new PIXI.Sprite(groundTextureArr[2]);
    this.groundSprite3.anchor.set(0.5, 0.5);
    this.groundSprite3.position.set(320, 360);
    this.groundSprite3.scale.set(2, 2);
    this.groundSprite3.alpha = 0;
    
    this.hairSprite = new PIXI.extras.MovieClip(undyneHairTextureArr);
    this.hairSprite.anchor.set(1, 0.5);
    this.hairSprite.scale.set(2, 2);
    this.hairSprite.position.set(310, 40);
    this.hairSprite.animationSpeed = 4 / 30;
    
    this.headSprite = new PIXI.Sprite(undyneHeadTextures[1]);
    this.headSprite.anchor.set(0.5, 0.5);
    this.headSprite.scale.set(2, 2);
    this.headSprite.position.set(318, 48);
    
    this.bodySprite = new PIXI.Sprite(undyneBreastplateTexture);
    this.bodySprite.anchor.set(0.5, 0.5);
    this.bodySprite.scale.set(2, 2);
    this.bodySprite.position.set(324, 108);
    
    this.rightArmSprite = new PIXI.Sprite(undyneRightArmTexture);
    this.rightArmSprite.anchor.set(1, 0);
    this.rightArmSprite.scale.set(2, 2);
    this.rightArmSprite.position.set(308, 98);
    
    this.leftArmSprite = new PIXI.Sprite(undyneLeftArmTexture);
    this.leftArmSprite.anchor.set(0.5, 0.5);
    this.leftArmSprite.scale.set(2, 2);
    this.leftArmSprite.position.set(369, 134);
    
    this.skirtSprite = new PIXI.Sprite(undyneSkirtTexture);
    this.skirtSprite.anchor.set(0.5, 0.5);
    this.skirtSprite.scale.set(2, 2);
    this.skirtSprite.position.set(320, 166);
    
    this.legsSprite = new PIXI.Sprite(undyneLegsTexture);
    this.legsSprite.anchor.set(0.5, 0.5);
    this.legsSprite.scale.set(2, 2);
    this.legsSprite.position.set(324, 210);
    
    this.speechBubble = new PIXI.Sprite(speechBubbleTexture);
    this.speechBubble.anchor.set(0, 0.5);
    this.speechBubble.position.set(400, 60);
    this.speechBubble.visible = false;
    
    this.speechBubbleText = new PIXI.extras.BitmapText(
        "",
        {font: "12px SpeechBubble", align: "left"}
    );
    this.speechBubbleText.maxWidth = 180;
    this.speechBubbleText.position.set(442, 24);
    this.speechBubbleText.tint = 0;
    // this.speechBubbleText.visible = false;
    
    this.opacityG = new PIXI.Graphics();
    this.opacityG.alpha = 0;
    this.opacityG.beginFill(0x000000);
    this.opacityG.drawRect(0, 0, 640, 480);
    this.opacityG.endFill();
    
    gameplayStage.addChild(this.hairSprite);
    gameplayStage.addChild(this.rightArmSprite);
    gameplayStage.addChild(this.leftArmSprite);
    gameplayStage.addChild(this.legsSprite);
    gameplayStage.addChild(this.skirtSprite);
    gameplayStage.addChild(this.bodySprite);
    gameplayStage.addChild(this.headSprite);
    gameplayStage.addChild(this.speechBubble);
    gameplayStage.addChild(this.speechBubbleText);
    gameplayStage.addChild(this.opacityG);
    
    this.hairSprite.play();
    
    gameplayStage.addChild(this.sprite);
    
}

Undyne.prototype.queueText = function(textQueue, callback) {
    this.textQueue = this.textQueue.concat(textQueue);
    this.textQueueCallback = callback;
    this.textState = "talking";
    this.speechBubble.visible = true;
    this.speechBubbleText.visible = true;
    this.selectNextText();
};

Undyne.prototype.selectNextText = function() {
    if(this.textQueue.length > 0) {
        this.sbtext = this.textQueue.shift();
        this.textChars = 0;
        this.textState = "talking";
        if(this.sbtext.se) {
            this.textSe = this.sbtext.se;
        }
        else {
            this.textSe = seUndyne;
        }
        if(this.sbtext.face) {
            this.headSprite.texture = undyneHeadTextures[this.sbtext.face];
        }
        else {
            this.headSprite.texture = undyneHeadTextures[1];
        }
    }
    else {
        this.headSprite.texture = undyneHeadTextures[1];
        this.sbtext = null;
        this.speechBubble.visible = false;
        this.speechBubbleText.visible = false;
        this.textState = "none";
        this.textQueueCallback();
    }
    
};

Undyne.prototype.advanceTextChars = function(textChars) {
    
    if(!this.sbtext) {
        return;
    }
    
    var char = this.sbtext.text[Math.floor(textChars)];
    if(!(char === " " || char === "\n")) {
        this.textSe.play();
    }
    this.speechBubbleText.text = this.sbtext.text.substr(0, Math.floor(textChars));
    
};

Undyne.prototype.advanceTextA = function() {
    
    if(this.textState === "waiting") {
        this.selectNextText();
    }
    
};

Undyne.prototype.advanceTextB = function() {
    
    if(this.textState === "talking") {
        this.speechBubbleText.text = this.sbtext.text;
        this.textState = "waiting";
    }
    
};

Undyne.prototype.swingArm = function() {
    
    if(this.animationState === "swingingArm") {
        return;
    }
    
    this.animationState = "swingingArm";
    this.bodySprite.position.y = 108;
    this.headSprite.position.y = 48;
    this.skirtSprite.position.y = 166;
    this.rightArmSprite.position.y = 98;
    this.rightArmSprite.position.x = 308;
    this.leftArmSprite.position.y = 134;
    this.leftArmSprite.position.x = 369;
    this.animationTime = 0;
    
    gameplayStage.removeChild(this.rightArmSprite);
    gameplayStage.addChild(this.rightArmSprite);
    
};

Undyne.prototype.update = function(deltaMs) {
    
    this.animationTime += deltaMs;
    
    if(this.textState === "talking") {
        var newTextChars = this.textChars + this.cps * deltaMs / 1000;
        if(Math.floor(newTextChars) > this.textChars) {
            this.advanceTextChars(newTextChars);
        }
        if(this.textChars >= this.sbtext.text.length) {
            this.textState = "waiting";
        }
        this.textChars = newTextChars;
    }
    
    if(this.animationState === "breathing") {
        
        this.bodySprite.position.y = 108 + 2 * Math.sin(this.animationTime / 1200 * Math.PI * 2);
        this.headSprite.position.y = 48 + 1 * Math.sin(this.animationTime / 1200 * Math.PI * 2);
        this.skirtSprite.position.y = 166 + 1 * Math.sin(this.animationTime / 1200 * Math.PI * 2);
        
        this.rightArmSprite.position.y = 98 + 4 * Math.sin(this.animationTime / 1200 * Math.PI * 2);
        this.rightArmSprite.position.x = 308 + 2 * Math.sin(this.animationTime / 1200 * Math.PI * 2);
        
        this.leftArmSprite.position.y = 134 + 4 * Math.sin(this.animationTime / 1200 * Math.PI * 2);
        this.leftArmSprite.position.x = 369 + 2 * Math.sin(this.animationTime / 600 * Math.PI * 2);
        
    }
    else if(this.animationState === "swingingArm") {
        
        if(this.animationTime < 300) {
            this.rightArmSprite.rotation =
                (40 - 40 * Math.pow(interpolateClamp(this.animationTime, 0, 200, 1, 0), 4)) * Math.PI / 180;
        }
        else if(this.animationTime < 600) {
            this.rightArmSprite.rotation =
                (-60 + 100 * Math.pow(interpolateClamp(this.animationTime, 300, 400, 1, 0), 4)) * Math.PI / 180;
        }
        else if(this.animationTime < 750) {
            this.rightArmSprite.rotation = interpolateClamp(this.animationTime, 600, 650, -60 * Math.PI / 180, 0);
        }
        else {
            gameplayStage.removeChild(this.rightArmSprite);
            gameplayStage.addChildAt(this.rightArmSprite, 0);
            this.animationState = "breathing";
            this.animationTime = 0;
        }
        
    }
    
};

class Player extends GraphicsObject {
    static shieldDistance = 32;
    static heartGreenColor = 0x00ff00;
    
    #maxHp;
    #hp;
    #invincibilityTimeRemaining;
    #invincibilityTimeAfterHit;
    #posX;
    #posY;
    #shieldDir;
    #originalRotation;
    #targetRotation;
    #rotationDirection;
    #shieldHitTimeRemaining;
    #heartSprite;
    #shieldSprite;
    #shieldHitSprite;
    #graphics;
    #box;
    
    constructor(box) {
        super();
        
        this.#maxHp = 4;
        this.#hp = this.#maxHp;
        
        this.#invincibilityTimeRemaining = 0;
        this.#invincibilityTimeAfterHit = 1000;
        
        this.#posX = 0.5 * Main.runner.gameWidth;
        this.#posY = 0.5 * Main.runner.gameHeight;
        
        this.#shieldDir = 2;
        
        this.#originalRotation = 0;
        this.#rotationDirection = 0;
        this.#targetRotation = 0;
        
        this.#shieldHitTimeRemaining = 0;
        
        this.#box = box;
        
        this.#heartSprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("heart"));
        this.#heartSprite.anchor.set(0.5, 0.5);
        this.#heartSprite.position.set(this.#posX, this.#posY);
        this.#heartSprite.tint = Player.heartGreenColor;
        this.#heartSprite.visible = false;
        
        this.#shieldSprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("shield"));
        this.#shieldSprite.anchor.set(0.5, 1.4);
        this.#shieldSprite.position.set(this.#posX, this.#posY);
        this.#shieldSprite.rotation = MathUtility.wrap(0.5 * Math.PI * (2 + this.#shieldDir), 0, 2 * Math.PI);
        this.#shieldSprite.visible = false;
        
        this.#shieldHitSprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("shieldHit"));
        this.#shieldHitSprite.anchor.set(0.5, 1.4);
        this.#shieldHitSprite.position.set(this.#posX, this.#posY);
        this.#shieldHitSprite.rotation = this.#shieldSprite.rotation;
        this.#shieldHitSprite.visible = false;
        
        //Green circle
        const circle = new PIXI.Graphics();
        circle.lineStyle(1, 0x00ff00, 1);
        circle.drawCircle(320, 240, 24);
        
        this.#graphics = new PIXI.Graphics();
        Main.runner.gameplayStage.addChild(this.#graphics);
        
        Main.runner.gameplayStage.addChild(this.#heartSprite);
        Main.runner.gameplayStage.addChild(this.#shieldSprite);
        Main.runner.gameplayStage.addChild(this.#shieldHitSprite);
        Main.runner.gameplayStage.addChild(circle);
    }
    
    setShieldDir(dir) {
        const epsilon = 1.0e-6;
        
        this.#originalRotation = this.#shieldSprite.rotation;
        this.#targetRotation = MathUtility.wrap(0.5 * Math.PI * (2 + dir), 0, 2 * Math.PI);
        
        this.#shieldDir = dir;
        
        if(dir === this.#shieldDir && this.#rotationDirection === 0) {
            return;
        }
        
        /*
         * Set the rotation direction based on the shortest distance between the original and target rotations.
         * We error on the side of clockwise as that is the preferred rotation direction if both are equal.
         */
        let clockwiseDistance;
        let counterClockwiseDistance;
        if(this.#originalRotation < this.#targetRotation) {
            clockwiseDistance = this.#targetRotation - this.#originalRotation;
            counterClockwiseDistance = this.#originalRotation + 2 * Math.PI - this.#targetRotation;
        }
        else {
            clockwiseDistance = this.#targetRotation + 2 * Math.PI - this.#originalRotation;
            counterClockwiseDistance = this.#originalRotation - this.#targetRotation;
        }
        
        this.#rotationDirection = clockwiseDistance <= counterClockwiseDistance + epsilon ? 1 : -1;
    }
    
    takeDamage() {
        if(this.#invincibilityTimeRemaining > 0) {
            return;
        }
        
        this.#invincibilityTimeRemaining = this.#invincibilityTimeAfterHit;
        
        Main.runner.assetManager.getAudio("arrowDamageSfx").play();
        
        this.#hp = Math.max(0, this.#hp - 1);
    }
    
    #targetDirectionReached(newRotation) {
        /*
         * True if the target rotation has been met where the original rotation is less than the target rotation and the rotation increment is positive
         */
        const greaterTargetPositiveDirectionReached =
            this.#originalRotation <= this.#targetRotation && this.#rotationDirection === 1
            && (this.#targetRotation <= newRotation || newRotation <= this.#originalRotation);
        
        /*
         * True if the target rotation has been met where the original rotation is greater than the target rotation and the rotation increment is negative
         */
        const smallerTargetNegativeDirectionReached =
            this.#originalRotation >= this.#targetRotation && this.#rotationDirection === -1
            && (this.#originalRotation < newRotation || newRotation <= this.#targetRotation);
        
        /*
         * True if the target rotation has been met where the original rotation is less than the target rotation and the rotation increment is negative
         */
        const greaterTargetNegativeDirectionReached =
            this.#originalRotation < this.#targetRotation && this.#rotationDirection === -1
            && this.#originalRotation < newRotation && newRotation < this.#targetRotation;
        
        /*
         * True if the target rotation has been met where the original rotation is greater than the target rotation and the rotation increment is negative
         */
        const smallerTargetPositiveDirectionReached =
            this.#originalRotation > this.#targetRotation && this.#rotationDirection === 1
            && this.#targetRotation < newRotation && newRotation < this.#originalRotation;
        
        return greaterTargetPositiveDirectionReached || smallerTargetNegativeDirectionReached
            || greaterTargetNegativeDirectionReached || smallerTargetPositiveDirectionReached;
    }
    
    #updateSpritePositions() {
        this.#heartSprite.position.set(this.#posX, this.#posY);
        this.#shieldSprite.position.set(this.#posX, this.#posY);
        this.#shieldHitSprite.position.set(this.#posX, this.#posY);
    }
    
    #recenter(deltaMs) {
        const halfGameWidth = 0.5 * Main.runner.gameWidth;
        const halfGameHeight = 0.5 * Main.runner.gameHeight;
        
        if(this.#posX < halfGameWidth) {
            this.#posX = Math.min(halfGameWidth, this.#posX + Box.boxAdjustSpeed * deltaMs);
        }
        else if(this.#posX > halfGameWidth) {
            this.#posX = Math.max(halfGameWidth, this.#posX - Box.boxAdjustSpeed * deltaMs);
        }
        
        if(this.#posY < halfGameHeight) {
            this.#posY = Math.min(halfGameHeight, this.#posY + Box.boxAdjustSpeed * deltaMs);
        }
        else if(this.#posY > halfGameHeight) {
            this.#posY = Math.max(halfGameHeight, this.#posY - Box.boxAdjustSpeed * deltaMs);
        }
        
        this.#updateSpritePositions();
    }
    
    update(deltaMs) {
        this.#invincibilityTimeRemaining = Math.max(this.#invincibilityTimeRemaining - deltaMs, 0);
        this.#heartSprite.alpha = 0.5 * Math.cos(2 * Math.PI * this.#invincibilityTimeRemaining / 250) + 0.5;
        
        let newRotation = MathUtility.wrap(
            this.#shieldSprite.rotation + 5 * this.#rotationDirection * deltaMs / 1000, 0, 2 * Math.PI
        );
        
        if(this.#targetDirectionReached(newRotation)) {
            newRotation = this.#targetRotation;
            this.#rotationDirection = 0;
        }
        
        this.#shieldSprite.rotation = newRotation;
        this.#shieldHitSprite.rotation = this.#shieldSprite.rotation;
        
        this.#recenter(deltaMs);
        
        if(this.#shieldHitTimeRemaining > 0) {
            this.#shieldSprite.visible = false;
            this.#shieldHitSprite.visible = true;
            this.#shieldHitTimeRemaining -= deltaMs;
        }
        else {
            this.#shieldSprite.visible = true;
            this.#shieldHitSprite.visible = false;
        }
    }
}

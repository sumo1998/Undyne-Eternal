/**
 * Represents the player, including the heart and shield.
 */
class Player extends GraphicsObject {
    
    /**
     * The distance from the center of the screen to the shield.
     */
    static shieldDistance = 32;
    
    /**
     * The rate of rotation of the shield in radians per second.
     */
    static shieldRadiansPerSec = 25;
    
    /**
     * The color of the heart.
     */
    static heartGreenColor = 0x00ff00;
    
    /**
     * The maximum hit points you can have.
     */
    #maxHp;
    
    /**
     * The current number of hit points you have.
     */
    #hp;
    
    /**
     * The milliseconds remaining of invincibility time.
     */
    #invincibilityTimeRemaining;
    
    /**
     * The maximum invincibility time you can have.
     */
    #maxInvincibilityTime;
    
    /**
     * The x position of the player.
     */
    #posX;
    
    /**
     * The y position of the player.
     */
    #posY;
    
    /**
     * The direction the shield is facing. These values are equivalent to the values of the arrows that would be
     * blocked by the shield direction.
     * 0: Counters arrows coming from the bottom
     * 1: Counters arrows coming from the left
     * 2: Counters arrows coming from the top
     * 3: Counters arrows coming from the right
     */
    #shieldDir;
    
    /**
     * The original rotation angle of the shield before the last arrow key or WASD input (with the shield direction
     * being 2 at 0 radians).
     */
    #originalRotation;
    
    /**
     * The target rotation angle of the shield after the last arrow key or WASD input (with the shield direction being
     * 2 at 0 radians).
     */
    #targetRotation;
    
    /**
     * The direction that the shield is currently rotating, which is 1 if clockwise, 0 if not rotating, and -1 if
     * counterclockwise.
     */
    #rotationDirection;
    
    /**
     * The milliseconds remaining of the shield glowing red (glows red when hit).
     */
    #shieldHitTimeRemaining;
    
    /**
     * The heart sprite.
     */
    #heartSprite;
    
    /**
     * The normal shield sprite.
     */
    #shieldSprite;
    
    /**
     * The hit shield sprite.
     */
    #shieldHitSprite;
    
    /**
     * The green circle about which the shield rotates.
     */
    #circle;
    
    /**
     * Initializes a Player instance.
     */
    constructor() {
        super();
        
        this.#maxHp = 4;
        this.#hp = this.#maxHp;
        
        this.#invincibilityTimeRemaining = 0;
        this.#maxInvincibilityTime = 1000;
        
        this.#posX = 0.5 * Main.runner.gameWidth;
        this.#posY = 0.5 * Main.runner.gameHeight;
        
        this.#shieldDir = 2;
        
        this.#originalRotation = this.#getRotationFromDirection();
        this.#targetRotation = this.#originalRotation;
        this.#rotationDirection = 0;
        
        this.#shieldHitTimeRemaining = 0;
        
        this.#heartSprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("heart"));
        this.#heartSprite.anchor.set(0.5, 0.5);
        this.#heartSprite.position.set(this.#posX, this.#posY);
        this.#heartSprite.tint = Player.heartGreenColor;
        this.#heartSprite.visible = false;
        
        this.#shieldSprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("shield"));
        this.#shieldSprite.anchor.set(0.5, 1.4);
        this.#shieldSprite.position.set(this.#posX, this.#posY);
        this.#shieldSprite.rotation = this.#originalRotation;
        this.#shieldSprite.visible = false;
        
        this.#shieldHitSprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("shieldHit"));
        this.#shieldHitSprite.anchor.set(0.5, 1.4);
        this.#shieldHitSprite.position.set(this.#posX, this.#posY);
        this.#shieldHitSprite.rotation = this.#shieldSprite.rotation;
        this.#shieldHitSprite.visible = false;
        
        this.#circle = new PIXI.Graphics();
        this.#circle.lineStyle(1, 0x00ff00, 1);
        this.#circle.drawCircle(320, 240, 24);
        
        Main.runner.gameplayStage.addChild(this.#heartSprite);
        Main.runner.gameplayStage.addChild(this.#shieldSprite);
        Main.runner.gameplayStage.addChild(this.#shieldHitSprite);
        Main.runner.gameplayStage.addChild(this.#circle);
    }
    
    /**
     * Using the current shield direction, computes the target shield rotation to a value between 0 and 2 pi where the
     * rotation is 0 radians when the shield's direction is 2
     * @return The target shield rotation
     */
    #getRotationFromDirection() {
        return MathUtility.wrap(0.5 * Math.PI * (2 + this.#shieldDir), 0, 2 * Math.PI);
    }
    
    /**
     * Sets the shield's new direction to the given value
     * @param dir The new direction the shield should face
     */
    setShieldDir(dir) {
        this.#originalRotation = this.#shieldSprite.rotation;
        this.#targetRotation = this.#getRotationFromDirection();
        
        this.#shieldDir = dir;
        
        if(dir === this.#shieldDir && this.#rotationDirection === 0) {
            return;
        }
        
        /*
         * Set the rotation direction based on the shortest distance between the original and target rotations.
         * We error on the side of clockwise as that is the preferred rotation direction if both are equal.
         */
        const epsilon = 1.0e-6;
        
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
    
    /**
     * If the player is not currently invincible, decreases the players HP and makes the player temporarily invincible.
     */
    takeDamage() {
        if(this.#invincibilityTimeRemaining > 0) {
            return;
        }
        
        this.#invincibilityTimeRemaining = this.#maxInvincibilityTime;
        
        Main.runner.assetManager.getAudio("arrowDamageSfx").play();
        
        this.#hp = Math.max(0, this.#hp - 1);
    }
    
    /**
     * Returns true if the target rotation has been reached.
     * @param newRotation The new value for the current rotation
     * @return True if the target rotation has been reached
     */
    #targetDirectionReached(newRotation) {
        return (
            /*
             * True if the target direction has been reached in the case where rotating the shield clockwise and NOT
             * crossing the 0/2pi boundary
             */
            (this.#originalRotation <= this.#targetRotation && this.#rotationDirection === 1
                && (this.#targetRotation <= newRotation || newRotation <= this.#originalRotation))
            /*
             * True if the target direction has been reached in the case where rotating the shield counterclockwise and
             * NOT crossing the 0/2pi boundary
             */
            || (this.#originalRotation >= this.#targetRotation && this.#rotationDirection === -1
                && (this.#originalRotation <= newRotation || newRotation <= this.#targetRotation))
            /*
             * True if the target direction has been reached in the case where rotating the shield counterclockwise and
             * crossing the 0/2pi boundary
             */
            || (this.#originalRotation <= this.#targetRotation && this.#rotationDirection === -1
                && this.#originalRotation <= newRotation && newRotation <= this.#targetRotation)
            /*
             * True if the target direction has been reached in the case where rotating the shield clockwise and
             * crossing the 0/2pi boundary
             */
            || (this.#originalRotation >= this.#targetRotation && this.#rotationDirection === 1
                && this.#targetRotation <= newRotation && newRotation <= this.#originalRotation)
        );
    }
    
    /**
     * Updates the heart and shield.
     * @param deltaMs The time that has passed since the last update of the heart and shield
     */
    update(deltaMs) {
        this.#invincibilityTimeRemaining = Math.max(this.#invincibilityTimeRemaining - deltaMs, 0);
        
        //Uses cosine to fade the heart in and out (flashing) when invincible/damaged
        this.#heartSprite.alpha = 0.5 * Math.cos(2 * Math.PI * this.#invincibilityTimeRemaining / 250) + 0.5;
        
        let newRotation = MathUtility.wrap(
            this.#shieldSprite.rotation + Player.shieldRadiansPerSec * this.#rotationDirection * deltaMs / 1000,
            0,
            2 * Math.PI
        );
        
        if(this.#targetDirectionReached(newRotation)) {
            newRotation = this.#targetRotation;
            this.#rotationDirection = 0;
        }
        
        this.#shieldSprite.rotation = newRotation;
        this.#shieldHitSprite.rotation = this.#shieldSprite.rotation;
        
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

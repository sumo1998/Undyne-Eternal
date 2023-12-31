/**
 * Represents the player, including the heart and shield.
 */
class Player extends GraphicsObject {
    
    /**
     * The distance from the center of the screen to the shield.
     */
    static #shieldDistance = 32;
    
    /**
     * The distance from the center of the screen to an edge of the heart.
     */
    static #heartDistance = 8;
    
    /**
     * The rate of rotation of the shield in radians per second.
     */
    static #shieldRadiansPerSec = 25;
    
    /**
     * The color of the heart with a game over.
     */
    static #heartRedColor = 0xff0000;
    
    /**
     * The color of the heart when playing.
     */
    static #heartGreenColor = 0x00ff00;
    
    /**
     * The maximum hit points the player can have
     */
    static #maxHp = 4;
    
    /**
     * The duration that the shield is shown in the shield hit state (ms)
     */
    static #shieldHitDuration = 250;
    
    /**
     * The time the shifting of the screen from damage lasts.
     */
    static #damageShiftDuration = 100;
    
    /**
     * The current number of hit points the player has.
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
     * True if the visibility of the shields should be updated.
     */
    #updateShieldVisibility;
    
    /**
     * The shift in the screen in the x and y directions that occurs when getting damaged.
     */
    #damageShift;
    
    /**
     * The time remaining until the shifting of the screen from the damage stops.
     */
    #damageShiftTimeRemaining;
    
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
     * @param difficulty The difficulty of the game
     * @param gameplayStage The container on which all the graphics are drawn
     */
    constructor(difficulty, gameplayStage) {
        super();
        
        this.#hp = Player.#maxHp;
        
        this.#damageShift = 0;
        
        this.#invincibilityTimeRemaining = 0;
        this.#damageShiftTimeRemaining = 0;
        
        switch(difficulty) {
            case "easy":
                this.#maxInvincibilityTime = 1000;
                break;
            case "medium":
                this.#maxInvincibilityTime = 500;
                break;
            case "hard":
                this.#maxInvincibilityTime = 100;
                break;
        }
        
        const posX = 0.5 * Main.runner.gameWidth;
        const posY = 0.5 * Main.runner.gameHeight;
        
        this.#shieldDir = 2;
        
        this.#originalRotation = Player.#getRotationFromDirection(this.#shieldDir);
        this.#targetRotation = this.#originalRotation;
        this.#rotationDirection = 0;
        
        this.#shieldHitTimeRemaining = 0;
        
        this.#updateShieldVisibility = true;
        
        this.#heartSprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("heart"));
        this.#heartSprite.anchor.set(0.5, 0.5);
        this.#heartSprite.position.set(posX, posY);
        this.#heartSprite.tint = Player.#heartRedColor;
        
        this.#shieldSprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("shield"));
        this.#shieldSprite.anchor.set(0.5, 1.4);
        this.#shieldSprite.position.set(posX, posY);
        this.#shieldSprite.rotation = this.#originalRotation;
        this.#shieldSprite.visible = false;
        
        this.#shieldHitSprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("shieldHit"));
        this.#shieldHitSprite.anchor.set(0.5, 1.4);
        this.#shieldHitSprite.position.set(posX, posY);
        this.#shieldHitSprite.rotation = this.#shieldSprite.rotation;
        this.#shieldHitSprite.visible = false;
        
        this.#circle = new PIXI.Graphics();
        this.#circle.lineStyle(1, 0x00ff00, 1);
        this.#circle.drawCircle(320, 240, 24);
        this.#circle.visible = false;
        
        gameplayStage.addChild(this.#heartSprite);
        gameplayStage.addChild(this.#shieldSprite);
        gameplayStage.addChild(this.#shieldHitSprite);
        gameplayStage.addChild(this.#circle);
    }
    
    /**
     * Returns the distance from the center of the screen to the shield.
     * @return The distance from the center of the screen to the shield
     */
    static get shieldDistance() {
        return this.#shieldDistance;
    }
    
    /**
     * Returns the distance from the center of the screen to an edge of the heart.
     * @return The distance from the center of the screen to an edge of the heart
     */
    static get heartDistance() {
        return this.#heartDistance;
    }
    
    /**
     * Using the current shield direction, computes the target shield rotation to a value between 0 and 2 pi where the
     * rotation is 0 radians when the shield's direction is 2.
     * @param dir The new direction
     * @return The target shield rotation
     */
    static #getRotationFromDirection(dir) {
        return MathUtility.wrap(0.5 * Math.PI * (2 + dir), 0, 2 * Math.PI);
    }
    
    /**
     * Returns the direction the shield is facing.
     * @return The direction the shield is facing
     */
    get shieldDir() {
        return this.#shieldDir;
    }
    
    /**
     * Sets the shield's new direction to the given value.
     * @param dir The new direction the shield should face
     */
    set shieldDir(dir) {
        this.#originalRotation = this.#shieldSprite.rotation;
        this.#targetRotation = Player.#getRotationFromDirection(dir);
        
        if(dir === this.#shieldDir && this.#rotationDirection === 0) {
            return;
        }
        
        this.#shieldDir = dir;
        
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
     * Hides the sprites that should not be visible when in red mode.
     */
    hideShieldSprites() {
        this.#shieldSprite.visible = false;
        this.#shieldHitSprite.visible = false;
        this.#circle.visible = false;
        this.#updateShieldVisibility = false;
    }
    
    /**
     * Shows the sprites that should be visible when in green mode.
     */
    showShieldSprites() {
        this.#shieldSprite.visible = true;
        this.#circle.visible = true;
        this.#updateShieldVisibility = true;
    }
    
    /**
     * Resets the fields to match the start of a new level.
     */
    reset() {
        this.#hp = Player.#maxHp;
        this.#invincibilityTimeRemaining = 0;
        this.#shieldDir = 2;
        this.#originalRotation = Player.#getRotationFromDirection(this.#shieldDir);
        this.#targetRotation = this.#originalRotation;
        this.#rotationDirection = 0;
        this.#shieldHitTimeRemaining = 0;
        
        this.#updateShieldVisibility = true;
        
        this.#damageShift = 0;
        this.#damageShiftTimeRemaining = 0;
        
        this.#shieldSprite.rotation = this.#originalRotation;
        this.#shieldHitSprite.rotation = this.#shieldSprite.rotation;
        
        this.#heartSprite.tint = Player.#heartRedColor;
        
        this.#heartSprite.visible = true;
        this.#shieldSprite.visible = false;
        this.#shieldHitSprite.visible = false;
        this.#circle.visible = false;
    }
    
    /**
     * If the player is not currently invincible, decreases the players HP and makes the player temporarily invincible.
     */
    takeDamage() {
        if(this.#invincibilityTimeRemaining > 0) {
            return;
        }
        
        this.#invincibilityTimeRemaining = this.#maxInvincibilityTime;
        this.#damageShiftTimeRemaining = Player.#damageShiftDuration;
        
        Main.runner.assetManager.getAudio("arrowDamageSfx").play();
        
        this.#hp = Math.max(0, this.#hp - 1);
    }
    
    /**
     * Sets the shield to the hit state.
     */
    hitShield() {
        this.#shieldHitTimeRemaining = Player.#shieldHitDuration;
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
        this.#damageShiftTimeRemaining = Math.max(this.#damageShiftTimeRemaining - deltaMs, 0);
        
        //Uses cosine to fade the heart in and out (flashing) when invincible/damaged
        this.#heartSprite.alpha = 0.5 * Math.cos(2 * Math.PI * this.#invincibilityTimeRemaining / 250) + 0.5;
        
        //Use sine to shift around the screen for the damage shift
        this.#damageShift = 2 * Math.sin(2 * Math.PI / 8 * this.#damageShiftTimeRemaining);
        
        let newRotation = MathUtility.wrap(
            this.#shieldSprite.rotation + Player.#shieldRadiansPerSec * this.#rotationDirection * deltaMs / 1000,
            0,
            2 * Math.PI
        );
        
        if(this.#targetDirectionReached(newRotation)) {
            newRotation = this.#targetRotation;
            this.#rotationDirection = 0;
        }
        
        this.#shieldSprite.rotation = newRotation;
        this.#shieldHitSprite.rotation = this.#shieldSprite.rotation;
        
        if(!this.#updateShieldVisibility || this.#heartSprite.tint === Player.#heartRedColor) {
            return;
        }
        
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
    
    /**
     * Sets the color of the heart to the color in the given string.
     * @param colorStr The color string of the heart
     */
    set heartColor(colorStr) {
        if(colorStr === "green") {
            this.#heartSprite.tint = Player.#heartGreenColor;
        }
        else if(colorStr === "red") {
            this.#heartSprite.tint = Player.#heartRedColor;
        }
    }
    
    /**
     * Returns the color of the heart in string form.
     * @return The color string of the heart
     */
    get heartColor() {
        if(this.#heartSprite.tint === Player.#heartGreenColor) {
            return "green";
        }
        return "red";
    }
    
    /**
     * Returns the shift in the screen in the x and y directions that occurs when getting damaged.
     * @return The shift in the screen in the x and y directions that occurs when getting damaged.
     */
    get damageShift() {
        return this.#damageShift;
    }
    
    /**
     * Returns the current number of hit points the player has.
     * @return The current number of hit points the player has
     */
    get hp() {
        return this.#hp;
    }
    
    /**
     * Returns the maximum hit points the player can have
     * @return The maximum hit points the player can have
     */
    static get maxHp() {
        return this.#maxHp;
    }
}

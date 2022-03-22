/**
 * An arrow in the game.
 */
class Arrow extends GraphicsObject {
    
    /**
     * The distance at which a reverse arrow begins rotating.
     */
    static #rotationDistanceStart = 160;
    
    /**
     * The distance at which a reverse arrow finishes rotating.
     */
    static #rotationDistanceEnd = 80;
    
    /**
     * The direction the arrow is coming from.
     * 0: Coming from the bottom
     * 1: Coming from the left
     * 2: Coming from the top
     * 3: Coming from the right
     */
    #direction;
    
    /**
     * True if the arrow is a reverse arrow.
     */
    #reversed;
    
    /**
     * The time remaining until the shield should destroy the arrow in ms.
     */
    #targetTime;
    
    /**
     * The speed of the arrow in px/s.
     */
    #speed;
    
    /**
     * True if this is the last arrow in an attack.
     */
    #last;
    
    /**
     * The sprite for this specific arrow.
     */
    #sprite;
    
    /**
     * Initializes an Arrow instance.
     * @param direction The direction the arrow is coming from
     * @param reversed True if the arrow is a reverse arrow
     * @param targetTime The time remaining until the shield should destroy the arrow
     * @param speed The speed of the arrow in px/s
     * @param last True if this is the last arrow in an attack
     */
    constructor(direction, reversed, targetTime, speed, last) {
        super();
        this.#direction = direction;
        this.#reversed = reversed;
        this.#targetTime = targetTime;
        this.#speed = speed;
        this.#last = last;
        
        this.#sprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("arrow"));
        
        //Sets the sprite's anchor almost at the tip
        this.#sprite.anchor.x = 0.9;
        this.#sprite.anchor.y = 0.5;
        
        this.#sprite.position.x = -200;
        this.#sprite.position.y = -200;
        
        //Rotates arrow sprite (by default pointing right): pi/2 * (direction - 1) (plus pi if reversed)
        this.#sprite.rotation = Math.PI * (0.5 * this.#direction - 0.5 + this.#reversed);
        
        /*
         * #ffdf23: yellow
         * #2fd0ff: blue
         */
        this.#sprite.tint = this.#reversed ? 0xffdf23 : 0x2fd0ff;
        
        Main.runner.gameplayStage.addChild(this.#sprite);
    }
    
    /**
     * Updates the position of the arrow.
     * @param deltaMs The time that has passed since the last update of the arrow
     */
    update(deltaMs) {
        this.#targetTime -= deltaMs;
        
        //The changes in x and y from the last arrow position
        let deltaX = 0;
        let deltaY = 0;
        
        const distance = this.#targetTime / 1000 * this.#speed + Player.shieldDistance;
        
        let rotation = 0;
        if(this.#reversed) {
            rotation = MathUtility.clampInterpolate(
                distance, Arrow.#rotationDistanceStart, Arrow.#rotationDistanceEnd, 0, Math.PI
            );
        }
        
        switch(this.#direction) {
            case 3:
                deltaX += distance * Math.cos(rotation);
                deltaY += distance * Math.sin(rotation);
                break;
            case 0:
                deltaY += distance * Math.cos(rotation);
                deltaX -= distance * Math.sin(rotation);
                break;
            case 1:
                deltaX -= distance * Math.cos(rotation);
                deltaY -= distance * Math.sin(rotation);
                break;
            case 2:
                deltaY -= distance * Math.cos(rotation);
                deltaX += distance * Math.sin(rotation);
                break;
        }
        
        this.#sprite.position.x = 0.5 * Main.runner.gameWidth + deltaX;
        this.#sprite.position.y = 0.5 * Main.runner.gameHeight + deltaY;
    }
    
    /**
     * Returns the direction the arrow is coming from.
     * @return The direction the arrow is coming from
     */
    get direction() {
        return this.#direction;
    }
    
    /**
     * Returns true if the arrow is a reverse arrow.
     * @return True if the arrow is a reverse arrow
     */
    get reversed() {
        return this.#reversed;
    }
    
    /**
     * Returns the time remaining until the shield should destroy the arrow.
     * @return The time remaining until the shield should destroy the arrow
     */
    get targetTime() {
        return this.#targetTime;
    }
    
    /**
     * Returns the speed of the arrow in px/s.
     * @return The speed of the arrow in px/s
     */
    get speed() {
        return this.#speed;
    }
    
    /**
     * Returns true if this is the last arrow in an attack.
     * @return True if this is the last arrow in an attack
     */
    get last() {
        return this.#last;
    }
    
    /**
     * Returns the sprite for this specific arrow.
     * @return The sprite for this specific arrow
     */
    get sprite() {
        return this.#sprite;
    }
}

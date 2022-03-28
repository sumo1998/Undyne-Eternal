/**
 * The box surrounding the heart and shield.
 */
class Box extends GraphicsObject {
    
    /**
     * The speed at which to adjust the box boundaries (px/ms).
     */
    static #boxAdjustSpeed = 0.5;
    
    /**
     * The thickness of the box.
     */
    #thickness;
    
    /**
     * The x-position of the left boundary of the box.
     */
    #left;
    
    /**
     * The x-position of the right boundary of the box.
     */
    #right;
    
    /**
     * The y-position of the top boundary of the box.
     */
    #top;
    
    /**
     * The y-position of the bottom boundary of the box.
     */
    #bottom;
    
    /**
     * The destination x-position of the left boundary of the box.
     */
    #destLeft;
    
    /**
     * The destination x-position of the right boundary of the box.
     */
    #destRight;
    
    /**
     * The destination y-position of the top boundary of the box.
     */
    #destTop;
    
    /**
     * The destination y-position of the bottom boundary of the box.
     */
    #destBottom;
    
    /**
     * The graphics used to draw the box.
     */
    #graphics;
    
    /**
     * Initializes a Box instance.
     * @param gameplayStage The container on which all the graphics are drawn
     */
    constructor(gameplayStage) {
        super();
        this.#thickness = 3;
        
        this.#left = 16;
        this.#right = Main.runner.gameWidth - 16;
        this.#top = 240;
        this.#bottom = Main.runner.gameHeight - 240;
        
        this.#destLeft = this.#left;
        this.#destRight = this.#right;
        this.#destTop = this.#top;
        this.#destBottom = this.#bottom;
        
        this.#graphics = new PIXI.Graphics();
        gameplayStage.addChild(this.#graphics);
    }
    
    /**
     * Sets the destination bounds of the box.
     * @param destLeft The destination x-position of the left boundary of the box
     * @param destRight The destination x-position of the right boundary of the box
     * @param destTop The destination y-position of the top boundary of the box
     * @param destBottom The destination y-position of the bottom boundary of the box
     */
    setDestinationBounds(destLeft, destRight, destTop, destBottom) {
        this.#destLeft = destLeft;
        this.#destRight = destRight;
        this.#destTop = destTop;
        this.#destBottom = destBottom;
    }
    
    /**
     * Updates the boundaries of the box.
     * @param deltaMs The time that has passed since the last update of the box boundaries
     */
    update(deltaMs) {
        this.#left = MathUtility.approach(this.#left, this.#destLeft, Box.#boxAdjustSpeed * deltaMs);
        this.#right = MathUtility.approach(this.#right, this.#destRight, Box.#boxAdjustSpeed * deltaMs);
        this.#top = MathUtility.approach(this.#top, this.#destTop, Box.#boxAdjustSpeed * deltaMs);
        this.#bottom = MathUtility.approach(this.#bottom, this.#destBottom, Box.#boxAdjustSpeed * deltaMs);
    }
    
    /**
     * Renders the box.
     */
    render() {
        this.#graphics.clear();
        this.#graphics.beginFill(0x000000, 1);
        this.#graphics.lineStyle(this.#thickness, 0xFFFFFF, 1);
        this.#graphics.drawRect(
            this.#left - 0.5 * this.#thickness,
            this.#top - 0.5 * this.#thickness,
            this.#right - this.#left + this.#thickness,
            this.#bottom - this.#top + this.#thickness
        );
    }
}

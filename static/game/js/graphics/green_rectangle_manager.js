/**
 * Controls the green rectangles behind Undyne.
 */
class GreenRectangleManager extends GraphicsObject {
    
    /**
     * The number of ms it takes for one period of the green boxes jumping.
     */
    static #periodTime = 10000 / 3;
    
    /**
     * The offset in y of the rectangles.
     */
    static #yOffset = 20;
    
    /**
     * The number of rectangles.
     */
    static #numRectangles = 6;
    
    /**
     * The height that the rectangles jump.
     */
    static #amplitude = 20;
    
    /**
     * The width of a rectangle.
     */
    static #rectangleWidth = 100;
    
    /**
     * The height of a rectangle (rectangle considered the whole vertical component).
     */
    static #rectangleHeight = 200;
    
    /**
     * The width of a rectangle's borders.
     */
    static #lineWidth = 1;
    
    /**
     * The offset in x of the group of rectangles from the left.
     */
    #xOffset;
    
    /**
     * The graphics to draw the rectangles.
     */
    #graphics;
    
    /**
     * The time used to animate the rectangles, resetting after each period.
     */
    #animationTime;
    
    /**
     * Initializes a GreenRectangleManager instance.
     */
    constructor() {
        super();
        this.#animationTime = 0;
        //Get the x offset such that the rectangles are centered
        this.#xOffset =
            0.5 * (Main.runner.gameWidth - GreenRectangleManager.#numRectangles
                * GreenRectangleManager.#rectangleWidth);
        this.#graphics = new PIXI.Graphics();
        Main.runner.gameplayStage.addChild(this.#graphics);
    }
    
    /**
     * Updates the green rectangles.
     * @param deltaMs The time that has passed since the last update of the green rectangles
     */
    update(deltaMs) {
        this.#animationTime += deltaMs;
        if(this.#animationTime >= GreenRectangleManager.#periodTime) {
            this.#animationTime -= GreenRectangleManager.#periodTime;
        }
    }
    
    /**
     * Renders the green rectangles.
     */
    render() {
        this.#graphics.clear();
        this.#graphics.lineStyle(GreenRectangleManager.#lineWidth, 0x00ff00, 1);
        
        const twoPi = 2 * Math.PI;
        
        /*
         * Idea: y = a * sin((2pi / b * x) + c) + d
         * a: amplitude
         * b: period (length), modified to use the time and the period time
         * c: the shift in functions, used to offset in subdivisions of pi as offsetting by pi is equivalent to offsetting by 0
         * d: y offset
         */
        for(let i = 0; i < GreenRectangleManager.#numRectangles; ++i) {
            this.#graphics.drawRect(
                this.#xOffset + GreenRectangleManager.#rectangleWidth * i,
                GreenRectangleManager.#yOffset + GreenRectangleManager.#amplitude
                * Math.sin(this.#animationTime * twoPi / GreenRectangleManager.#periodTime
                    + i * Math.PI / GreenRectangleManager.#numRectangles),
                GreenRectangleManager.#rectangleWidth,
                0.5 * GreenRectangleManager.#rectangleHeight
            );
            this.#graphics.drawRect(
                this.#xOffset + GreenRectangleManager.#rectangleWidth * i,
                GreenRectangleManager.#yOffset + 0.5 * GreenRectangleManager.#rectangleHeight
                + GreenRectangleManager.#amplitude
                * Math.sin(this.#animationTime * twoPi / GreenRectangleManager.#periodTime
                    + i * Math.PI / GreenRectangleManager.#numRectangles),
                GreenRectangleManager.#rectangleWidth,
                0.5 * GreenRectangleManager.#rectangleHeight
            );
        }
    }
    
    /**
     * Sets the visibility of the green boxes.
     * @param visibility The visibility of the green boxes
     */
    set visibility(visibility) {
        this.#graphics.visible = visibility;
    }
}

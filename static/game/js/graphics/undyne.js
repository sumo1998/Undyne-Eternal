/**
 * Undyne.
 */
class Undyne extends GraphicsObject {
    
    /**
     * The amount of time that has passed since the start of the animation, resetting to 0 after every animation cycle.
     */
    #animationTime;
    
    /**
     * Undyne's hair sprite.
     */
    #hairSprite;
    
    /**
     * Undyne's head sprite.
     */
    #headSprite;
    
    /**
     * Undyne's torso sprite.
     */
    #bodySprite;
    
    /**
     * Undyne's right arm sprite.
     */
    #rightArmSprite;
    
    /**
     * Undyne's left arm sprite.
     */
    #leftArmSprite;
    
    /**
     * Undyne's skirt sprite.
     */
    #skirtSprite;
    
    /**
     * Undyne's legs sprite.
     */
    #legsSprite;
    
    /**
     * Handles the speech bubble.
     */
    #speechBubble;
    
    /**
     * Controls the green rectangles behind Undyne.
     */
    #greenRectangleManager;
    
    /**
     * Handles the opacity of Undyne.
     */
    #opacityGraphics;
    
    /**
     * Initializes an Undyne instance.
     */
    constructor() {
        super();
        this.#animationTime = 0;
        
        const undyneHairTextureArr = [];
        for(let i = 0; i < 4; ++i) {
            undyneHairTextureArr.push(Main.runner.assetManager.getTexture("undyneHair" + i));
        }
        
        this.#hairSprite = new PIXI.extras.MovieClip(undyneHairTextureArr);
        this.#hairSprite.anchor.set(1, 0.5);
        this.#hairSprite.scale.set(2, 2);
        this.#hairSprite.position.set(310, 40);
        this.#hairSprite.animationSpeed = 4 / 30;
        
        this.#headSprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("undyneHead"));
        this.#headSprite.anchor.set(0.5, 0.5);
        this.#headSprite.scale.set(2, 2);
        this.#headSprite.position.set(318, 51);
        
        this.#bodySprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("undyneBreastplate"));
        this.#bodySprite.anchor.set(0.5, 0.5);
        this.#bodySprite.scale.set(2, 2);
        this.#bodySprite.position.set(324, 111);
        
        this.#rightArmSprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("undyneRightArm"));
        this.#rightArmSprite.anchor.set(1, 0);
        this.#rightArmSprite.scale.set(2, 2);
        this.#rightArmSprite.position.set(308, 98);
        
        this.#leftArmSprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("undyneLeftArm"));
        this.#leftArmSprite.anchor.set(0.5, 0.5);
        this.#leftArmSprite.scale.set(2, 2);
        this.#leftArmSprite.position.set(369, 134);
        
        this.#skirtSprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("undyneSkirt"));
        this.#skirtSprite.anchor.set(0.5, 0.5);
        this.#skirtSprite.scale.set(2, 2);
        this.#skirtSprite.position.set(320, 164);
        
        this.#legsSprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("undyneLegs"));
        this.#legsSprite.anchor.set(0.5, 0.5);
        this.#legsSprite.scale.set(2, 2);
        this.#legsSprite.position.set(324, 210);
        
        this.#greenRectangleManager = new GreenRectangleManager();
        this.#speechBubble = new SpeechBubble();
        
        this.#opacityGraphics = new PIXI.Graphics();
        this.opacity = 1;
        this.#opacityGraphics.beginFill(0x000000, 1);
        this.#opacityGraphics.drawRect(0, 0, 640, 480);
        this.#opacityGraphics.endFill();
        
        Main.runner.gameplayStage.addChild(this.#hairSprite);
        Main.runner.gameplayStage.addChild(this.#rightArmSprite);
        Main.runner.gameplayStage.addChild(this.#leftArmSprite);
        Main.runner.gameplayStage.addChild(this.#legsSprite);
        Main.runner.gameplayStage.addChild(this.#skirtSprite);
        Main.runner.gameplayStage.addChild(this.#bodySprite);
        Main.runner.gameplayStage.addChild(this.#headSprite);
        Main.runner.gameplayStage.addChild(this.#opacityGraphics);
        
        this.#hairSprite.play();
    }
    
    /**
     * Resets the fields to match the start of a new level.
     */
    reset() {
        this.opacity = 1;
        this.#greenRectangleManager.reset();
        this.#speechBubble.reset();
    }
    
    /**
     * Updates Undyne and the speech bubble.
     * @param deltaMs The time that has passed since the last update of Undyne
     */
    update(deltaMs) {
        this.#animationTime += deltaMs;
        if(this.#animationTime > 1200) {
            this.#animationTime -= 1200;
        }
        
        this.#greenRectangleManager.update(deltaMs);
        this.#speechBubble.update(deltaMs);
        
        this.#bodySprite.position.y = 111 + 2 * Math.sin(this.#animationTime / 1200 * Math.PI * 2);
        this.#headSprite.position.y = 51 + Math.sin(this.#animationTime / 1200 * Math.PI * 2);
        this.#skirtSprite.position.y = 164 + Math.sin(this.#animationTime / 1200 * Math.PI * 2);
        
        this.#rightArmSprite.position.y = 98 + 4 * Math.sin(this.#animationTime / 1200 * Math.PI * 2);
        this.#rightArmSprite.position.x = 308 + 2 * Math.sin(this.#animationTime / 1200 * Math.PI * 2);
        
        this.#leftArmSprite.position.y = 134 + 4 * Math.sin(this.#animationTime / 1200 * Math.PI * 2);
        this.#leftArmSprite.position.x = 369 + 2 * Math.sin(this.#animationTime / 600 * Math.PI * 2);
    }
    
    /**
     * Renders the green rectangles behind Undyne.
     */
    render() {
        this.#greenRectangleManager.render();
    }
    
    /**
     * Returns the instance that controls the green rectangles behind Undyne.
     * @return The instance that controls the green rectangles behind Undyne
     */
    get greenRectangleManager() {
        return this.#greenRectangleManager;
    }
    
    /**
     * Returns the instance that handles the speech bubble.
     * @return The instance that handles the speech bubble
     */
    get speechBubble() {
        return this.#speechBubble;
    }
    
    /**
     * Sets the opacity of Undyne.
     * @param opacity The new opacity of Undyne
     */
    set opacity(opacity) {
        this.#opacityGraphics.alpha = 1 - opacity;
    }
}

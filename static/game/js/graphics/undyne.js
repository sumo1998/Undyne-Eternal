/**
 * Undyne.
 */
class Undyne extends GraphicsObject {
    
    /**
     * Undyne's hair's default position.
     */
    static #hairDefaultPos = new PIXI.Point(310, 40);
    
    /**
     * Undyne's head's default position.
     */
    static #headDefaultPos = new PIXI.Point(318, 51);
    
    /**
     * Undyne's body's default position.
     */
    static #bodyDefaultPos = new PIXI.Point(324, 111);
    
    /**
     * Undyne's right arm's default position.
     */
    static #rightArmDefaultPos = new PIXI.Point(308, 98);
    
    /**
     * Undyne's left arm's default position.
     */
    static #leftArmDefaultPos = new PIXI.Point(369, 134);
    
    /**
     * Undyne's skirt's default position.
     */
    static #skirtDefaultPos = new PIXI.Point(320, 164);
    
    /**
     * Undyne's legs' default position.
     */
    static #legsDefaultPos = new PIXI.Point(324, 210);
    
    /**
     * The difficulty of the game.
     */
    #difficulty;
    
    /**
     * The amount of time that has passed since the start of the animation, resetting to 0 after every animation cycle.
     */
    #animationTime;
    
    /**
     * The current animation state of Undyne, which can be breathing or swinging her arm.
     */
    #animationState;
    
    /**
     * The original color of the heart when swinging the arm.
     */
    #swingArmOriginalHeartColor;
    
    /**
     * The player.
     */
    #player;
    
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
     * The container on which all the graphics are drawn.
     */
    #gameplayStage;
    
    /**
     * Initializes an Undyne instance.
     * @param difficulty The difficulty of the game
     * @param gameplayStage The container on which all the graphics are drawn
     */
    constructor(difficulty, gameplayStage) {
        super();
        
        this.#difficulty = difficulty;
        
        this.#animationTime = 0;
        
        this.#animationState = "breathing";
        
        const undyneHairTextureArr = [];
        for(let i = 0; i < 4; ++i) {
            undyneHairTextureArr.push(Main.runner.assetManager.getTexture("undyneHair" + i));
        }
        
        this.#hairSprite = new PIXI.extras.MovieClip(undyneHairTextureArr);
        this.#hairSprite.anchor.set(1, 0.5);
        this.#hairSprite.scale.set(2, 2);
        this.#hairSprite.position.set(Undyne.#hairDefaultPos.x, Undyne.#hairDefaultPos.y);
        this.#hairSprite.animationSpeed = 4 / 30;
        
        this.#headSprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("undyneHead"));
        this.#headSprite.anchor.set(0.5, 0.5);
        this.#headSprite.scale.set(2, 2);
        this.#headSprite.position.set(Undyne.#headDefaultPos.x, Undyne.#headDefaultPos.y);
        
        this.#bodySprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("undyneBreastplate"));
        this.#bodySprite.anchor.set(0.5, 0.5);
        this.#bodySprite.scale.set(2, 2);
        this.#bodySprite.position.set(Undyne.#bodyDefaultPos.x, Undyne.#bodyDefaultPos.y);
        
        this.#rightArmSprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("undyneRightArm"));
        this.#rightArmSprite.anchor.set(1, 0);
        this.#rightArmSprite.scale.set(2, 2);
        this.#rightArmSprite.position.set(Undyne.#rightArmDefaultPos.x, Undyne.#rightArmDefaultPos.y);
        
        this.#leftArmSprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("undyneLeftArm"));
        this.#leftArmSprite.anchor.set(0.5, 0.5);
        this.#leftArmSprite.scale.set(2, 2);
        this.#leftArmSprite.position.set(Undyne.#leftArmDefaultPos.x, Undyne.#leftArmDefaultPos.y);
        
        this.#skirtSprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("undyneSkirt"));
        this.#skirtSprite.anchor.set(0.5, 0.5);
        this.#skirtSprite.scale.set(2, 2);
        this.#skirtSprite.position.set(Undyne.#skirtDefaultPos.x, Undyne.#skirtDefaultPos.y);
        
        this.#legsSprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("undyneLegs"));
        this.#legsSprite.anchor.set(0.5, 0.5);
        this.#legsSprite.scale.set(2, 2);
        this.#legsSprite.position.set(Undyne.#legsDefaultPos.x, Undyne.#legsDefaultPos.y);
        
        this.#greenRectangleManager = new GreenRectangleManager(gameplayStage);
        this.#speechBubble = new SpeechBubble(gameplayStage);
        
        this.#opacityGraphics = new PIXI.Graphics();
        this.opacity = 1;
        this.#opacityGraphics.beginFill(0x000000, 1);
        this.#opacityGraphics.drawRect(0, 0, 640, 480);
        this.#opacityGraphics.endFill();
        
        gameplayStage.addChild(this.#hairSprite);
        gameplayStage.addChild(this.#rightArmSprite);
        gameplayStage.addChild(this.#leftArmSprite);
        gameplayStage.addChild(this.#legsSprite);
        gameplayStage.addChild(this.#skirtSprite);
        gameplayStage.addChild(this.#bodySprite);
        gameplayStage.addChild(this.#headSprite);
        gameplayStage.addChild(this.#opacityGraphics);
        
        this.#hairSprite.play();
    
        this.#gameplayStage = gameplayStage;
    }
    
    /**
     * Returns the background music associated with the current difficulty.
     * @return The background music associated with the current difficulty
     */
    static getBgm(difficulty) {
        const capitalFirstLetterDifficulty = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
        return Main.runner.assetManager.getAudio("undyne" + capitalFirstLetterDifficulty + "Bgm");
    }
    
    /**
     * Sets the player to the given player.
     * @param player The player to store
     */
    set player(player) {
        this.#player = player;
    }
    
    /**
     * Returns Undyne's animation state.
     */
    get animationState() {
        return this.#animationState;
    }
    
    /**
     * Changes Undyne's animation mode to the swinging arm state.
     */
    swingArm() {
        if(this.#animationState === "swinging arm") {
            return;
        }
        
        this.#animationState = "swinging arm";
        
        this.#swingArmOriginalHeartColor = this.#player.heartColor;
        
        this.#bodySprite.position.y = Undyne.#bodyDefaultPos.y;
        this.#headSprite.position.y = Undyne.#headDefaultPos.y;
        this.#skirtSprite.position.y = Undyne.#skirtDefaultPos.y;
        this.#rightArmSprite.position.set(Undyne.#rightArmDefaultPos.x, Undyne.#rightArmDefaultPos.y);
        this.#leftArmSprite.position.set(Undyne.#leftArmDefaultPos.x, Undyne.#leftArmDefaultPos.y);
        
        this.#animationTime = 0;
        
        //Put right arm in front of all the other sprites
        this.#gameplayStage.removeChild(this.#rightArmSprite);
        this.#gameplayStage.addChild(this.#rightArmSprite);
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
     * Performs the normal Undyne breathing animation.
     */
    breathingAnimation() {
        //Wraps to 0 after each breathing animation cycle (every 1200 ms)
        if(this.#animationTime > 1200) {
            this.#animationTime -= 1200;
        }
        
        const undyneAnimationSineAngle = this.#animationTime / 1200 * Math.PI * 2;
        
        this.#bodySprite.position.y = Undyne.#bodyDefaultPos.y + 2 * Math.sin(undyneAnimationSineAngle);
        this.#headSprite.position.y = Undyne.#headDefaultPos.y + Math.sin(undyneAnimationSineAngle);
        this.#skirtSprite.position.y = Undyne.#skirtDefaultPos.y + Math.sin(undyneAnimationSineAngle);
        
        this.#rightArmSprite.position.x = Undyne.#rightArmDefaultPos.x + 2 * Math.sin(undyneAnimationSineAngle);
        this.#rightArmSprite.position.y = Undyne.#rightArmDefaultPos.y + 4 * Math.sin(undyneAnimationSineAngle);
        
        this.#leftArmSprite.position.x = Undyne.#leftArmDefaultPos.x + 2 * Math.sin(2 * undyneAnimationSineAngle);
        this.#leftArmSprite.position.y = Undyne.#leftArmDefaultPos.y + 4 * Math.sin(undyneAnimationSineAngle);
    }
    
    /**
     * Performs the Undyne swinging arm animation.
     */
    swingingArmAnimation() {
        //The start and end of the right arm rotation angle
        let rotationStartingAngle;
        let rotationEndingAngle;
        
        //The start and end of the current rotation animation of the right arm
        let rotationStartTime;
        let rotationEndTime;
        
        if(this.#animationTime < 300) {
            rotationStartingAngle = 0;
            rotationEndingAngle = 40;
            rotationStartTime = 0;
            rotationEndTime = 200;
        }
        else if(this.#animationTime < 600) {
            rotationStartingAngle = 40;
            rotationEndingAngle = -60;
            rotationStartTime = 300;
            rotationEndTime = 400;
        }
        else if(this.#animationTime < 750) {
            rotationStartingAngle = -60;
            rotationEndingAngle = 0;
            rotationStartTime = 600;
            rotationEndTime = 650;
        }
        
        //Uses fourth power interpolation for the rotation
        if(this.#animationTime < 600) {
            const animationProportion =
                MathUtility.clampInterpolate(this.#animationTime, rotationStartTime, rotationEndTime, 0, 1);
            const quadraticAnimationProportion = Math.pow(animationProportion, 4);
            this.#rightArmSprite.rotation = Math.PI / 180
                * MathUtility.interpolate(quadraticAnimationProportion, rotationStartingAngle, rotationEndingAngle);
        }
        //Uses linear interpolation for the rotation
        else if(this.#animationTime < 750) {
            this.#rightArmSprite.rotation = Math.PI / 180 * MathUtility.clampInterpolate(
                this.#animationTime,
                rotationStartTime,
                rotationEndTime,
                rotationStartingAngle,
                rotationEndingAngle
            );
        }
        else {
            //Put right arm in behind all the other sprites
            this.#gameplayStage.removeChild(this.#rightArmSprite);
            this.#gameplayStage.addChildAt(this.#rightArmSprite, 0);
            
            this.#animationState = "breathing";
            this.#animationTime = 0;
        }
        
        if(this.#animationTime >= 394 && this.#player.heartColor === this.#swingArmOriginalHeartColor) {
            if(this.#swingArmOriginalHeartColor === "green") {
                this.#player.heartColor = "red";
                this.#player.hideShieldSprites();
            }
            else {
                this.#player.heartColor = "green";
                Undyne.getBgm(this.#difficulty).play();
                this.#player.showShieldSprites();
            }
        }
    }
    
    /**
     * Updates Undyne and the speech bubble.
     * @param deltaMs The time that has passed since the last update of Undyne
     */
    update(deltaMs) {
        this.#greenRectangleManager.update(deltaMs);
        this.#speechBubble.update(deltaMs);
        
        this.#animationTime += deltaMs;
        
        if(this.#animationState === "breathing") {
            this.breathingAnimation();
        }
        else if(this.#animationState === "swinging arm") {
            this.swingingArmAnimation();
        }
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

/**
 * Initializes and runs the game.
 */
class Main {
    
    /**
     * The instance of Main used to obtain assets, the renderer, or the game dimensions.
     */
    static #runner;
    
    /**
     * Loads and manages the assets for the game.
     */
    #assetManager;
    
    /**
     * The container on which all the graphics are drawn.
     */
    #gameplayStage;
    
    /**
     * Manages the rendering of the game.
     */
    #rendererManager;
    
    /**
     * Handles the running of the game overall.
     */
    #gameHandler;
    
    /**
     * The width of the game.
     */
    #gameWidth;
    
    /**
     * The height of the game.
     */
    #gameHeight;
    
    /**
     * The last-used time for the update function.
     */
    #previousTime;
    
    /**
     * Initializes an instance of Main.
     */
    constructor() {
        this.#gameplayStage = new PIXI.Container();
        this.#gameWidth = 640;
        this.#gameHeight = 480;
    }
    
    /**
     * Returns the instance of Main used to obtain assets, the renderer, or the game dimensions.
     * @return The instance of Main used to obtain assets, the renderer, or the game dimensions
     */
    static get runner() {
        return this.#runner;
    }
    
    /**
     * Initializes the instance of Main used to obtain assets, the renderer, or the game dimensions.
     */
    static initializeMain() {
        this.#runner = new Main();
    }
    
    /**
     * Adds the renderer and begins the loading of the game.
     */
    load() {
        this.#rendererManager = new RendererManager();
        this.#assetManager = new AssetManager();
    }
    
    /**
     * Waits until the assets are loaded and then starts the game.
     * @param levelDataJson The level data in JSON format to parse
     */
    startGame(levelDataJson) {
        const thisTmp = this;
        if(!this.#assetManager.isLoaded()) {
            setTimeout(() => thisTmp.startGame(levelDataJson), 500);
            return;
        }
        
        this.#gameHandler = new GameHandler("easy", levelDataJson);
        
        KeyboardHandler.initialize(this.#gameHandler);
        
        this.#previousTime = performance.now();
        requestAnimationFrame(() => thisTmp.update());
    }
    
    /**
     * Computes the change since the last update and updates the state of the game objects.
     */
    update() {
        const currentTime = performance.now();
        const deltaMs = MathUtility.clamp(currentTime - this.#previousTime, 0, 100);
        this.#previousTime = currentTime;
        
        this.#gameHandler.update(deltaMs);
        
        const thisTmp = this;
        requestAnimationFrame(() => thisTmp.update());
    }
    
    /**
     * Returns the instance that loads and manages the assets for the game.
     * @return The instance that loads and manages the assets for the game
     */
    get assetManager() {
        return this.#assetManager;
    }
    
    /**
     * Returns the container on which all the graphics are drawn.
     * @return The container on which all the graphics are drawn
     */
    get gameplayStage() {
        return this.#gameplayStage;
    }
    
    /**
     * Returns the instance that manages the rendering of the game.
     * @return The instance that manages the rendering of the game.
     */
    get rendererManager() {
        return this.#rendererManager;
    }
    
    /**
     * Returns the width of the game.
     * @return The width of the game.
     */
    get gameWidth() {
        return this.#gameWidth;
    }
    
    /**
     * Returns the height of the game.
     * @return The height of the game.
     */
    get gameHeight() {
        return this.#gameHeight;
    }
}

/**
 * Loads and manages the graphics for the game.
 */
class GraphicManager extends AssetLoader {
    
    /**
     * The directory in which all game audio files are located.
     */
    static #imgDir = "static/game/img/";
    
    /**
     * Responsible for the loading of the graphics.
     */
    #graphicLoader;
    
    /**
     * The map of graphic names to their respective textures.
     */
    #textureMap;
    
    /**
     * True when the graphics are loaded.
     */
    #loaded;
    
    /**
     * Creates an instance of GraphicManager.
     */
    constructor() {
        super();
        this.#loaded = false;
        this.#graphicLoader = new PIXI.loaders.Loader();
        
        this.#addImage("arrow", "arrow.png");
        this.#addImage("heart", "heart.png");
        this.#addImage("shield", "shield.png");
        this.#addImage("shieldHit", "shield_hit.png");
        
        this.#addImage("speechBubble", "speech_bubble.png");
        this.#addImage("undyneBreastplate", "undyne_breastplate.png");
        this.#addImage("undyneHair0", "undyne_hair0.png");
        this.#addImage("undyneHair1", "undyne_hair1.png");
        this.#addImage("undyneHair2", "undyne_hair2.png");
        this.#addImage("undyneHair3", "undyne_hair3.png");
        this.#addImage("undyneHead", "undyne_head.png");
        this.#addImage("undyneLeftArm", "undyne_left_arm.png");
        this.#addImage("undyneLegs", "undyne_legs.png");
        this.#addImage("undyneRightArm", "undyne_right_arm.png");
        this.#addImage("undyneSkirt", "undyne_skirt.png");
        
        this.#addImage("startButton", "start_button.png");
        this.#addImage("playAgainButton", "play_again_button.png");
        
        this.#graphicLoader.on("complete", (loader, resources) => this.#setUpGraphics(resources));
        
        this.#graphicLoader.load();
    }
    
    /**
     * Adds the given image to the graphic loader.
     * @param imgName The name mapped to the graphic for retrieval
     * @param localImgPath The local image path
     */
    #addImage(imgName, localImgPath) {
        this.#graphicLoader.add(imgName, GraphicManager.#imgDir + localImgPath);
    }
    
    /**
     * Sets the graphics textures up after loading by setting certain graphics to use pixelated scaling and by adding
     * all the textures into the texture map.
     * @param resources The resources loaded by the graphics loader
     */
    #setUpGraphics(resources) {
        resources["heart"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        
        resources["speechBubble"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        
        for(let i = 0; i < 4; ++i) {
            resources["undyneHair" + i].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        }
        
        resources["undyneHead"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        resources["undyneBreastplate"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        resources["undyneLeftArm"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        resources["undyneLegs"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        resources["undyneRightArm"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        resources["undyneSkirt"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        
        this.#textureMap = {};
        
        for(const resource in resources) {
            this.#textureMap[resource] = resources[resource].texture;
        }
        
        this.#loaded = true;
    }
    
    /**
     * Returns true if the graphics are loaded.
     * @returns True if the graphics are loaded
     */
    isLoaded() {
        return this.#loaded;
    }
    
    /**
     * Returns the texture with the given name associated to it.
     * @param textureName The name of the texture to retrieve
     * @returns The texture with the given name associated to it
     */
    getTexture(textureName) {
        return this.#textureMap[textureName];
    }
}

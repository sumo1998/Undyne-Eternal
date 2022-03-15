/**
 * Loads and manages the graphics for the game.
 */
class GraphicManager extends AssetLoader {
    
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
        
        this.#graphicLoader
            .add("arrow", "static/game/img/arrow.png")
            .add("heart", "static/game/img/heart.png")
            .add("shield", "static/game/img/shield.png")
            .add("shieldHit", "static/game/img/shieldHit.png")
            
            .add("speechbubble", "static/game/img/speechbubble.png")
            .add("undyneBreastplate", "static/game/img/undyne_breastplate.png")
            .add("undyneHair0", "static/game/img/undyne_hair0.png")
            .add("undyneHair1", "static/game/img/undyne_hair1.png")
            .add("undyneHair2", "static/game/img/undyne_hair2.png")
            .add("undyneHair3", "static/game/img/undyne_hair3.png")
            .add("undyneHead0", "static/game/img/undyne_head0.png")
            .add("undyneHead1", "static/game/img/undyne_head1.png")
            .add("undyneHead2", "static/game/img/undyne_head_annoyed.png")
            .add("undyneHead3", "static/game/img/undyne_head_angry.png")
            .add("undyneLeftArm", "static/game/img/undyne_left_arm.png")
            .add("undyneLegs", "static/game/img/undyne_legs.png")
            .add("undyneRightArm", "static/game/img/undyne_right_arm.png")
            .add("undyneSkirt", "static/game/img/undyne_skirt.png")
            
            .on("complete", (loader, resources) => this.#setUpGraphics(resources));
        
        this.#graphicLoader.load();
    }
    
    /**
     * Sets the graphics textures up after loading by setting certain graphics to use pixellated scaling and by adding
     * all of the textures into the texture map.
     * @param resources The resources loaded by the graphics loader
     */
    #setUpGraphics(resources) {
        resources["heart"].baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        
        resources["speechbubble"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        
        for(let i = 0; i < 4; ++i) {
            resources["undyneHair" + i].baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        }
        
        for(let i = 0; i < 4; ++i) {
            resources["undyneHead" + i].baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        }
        
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

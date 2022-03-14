/**
 * Loads the fonts for the game.
 */
class FontLoader extends AssetLoader {
    
    /**
     * Responsible for the loading of the fonts.
     */
    #fontLoader;
    
    /**
     * True when the fonts are loaded.
     */
    #loaded;
    
    /**
     * Creates an instance of FontLoader.
     */
    constructor() {
        super();
        this.#loaded = false;
        this.#fontLoader = new PIXI.loaders.Loader();
        
        this.#fontLoader
            .add("undertale", "static/game/fonts/undertale.fnt")
            .add("numbers", "static/game/fonts/numbers.fnt")
            .add("speechbubble", "static/game/fonts/speechbubble.fnt")
            .on("complete", (loader, resources) => this.#setUpFonts(resources));
        
        this.#fontLoader.load();
    }
    
    /**
     * Sets the fonts up when loaded to use the NEAREST scale mode for Pixellated scaling.
     * @param resources The resources loaded by the font loader
     */
    #setUpFonts(resources) {
        for(const resource in resources) {
            if(resource.endsWith("_image")) {
                resources[resource].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
            }
        }
        
        this.#loaded = true;
    }
    
    /**
     * Returns true if the fonts are loaded.
     * @returns True if the fonts are loaded
     */
    isLoaded() {
        return this.#loaded;
    }
}

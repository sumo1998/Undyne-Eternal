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
     * Loads the provided fonts for PIXI
     * @param fontNameDirectoryObject The names of the fonts to load and their corresponding directories
     */
    constructor(fontNameDirectoryObject) {
        super();
        this.#loaded = false;
        this.#fontLoader = new PIXI.loaders.Loader();
        
        for(const fontName in fontNameDirectoryObject) {
            this.#fontLoader.add(fontName, fontNameDirectoryObject[fontName]);
        }
        
        this.#fontLoader.on("complete", (loader, resources) => this.#setUpFonts(resources));
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

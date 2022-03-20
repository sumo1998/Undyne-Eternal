/**
 * Loads the fonts for the game.
 */
class FontLoader extends AssetLoader {
    
    /**
     * The directory in which all game font files are located.
     */
    static #fontDir = "static/game/fonts/";
    
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
        
        this.#addFont("undertale", "undertale.fnt");
        this.#addFont("numbers", "numbers.fnt");
        this.#addFont("speechBubble", "speech_bubble.fnt");
        
        this.#fontLoader.on("complete", (loader, resources) => this.#setUpFonts(resources));
        
        this.#fontLoader.load();
    }
    
    /**
     * Adds the given font to the font loader.
     * @param fontName The name mapped to the font for retrieval
     * @param localFontPath The local font path
     */
    #addFont(fontName, localFontPath) {
        this.#fontLoader.add(fontName, FontLoader.#fontDir + localFontPath);
    }
    
    /**
     * Sets the fonts up when loaded to use the NEAREST scale mode for pixelated scaling.
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

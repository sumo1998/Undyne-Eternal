/**
 * Loads the assets for the game.
 */
class AssetManager extends AssetLoader {
    
    /**
     * Loads the fonts for the game.
     */
    #fontLoader;
    
    /**
     * Loads and manages the audio for the game.
     */
    #audioManager;
    
    /**
     * Loads and manages the graphics for the game.
     */
    #graphicManager;
    
    /**
     * Initializes an AssetManager instance.
     */
    constructor() {
        super();
        
        this.#fontLoader = new FontLoader();
        this.#audioManager = new AudioManager();
        this.#graphicManager = new GraphicManager();
    }
    
    /**
     * Returns true if the fonts, audio, and graphics are loaded.
     * @returns True if the fonts, audio, and graphics are loaded
     */
    isLoaded() {
        return this.#fontLoader.isLoaded() && this.#audioManager.isLoaded() && this.#graphicManager.isLoaded();
    }
    
    /**
     * Returns the Howl instance with the given name associated to it.
     * @param audioName The name of the audio to retrieve
     * @returns The Howl instance with the given name associated to it
     */
    getAudio(audioName) {
        return this.#audioManager.getAudio(audioName);
    }
    
    /**
     * Returns the texture with the given name associated to it.
     * @param textureName The name of the texture to retrieve
     * @returns The texture with the given name associated to it
     */
    getTexture(textureName) {
        return this.#graphicManager.getTexture(textureName);
    }
}

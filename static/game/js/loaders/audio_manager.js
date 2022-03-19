/**
 * Loads and manages the audio for the game.
 */
class AudioManager extends AssetLoader {
    
    /**
     * The directory in which all game audio files are located.
     */
    static #audioDir = "static/game/audio/";
    
    /**
     * The map of audio names to if they are loaded.
     */
    #audioLoadedMap;
    
    /**
     * The map of audio names to their respective Howl instances.
     */
    #audioMap;
    
    /**
     * Creates an instance of AudioManager.
     */
    constructor() {
        super();
        this.#audioLoadedMap = {
            "introBgm": false,
            "undyneEasyBgm": false,
            "undyneMediumBgm": false,
            "undyneHardBgm": false,
            "arrowBlockedSfx": false,
            "arrowDamageSfx": false,
            "undyneSpeakSfx": false
        };
        
        //The music played while waiting for the user to play
        const introBgm = this.#getAudio(
            "introBgm",
            ["bgm/intro.ogg", "bgm/intro.mp3"],
            true,
            0.7
        );
        
        //The music that plays in the easy mode
        const undyneEasyBgm = this.#getAudio(
            "undyneEasyBgm",
            ["bgm/undyne_easy.ogg", "bgm/undyne_easy.mp3"],
            true,
            0.7
        );
        
        //The music that plays in the medium mode
        const undyneMediumBgm = this.#getAudio(
            "undyneMediumBgm",
            ["bgm/undyne_medium.ogg", "bgm/undyne_medium.mp3"],
            true,
            0.7
        );
        
        //The music that plays in the hard mode
        const undyneHardBgm = this.#getAudio(
            "undyneHardBgm",
            ["bgm/undyne_hard.ogg", "bgm/undyne_hard.mp3"],
            true,
            0.7
        );
        
        //The sfx that plays when the arrow is blocked by the shield
        const arrowBlockedSfx = this.#getAudio(
            "arrowBlockedSfx",
            "sfx/arrow_blocked.wav",
            false,
            0.7
        );
        
        //The sfx that plays when the heart is damaged by the arrow
        const arrowDamageSfx = this.#getAudio(
            "arrowDamageSfx",
            "sfx/arrow_damage.wav",
            false,
            0.7
        );
        
        //The sfx that plays when undyne is speaking
        const undyneSpeakSfx = this.#getAudio(
            "undyneSpeakSfx",
            "sfx/undyne_speak.wav",
            false,
            0.7
        );
        
        this.#audioMap = {
            "introBgm": introBgm,
            "undyneEasyBgm": undyneEasyBgm,
            "undyneMediumBgm": undyneMediumBgm,
            "undyneHardBgm": undyneHardBgm,
            "arrowBlockedSfx": arrowBlockedSfx,
            "arrowDamageSfx": arrowDamageSfx,
            "undyneSpeakSfx": undyneSpeakSfx
        };
    }
    
    /**
     * Returns the Howl instance with the given parameters.
     * @param audioName The name mapped to the audio for retrieval
     * @param localAudioPaths The string or array to the local audio path(s)
     * @param loop True if the audio should loop
     * @param volume The volume of the audio from 0 to 1
     * @return The Howl instance with the given parameters
     */
    #getAudio(audioName, localAudioPaths, loop, volume) {
        if(Array.isArray(localAudioPaths)) {
            localAudioPaths = localAudioPaths.map(path => AudioManager.#audioDir + path);
        }
        else {
            localAudioPaths = AudioManager.#audioDir + localAudioPaths;
        }
        
        return new Howl({
            "onload": () => this.#markAudioLoaded(audioName),
            "src": localAudioPaths,
            "loop": loop,
            "volume": volume
        });
    }
    
    /**
     * Marks audio as loaded in the audio loaded map.
     * @param audioName The audio to mark as loaded
     */
    #markAudioLoaded(audioName) {
        this.#audioLoadedMap[audioName] = true;
    }
    
    /**
     * Returns true if the audio is loaded.
     * @returns True if the audio is loaded
     */
    isLoaded() {
        for(const audioName in this.#audioLoadedMap) {
            if(!this.#audioLoadedMap[audioName]) {
                return false;
            }
        }
        return true;
    }
    
    /**
     * Returns the Howl instance with the given name associated to it.
     * @param audioName The name of the audio to retrieve
     * @returns The Howl instance with the given name associated to it
     */
    getAudio(audioName) {
        return this.#audioMap[audioName];
    }
}

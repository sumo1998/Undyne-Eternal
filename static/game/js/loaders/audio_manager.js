/**
 * Loads and manages the audio for the game.
 */
class AudioManager extends AssetLoader {
    
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
            "menuBgm": false,
            "undyneBattleMusic": false,
            "undyingBattleMusic": false,
            "arrowBlockedSfx": false,
            "arrowDamageSfx": false,
            "undyneSpeakSfx": false
        };
        
        //The music played while waiting for the user to play
        const menuBgm = new Howl({
            onload: () => this.#markAudioLoaded("menuBgm"),
            src: ["static/game/audio/bgm/undyne.ogg", "static/game/audio/bgm/undyne.mp3"],
            loop: true,
            volume: 0.7
        });
        
        //The music that plays in the easy and medium modes
        const undyneBattleMusic = new Howl({
            onload: () => this.#markAudioLoaded("undyneBattleMusic"),
            src: ["static/game/audio/bgm/undyne_boss.ogg", "static/game/audio/bgm/undyne_boss.mp3"],
            loop: true,
            volume: 0.7
        });
        
        //The music that plays in the hard mode
        const undyingBattleMusic = new Howl({
            onload: () => this.#markAudioLoaded("undyingBattleMusic"),
            src: ["static/game/audio/bgm/undying_boss.ogg", "static/game/audio/bgm/undying_boss.mp3"],
            loop: true,
            volume: 0.7
        });
        
        //The sfx that plays when the arrow is blocked by the shield
        const arrowBlockedSfx = new Howl({
            onload: () => this.#markAudioLoaded("arrowBlockedSfx"),
            src: "static/game/audio/sfx/arrow_blocked.wav",
            loop: false,
            volume: 0.7
        });
        
        //The sfx that plays when the heart is damaged by the arrow
        const arrowDamageSfx = new Howl({
            onload: () => this.#markAudioLoaded("arrowDamageSfx"),
            src: "static/game/audio/sfx/arrow_damage.wav",
            loop: false,
            volume: 0.7
        });
        
        //The sfx that plays when undyne is speaking
        const undyneSpeakSfx = new Howl({
            onload: () => this.#markAudioLoaded("undyneSpeakSfx"),
            src: "static/game/audio/sfx/undyne_speak.wav",
            loop: false,
            volume: 0.7
        });
        
        this.#audioMap = {
            "menuBgm": menuBgm,
            "undyneBattleMusic": undyneBattleMusic,
            "undyingBattleMusic": undyingBattleMusic,
            "arrowBlockedSfx": arrowBlockedSfx,
            "arrowDamageSfx": arrowDamageSfx,
            "undyneSpeakSfx": undyneSpeakSfx
        };
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
     * @returns True if the audio is loaded.
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
        return this.#audioMap[audio];
    }
}

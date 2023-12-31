/**
 * Handles keyboard inputs.
 */
class KeyboardHandler {
    
    /**
     * The game handler.
     */
    static #gameHandler;
    
    /**
     * Initializes a KeyboardHandler.
     * @param gameHandler The game handler
     */
    static initialize(gameHandler) {
        KeyboardHandler.#gameHandler = gameHandler;
        document.addEventListener("keydown", KeyboardHandler.onKeyDown);
        document.addEventListener("keyup", KeyboardHandler.onKeyUp);
    }
    
    /**
     * Handles a keyboard input.
     * @param key The string representing the key being pressed
     * @param pressedDown True if the key is being pressed down and false if it is being released
     */
    static handleKeyInput(key, pressedDown) {
        if(pressedDown) {
            this.#gameHandler.handleKeyInput(key);
        }
    }
    
    /**
     * Called when a key is pressed down.
     * @param e The key down event
     */
    static onKeyDown(e) {
        //Prevents the arrow keys from doing their default action (e.g. moving the page around if zoomed)
        if(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
        
        //Left arrow key, A, and J are all counted as a left input
        if(e.keyCode === 37 || e.keyCode === 74 || e.keyCode === 65) {
            KeyboardHandler.handleKeyInput("left", true);
        }
        //Up arrow key, W, and I are all counted as an up input
        else if(e.keyCode === 38 || e.keyCode === 73 || e.keyCode === 87) {
            KeyboardHandler.handleKeyInput("up", true);
        }
        //Right arrow key, D, and L are all counted as a right input
        else if(e.keyCode === 39 || e.keyCode === 76 || e.keyCode === 68) {
            KeyboardHandler.handleKeyInput("right", true);
        }
        //Down arrow key, S, and K are all counted as a down input
        else if(e.keyCode === 40 || e.keyCode === 75 || e.keyCode === 83) {
            KeyboardHandler.handleKeyInput("down", true);
        }
        //Shift key and X are counted as the cancel/skip key
        else if(e.keyCode === 16 || e.keyCode === 88) {
            KeyboardHandler.handleKeyInput("X", true);
        }
        //Enter key and Z are counted as the confirmation key
        else if(e.keyCode === 13 || e.keyCode === 90) {
            KeyboardHandler.handleKeyInput("Z", true);
        }
    }
    
    /**
     * Called when a key is released.
     * @param e The key up event
     */
    static onKeyUp(e) {}
}

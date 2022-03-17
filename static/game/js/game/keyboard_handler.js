/**
 * Handles keyboard inputs.
 */
class KeyboardHandler {
    
    /**
     * The game handler.
     */
    #gameHandler;
    
    /**
     * Initializes a KeyboardHandler.
     * @param gameHandler The game handler
     */
    constructor(gameHandler) {
        this.#gameHandler = gameHandler;
        document.addEventListener("keydown", this.onKeyDown);
        document.addEventListener("keyup", this.onKeyUp);
    }
    
    /**
     * Handles a keyboard input.
     * @param key The string representing the key being pressed
     * @param pressedDown True if the key is being pressed down and false if it is being released
     */
    handleKeyInput(key, pressedDown) {
        if(pressedDown) {
            this.#gameHandler.handleKeyInput(key);
        }
    }
    
    /**
     * Called when a key is pressed down.
     * @param e The key down event
     */
    onKeyDown(e) {
        //Prevents the arrow keys from doing their default action (e.g. moving the page around if zoomed)
        if(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
        
        //Left arrow key, A, and J are all counted as a left input
        if(e.keyCode === 37 || e.keyCode === 74 || e.keyCode === 65) {
            this.handleKeyInput("left", true);
        }
        //Up arrow key, W, and I are all counted as an up input
        else if(e.keyCode === 38 || e.keyCode === 73 || e.keyCode === 87) {
            this.handleKeyInput("up", true);
        }
        //Right arrow key, D, and L are all counted as a right input
        else if(e.keyCode === 39 || e.keyCode === 76 || e.keyCode === 68) {
            this.handleKeyInput("right", true);
        }
        //Down arrow key, S, and K are all counted as a down input
        else if(e.keyCode === 40 || e.keyCode === 75 || e.keyCode === 83) {
            this.handleKeyInput("down", true);
        }
        //Shift key and X are counted as the cancel/skip key
        else if(e.keyCode === 16 || e.keyCode === 88) {
            this.handleKeyInput("X", true);
        }
        //Enter key and Z are counted as the confirmation key
        else if(e.keyCode === 13 || e.keyCode === 90) {
            this.handleKeyInput("Z", true);
        }
    }
    
    /**
     * Called when a key is released.
     * @param e The key up event
     */
    onKeyUp(e) {}
}

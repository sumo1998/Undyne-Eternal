/**
 * Undyne's speech bubble.
 */
class SpeechBubble extends GraphicsObject {
    
    /**
     * The rate in characters per second at which the speech bubble text should advance.
     */
    static charsPerSec = 25;
    
    /**
     * The speech bubble sprite.
     */
    #sprite;
    
    /**
     * The speech bubble text graphics.
     */
    #speechText;
    
    /**
     * Contains the current speech bubble message being rendered and optionally the face that Undyne should be
     * expressing.
     */
    #curText;
    
    /**
     * The current text state of the speech bubble, which can be none, talking, or waiting.
     */
    #textState;
    
    /**
     * The queue containing the speech bubble messages and optionally Undyne faces for each message.
     */
    #textQueue;
    
    /**
     * The function to call when the text queue finishes.
     */
    #textQueueCallback;
    
    /**
     * The (fractional) number of characters being displayed of the current message.
     */
    #numTextChars;
    
    /**
     * The text sound effect to play for each character being read.
     */
    #textSfx;
    
    /**
     * Initializes a SpeechBubble isntance.
     */
    constructor() {
        super();
        this.#curText = null;
        this.#textState = "none";
        this.#textQueue = [];
        this.#textQueueCallback = null;
        this.#numTextChars = 0;
        this.#textSfx = Main.runner.assetManager.getAudio("undyneSpeakSfx");
        
        this.#sprite = new PIXI.Sprite(Main.runner.assetManager.getTexture("speechBubble"));
        this.#sprite.anchor.set(0, 0.5);
        this.#sprite.position.set(400, 60);
        this.#sprite.visible = false;
        
        this.#speechText = new PIXI.extras.BitmapText("", {font: "12px SpeechBubble", align: "left"});
        this.#speechText.maxWidth = 180;
        this.#speechText.position.set(442, 24);
        this.#speechText.tint = 0x000000;
        this.#speechText.visible = false;
        
        Main.runner.gameplayStage.addChild(this.#sprite);
        Main.runner.gameplayStage.addChild(this.#speechText);
    }
    
    /**
     * Adds the given text queue to the current queue and updates the callback function.
     * @param textQueue The queue of speech bubble messages and optionally Undyne faces to add to the current queue
     * @param callback The new callback function to call after the text queue has finished
     */
    queueText(textQueue, callback) {
        this.#textQueue = this.#textQueue.concat(textQueue);
        this.#textQueueCallback = callback;
        this.#sprite.visible = true;
        this.#speechText.visible = true;
        this.selectNextText();
    }
    
    /**
     * Updates the current speech bubble message to the next message in the queue.
     */
    selectNextText() {
        if(this.#textQueue.length > 0) {
            this.#curText = this.#textQueue.shift();
            this.#numTextChars = 0;
            this.#textState = "talking";
        }
        else {
            this.#curText = null;
            this.#sprite.visible = false;
            this.#speechText.visible = false;
            this.#textState = "none";
            this.#textQueueCallback();
        }
    }
    
    /**
     * Advances the text characters in the current speech bubble message using the given number of characters to
     * display.
     * @param numTextChars The number of text characters to display of the current message
     */
    advanceTextChars(numTextChars) {
        if(!this.#curText) {
            return;
        }
        
        const wholeNumTextChars = Math.floor(numTextChars);
        
        const nextChar = this.#curText.text[wholeNumTextChars];
        if(nextChar !== " " && nextChar !== "\n") {
            this.#textSfx.play();
        }
        
        this.#speechText.text = this.#curText.substring(0, wholeNumTextChars);
    }
    
    /**
     * Advances to the next speech bubble message only if the current one has finished.
     */
    advanceTextZ() {
        if(this.#textState === "waiting") {
            this.selectNextText();
        }
    }
    
    /**
     * Advances the current speech bubble message to the end.
     */
    advanceTextX() {
        if(this.#textState === "talking") {
            this.#speechText.text = this.#curText.text;
            this.#textState = "waiting";
        }
    }
    
    /**
     * Updates the speech bubble.
     * @param deltaMs The time that has passed since the last update of the speech bubble
     */
    update(deltaMs) {
        if(this.#textState === "talking") {
            //Update the number of text characters based on the chars/sec by the amount of time that has passed
            const newNumTextChars = this.#numTextChars + SpeechBubble.charsPerSec * deltaMs / 1000;
            
            if(Math.floor(newNumTextChars) > this.#numTextChars) {
                this.advanceTextChars(newNumTextChars);
            }
            
            if(this.#numTextChars >= this.#curText.text.length) {
                this.#textState = "waiting";
            }
            
            this.#numTextChars = newNumTextChars;
        }
    }
}

/**
 * The HUD of information displayed to the user, which consists of the current attack, the LOVE, the HP, and the time.
 */
class Hud extends GraphicsObject {
    
    /**
     * The maximum time that the timer can display (59:59:59.99).
     */
    static #maxTime = 215999990;
    
    /**
     * The current attack number.
     */
    #currentAttackNumber;
    
    /**
     * The total number of attacks.
     */
    #numAttacks;
    
    /**
     * Contains the instructions on the controls.
     */
    #instructionsTest;
    
    /**
     * The HUD text showing the current attack number out of the total number of attacks.
     */
    #currentAttackText;
    
    /**
     * The HUD text showing the LOVE that the user is "at" for the current game mode.
     */
    #loveText;
    
    /**
     * The HUD text showing the current HP out of the max HP.
     */
    #hpText;
    
    /**
     * The graphics used to display the HP bar.
     */
    #hpGraphics;
    
    /**
     * The elapsed time (ms) that has passed since the start of the level.
     */
    #elapsedTime;
    
    /**
     * The HUD text showing the elapsed time since the start of the level.
     */
    #timeText;
    
    /**
     * The player.
     */
    #player;
    
    /**
     * Initializes a Hud instance.
     * @param numAttacks The total number of attacks in the level
     * @param love The LOVE value of the player
     * @param player The player
     */
    constructor(numAttacks, love, player) {
        super();
        
        this.#currentAttackNumber = 0;
        this.#numAttacks = numAttacks;
        
        // noinspection JSCheckFunctionSignatures
        this.#instructionsTest = new PIXI.extras.BitmapText(
            "Press Z/Enter to confirm, X/Shift to Skip,\nand arrow keys/WASD/IJKL to move",
            {font: "10px Undertale", align: "center"}
        );
        this.#instructionsTest.position.x = 0.5 * Main.runner.gameWidth - 0.5 * this.#instructionsTest.width;
        this.#instructionsTest.position.y = 392;
        
        // noinspection JSCheckFunctionSignatures
        this.#currentAttackText = new PIXI.extras.BitmapText("", {font: "15px Numbers", align: "right"});
        this.incrementAttackNumber();
        this.#currentAttackText.position.x = 20;
        this.#currentAttackText.position.y = 450;
        
        // noinspection JSCheckFunctionSignatures
        this.#loveText = new PIXI.extras.BitmapText("LV " + love, {font: "15px Numbers", align: "left"});
        this.#loveText.position.x = 170;
        this.#loveText.position.y = 450;
        
        this.#player = player;
        
        // noinspection JSCheckFunctionSignatures
        this.#hpText = new PIXI.extras.BitmapText("", {font: "15px Numbers", align: "right"});
        this.#hpText.position.x = 300;
        this.#hpText.position.y = 450;
        this.#updateHp();
        
        this.#elapsedTime = 0;
        
        // noinspection JSCheckFunctionSignatures
        this.#timeText = new PIXI.extras.BitmapText("", {font: "15px Numbers", align: "right"});
        this.#updateTime(0);
        this.#timeText.anchor = new PIXI.Point(1, 0);
        this.#timeText.position.x = 458;
        this.#timeText.position.y = 450;
        
        this.#hpGraphics = new PIXI.Graphics();
        
        Main.runner.gameplayStage.addChild(this.#instructionsTest);
        Main.runner.gameplayStage.addChild(this.#currentAttackText);
        Main.runner.gameplayStage.addChild(this.#loveText);
        Main.runner.gameplayStage.addChild(this.#hpText);
        Main.runner.gameplayStage.addChild(this.#timeText);
        Main.runner.gameplayStage.addChild(this.#hpGraphics);
    }
    
    /**
     * Returns the given numerator and denominator in the form of a fraction with both 0 padded to 2 digits.
     * @param numerator The numerator of the fraction
     * @param denominator The denominator of the fraction
     * @return The given numerator and denominator in the form of a fraction with both 0 padded to 2 digits
     */
    static #formatTwoDigitFraction(numerator, denominator) {
        return String(numerator).padStart(2, "0") + " / " + String(denominator).padStart(2, "0");
    }
    
    /**
     * Increments the current attack number and updates the current attack HUD text.
     */
    incrementAttackNumber() {
        this.#currentAttackNumber = Math.min(this.#currentAttackNumber + 1, this.#numAttacks);
        this.#currentAttackText.text = Hud.#formatTwoDigitFraction(this.#currentAttackNumber, this.#numAttacks);
    }
    
    /**
     * Updates the HP HUD text based on the current HP.
     */
    #updateHp() {
        this.#hpText.text = Hud.#formatTwoDigitFraction(this.#player.hp, Player.maxHp);
    }
    
    /**
     * Updates the time HUD text with the current elapsed time.
     * @param deltaMs The time that has passed since the last update of the HUD
     */
    #updateTime(deltaMs) {
        this.#elapsedTime = Math.min(this.#elapsedTime + deltaMs, Hud.#maxTime);
        this.#timeText.text = MathUtility.formatTime(this.#elapsedTime, "hours");
    }
    
    /**
     * The mode of the HUD when no level or an invalid level is provided, which is everything hidden except for a
     * shifted-up instructions text.
     */
    badLevelMode() {
        this.#instructionsTest.position.y = 300;
        this.#currentAttackText.visible = false;
        this.#loveText.visible = false;
        this.#hpText.visible = false;
        this.#hpGraphics.visible = false;
        this.#timeText.visible = false;
    }
    
    /**
     * Resets the fields to match the start of a new level.
     */
    reset() {
        this.#instructionsTest.visible = false;
        this.#currentAttackNumber = 0;
        this.incrementAttackNumber();
        this.#updateHp();
        this.#elapsedTime = 0;
        this.#updateTime(0);
    }
    
    /**
     * Updates the HUD.
     * @param deltaMs The time that has passed since the last update of the HUD
     */
    update(deltaMs) {
        this.#updateHp();
        this.#updateTime(deltaMs);
    }
    
    /**
     * Renders the HUD HP bar.
     */
    render() {
        const red = 0xff0000;
        const yellow = 0xffff00;
        
        this.#hpGraphics.clear();
        this.#hpGraphics.beginFill(red, 1);
        this.#hpGraphics.lineStyle(0, 0xFFFFFF, 1);
        this.#hpGraphics.drawRect(262, 447, 28, 21);
        this.#hpGraphics.beginFill(yellow, 1);
        this.#hpGraphics.drawRect(262, 447, this.#player.hp * 28 / Player.maxHp, 21);
        this.#hpGraphics.endFill();
    }
    
    /**
     * Returns the current attack number.
     * @return The current attack number
     */
    get currentAttackNumber() {
        return this.#currentAttackNumber;
    }
}

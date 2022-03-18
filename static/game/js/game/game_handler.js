/**
 * Handles the running of the game overall.
 */
class GameHandler extends GraphicsObject {
    
    /**
     * The current state of the game. This can be "intro" when waiting for the user to start the game, "playing" when
     * playing the game, "game over" when the user has lost, and "win" if the user has won the game.
     */
    #state;
    
    /**
     * The difficulty of the game, which can be "easy", "medium", or "hard".
     */
    #difficulty;
    
    /**
     * Runs attacks.
     */
    #attackRunner;
    
    /**
     * The box surrounding the heart and shield.
     */
    #box;
    
    /**
     * Represents the player, including the heart and shield.
     */
    #player;
    
    /**
     * The HUD of information displayed to the user, which consists of the current attack, the LOVE, the HP, and the
     * time.
     */
    #hud;
    
    /**
     * Undyne.
     */
    #undyne;
    
    /**
     * The shift in the screen in the x direction that occurs when getting damaged.
     */
    #damageShiftX;
    
    /**
     * The shift in the screen in the y direction that occurs when getting damaged.
     */
    #damageShiftY;
    
    /**
     * Initializes a GameHandler instance.
     * @param difficulty The difficulty of the game
     */
    constructor(difficulty) {
        super();
        
        this.#state = "playing";
        
        let love = 0;
        switch(difficulty) {
            case "easy":
                love = 1;
                break;
            case "medium":
                love = 5;
                break;
            case "hard":
                love = 10;
                break;
        }
        
        this.#difficulty = difficulty;
        
        this.#damageShiftX = 0;
        this.#damageShiftY = 0;
        
        this.#undyne = new Undyne();
        this.#box = new Box();
        this.#player = new Player(difficulty);
        this.#hud = new Hud(TestAttacks.testAttacks.length, love, this.#player);
        this.#attackRunner = new AttackRunner(this.#player, this.#hud, TestAttacks.testAttacks);
        
        this.#box.setDestinationBounds(
            0.5 * Main.runner.gameWidth - Player.shieldDistance,
            0.5 * Main.runner.gameWidth + Player.shieldDistance,
            0.5 * Main.runner.gameHeight - Player.shieldDistance,
            0.5 * Main.runner.gameHeight + Player.shieldDistance
        );
    }
    
    /**
     * Handles keyboard inputs for the game.
     * @param key
     */
    handleKeyInput(key) {
        if(key === "X") {
            this.#undyne.speechBubble.advanceTextX();
        }
        else if(key === "Z") {
            this.#undyne.speechBubble.advanceTextZ();
        }
        
        if(this.#state === "playing") {
            switch(key) {
                case "left":
                    this.#player.shieldDir = 1;
                    break;
                case "right":
                    this.#player.shieldDir = 3;
                    break;
                case "up":
                    this.#player.shieldDir = 2;
                    break;
                case "down":
                    this.#player.shieldDir = 0;
                    break;
            }
        }
    }
    
    /**
     * Returns the background music associated with the current difficulty.
     * @return The background music associated with the current difficulty
     */
    #getBgm() {
        const capitalFirstLetterDifficulty = this.#difficulty.charAt(0).toUpperCase() + this.#difficulty.slice(1);
        return Main.runner.assetManager.getAudio("undyne" + capitalFirstLetterDifficulty + "Bgm");
    }
    
    /**
     * Restarts the current level.
     */
    restartLevel() {
        this.#state = "playing";
        this.#damageShiftX = 0;
        this.#damageShiftY = 0;
        this.#attackRunner.reset();
        this.#player.reset();
        this.#hud.reset();
        this.#box.setDestinationBounds(
            0.5 * Main.runner.gameWidth - Player.shieldDistance,
            0.5 * Main.runner.gameWidth + Player.shieldDistance,
            0.5 * Main.runner.gameHeight - Player.shieldDistance,
            0.5 * Main.runner.gameHeight + Player.shieldDistance
        );
        
        this.#getBgm().play();
        
        this.#undyne.opacity = 0.2;
        
        this.#attackRunner.addNextAttack();
    }
    
    /**
     * Runs when the user loses all of their HP, making the attacks stop and having Undyne say something.
     */
    gameOver() {
        this.#attackRunner.removeAllArrows();
        this.#player.endGameHideSprites();
        this.#undyne.opacity = 1;
        
        this.#state = "game over";
        
        this.#getBgm().stop();
        
        const thisTmp = this;
        this.#undyne.speechBubble.queueText(
            UndyneDialogue.getGameOverText(
                this.#hud.currentAttackNumber, this.#attackRunner.numAttacks, this.#difficulty
            ),
            () => thisTmp.restartLevel()
        );
    }
    
    win() {
        this.#attackRunner.removeAllArrows();
        this.#player.endGameHideSprites();
        this.#undyne.opacity = 1;
        
        this.#state = "win";
        
        this.#getBgm().stop();
        
        const thisTmp = this;
        this.#undyne.speechBubble.queueText(
            UndyneDialogue.getWinText(this.#difficulty), () => thisTmp.restartLevel()
        );
    }
    
    /**
     * Updates the state of the game objects.
     */
    update(deltaMs) {
        this.#box.update(deltaMs);
        this.#player.update(deltaMs);
        this.#undyne.update(deltaMs);
        
        if(this.#state === "playing") {
            this.#hud.update(deltaMs);
            this.#attackRunner.update(deltaMs);
            
            if(this.#player.hp === 0) {
                this.render();
                this.gameOver();
            }
            else if(this.#hud.currentAttackNumber === this.#attackRunner.numAttacks && this.#attackRunner) {
                this.render();
                this.win();
            }
        }
        
        this.render();
    }
    
    /**
     * Renders any objects that use PIXI graphics.
     */
    render() {
        this.#box.render();
        this.#hud.render();
        
        Main.runner.rendererManager.render(Main.runner.gameplayStage);
    }
}

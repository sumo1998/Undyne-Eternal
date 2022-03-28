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
     * The button used to start the game.
     */
    #startButton;
    
    /**
     * The button used to permit the player to repeat the level after a game over or win.
     */
    #playAgainButton;
    
    /**
     * The container on which all the graphics are drawn.
     */
    #gameplayStage;
    
    /**
     * Manages the rendering of the game.
     */
    #rendererManager;
    
    /**
     * Initializes a GameHandler instance.
     * @param difficulty The difficulty of the game
     * @param levelDataJson The level data in JSON format to parse
     * @param gameplayStage The container on which all the graphics are drawn
     * @param rendererManager Manages the rendering of the game
     */
    constructor(difficulty, levelDataJson, gameplayStage, rendererManager) {
        super();
        
        this.#state = "init";
        
        this.#gameplayStage = gameplayStage;
        this.#rendererManager = rendererManager;
        
        //Play the intro bgm only if the level data JSON is valid
        if(levelDataJson !== "") {
            Main.runner.assetManager.getAudio("introBgm").play();
        }
        
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
        
        //Parse the attacks if the level data JSON is valid; else, use an empty array as default
        const attacks = levelDataJson === "" ? [] : AttackParser.parse(levelDataJson);
        
        this.#undyne = new Undyne(difficulty, gameplayStage);
        this.#box = new Box(gameplayStage);
        this.#player = new Player(difficulty, gameplayStage);
        this.#undyne.player = this.#player;
        this.#undyne.speechBubble.undyne = this.#undyne;
        this.#hud = new Hud(attacks.length, love, this.#player, gameplayStage);
        this.#attackRunner = new AttackRunner(this.#player, this.#hud, attacks, gameplayStage);
        
        const buttonYShift = 50;
        
        const startButtonWidth = 113;
        this.#startButton = new Button(
            0.5 * (Main.runner.gameWidth - startButtonWidth),
            0.5 * Main.runner.gameHeight + buttonYShift,
            startButtonWidth,
            53,
            "startButton",
            this.restartLevel.bind(this),
            "startButtonHover",
            () => Main.runner.assetManager.getAudio("buttonHoverSfx").play(),
            300,
            gameplayStage
        );
        
        const playAgainButtonWidth = 197;
        this.#playAgainButton = new Button(
            0.5 * (Main.runner.gameWidth - playAgainButtonWidth),
            0.5 * Main.runner.gameHeight + buttonYShift,
            playAgainButtonWidth,
            53,
            "playAgainButton",
            this.restartLevel.bind(this),
            "playAgainButtonHover",
            () => Main.runner.assetManager.getAudio("buttonHoverSfx").play(),
            300,
            gameplayStage
        );
        this.#playAgainButton.visible = false;
        
        this.#box.setDestinationBounds(
            0.5 * Main.runner.gameWidth - Player.shieldDistance,
            0.5 * Main.runner.gameWidth + Player.shieldDistance,
            0.5 * Main.runner.gameHeight - Player.shieldDistance,
            0.5 * Main.runner.gameHeight + Player.shieldDistance
        );
        
        //If the level data JSON is invalid
        if(levelDataJson === "") {
            this.#startButton.visible = false;
            this.#hud.badLevelMode();
            this.#handleEmptyLevelData();
        }
    }
    
    /**
     * Handles the case of invalid level data, queuing an Undyne response depending on whether or not id was
     * provided and redirects to the home feed.
     */
    #handleEmptyLevelData() {
        //Retrieves the URL query parameters
        // noinspection JSCheckFunctionSignatures
        const params = new Proxy(
            new URLSearchParams(window.location.search),
            {
                get: (searchParams, prop) => searchParams.get(prop)
            }
        );
        
        if(params.id) {
            this.#undyne.speechBubble.queueText([
                "...",
                "Do YOU think this is\na VALID level?",
                "Well it isn't.",
                "Get out of here!"
            ], () => {location.href = "/";});
        }
        else {
            this.#undyne.speechBubble.queueText([
                "What the HELL do you\nthink you are doing,\npunk?",
                "You can't get here\nwithout choosing a\nlevel.",
                "Get out of here!"
            ], () => {location.href = "/";});
        }
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
        
        if(this.#state === "playing" && this.#player.heartColor === "green") {
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
     * Restarts the current level.
     */
    restartLevel() {
        Main.runner.assetManager.getAudio("introBgm").stop();
        Main.runner.assetManager.getAudio("buttonSelectSfx").play();
        this.#state = "playing";
        this.#startButton.visible = false;
        this.#playAgainButton.visible = false;
        this.#attackRunner.reset();
        this.#player.reset();
        this.#hud.reset();
        this.#undyne.reset();
        this.#undyne.swingArm();
        this.#box.setDestinationBounds(
            0.5 * Main.runner.gameWidth - Player.shieldDistance,
            0.5 * Main.runner.gameWidth + Player.shieldDistance,
            0.5 * Main.runner.gameHeight - Player.shieldDistance,
            0.5 * Main.runner.gameHeight + Player.shieldDistance
        );
        
        this.#undyne.opacity = 0.2;
        
        this.#attackRunner.addNextAttack();
    }
    
    /**
     * Runs when the game is ended either by the player losing all HP or the player winning, prompting Undyne to speak
     * some dialogue and then the play again button showing
     * @param endState The ending state, which can be "game over" or "win"
     */
    endGame(endState) {
        this.#state = endState;
        
        this.#attackRunner.removeAllArrows();
        this.#player.hideShieldSprites();
        this.#undyne.greenRectangleManager.visible = false;
        this.#undyne.swingArm();
        this.#undyne.opacity = 1;
        
        Undyne.getBgm(this.#difficulty).stop();
        
        let queueText;
        if(endState === "game over") {
            queueText = UndyneDialogue.getGameOverText(
                this.#hud.currentAttackNumber, this.#attackRunner.numAttacks, this.#difficulty
            );
        }
        else if(endState === "win") {
            queueText = UndyneDialogue.getWinText(this.#difficulty);
        }
        
        this.#undyne.speechBubble.queueText(
            queueText,
            () => {this.#playAgainButton.visible = true;}
        );
    }
    
    /**
     * Updates the state of the game objects.
     */
    update(deltaMs) {
        this.#undyne.update(deltaMs);
        this.#player.update(deltaMs);
        this.#box.update(deltaMs);
        this.#startButton.update(deltaMs);
        this.#playAgainButton.update(deltaMs);
        
        if(this.#state === "playing" && this.#undyne.animationState !== "swinging arm") {
            this.#attackRunner.update(deltaMs);
            this.#hud.update(deltaMs);
            
            if(this.#player.hp === 0) {
                this.render();
                this.endGame("game over");
            }
            else if(this.#hud.currentAttackNumber === this.#attackRunner.numAttacks
                && this.#attackRunner.arrowsEmpty()) {
                this.render();
                this.endGame("win");
            }
        }
        
        this.#gameplayStage.position.set(this.#player.damageShift, this.#player.damageShift);
        
        this.render();
    }
    
    /**
     * Renders any objects that use PIXI graphics.
     */
    render() {
        this.#box.render();
        this.#hud.render();
        this.#undyne.render();
        
        this.#rendererManager.render(this.#gameplayStage);
    }
}

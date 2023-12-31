/**
 * Runs attacks.
 */
class AttackRunner extends GraphicsObject {
    /**
     * The arrows currently loaded in the game.
     */
    #arrows;
    
    /**
     * The queue of current attack time durations.
     */
    #attackTimeQueue;
    
    /**
     * Provides attacks.
     */
    #attackManager;
    
    /**
     * The player.
     */
    #player;
    
    /**
     * The HUD.
     */
    #hud;
    
    /**
     * The container on which all the graphics are drawn.
     */
    #gameplayStage;
    
    /**
     * Initializes an AttackRunner instance.
     * @param player The player
     * @param hud The HUD
     * @param attacks The attacks to load into the AttackManager
     * @param gameplayStage The container on which all the graphics are drawn
     */
    constructor(player, hud, attacks, gameplayStage) {
        super();
        this.#arrows = [];
        this.#attackTimeQueue = [2000];
        this.#player = player;
        this.#hud = hud;
        this.#attackManager = new AttackManager(attacks);
        this.#gameplayStage = gameplayStage;
    }
    
    /**
     * Adds the arrows from the provided attack.
     * @param nextAttack The attack from which to read the arrows
     */
    #addAttackArrows(nextAttack) {
        //The time offset for each arrow with 0 in the case of being empty
        const offsetTime = this.#attackTimeQueue[0] || 0;
        
        //True if a clockwise shift should be added to each arrow of this attack
        const clockwiseShift = nextAttack.clockwiseShift;
        
        const clockwiseShiftNumber = Math.floor(Math.random() * 4);
        
        const numArrows = nextAttack.arrows.length;
        
        for(let i = 0; i < numArrows; ++i) {
            const arrow = nextAttack.arrows[i];
            
            let direction = arrow.direction;
            if(direction === "?") {
                direction = Math.floor(Math.random() * 4);
            }
            else {
                direction = parseInt(direction);
                
                if(clockwiseShift) {
                    direction = (direction + clockwiseShiftNumber) % 4;
                }
            }
            
            const arrowTime = arrow.targetTime + offsetTime;
            
            this.#arrows.push(new Arrow(
                direction,
                arrow.reversed,
                arrowTime,
                arrow.speed,
                i === numArrows - 1,
                this.#gameplayStage
            ));
        }
    }
    
    /**
     * Adds the next attack to the game.
     */
    addNextAttack() {
        if(this.#attackTimeQueue.length >= 2) {
            const remainingAttackTime = this.#attackTimeQueue[0];
            this.#attackTimeQueue.shift();
            
            this.#attackTimeQueue[0] += remainingAttackTime;
        }
        
        const nextAttack = this.#attackManager.getNextAttack();
        if(nextAttack == null) {
            return;
        }
        
        this.#addAttackArrows(nextAttack);
        
        this.#attackTimeQueue.push(nextAttack.nextTime);
    }
    
    /**
     * Removes all the arrows from the stage.
     */
    removeAllArrows() {
        for(let i = 0; i < this.#arrows.length; ++i) {
            this.#gameplayStage.removeChild(this.#arrows[i].sprite);
        }
        
        this.#arrows = [];
    }
    
    /**
     * Returns true if there are no arrows currently loaded in the game.
     * @return True if there are no arrows currently loaded in the game
     */
    arrowsEmpty() {
        return this.#arrows.length === 0;
    }
    
    /**
     * Resets the fields to match the start of a new level.
     */
    reset() {
        this.#attackTimeQueue = [2000];
        this.#attackManager.reset();
    }
    
    /**
     * Returns true if the arrow is on the same side as the shield.
     * @param arrow The arrow
     * @return True if the arrow is on the same side as the shield
     */
    #arrowShieldSameSide(arrow) {
        const arrowPointingDirection = (arrow.direction + (arrow.reversed ? 2 : 0)) % 4;
        return this.#player.shieldDir === arrowPointingDirection;
    }
    
    /**
     * Removes an arrow from the screen and array, also updates the attack number if it is the last arrow in an attack.
     * @param arrow The arrow to be removed
     * @param idx The index associated with the current arrow
     */
    #removeArrow(arrow, idx) {
        if(arrow.last) {
            this.#hud.incrementAttackNumber();
        }
        this.#gameplayStage.removeChild(arrow.sprite);
        this.#arrows.splice(idx, 1);
    }
    
    /**
     * Updates the arrows on screen.
     * @param deltaMs The time that has passed since the last update of the arrow
     */
    update(deltaMs) {
        for(let i = this.#arrows.length - 1; i >= 0; --i) {
            const curArrow = this.#arrows[i];
            curArrow.update(deltaMs);
            
            //If the heart is hit
            if((curArrow.targetTime / 1000) * curArrow.speed < -Player.shieldDistance + Player.heartDistance) {
                this.#player.takeDamage();
                this.#removeArrow(curArrow, i);
            }
            //If the player is hit
            else if(curArrow.targetTime <= 0 && this.#arrowShieldSameSide(curArrow)) {
                Main.runner.assetManager.getAudio("arrowBlockedSfx").play();
                this.#player.hitShield();
                this.#removeArrow(curArrow, i);
            }
        }
        
        if(this.#attackTimeQueue.length === 0) {
            return;
        }
        
        this.#attackTimeQueue[0] -= deltaMs;
        if(this.#attackTimeQueue[0] <= 0) {
            this.addNextAttack();
        }
    }
    
    /**
     * Returns the number of attacks in the level.
     * @return The number of attacks in the level
     */
    get numAttacks() {
        return this.#attackManager.numAttacks;
    }
}

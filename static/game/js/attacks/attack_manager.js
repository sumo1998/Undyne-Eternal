/**
 * Manages the attacks for the level being played.
 */
class AttackManager {
    
    /**
     * The index that stores the index of the current attack being played.
     */
    #currentAttackIdx;
    
    /**
     * The array that stores the collection of attacks for the current level.
     */
    #attacks;
    
    /**
     * Creates an AttackManager instance that manages the attacks array you provide.
     * @param attacks The attacks to manage
     */
    constructor(attacks) {
        this.#currentAttackIdx = 0;
        this.#attacks = attacks;
    }
    
    /**
     * Returns the next attack to be played.
     * @returns The next attack to be played
     */
    getNextAttack() {
        if(this.#currentAttackIdx < this.#attacks.length) {
            return this.#attacks[++this.#currentAttackIdx];
        }
        return null;
    }
}

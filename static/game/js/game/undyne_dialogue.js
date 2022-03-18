/**
 * Controls Undyne's dialogue.
 */
class UndyneDialogue {
    
    /**
     * Returns the text in the event of a game over.
     * @param currentAttackNumber The attack number on which the player died.
     * @param numAttacks The total number of attacks in the level
     * @param difficulty The difficulty of the level
     * @return An array of strings representing Undyne's dialogue
     */
    static getGameOverText(currentAttackNumber, numAttacks, difficulty) {
        const proportionComplete = currentAttackNumber / numAttacks;
        
        switch(difficulty) {
            case "easy":
                /*
                 * numAttacks must be greater than or equal to 2 or this dialogue would play when dying on the first
                 * attack if there are 2 attacks
                 */
                if(proportionComplete >= 0.75 && numAttacks >= 2) {
                    return [
                        "You're doing pretty\nwell, though I am\ngoing easy on you.",
                        "Let's see if you can\nkeep it up and\nfinish."
                    ];
                }
                /*
                 * numAttacks must be greater than or equal to 2 or this dialogue would play when dying on the first
                 * attack if there are 2 attacks
                 */
                else if(proportionComplete >= 0.5 && numAttacks >= 2) {
                    return [
                        "Good, but still\nnot good enough.",
                        "Keep trying, human!\nReach for the top!"
                    ];
                }
                /*
                 * The condition for numAttacks less than or equal to 3 is due to the case where there are too few
                 * attacks to reprimand the player in the next branch
                 */
                else if(currentAttackNumber !== 1 || numAttacks <= 3) {
                    return [
                        "Is that the best you've got?",
                        "Pathetic. I know you\ncan do better!"
                    ];
                }
                else {
                    return [
                        "Ngggaaahhh!!",
                        "What do you think\nYOU are doing?",
                        "I gave you\na shield for one\npurpose and one\npurpose only.",
                        "To DEFEND YOURSELF.",
                        "Can't get more\nstraightforward\nthan that."
                    ];
                }
            case "medium":
                /*
                 * numAttacks must be greater than or equal to 2 or this dialogue would play when dying on the first
                 * attack if there are 2 attacks
                 */
                if(proportionComplete >= 0.75 && numAttacks >= 2) {
                    return [
                        "You're doing well.",
                        "Don't give up now!!!"
                    ];
                }
                /*
                 * numAttacks must be greater than or equal to 2 or this dialogue would play when dying on the first
                 * attack if there are 2 attacks
                 */
                else if(proportionComplete >= 0.5 && numAttacks >= 2) {
                    return [
                        "Good, but still\nnot good enough.",
                        "Keep trying, human!\nReach for the top!"
                    ];
                }
                /*
                 * The condition for numAttacks less than or equal to 3 is due to the case where there are too few
                 * attacks to reprimand the player in the next branch
                 */
                else if(currentAttackNumber !== 1 || numAttacks <= 3) {
                    return [
                        "Is that the best you've got?",
                        "Pathetic. I know you\ncan do better!"
                    ];
                }
                else {
                    return [
                        "Look. I gave you a\nspear to block the\nbullets with.",
                        "Do I have to explain\nthis any more\nclearly?"
                    ];
                }
            case "hard":
                /*
                 * numAttacks must be greater than or equal to 2 or this dialogue would play when dying on the first
                 * attack if there are 2 attacks
                 */
                if(proportionComplete >= 0.75 && numAttacks >= 2) {
                    return [
                        "You were stronger\nthan I thought.",
                        "Anyone else would\nbe DEAD by now!",
                        "But...",
                        "You're going to have\nto try a little\nharder than THAT."
                    ];
                }
                /*
                 * numAttacks must be greater than or equal to 2 or this dialogue would play when dying on the first
                 * attack if there are 2 attacks
                 */
                else if(proportionComplete >= 0.5 && numAttacks >= 2) {
                    return [
                        "You're strong...",
                        "But not strong\nenough!",
                        "You're going to have\nto try a little\nharder than THAT."
                    ];
                }
                /*
                 * The condition for numAttacks less than or equal to 3 is due to the case where there are too few
                 * attacks to reprimand the player in the next branch
                 */
                else if(currentAttackNumber !== 1 || numAttacks <= 3) {
                    return [
                        "You're going to have\nto try a little\nharder than THAT."
                    ];
                }
                else {
                    return [
                        "Strap in, punk.",
                        "This isn't going to\nbe easy."
                    ];
                }
            default:
                return [
                    "????????????????",
                    "How the HELL did\nyou get this\ndialogue?",
                    "You BETTER contact\nthe developer at\nchawl025@umn.edu and\nexplain yourself!"
                ];
        }
    }
    
    /**
     * Returns the text in the event of a win.
     * @param difficulty The difficulty of the level
     * @return An array of strings representing Undyne's dialogue
     */
    static getWinText(difficulty) {
        switch(difficulty) {
            case "easy":
                return [
                    "Not bad! You managed\nto win.",
                    "Let's fight again!",
                    "Think you can take\non a harder\nchallenge?"
                ];
            case "medium":
                return [
                    "Heh... You're tough.",
                    "What the hell are\nhumans made out of!?"
                ];
            case "hard":
                return [
                    "Ha... ha...",
                    "FUHUHUHUHU!!!",
                    "OH MY GOD!!!",
                    "Now THAT was what\nI call a good fight!!!",
                    "Well done, human!"
                ];
            default:
                return [
                    "????????????????",
                    "How the HELL did\nyou get this\ndialogue?",
                    "You BETTER contact\nthe developer at\nchawl025@umn.edu and\nexplain yourself!"
                ];
        }
    }
}

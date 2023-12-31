/**
 * Parses the level data JSON.
 */
class AttackParser {
    
    /**
     * Returns the array of attacks from the parsed level data JSON.
     * @param levelDataJson The level data JSON
     * @return The array of attacks from the parsed level data JSON
     */
    static parse(levelDataJson) {
        for(let i = 0; i < levelDataJson["attacks"].length; ++i) {
            const curAttack = levelDataJson["attacks"][i];
            
            const arrows = curAttack["arrows"];
            
            //Change "attackDelay" to "nextTime"
            curAttack["nextTime"] = parseInt(curAttack["attackDelay"]);
            delete curAttack["attackDelay"];
            
            for(let j = 0; j < arrows.length; ++j) {
                const curArrow = arrows[j];
                
                curArrow["delay"] = parseInt(curArrow["delay"]);
                
                //Sequentially add the delays to make the target times and remove the delays
                if(j !== 0) {
                    curArrow["delay"] += arrows[j - 1]["targetTime"];
                }
                curArrow["targetTime"] = curArrow["delay"];
                delete curArrow["delay"];
                
                //Set the direction to a number 
                switch(curArrow["direction"]) {
                    case "D":
                        curArrow["direction"] = "0";
                        break;
                    case "L":
                        curArrow["direction"] = "1";
                        break;
                    case "U":
                        curArrow["direction"] = "2";
                        break;
                    case "R":
                        curArrow["direction"] = "3";
                        break;
                }
            }
            
            curAttack["nextTime"] += arrows[arrows.length - 1]["targetTime"];
        }
        
        return levelDataJson["attacks"];
    }
}

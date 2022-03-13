var nextAttack = null;

var attackQueueTime = 0;
var attackQueue = [];

function switchAttackMode() {
    
    var borrowedTime = attackQueue[0].time;
    attackQueue.shift();
    
    var currentAttack = attackQueue[0];
    currentAttack.time += borrowedTime;
    
    undyne.opacityG.alpha = 0.8;
    box.destLeft = 320 - shieldDistance;
    box.destRight = 320 + shieldDistance;
    box.destTop = 240 - shieldDistance;
    box.destBottom = 240 + shieldDistance;
    // get rid of all arrows
    for(var a = 0; a < arrows.length; ++a) {
        arrows[a].sprite.visible = true;
    }
    heart.setColour("green");
    
    addNextAttack();
    
}

function addNextAttack(attack) {
    
    var newAttack;
    
    if(attack) {
        attackQueueTime += attack.time;
        newAttack = attack;
    }
    else {
        attackQueueTime += nextAttack.nextTime;
        var newAttack = attacks[nextAttack.nextSets[Math.floor(nextAttack.nextSets.length * Math.random())]];
    }
    
    switch(newAttack.type) {
        case "arrow":
            // add arrows two attacks in advance.
            addArrowGroup(newAttack);
            break;
        default:
            // for other types, a mode switch is required instead.
            break;
    }
    
    nextAttack = newAttack;
    
    var attackInfo = {type: nextAttack.type, time: nextAttack.nextTime};
    
    if(newAttack.bufferTime) {
        attackInfo.bufferTime = newAttack.bufferTime;
    }
    
    attackQueue.push(attackInfo);
    
}

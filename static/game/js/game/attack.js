var nextAttack = null;

var currentAttackNumber = 1;

var attackQueueTime = 0;
var attackQueue = [];

function switchAttackMode() {
    if(attackQueue.length === 0) {
        return;
    }
    
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
    else if(currentAttackIdx < attacks.length) {
        attackQueueTime += nextAttack.nextTime;
        newAttack = attacks[++currentAttackIdx];
    }
    else {
        console.log("Finished");
        return;
    }
    
    addArrowGroup(newAttack, currentAttackIdx);
    
    nextAttack = newAttack;
    
    var attackInfo = {time: nextAttack.nextTime};
    
    if(newAttack.bufferTime) {
        attackInfo.bufferTime = newAttack.bufferTime;
    }
    
    attackQueue.push(attackInfo);
}

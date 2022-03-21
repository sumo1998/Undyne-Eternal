var nextAttack = null;

var attackQueueTime = 0;
var attackQueue = [];

var spearInterval = 400;
var spearTime = 0;

var pikeInterval = 400;
var pikeTime = 0;

var circleInterval = 1200;
var circleCount = 7;
var circleTime = 0;

var swarmInterval = 400;
var swarmTime = 0;
var swarmInitialAngle = 0;

function switchAttackMode() {
    
    var borrowedTime = attackQueue[0].time;
    attackQueue.shift();
    
    var currentAttack = attackQueue[0];
    currentAttack.time += borrowedTime;
    
    switch(currentAttack.type) {
        case "arrow":
            undyne.opacityG.alpha = 0.8;
            box.destLeft = 320 - shieldDistance;
            box.destRight = 320 + shieldDistance;
            box.destTop = 240 - shieldDistance;
            box.destBottom = 240 + shieldDistance;
            // get rid of all spears and pikes
            for(var a = 0; a < spears.length; ++a) {
                spears[a].removed = true;
            }
            for(var a = 0; a < pikes.length; ++a) {
                pikes[a].removed = true;
            }
            for(var a = 0; a < circleSpears.length; ++a) {
                circleSpears[a].removed = true;
            }
            for(var a = 0; a < swarmSpears.length; ++a) {
                swarmSpears[a].removed = true;
            }
            for(var a = 0; a < arrows.length; ++a) {
                arrows[a].sprite.visible = true;
            }
            heart.setColour("green");
            break;
        case "spear":
            spearInterval = currentAttack.interval;
            undyne.opacityG.alpha = 0.5;
            box.destLeft = 240;
            box.destRight = 400;
            box.destTop = 200;
            box.destBottom = 360;
            spearTime = spearInterval + borrowedTime;
            for(var a = 0; a < arrows.length; ++a) {
                arrows[a].sprite.visible = false;
            }
            heart.setColour("red");
            break;
        case "pike":
            pikeInterval = currentAttack.interval;
            undyne.opacityG.alpha = 0.5;
            box.destLeft = 288;
            box.destRight = 352;
            box.destTop = 280;
            box.destBottom = 360;
            pikeTime = pikeInterval + borrowedTime;
            for(var a = 0; a < arrows.length; ++a) {
                arrows[a].sprite.visible = false;
            }
            heart.setColour("red");
            break;
        case "circlespear":
            circleInterval = currentAttack.interval;
            circleCount = currentAttack.count;
            undyne.opacityG.alpha = 0.5;
            box.destLeft = 40;
            box.destRight = 600;
            box.destTop = 160;
            box.destBottom = 400;
            circleTime = circleInterval + borrowedTime;
            for(var a = 0; a < arrows.length; ++a) {
                arrows[a].sprite.visible = false;
            }
            heart.setColour("red");
            break;
        case "swarmspear":
            swarmInterval = currentAttack.interval;
            undyne.opacityG.alpha = 0.5;
            box.destLeft = 40;
            box.destRight = 600;
            box.destTop = 160;
            box.destBottom = 400;
            swarmTime = swarmInterval + borrowedTime;
            for(var a = 0; a < arrows.length; ++a) {
                arrows[a].sprite.visible = false;
            }
            heart.setColour("red");
            break;
    }
    
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
    
    if(newAttack.type == "spear") {
        attackInfo.interval = newAttack.spearInterval;
    }
    if(newAttack.type == "pike") {
        attackInfo.interval = newAttack.pikeInterval;
        attackInfo.down = newAttack.down;
    }
    if(newAttack.type == "circlespear") {
        attackInfo.interval = newAttack.spearInterval;
        attackInfo.count = newAttack.spearCount;
    }
    if(newAttack.type == "swarmspear") {
        attackInfo.interval = newAttack.spearInterval;
    }
    if(newAttack.bufferTime) {
        attackInfo.bufferTime = newAttack.bufferTime;
    }
    
    attackQueue.push(attackInfo);
    
}

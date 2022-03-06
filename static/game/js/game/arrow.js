var arrowTexture;

const turntypeRotation = [0, 1, 2, 2, 3];
const turntypeTints = [0x2fd0ff, 0x7aff2c, 0xffdf23, 0xffdf23, 0xff8c48];

function Arrow(props) {
    
    this.direction = props.direction || 0;
    // 0 = up, 1 = right, 2 = down, 3 = left
    
    this.turntype = props.turntype || 0;
    // 0 = straight, 1 = turn right, 2 = u-turn right, 3 = u-turn left, 4 = turn left
    if(this.turntype == -1) {
        var randDir = Math.random() * 4;
        this.turntype = Math.floor(randDir < 2.5 ? randDir : randDir + 1);
    }
    if(this.turntype == -2) {
        var randDir = Math.random() * 3;
        this.turntype = Math.floor(randDir < 2 ? randDir : 4);
    }
    // -1 = random, -2 = random non-half
    
    this.targetTime = props.targetTime || 0;
    // time when the shield destroys it.
    
    this.speed = props.speed || 0;
    // speed in px/s at which the arrows head toward the heart.
    
    this.colour = props.colour || "blue";
    // colour of the arrow
    /*
     Arrow colours
     blue: normal. Worth 1 block point.
     yellow: turns. Worth 2 block points.
     */
    
    // setup sprites
    this.sprite = new PIXI.Sprite(arrowTexture);
    this.sprite.anchor.x = 0.9;
    this.sprite.anchor.y = 0.5;
    
    this.sprite.position.x = -200;
    this.sprite.position.y = -200;
    
    this.sprite.rotation = Math.PI / 2 * (this.direction + turntypeRotation[this.turntype] + 2);
    this.sprite.tint = turntypeTints[this.turntype];
    
    if(attackQueue[0].type != "arrow" && attackQueue[0].type != "null") {
        this.sprite.visible = false;
    }
    
    gameplayStage.addChild(this.sprite);
    
}

Arrow.prototype.update = function(deltaMs) {
    
    this.targetTime -= deltaMs;
    
    if(this.targetTime * this.speed < -shieldDistance + 8) {
        // arrow hit the heart
        heart.takeDamage(1);
        this.removed = true;
    }
    else if(this.targetTime <= 0) {
        // arrow hit the shield
        if(this.direction % 4 == (heart.shieldDir + 4 - turntypeRotation[this.turntype]) % 4) {
            seArrowDing.play();
            this.removed = true;
        }
    }
    
    this.updatePosition();
    
};

Arrow.prototype.updatePosition = function() {
    
    var deltaX = 0;
    var deltaY = 0;
    
    var distance = this.targetTime * this.speed + shieldDistance;
    var rotation = 0;
    
    if(this.turntype == 0) {
        // do nothing, rotation is 0
    }
    else if(this.turntype == 1) {
        rotation = interpolateClamp(distance, 160, 80, 0, Math.PI / 2);
    }
    else if(this.turntype == 2) {
        rotation = interpolateClamp(distance, 160, 80, 0, Math.PI);
    }
    else if(this.turntype == 3) {
        rotation = interpolateClamp(distance, 160, 80, 0, -Math.PI);
    }
    else if(this.turntype == 4) {
        rotation = interpolateClamp(distance, 160, 80, 0, -Math.PI / 2);
    }
    
    switch(this.direction) {
        case 4:
            deltaX += distance * Math.cos(rotation);
            deltaY += distance * Math.sin(rotation);
            break;
        case 1:
            deltaY += distance * Math.cos(rotation);
            deltaX -= distance * Math.sin(rotation);
            break;
        case 2:
            deltaX -= distance * Math.cos(rotation);
            deltaY -= distance * Math.sin(rotation);
            break;
        case 3:
            deltaY -= distance * Math.cos(rotation);
            deltaX += distance * Math.sin(rotation);
            break;
    }
    
    // update position
    this.sprite.position.x = (320 + deltaX);
    this.sprite.position.y = (240 + deltaY);
    
};

var arrows = [];

function addArrowGroup(arrowGroup) {
    
    // loads the _next_ arrow group when the current one comes into play.
    
    var offsetTime = attackQueue[0].time;
    
    var randDir = Math.floor(Math.random() * 4);
    
    var lastDirection = 0;
    
    for(var a = 0; a < arrowGroup.arrows.length; ++a) {
        
        var ar = arrowGroup.arrows[a];
        var direction = ar.direction;
        
        if(direction == "R") { // random
            direction = 1 + Math.floor(Math.random() * 4);
        }
        else if(direction == "D") { // random that's _not_ the next one
            var non = lastDirection;
            do {
                direction = 1 + Math.floor(Math.random() * 4);
            } while(direction == non);
        }
        else if(direction[0] == "+") { // relative to last one
            var diff = parseInt(direction[1]);
            direction = (lastDirection + 3 + diff) % 4 + 1;
        }
        else if(direction[0] == "-") { // relative to last one
            var diff = 4 - parseInt(direction[1]);
            direction = (lastDirection + 3 + diff) % 4 + 1;
        }
        else if(direction[0] == "$") { // fixed; isn't affected by global random
            direction = parseInt(direction[1]);
        }
        else if(direction[0] == "N") { // random that's _not_ the specified one
            var non = parseInt(direction[1]);
            do {
                direction = 1 + Math.floor(Math.random() * 4);
            } while(direction == non);
        }
        else if(typeof direction === "string") {
            direction = (randDir + 3 + parseInt(direction)) % 4 + 1;
        }
        
        lastDirection = direction;
        
        var time = offsetTime + ar.targetTime;
        
        arrows.push(new Arrow({
            targetTime: time,
            direction: direction,
            turntype: ar.turntype,
            speed: ar.speed
        }));
        
    }
    
}

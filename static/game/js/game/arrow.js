var arrowTexture;

function Arrow(props) {
    this.direction = props.direction || 0;
    // 0 = up, 1 = right, 2 = down, 3 = left
    
    this.reversed = props.reversed || false;
    // true if a reverse arrow
    
    this.targetTime = props.targetTime || 0;
    // time when the shield destroys it.
    
    this.speed = props.speed || 0;
    // speed in px/s at which the arrows head toward the heart.
    
    // set up sprites
    this.sprite = new PIXI.Sprite(arrowTexture);
    this.sprite.anchor.x = 0.9;
    this.sprite.anchor.y = 0.5;
    
    this.sprite.position.x = -200;
    this.sprite.position.y = -200;
    
    this.sprite.rotation = Math.PI * (0.5 * this.direction + this.reversed - 0.5);
    this.sprite.tint = this.reversed ? 0xffdf23 : 0x2fd0ff;
    
    if(attackQueue[0].type !== "arrow" && attackQueue[0].type !== "null") {
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
        if(this.direction === (heart.shieldDir + (this.reversed ? 2 : 0)) % 4) {
            seArrowDing.play();
            heart.shieldHitTimeRemaining = 250;
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
    
    if(this.reversed) {
        rotation = interpolateClamp(distance, 160, 80, 0, Math.PI);
    }
    
    switch(this.direction) {
        case 3:
            deltaX += distance * Math.cos(rotation);
            deltaY += distance * Math.sin(rotation);
            break;
        case 0:
            deltaY += distance * Math.cos(rotation);
            deltaX -= distance * Math.sin(rotation);
            break;
        case 1:
            deltaX -= distance * Math.cos(rotation);
            deltaY -= distance * Math.sin(rotation);
            break;
        case 2:
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
            direction = Math.floor(Math.random() * 4);
        }
        else if(direction == "D") { // random that's _not_ the next one
            var non = lastDirection;
            do {
                direction = Math.floor(Math.random() * 4);
            } while(direction == non);
        }
        else if(direction[0] == "+") { // relative to last one
            var diff = parseInt(direction[1]);
            direction = (lastDirection + 3 + diff) % 4;
        }
        else if(direction[0] == "-") { // relative to last one
            var diff = 4 - parseInt(direction[1]);
            direction = (lastDirection + 3 + diff) % 4;
        }
        else if(direction[0] == "$") { // fixed; isn't affected by global random
            direction = parseInt(direction[1]);
        }
        else if(direction[0] == "N") { // random that's _not_ the specified one
            var non = parseInt(direction[1]);
            do {
                direction = Math.floor(Math.random() * 4);
            } while(direction == non);
        }
        else if(typeof direction === "string") {
            direction = (randDir + 3 + parseInt(direction)) % 4;
        }
        
        lastDirection = direction;
        
        var time = offsetTime + ar.targetTime;
        
        arrows.push(new Arrow({
            targetTime: time,
            direction: direction,
            reversed: ar.reversed,
            speed: ar.speed
        }));
    }
}

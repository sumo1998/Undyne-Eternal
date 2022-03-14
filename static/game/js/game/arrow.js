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
    
    this.callback = props.callback || defaultCallback;
    //the function to call when removed
    
    // set up sprites
    this.sprite = new PIXI.Sprite(arrowTexture);
    this.sprite.anchor.x = 0.9;
    this.sprite.anchor.y = 0.5;
    
    this.sprite.position.x = -200;
    this.sprite.position.y = -200;
    
    this.sprite.rotation = Math.PI * (0.5 * this.direction + this.reversed - 0.5);
    this.sprite.tint = this.reversed ? 0xffdf23 : 0x2fd0ff;
    
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
    
    if(this.removed) {
        this.callback();
    }
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

function defaultCallback() {}

function lastArrowOfAttack() {
    currentAttackNumber = Math.min(currentAttackNumber + 1, attacks.length);
    currentAttackText.text =
        String(currentAttackNumber).padStart(2, "0") + " / " + String(attacks.length).padStart(2, "0");
}

function addArrowGroup(arrowGroup) {
    if(attackQueue.length === 0) {
        return;
    }
    
    // loads the _next_ arrow group when the current one comes into play.
    
    var offsetTime = attackQueue[0].time;
    
    var clockwiseShift = arrowGroup.clockwiseShift;
    
    var clockwiseShiftAmount = Math.floor(Math.random() * 4);
    
    for(var a = 0; a < arrowGroup.arrows.length; ++a) {
        
        var ar = arrowGroup.arrows[a];
        var direction = ar.direction;
        
        if(direction === "?") { // random
            direction = Math.floor(Math.random() * 4);
        }
        else {
            direction = parseInt(direction);
            
            if(clockwiseShift) {
                direction = (direction + clockwiseShiftAmount) % 4;
            }
        }
        
        var time = offsetTime + ar.targetTime;
        
        arrows.push(new Arrow({
            targetTime: time,
            direction: direction,
            reversed: ar.reversed,
            speed: ar.speed,
            callback: a === arrowGroup.arrows.length - 1 ? lastArrowOfAttack : defaultCallback
        }));
    }
}

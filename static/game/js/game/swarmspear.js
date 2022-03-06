var swarmInitialDistance = 120;
var swarmAppearTime = 400;
var swarmTravelTime = 400;
var swarmDisappearTime = 50;

function SwarmSpear(props) {
    
    this.activeTime = 0;
    
    this.shot = false;
    
    this.anchor = props.anchor || {x: 320, y: 320};
    this.initialAngle = props.initialAngle || 0;
    
    this.direction = this.initialAngle;
    
    this.totalTime = swarmAppearTime + swarmTravelTime + swarmDisappearTime;
    
    this.posX = this.anchor.x + swarmInitialDistance * Math.cos(this.initialAngle);
    this.posY = this.anchor.y + swarmInitialDistance * Math.sin(this.initialAngle);
    
    this.sprite = new PIXI.Sprite(spearTexture);
    this.sprite.anchor.set(0.5, 0.5);
    this.sprite.position.set(this.posX, this.posY);
    this.sprite.rotation = this.initialAngle;
    this.sprite.alpha = 0;
    
    gameplayStage.addChild(this.sprite);
    
}

SwarmSpear.prototype.update = function(deltaMs) {
    
    this.activeTime += deltaMs;
    
    var distance;
    
    if(this.activeTime < swarmAppearTime) {
        this.sprite.alpha = this.activeTime / swarmAppearTime;
        distance = swarmInitialDistance;
        this.sprite.rotation =
            this.direction + Math.PI - Math.PI * Math.pow(
                (swarmAppearTime - this.activeTime) / swarmAppearTime,
                2
            );
    }
    else if(this.activeTime < this.totalTime - swarmDisappearTime) {
        this.sprite.alpha = 1;
        distance = swarmInitialDistance - swarmInitialDistance * (this.activeTime - swarmAppearTime)
            / (swarmTravelTime);
        this.sprite.rotation = this.direction + Math.PI;
    }
    else {
        this.sprite.alpha = (this.totalTime - this.activeTime) / swarmDisappearTime;
        distance = swarmInitialDistance - swarmInitialDistance * (this.activeTime - swarmAppearTime)
            / (swarmTravelTime);
        this.sprite.rotation = this.direction + Math.PI;
    }
    
    this.posX = this.anchor.x + distance * Math.cos(this.direction);
    this.posY = this.anchor.y + distance * Math.sin(this.direction);
    
    this.sprite.position.set(this.posX, this.posY);
    
    if(this.collidesWithHeart()) {
        heart.takeDamage(1);
        this.removed = true;
    }
    
    if(this.activeTime > this.totalTime) {
        this.removed = true;
    }
    
};

SwarmSpear.prototype.collidesWithHeart = function() {
    /*
     check for collisions along the shaft of the spear
     */
    var displacement = {x: heart.posX - this.posX, y: heart.posY - this.posY};
    var normalDir = {x: Math.sin(this.direction), y: -Math.cos(this.direction)};
    // get the decomposition along "direction"
    var along = dotProduct(displacement, {x: Math.cos(this.direction), y: Math.sin(this.direction)});
    var dist = dotProduct(displacement, normalDir);
    
    // Normally it should be 46, but let's be more lenient about the rear of the arrows here
    if(along > 0 && along < 23 && Math.abs(dist) < 8) {
        return true;
    }
    
    /*
     then, check for collisions at the tip
     */
    var tipDist = norm(heart.posX - this.posX, heart.posY - this.posY);
    
    if(tipDist < heartSize / 2) {
        return true;
    }
    
    return false;
    
};

var swarmSpears = [];

function addNewSwarmSpear(number, interval, initialAngle) {
    for(var a = 0; a < number; ++a) {
        swarmSpears.push(new SwarmSpear({
            anchor: {x: heart.posX, y: heart.posY},
            initialAngle: initialAngle + (Math.PI * 2) * a / number,
            interval: interval
        }));
    }
    
}

var circleSpearTotalTime = 1650;

function CircleSpear(props) {
    
    this.activeTime = 0;
    
    this.shot = false;
    
    this.anchor = props.anchor || {x: 320, y: 320};
    this.initialAngle = props.initialAngle || 0;
    
    this.direction = this.initialAngle;
    
    this.posX = this.anchor.x + 160 * Math.cos(this.initialAngle);
    this.posY = this.anchor.y + 160 * Math.sin(this.initialAngle);
    
    this.sprite = new PIXI.Sprite(spearTexture);
    this.sprite.anchor.set(1, 0.5);
    this.sprite.position.set(this.posX, this.posY);
    this.sprite.rotation = this.initialAngle;
    this.sprite.alpha = 0;
    
    gameplayStage.addChild(this.sprite);
    
}

CircleSpear.prototype.update = function(deltaMs) {
    
    this.activeTime += deltaMs;
    
    if(this.activeTime < 300) {
        this.sprite.alpha = this.activeTime / 300;
    }
    else if(this.activeTime < circleSpearTotalTime - 150) {
        this.sprite.alpha = 1;
    }
    else {
        this.sprite.alpha = (circleSpearTotalTime - this.activeTime) / 150;
    }
    
    var progress = (circleSpearTotalTime - this.activeTime) / circleSpearTotalTime;
    
    var distance = 160 - 160 * this.activeTime / (circleSpearTotalTime - 150);
    
    this.direction = this.initialAngle + (progress * progress) * Math.PI;
    
    this.posX = this.anchor.x + distance * Math.cos(this.direction);
    this.posY = this.anchor.y + distance * Math.sin(this.direction);
    
    this.sprite.position.set(this.posX, this.posY);
    this.sprite.rotation = this.direction + Math.PI;
    
    if(this.collidesWithHeart()) {
        heart.takeDamage(1);
        this.removed = true;
    }
    
    if(this.activeTime > circleSpearTotalTime) {
        this.removed = true;
    }
    
};

CircleSpear.prototype.collidesWithHeart = function() {
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

var circleSpears = [];

function addNewCircleSpear(number) {
    
    var initialAngle = Math.random() * Math.PI * 2;
    
    for(var a = 0; a < number; ++a) {
        circleSpears.push(new CircleSpear({
            anchor: {x: heart.posX, y: heart.posY},
            initialAngle: initialAngle + (Math.PI * 2) * a / number
        }));
    }
    
}

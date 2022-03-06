var spearTexture;

var deltaRotation = Math.PI * 3;
var spearTotalTime = 4000;

function Spear(props) {
    
    this.activeTime = 0;
    
    this.shot = false;
    
    this.appearTime = props.appearTime || 1000;
    this.initialPosition = props.initialPosition || {x: 320, y: 320};
    this.direction = props.direction || {x: 0, y: -1}; // normalized vector representing
    
    this.posX = this.initialPosition.x;
    this.posY = this.initialPosition.y;
    
    this.destRotation = Math.atan2(this.direction.y, this.direction.x);
    
    this.sprite = new PIXI.Sprite(spearTexture);
    this.sprite.anchor.set(0.5, 0.5);
    this.sprite.position.set(this.posX, this.posY);
    this.sprite.rotation = this.destRotation + deltaRotation;
    this.sprite.alpha = 0;
    
    gameplayStage.addChild(this.sprite);
    
}

Spear.prototype.update = function(deltaMs) {
    
    this.activeTime += deltaMs;
    
    if(this.activeTime < this.appearTime) {
        this.posX = this.initialPosition.x;
        this.posY = this.initialPosition.y;
        this.sprite.rotation = this.destRotation + deltaRotation *
            Math.pow(interpolateClamp(this.activeTime, 0, this.appearTime, 1, 0), 2);
        this.sprite.alpha = this.activeTime / this.appearTime;
    }
    else {
        this.sprite.alpha = 1;
        this.posX += this.direction.x * spearSpeed * deltaMs;
        this.posY += this.direction.y * spearSpeed * deltaMs;
    }
    
    // the sound effect is delayed by about 0.1s, so we do this to line them up.
    if(this.activeTime >= this.appearTime && this.shot == false) {
        this.shot = true;
        seSpearShoot.play();
    }
    
    this.sprite.position.set(this.posX, this.posY);
    
    if(this.collidesWithHeart()) {
        heart.takeDamage(1);
        this.removed = true;
    }
    
    if(this.activeTime > spearTotalTime) {
        this.removed = true;
    }
    
};

Spear.prototype.collidesWithHeart = function() {
    /*
     check for collisions along the shaft of the spear
     */
    var displacement = {x: heart.posX - this.posX, y: heart.posY - this.posY};
    var normalDir = {x: this.direction.y, y: -this.direction.x};
    // get the decomposition along "direction"
    var along = dotProduct(displacement, this.direction);
    var dist = dotProduct(displacement, normalDir);
    
    if(Math.abs(along) < 23 && Math.abs(dist) < 8) {
        return true;
    }
    
    /*
     then, check for collisions at the tip
     */
    var tip = {x: this.posX + this.direction.x * 23, y: this.posY + this.direction.y * 23};
    var tipDist = norm(heart.posX - tip.x, heart.posY - tip.y);
    
    if(tipDist < heartSize / 2) {
        return true;
    }
    
    return false;
    
};

var spears = [];

function addNewSpear() {
    
    seSpearAppear.play();
    
    // center of play grid: 320, 280
    var spawnAngle = Math.random() * Math.PI * 2;
    var position = {x: 320 + 160 * Math.cos(spawnAngle), y: 280 + 160 * Math.sin(spawnAngle)};
    
    var displacement = {x: heart.posX - position.x, y: heart.posY - position.y};
    var distance = norm(displacement.x, displacement.y);
    var direction = scalarMult(displacement, 1 / distance);
    
    spears.push(new Spear({initialPosition: position, direction: direction}));
    
}

function Pike(props) {
    
    this.activeTime = 0;
    
    this.shot = false;
    
    this.appearTime = props.appearTime || 400;
    this.initialPosition = props.initialPosition || 1;
    this.direction = props.direction || "up";
    
    var position = getPikePosition(this.initialPosition, this.direction);
    
    this.posX = position.x;
    this.posY = position.y;
    this.position = position;
    this.fromY = this.direction == "down" ? this.posY - 20 : this.posY + 20;
    this.destY = this.direction == "down" ? this.posY + 60 : this.posY - 60;
    
    this.sprite = new PIXI.Sprite(pikeTexture);
    this.sprite.anchor.set(0.5, 0.5);
    this.sprite.position.set(this.posX, this.posY);
    this.sprite.rotation = this.direction == "down" ? Math.PI : 0;
    this.sprite.alpha = 0;
    
    gameplayStage.addChild(this.sprite);
    
}

function getPikePosition(pos, dir) {
    return {x: 278 + pos * 21, y: (dir == "up" ? 380 : 260)};
}

Pike.prototype.update = function(deltaMs) {
    
    this.activeTime += deltaMs;
    
    if(this.activeTime < this.appearTime) {
        this.posX = this.position.x;
        this.posY = interpolateClamp(this.activeTime, 0, 300, this.fromY, this.position.y);
        this.sprite.alpha = this.activeTime / this.appearTime;
    }
    else {
        this.posY =
            interpolateClamp(this.activeTime, this.appearTime, this.appearTime + 100, this.position.y, this.destY);
        this.sprite.alpha = interpolateClamp(this.activeTime, this.appearTime + 100, this.appearTime + 300, 1, 0);
    }
    this.sprite.position.set(this.posX, this.posY);
    
    // the sound effect is delayed by about 0.1s, so we do this to line them up.
    if(this.activeTime >= this.appearTime && this.shot == false) {
        this.shot = true;
        sePikeShoot.play();
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

Pike.prototype.collidesWithHeart = function() {
    return Math.abs(heart.posX - this.posX) < heartSize / 2 &&
        Math.abs(heart.posY - this.posY) < 40 &&
        this.shot && this.activeTime < this.appearTime + 150;
};

var pikes = [];
var lastUpPike = 0;
var lastDownPike = 0;

function addNewPike() {
    seSpearAppear.play();
    
    var upPike, downPike;
    
    do {
        
        do {
            upPike = Math.floor(Math.random() * 3) + 1;
        } while(upPike == lastUpPike);
        
        do {
            downPike = Math.floor(Math.random() * 3) + 1;
        } while(downPike == lastDownPike);
        
    } while(forcedToMoveTwoLanes(lastUpPike, lastDownPike, upPike, downPike));
    
    // prevent situations where the heart is forced to move from the left column to the right column
    
    lastUpPike = upPike;
    lastDownPike = downPike;
    
    pikes.push(new Pike({appearTime: pikeInterval * 2, initialPosition: lastUpPike, direction: "up"}));
    if(attackQueue[0].down) {
        pikes.push(new Pike({appearTime: pikeInterval * 2, initialPosition: lastDownPike, direction: "down"}));
    }
}

function forcedToMoveTwoLanes(lastUp, lastDown, up, down) {
    
    if(lastUp != lastDown && lastUp != 1 && lastDown != 1 &&
        up != down && up != 3 && down != 3) {
        return true;
    }
    else if(lastUp != lastDown && lastUp != 3 && lastDown != 3 &&
        up != down && up != 1 && down != 1) {
        return true;
    }
    return false;
    
}

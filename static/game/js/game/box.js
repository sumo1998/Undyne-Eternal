function Box() {
    
    this.thickness = 3;
    
    this.left = 16;
    this.right = 624;
    this.top = 240;
    this.bottom = 420;
    
    this.destLeft = 16;
    this.destRight = 624;
    this.destTop = 240;
    this.destBottom = 420;
    
    this.graphics = new PIXI.Graphics();
    gameplayStage.addChild(this.graphics);
}

Box.prototype.update = function(ms) {
    this.adjustBounds(ms);
};

Box.prototype.adjustBounds = function(ms) {
    
    if(this.left < this.destLeft) {
        this.left = Math.min(this.destLeft, this.left + boxAdjustSpeed * ms);
    }
    
    if(this.left > this.destLeft) {
        this.left = Math.max(this.destLeft, this.left - boxAdjustSpeed * ms);
    }
    
    if(this.right < this.destRight) {
        this.right = Math.min(this.destRight, this.right + boxAdjustSpeed * ms);
    }
    
    if(this.right > this.destRight) {
        this.right = Math.max(this.destRight, this.right - boxAdjustSpeed * ms);
    }
    
    if(this.top < this.destTop) {
        this.top = Math.min(this.destTop, this.top + boxAdjustSpeed * ms);
    }
    
    if(this.top > this.destTop) {
        this.top = Math.max(this.destTop, this.top - boxAdjustSpeed * ms);
    }
    
    if(this.bottom < this.destBottom) {
        this.bottom = Math.min(this.destBottom, this.bottom + boxAdjustSpeed * ms);
    }
    
    if(this.bottom > this.destBottom) {
        this.bottom = Math.max(this.destBottom, this.bottom - boxAdjustSpeed * ms);
    }
    
    if(heart.colour == "red") {
        if(heart.posX < this.left + heartSize / 2) {
            heart.setPosition(this.left + heartSize / 2, null);
        }
        
        if(heart.posX > this.right - heartSize / 2) {
            heart.setPosition(this.right - heartSize / 2, null);
        }
        
        if(heart.posY < this.top + heartSize / 2) {
            heart.setPosition(null, this.top + heartSize / 2);
        }
        
        if(heart.posY > this.bottom - heartSize / 2) {
            heart.setPosition(null, this.bottom - heartSize / 2);
        }
    }
    
};

Box.prototype.render = function() {
    
    // draw the rectangle?
    this.graphics.clear();
    this.graphics.beginFill(0x000000);
    this.graphics.lineStyle(this.thickness, 0xFFFFFF);
    this.graphics.drawRect(
        (this.left - (this.thickness / 2)),
        (this.top - (this.thickness / 2)),
        (this.right - this.left + (this.thickness)),
        (this.bottom - this.top + (this.thickness))
    );
    this.graphics.endFill();
    
};

var box;

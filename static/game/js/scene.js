var gameplayStage;

function Scene() {
    this.sceneTime = 0;
}

Scene.prototype.update = function(deltaMs) {
    
    this.sceneTime += deltaMs;
    
    if(this.sceneTime < 150) {
        gameplayStage.alpha = interpolateClamp(this.sceneTime, 0, 100, 0, 1);
    }
    gamestate.update(deltaMs);
};

var scene = new Scene();

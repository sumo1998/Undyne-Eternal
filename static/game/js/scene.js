var gameplay_stage;

function Scene() {
	this.scene_time = 0;
};

Scene.prototype.update = function(delta_ms) {

	this.scene_time += delta_ms;
    
    if (this.scene_time < 150) {
        gameplay_stage.alpha = interp_clamp(this.scene_time, 0, 100, 0, 1);
    }
    gamestate.update(delta_ms);
};


var scene = new Scene();

var time_text;
var love_text;

function GameState() {

	this.state = "playing";
	this.level = 1;

	hp_text = new PIXI.extras.BitmapText("04 / 04", {font: "15px Numbers", align: "right"});
	hp_text.position.x = 300;
	hp_text.position.y = 450;

	time_text = new PIXI.extras.BitmapText("00:00.00", {font: "15px Numbers", align: "left"});
	time_text.position.x = 500;
	time_text.position.y = 450;

	love_text = new PIXI.extras.BitmapText("LV " + this.level, {font: "15px Numbers", align: "left"});
	love_text.position.x = 150;
	love_text.position.y = 450;
    
    this.select_text = new PIXI.extras.BitmapText("", {font: "18px Undertale"});
    this.select_text.position.set(80, 260);
    this.select_text.visible = false;
    
    gameplay_stage.addChild(this.select_text);
}

GameState.prototype.handleInput = function(key) {

	if (undyne.text_state != "none"){
		switch(key) {
			case "A":
				undyne.advanceTextA();
				break;
			case "B":
				undyne.advanceTextB();
				break;
			default:
				break;
		}
	} else if (this.state == "playing") {
		switch(key) {
			case "left":
				heart.setShieldDir(2);
				break;
			case "right":
				heart.setShieldDir(4);
				break;
			case "up":
				heart.setShieldDir(3);
				break;
			case "down":
				heart.setShieldDir(1);
				break;
			default:
				break;
		}
	}

}

GameState.prototype.restartGame = function(difficulty) {
	this.difficulty = difficulty;

	this.elapsed_time = 0;
	this.state = "playing";

	arrows = [];
	spears = [];
	next_attack = null;

	heart.hp = heart.maxhp;
	hp_text.text = String(heart.hp).padStart(2, "0") + " / " + String(heart.maxhp).padStart(2, "0");

	switch (difficulty) {
		case "normal":
			heart.invincibility_increment = 1000; break;
		case "hard":
			heart.invincibility_increment = 500; break;
		case "genocide":
			heart.invincibility_increment = 100; break;
	}

	switch (difficulty) {
		case "normal":
			// have a 2-second buffer before the first attack
			attack_queue_time = 2;
			attack_queue = [ { type: "null", time: 2 } ];
			addNextAttack(ag1);
			break;
		case "hard":
			attack_queue_time = 2;
			attack_queue = [ { type: "null", time: 2 } ];
			addNextAttack(h_ag1);
			break;
		case "genocide":
			// genocide is timed to the music.
			attack_queue_time = 6.4;
			attack_queue = [ { type: "null", time: 6.4 } ];
			addNextAttack(g_ag1);
			break;
	}


	box.dest_left = 320 - SHIELD_DISTANCE;
	box.dest_right = 320 + SHIELD_DISTANCE;
	box.dest_top = 240 - SHIELD_DISTANCE;
	box.dest_bottom = 240 + SHIELD_DISTANCE;
	heart.sprite.visible = true;
	heart.shield_sprite.visible = true;

	switch (difficulty) {
		case "normal":
		case "hard":
			bgm_undyne1.play(); break;
		case "genocide":
			bgm_undyne2.play(); break;
	}
    
	switchAttackMode();
}


GameState.prototype.endGame = function() {

	// remove all arrows and spears

	for (var a = 0; a < arrows.length; ++a)
		gameplay_stage.removeChild(arrows[a].sprite);
	for (var a = 0; a < spears.length; ++a)
		gameplay_stage.removeChild(spears[a].sprite);
	for (var a = 0; a < pikes.length; ++a)
		gameplay_stage.removeChild(pikes[a].sprite);
	for (var a = 0; a < circle_spears.length; ++a)
		gameplay_stage.removeChild(circle_spears[a].sprite);
	for (var a = 0; a < swarm_spears.length; ++a)
		gameplay_stage.removeChild(swarm_spears[a].sprite);

	if (box.top < 240 - SHIELD_DISTANCE) box.top = 240 - SHIELD_DISTANCE;

	heart.shield_sprite.visible = false;
	undyne.opacity_g.alpha = 0;
	this.state = "gameover";

	this.select_text.text = "Play again?"

	switch (this.difficulty) {
		case "normal":
		case "hard":
			bgm_undyne1.stop(); break;
		case "genocide":
			bgm_undyne2.stop();	break;
	}

	undyne.queue_text(endGameText(this.difficulty, this.elapsed_time), () => {
        this.state = "playing";
        gamestate.restartGame(difficulty);
    });

}

var annoyance = 0;
var rumble = { x: 0, y: 0 };

function endGameText(diff, surv_time) {
	switch (diff) {
		case "normal":
			if (surv_time < 6890) {
				++annoyance;
				switch (annoyance) {
					case 1:
						return [
							{ text: "Look, I gave you\na shield for one\npurpose and one\npurpose only."},
							{ text: "To DEFEND YOURSELF."},
							{ text: "Can't get more\nstraightforward\nthan that."},
						];
					default:
						return [
							{ text: "Are you just doing\nthat on purpose?", face: 2 },
							{ text: "Because it's not\nfunny. Stop it." },
						];
				}
			} else if (surv_time < 60000)
				return [
					{ text: "Is that the best\nyou've got?" },
					{ text: "Pathetic. I know you\ncan do better!" },
				];
			else if (surv_time < 120000)
				return [
					{ text: "Good, but still\nnot good enough." },
					{ text: "Keep trying, human!\nReach for the top!" },
				];
			else {
				return [
					{ text: "You're doing well,\nbut only because I'm\ngoing easy on you." },
					{ text: "Try something harder next time!" },
				];
			}
		case "hard":
			if (surv_time < 60000)
				return [
					{ text: "Is that the best\nyou've got?" },
					{ text: "Pathetic. I know you\ncan do better!" },
				];
			else if (surv_time < 120000)
				return [
					{ text: "Good, but still\nnot good enough." },
					{ text: "Keep trying, human!\nReach for the top!" },
				];
			else
				return [
					{ text: "You're doing well." },
					{ text: "But you can still\ndo better! Let me\ngo harder on you!" },
				];
		case "genocide":
			return [
				{ text: "You're going to have\nto try a little\nharder than THAT." },
			];
		default:
			return [
				{ text: "Is that the best\nyou've got?" },
				{ text: "Pathetic. I know you\ncan do better!" },
			];
	}
}


GameState.prototype.update = function(delta_ms) {

	box.update(delta_ms);
	heart.update(delta_ms);
	undyne.update(delta_ms);

	if (this.state == "playing") {
		this.elapsed_time += delta_ms;
		time_text.text = format_time_long(this.elapsed_time);

		// arrows.update(delta_ms)
		for (var a = 0; a < arrows.length; ++a) {
			arrows[a].update(delta_ms / 1000);
			if (arrows[a].removed) {
				gameplay_stage.removeChild(arrows[a].sprite);
				arrows.splice(a, 1);
			}
		}

		// spears.update(delta_ms)
		for (var a = 0; a < spears.length; ++a) {
			spears[a].update(delta_ms);
			if (spears[a].removed) {
				gameplay_stage.removeChild(spears[a].sprite);
				spears.splice(a, 1);
			}
		}

		// pikes.update(delta_ms)
		for (var a = 0; a < pikes.length; ++a) {
			pikes[a].update(delta_ms);
			if (pikes[a].removed) {
				gameplay_stage.removeChild(pikes[a].sprite);
				pikes.splice(a, 1);
			}
		}

		// circle_spears.update(delta_ms)
		for (var a = 0; a < circle_spears.length; ++a) {
			circle_spears[a].update(delta_ms);
			if (circle_spears[a].removed) {
				gameplay_stage.removeChild(circle_spears[a].sprite);
				circle_spears.splice(a, 1);
			}
		}

		// swarm.update(delta_ms)
		for (var a = 0; a < swarm_spears.length; ++a) {
			swarm_spears[a].update(delta_ms);
			if (swarm_spears[a].removed) {
				gameplay_stage.removeChild(swarm_spears[a].sprite);
				swarm_spears.splice(a, 1);
			}
		}

		var current_attack = attack_queue[0];
		current_attack.time -= delta_ms / 1000;
		
		if (current_attack.type == "spear") {
			spear_time -= delta_ms;
			if (spear_time <= 0) {
				spear_time += spear_interval;
				addNewSpear();
			}
		} else if (current_attack.type == "pike") {
			pike_time -= delta_ms;
			if (pike_time <= 0) {
				pike_time += pike_interval;
				addNewPike();
			}
		} else if (current_attack.type == "circlespear") {
			circle_time -= delta_ms;
			if (circle_time <= 0) {
				circle_time += circle_interval;
				addNewCircleSpear(circle_count);
			}
		} else if (current_attack.type == "swarmspear") {
			swarm_time -= delta_ms;
			if (swarm_time <= 0) {
				swarm_time += swarm_interval;
				swarm_initial_angle += Math.random() * 0.8 - 0.5;
				addNewSwarmSpear(6, swarm_interval, swarm_initial_angle);
			}
		}

		if (current_attack.time <= 0.4 + (current_attack.buffer_time || 0) &&
			current_attack.type != attack_queue[1].type)
				undyne.swing_arm();

		if (current_attack.time <= (current_attack.buffer_time || 0))
				switchAttackMode();

	} else if (this.state == "gameover") {
		rumble = { x:0, y:0 };
	} else {

	}

	gameplay_stage.position.set(rumble.x, rumble.y);

}




var gamestate;

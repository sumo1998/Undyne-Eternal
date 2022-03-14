var gameStarted = false;
var updateTime;
var difficulty = "hard";

function initializeGame() {
    gamestate = new GameState();
    undyne = new Undyne();
    box = new Box();
    heart = new Heart();
    
    gameplayStage.addChild(hpText);
    gameplayStage.addChild(timeText);
    gameplayStage.addChild(loveText);
    
    startGame();
}

function startGame() {
    if(gameStarted === false) {
        gameStarted = true;
        
        gameplayStage.alpha = 0;
        gamestate.level = 1;
        gamestate.restartGame(difficulty);
        
        updateTime = new Date().getTime();
        requestAnimationFrame(update);
    }
}

function stopGame() {
    gameStarted = false;
}

// main game loop
function update() {
    
    if(gameStarted === true) {
        requestAnimationFrame(update);
    }
    
    var currentTime = new Date().getTime();
    var deltaMs = clamp(currentTime - updateTime, 0, 100);
    
    updateTime = currentTime;
    
    scene.update(deltaMs);
    
    render();
    
}

window.onload = function() {
    
    setUpRendering();
    startPreload();
    
};

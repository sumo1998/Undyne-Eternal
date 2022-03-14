var renderer;

function setUpRendering() {
    
    const gameWidth = 640, gameHeight = 480;
    renderer = PIXI.autoDetectRenderer(gameWidth, gameHeight,
        {transparent: true, resolution: 2, antialias: true, autoDensity: true}
    );
    
    gameplayStage = new PIXI.Container();
    
    const maxScreenProportion = 0.625;
    
    const rendererMaxWidth = screen.width * maxScreenProportion;
    const rendererMaxHeight = screen.height * maxScreenProportion;
    
    const gameDimensionMultiplayer = Math.min(rendererMaxWidth / gameWidth, rendererMaxHeight / gameHeight);
    
    const rendererWidth = gameDimensionMultiplayer * gameWidth;
    const rendererHeight = gameDimensionMultiplayer * gameHeight;
    
    // add the renderer view element to the DOM
    renderer.view.style.width = Math.round(rendererWidth) + "px";
    renderer.view.style.height = Math.round(rendererHeight) + "px";
    
    renderer.view.setAttribute("id", "game-renderer");
    
    document.body.appendChild(renderer.view);
}

// render the current frame
function render() {
    box.render();
    heart.render();
    renderer.render(gameplayStage);
}

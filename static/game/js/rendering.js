var deviceScale = window.devicePixelRatio;
var renderer;

function setUpRendering() {
    
    var width = 640, height = 480;
    renderer = PIXI.autoDetectRenderer(width, height,
        {transparent: true, resolution: window.devicePixelRatio}
    );
    
    gameplayStage = new PIXI.Container();
    
    // add the renderer view element to the DOM
    renderer.view.style.width = width;
    renderer.view.style.height = height;
    document.body.appendChild(renderer.view);
    
}

var boxThickness = 4;

// render the current frame
function render() {
    box.render();
    heart.render();
    renderer.render(gameplayStage);
}

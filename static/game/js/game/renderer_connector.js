class RenderingHandler {
    #renderer;
    
    constructor() {
        const gameWidth = Main.runner.gameWidth;
        const gameHeight = Main.runner.gameHeight;
        
        this.#renderer = PIXI.autoDetectRenderer(
            gameWidth,
            gameHeight,
            {
                transparent: true,
                resolution: Math.max(window.devicePixelRatio * 2, 2),
                antialias: true,
                autoDensity: true
            }
        );
        
        const maxScreenProportion = 0.625;
        
        const rendererMaxWidth = screen.width * maxScreenProportion;
        const rendererMaxHeight = screen.height * maxScreenProportion;
        
        const gameDimensionMultiplayer = Math.min(rendererMaxWidth / gameWidth, rendererMaxHeight / gameHeight);
        
        const rendererWidth = gameDimensionMultiplayer * gameWidth;
        const rendererHeight = gameDimensionMultiplayer * gameHeight;
        
        // add the renderer view element to the DOM
        this.#renderer.view.style.width = Math.round(rendererWidth) + "px";
        this.#renderer.view.style.height = Math.round(rendererHeight) + "px";
        
        this.#renderer.view.setAttribute("id", "game-renderer");
        
        document.body.appendChild(this.#renderer.view);
    }
}

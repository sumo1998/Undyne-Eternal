/**
 * Connects the renderer to the page.
 */
class RendererConnector {
    
    /**
     * Adds the game renderer to the HTML page.
     */
    static addRenderer() {
        const gameWidth = Main.runner.gameWidth;
        const gameHeight = Main.runner.gameHeight;
        
        const renderer = PIXI.autoDetectRenderer(
            gameWidth,
            gameHeight,
            {
                transparent: true,
                resolution: Math.max(window.devicePixelRatio * 2, 2),
                antialias: true,
                autoDensity: true
            }
        );
        
        //The max proportion between the game width / the screen width and the game height / the screen height
        const maxScreenProportion = 0.625;
        
        const rendererMaxWidth = screen.width * maxScreenProportion;
        const rendererMaxHeight = screen.height * maxScreenProportion;
        
        const gameDimensionMultiplier = Math.min(rendererMaxWidth / gameWidth, rendererMaxHeight / gameHeight);
        
        const rendererWidth = gameDimensionMultiplier * gameWidth;
        const rendererHeight = gameDimensionMultiplier * gameHeight;
        
        //Add the renderer view element to the DOM
        const rendererView = renderer.view;
        rendererView.style.width = Math.round(rendererWidth) + "px";
        rendererView.style.height = Math.round(rendererHeight) + "px";
        
        rendererView.setAttribute("id", "game-renderer");
        
        document.body.appendChild(rendererView);
    }
}

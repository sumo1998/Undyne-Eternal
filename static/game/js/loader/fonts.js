// graphics

var fontLoader = new PIXI.loaders.Loader();

fontLoader
    .add("undertale", "static/game/fonts/undertale.fnt")
    .add("numbers", "static/game/fonts/numbers.fnt")
    .add("speechbubble", "static/game/fonts/speechbubble.fnt")
    .on("complete", function(loader, resources) {
        processFonts(resources);
    })
;

function processFonts(resources) {
    resources["undertale_image"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    resources["numbers_image"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    resources["speechbubble_image"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    
    markAssetLoaded("fonts");
    
}

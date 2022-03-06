loadedAssets = {
    arrowSets: false,
    graphics: false,
    sounds: false,
    fonts: false
};

function startPreload() {
    
    // TODO: load arrow sets independently.
    markAssetLoaded("arrowSets");
    
    fontLoader.load();
    graphicsLoader.load();
    // sounds are handled by Howler.js independently.
    
}

function markAssetLoaded(asset) {
    loadedAssets[asset] = true;
    checkForAllAssetsLoaded();
}

function checkForAllAssetsLoaded() {
    for(var asset in loadedAssets) {
        if(!loadedAssets[asset]) {
            return;
        }
    }
    initializeGame();
}

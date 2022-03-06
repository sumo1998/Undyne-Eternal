// graphics

var graphicsLoader = new PIXI.loaders.Loader();

graphicsLoader

.add("arrow", "static/game/img/arrow.png")
.add("heart", "static/game/img/heart.png")
.add("shield", "static/game/img/shield.png")
.add("spear", "static/game/img/spear.png")
.add("pike", "static/game/img/pike.png")

.add("by", "static/game/img/by.png")
.add("fairdyne", "static/game/img/fairdyne.png")
.add("ground1", "static/game/img/ground1.png")
.add("ground2", "static/game/img/ground2.png")
.add("ground3", "static/game/img/ground3.png")
.add("speechbubble", "static/game/img/speechbubble.png")
.add("un", "static/game/img/un.png")
.add("undyne", "static/game/img/undyne.png")
.add("undyne_breastplate", "static/game/img/undyne_breastplate.png")
.add("undyne_hair1", "static/game/img/undyne_hair1.png")
.add("undyne_hair2", "static/game/img/undyne_hair2.png")
.add("undyne_hair3", "static/game/img/undyne_hair3.png")
.add("undyne_hair4", "static/game/img/undyne_hair4.png")
.add("undyne_head1", "static/game/img/undyne_head1.png")
.add("undyne_head2", "static/game/img/undyne_head2.png")
.add("undyne_head3", "static/game/img/undyne_head_annoyed.png")
.add("undyne_head4", "static/game/img/undyne_head_angry.png")
.add("undyne_intro_hairless", "static/game/img/undyne_intro_hairless.png")
.add("undyne_leftarm", "static/game/img/undyne_leftarm.png")
.add("undyne_legs", "static/game/img/undyne_legs.png")
.add("undyne_rightarm", "static/game/img/undyne_rightarm.png")
.add("undyne_skirt", "static/game/img/undyne_skirt.png")

.on("complete", function(loader, resources) {
    processGraphics(resources);
})

;

function processGraphics(resources) {
    
    arrowTexture = resources["arrow"].texture;
    spearTexture = resources["spear"].texture;
    pikeTexture = resources["pike"].texture;
    
    heartTexture = resources["heart"].texture;
    heartTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    
    shieldTexture = resources["shield"].texture;
    undyneTexture = resources["undyne"].texture;
    
    byTexture = resources["by"].texture;
    byTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    unTexture = resources["un"].texture;
    unTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    fairdyneTexture = resources["fairdyne"].texture;
    fairdyneTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    
    groundTextureArr[0] = resources["ground1"].texture;
    groundTextureArr[1] = resources["ground2"].texture;
    groundTextureArr[2] = resources["ground3"].texture;
    for(var a = 0; a < groundTextureArr.length; ++a) {
        groundTextureArr[a].baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    }
    
    speechBubbleTexture = resources["speechbubble"].texture;
    speechBubbleTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    
    undyneHairTextureArr[0] = resources["undyne_hair1"].texture;
    undyneHairTextureArr[1] = resources["undyne_hair2"].texture;
    undyneHairTextureArr[2] = resources["undyne_hair3"].texture;
    undyneHairTextureArr[3] = resources["undyne_hair4"].texture;
    for(var a = 0; a < undyneHairTextureArr.length; ++a) {
        undyneHairTextureArr[a].baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    }
    
    undyneHeadTextures[0] = resources["undyne_head1"].texture;
    undyneHeadTextures[1] = resources["undyne_head2"].texture;
    undyneHeadTextures[2] = resources["undyne_head3"].texture;
    undyneHeadTextures[3] = resources["undyne_head4"].texture;
    for(var a = 0; a < undyneHeadTextures.length; ++a) {
        undyneHeadTextures[a].baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    }
    
    undyneBreastplateTexture = resources["undyne_breastplate"].texture;
    undyneBreastplateTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    undyneLeftArmTexture = resources["undyne_leftarm"].texture;
    undyneLeftArmTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    undyneLegsTexture = resources["undyne_legs"].texture;
    undyneLegsTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    undyneRightArmTexture = resources["undyne_rightarm"].texture;
    undyneRightArmTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    undyneSkirtTexture = resources["undyne_skirt"].texture;
    undyneSkirtTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    
    undyneIntroHairlessTexture = resources["undyne_intro_hairless"].texture;
    undyneIntroHairlessTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    
    markAssetLoaded("graphics");
    
}

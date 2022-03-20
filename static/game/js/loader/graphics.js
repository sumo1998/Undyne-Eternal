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
.add("undyneBreastplate", "static/game/img/undyne_breastplate.png")
.add("undyneHair1", "static/game/img/undyne_hair1.png")
.add("undyneHair2", "static/game/img/undyne_hair2.png")
.add("undyneHair3", "static/game/img/undyne_hair3.png")
.add("undyneHair4", "static/game/img/undyne_hair4.png")
.add("undyneHead1", "static/game/img/undyne_head1.png")
.add("undyneHead2", "static/game/img/undyne_head2.png")
.add("undyneHead3", "static/game/img/undyne_head_annoyed.png")
.add("undyneHead4", "static/game/img/undyne_head_angry.png")
.add("undyneIntroHairless", "static/game/img/undyne_intro_hairless.png")
.add("undyneLeftArm", "static/game/img/undyne_left_arm.png")
.add("undyneLegs", "static/game/img/undyne_legs.png")
.add("undyneRightArm", "static/game/img/undyne_right_arm.png")
.add("undyneSkirt", "static/game/img/undyne_skirt.png")

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
    
    undyneHairTextureArr[0] = resources["undyneHair1"].texture;
    undyneHairTextureArr[1] = resources["undyneHair2"].texture;
    undyneHairTextureArr[2] = resources["undyneHair3"].texture;
    undyneHairTextureArr[3] = resources["undyneHair4"].texture;
    for(var a = 0; a < undyneHairTextureArr.length; ++a) {
        undyneHairTextureArr[a].baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    }
    
    undyneHeadTextures[0] = resources["undyneHead1"].texture;
    undyneHeadTextures[1] = resources["undyneHead2"].texture;
    undyneHeadTextures[2] = resources["undyneHead3"].texture;
    undyneHeadTextures[3] = resources["undyneHead4"].texture;
    for(var a = 0; a < undyneHeadTextures.length; ++a) {
        undyneHeadTextures[a].baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    }
    
    undyneBreastplateTexture = resources["undyneBreastplate"].texture;
    undyneBreastplateTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    undyneLeftArmTexture = resources["undyneLeftArm"].texture;
    undyneLeftArmTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    undyneLegsTexture = resources["undyneLegs"].texture;
    undyneLegsTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    undyneRightArmTexture = resources["undyneRightArm"].texture;
    undyneRightArmTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    undyneSkirtTexture = resources["undyneSkirt"].texture;
    undyneSkirtTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    
    undyneIntroHairlessTexture = resources["undyneIntroHairless"].texture;
    undyneIntroHairlessTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    
    markAssetLoaded("graphics");
    
}

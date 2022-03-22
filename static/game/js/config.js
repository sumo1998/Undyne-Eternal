const sri = {
    "pixi": "sha512-Rd2qDH7zgdpNHORK5lMbVgqO93W0Fko9s6xn8J54zu5GmWO+jqNsc1Q84zePLYCQMHSokKGAI68EhbhgTCPHLw==",
    "howler": "sha512-6+YN/9o9BWrk6wSfGxQGpt3EUK6XeHi6yeHV+TYD2GR0Sj/cggRpXr1BrAQf0as6XslxomMUxXp2vIl+fv0QRA=="
};

requirejs.config({
    "baseUrl": "/static/game/jsMin",
    "paths": {
        "pixi": "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/3.0.9/pixi.min",
        "howler": "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min",
        
        "mathUtility": "util/math_utility.min",
        
        "assetLoader": "loaders/asset_loader.min",
        "audioManager": "loaders/audio_manager.min",
        "fontLoader": "loaders/font_loader.min",
        "graphicManager": "loaders/graphic_manager.min",
        "assetManager": "loaders/asset_manager.min",
        
        "attackManager": "attacks/attack_manager.min",
        "testAttacks": "attacks/test_attacks.min",
        "attackParser": "attacks/attack_parser.min",
        
        "graphicsObject": "graphics/graphics_object.min",
        "arrow": "graphics/arrow.min",
        "box": "graphics/box.min",
        "speechBubble": "graphics/speech_bubble.min",
        "greenRectangleManager": "graphics/green_rectangle_manager.min",
        "undyne": "graphics/undyne.min",
        "player": "graphics/player.min",
        "hud": "graphics/hud.min",
        "button": "graphics/button.min",
        
        "undyneDialogue": "game/undyne_dialogue.min",
        "rendererManager": "game/renderer_manager.min",
        "keyboardHandler": "game/keyboard_handler.min",
        "attackRunner": "game/attack_runner.min",
        "gameHandler": "game/game_handler.min",
        "main": "main.min"
    },
    "onNodeCreated": (node, config, module, path) => {
        if(sri[module]) {
            node.setAttribute("integrity", sri[module]);
            node.setAttribute("crossorigin", "anonymous");
            node.setAttribute("referrerpolicy", "no-referrer");
        }
    }
});

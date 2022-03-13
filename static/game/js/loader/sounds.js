var soundsLoaded = {
    10: false,
    11: false,
    12: false,
    111: false,
    112: false,
    141: false
};

// sounds that need to load before starting the game

function registerSound(n) {
    return function() {
        soundsLoaded[n] = true;
        for(var i in soundsLoaded) {
            if(soundsLoaded[i] == false) {
                return;
            }
        }
        markAssetLoaded("sounds");
    };
}

// define sound names here. Maybe make a manifest for them later.

var bgmUndyne = new Howl({
    onload: registerSound(10),
    src: ["static/game/audio/bgm/mus_undyne.ogg", "static/game/audio/bgm/mus_undyne.mp3"],
    loop: true,
    volume: 0.7
});

var bgmUndyne1 = new Howl({
    onload: registerSound(11),
    src: ["static/game/audio/bgm/mus_undyneboss.ogg", "static/game/audio/bgm/mus_undyneboss.mp3"],
    loop: true,
    volume: 0.7
});

var bgmUndyne2 = new Howl({
    onload: registerSound(12),
    src: ["static/game/audio/bgm/mus_x_undyne.ogg", "static/game/audio/bgm/mus_x_undyne.mp3"],
    loop: true,
    volume: 0.7
});

var seArrowDing = new Howl({
    onload: registerSound(111),
    src: "static/game/audio/se/000029aa.wav",
    loop: false,
    volume: 0.7
});

var seDamage = new Howl({
    onload: registerSound(112),
    src: "static/game/audio/se/000029c3.wav",
    loop: false,
    volume: 0.7
});

var seUndyne = new Howl({
    onload: registerSound(141),
    src: "static/game/audio/se/000029dc.wav",
    loop: false,
    volume: 0.7
});

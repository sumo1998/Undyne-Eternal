var soundsLoaded = {
    10: false,
    11: false,
    12: false,
    101: false,
    102: false,
    111: false,
    112: false,
    113: false,
    114: false,
    116: false,
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

var seTextAdvance = new Howl({
    onload: registerSound(101),
    src: "static/game/audio/se/000029ec.wav",
    loop: false,
    volume: 0.7
});

var sePressZed = new Howl({
    onload: registerSound(102),
    src: "static/game/audio/se/000029ab.wav",
    loop: false,
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

var seSpearAppear = new Howl({
    onload: registerSound(113),
    src: "static/game/audio/se/0000299b.wav",
    loop: false,
    volume: 0.7
});

var seSpearShoot = new Howl({
    onload: registerSound(114),
    src: "static/game/audio/se/000029a2.wav",
    loop: false,
    volume: 0.7
});

var sePikeShoot = new Howl({
    onload: registerSound(116),
    src: "static/game/audio/se/0000299c.wav",
    loop: false,
    volume: 0.7
});

var seUndyne = new Howl({
    onload: registerSound(141),
    src: "static/game/audio/se/000029dc.wav",
    loop: false,
    volume: 0.7
});

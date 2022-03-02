var sounds_loaded = {
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

function reg_sound(n) {
    return function() {
        sounds_loaded[n] = true;
        for(var i in sounds_loaded) {
            if(sounds_loaded[i] == false) {
                return;
            }
        }
        markAssetLoaded("sounds");
    };
}

// define sound names here. Maybe make a manifest for them later.

var bgm_undyne = new Howl({
    onload: reg_sound(10),
    src: ["static/game/audio/bgm/mus_undyne.ogg", "static/game/audio/bgm/mus_undyne.mp3"],
    loop: true,
    volume: 0.7
});

var bgm_undyne1 = new Howl({
    onload: reg_sound(11),
    src: ["static/game/audio/bgm/mus_undyneboss.ogg", "static/game/audio/bgm/mus_undyneboss.mp3"],
    loop: true,
    volume: 0.7
});

var bgm_undyne2 = new Howl({
    onload: reg_sound(12),
    src: ["static/game/audio/bgm/mus_x_undyne.ogg", "static/game/audio/bgm/mus_x_undyne.mp3"],
    loop: true,
    volume: 0.7
});

var se_text_advance = new Howl({
    onload: reg_sound(101),
    src: "static/game/audio/se/000029ec.wav",
    loop: false,
    volume: 0.7
});

var se_press_zed = new Howl({
    onload: reg_sound(102),
    src: "static/game/audio/se/000029ab.wav",
    loop: false,
    volume: 0.7
});

var se_arrow_ding = new Howl({
    onload: reg_sound(111),
    src: "static/game/audio/se/000029aa.wav",
    loop: false,
    volume: 0.7
});

var se_damage = new Howl({
    onload: reg_sound(112),
    src: "static/game/audio/se/000029c3.wav",
    loop: false,
    volume: 0.7
});

var se_spear_appear = new Howl({
    onload: reg_sound(113),
    src: "static/game/audio/se/0000299b.wav",
    loop: false,
    volume: 0.7
});

var se_spear_shoot = new Howl({
    onload: reg_sound(114),
    src: "static/game/audio/se/000029a2.wav",
    loop: false,
    volume: 0.7
});

var se_pike_shoot = new Howl({
    onload: reg_sound(116),
    src: "static/game/audio/se/0000299c.wav",
    loop: false,
    volume: 0.7
});

var se_undyne = new Howl({
    onload: reg_sound(141),
    src: "static/game/audio/se/000029dc.wav",
    loop: false,
    volume: 0.7,
});

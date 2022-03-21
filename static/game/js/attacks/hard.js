var hAg1 = {
    type: "arrow",
    nextTime: 3.2,
    arrows: [
        {direction: "$3", turntype: 0, targetTime: 0.0, speed: 100},
        {direction: "$3", turntype: 0, targetTime: 0.6, speed: 100},
        {direction: "$3", turntype: 0, targetTime: 1.2, speed: 100}
    ],
    nextSets: ["hAg2"]
};

var hAg2 = {
    type: "arrow",
    nextTime: 4.5,
    arrows: [
        {direction: "$3", turntype: 0, targetTime: 0.0, speed: 150},
        {direction: "$3", turntype: 0, targetTime: 0.5, speed: 150},
        {direction: "$2", turntype: 0, targetTime: 1.0, speed: 150},
        {direction: "$2", turntype: 0, targetTime: 1.5, speed: 150},
        {direction: "$4", turntype: 0, targetTime: 2.0, speed: 150},
        {direction: "$4", turntype: 0, targetTime: 2.5, speed: 150}
    ],
    nextSets: ["hAg3"]
};

var hAg3 = {
    type: "arrow",
    nextTime: 4.8,
    arrows: [
        {direction: "2", turntype: 0, targetTime: 0.0, speed: 200},
        {direction: "4", turntype: 0, targetTime: 0.4, speed: 200},
        {direction: "2", turntype: 0, targetTime: 0.8, speed: 200},
        {direction: "4", turntype: 0, targetTime: 1.2, speed: 200},
        {direction: "4", turntype: 0, targetTime: 1.6, speed: 200},
        {direction: "2", turntype: 0, targetTime: 2.0, speed: 200},
        {direction: "2", turntype: 0, targetTime: 2.4, speed: 200},
        {direction: "1", turntype: 0, targetTime: 2.8, speed: 200}
    ],
    nextSets: ["hAg4a", "hAg4b"]
};

var hAg4a = {
    type: "arrow",
    nextTime: 4.85,
    arrows: [
        {direction: "1", turntype: 0, targetTime: 0.0, speed: 250},
        {direction: "2", turntype: 0, targetTime: 0.3, speed: 250},
        {direction: "3", turntype: 0, targetTime: 0.6, speed: 250},
        {direction: "4", turntype: 0, targetTime: 0.9, speed: 250},
        {direction: "1", turntype: 0, targetTime: 1.2, speed: 250},
        {direction: "2", turntype: 0, targetTime: 1.5, speed: 250},
        {direction: "3", turntype: 0, targetTime: 1.8, speed: 250},
        {direction: "4", turntype: 0, targetTime: 2.1, speed: 250},
        {direction: "1", turntype: 0, targetTime: 2.4, speed: 250},
        {direction: "1", turntype: 0, targetTime: 2.55, speed: 250},
        {direction: "1", turntype: 0, targetTime: 2.7, speed: 250},
        {direction: "1", turntype: 0, targetTime: 2.85, speed: 250}
    ],
    nextSets: ["hAg5"]
};

var hAg4b = {
    type: "arrow",
    nextTime: 4.85,
    arrows: [
        {direction: "1", turntype: 0, targetTime: 0.0, speed: 250},
        {direction: "4", turntype: 0, targetTime: 0.3, speed: 250},
        {direction: "3", turntype: 0, targetTime: 0.6, speed: 250},
        {direction: "2", turntype: 0, targetTime: 0.9, speed: 250},
        {direction: "1", turntype: 0, targetTime: 1.2, speed: 250},
        {direction: "4", turntype: 0, targetTime: 1.5, speed: 250},
        {direction: "3", turntype: 0, targetTime: 1.8, speed: 250},
        {direction: "2", turntype: 0, targetTime: 2.1, speed: 250},
        {direction: "1", turntype: 0, targetTime: 2.4, speed: 250},
        {direction: "1", turntype: 0, targetTime: 2.55, speed: 250},
        {direction: "1", turntype: 0, targetTime: 2.7, speed: 250},
        {direction: "1", turntype: 0, targetTime: 2.85, speed: 250}
    ],
    nextSets: ["hAg5"]
};

var hAg5 = {
    type: "arrow",
    nextTime: 4.1,
    arrows: [
        {direction: "4", turntype: 0, targetTime: 0.0, speed: 250},
        {direction: "3", turntype: 0, targetTime: 0.3, speed: 250},
        {direction: "3", turntype: 0, targetTime: 0.45, speed: 250},
        {direction: "2", turntype: 0, targetTime: 0.75, speed: 250},
        {direction: "3", turntype: 0, targetTime: 1.05, speed: 250},
        {direction: "3", turntype: 0, targetTime: 1.2, speed: 250},
        {direction: "4", turntype: 0, targetTime: 1.5, speed: 250},
        {direction: "3", turntype: 0, targetTime: 1.8, speed: 250},
        {direction: "1", turntype: 0, targetTime: 2.1, speed: 250}
    ],
    nextSets: ["hAg6"]
};

var hAg6 = {
    type: "arrow",
    nextTime: 4.25,
    arrows: [
        {direction: "2", turntype: 0, targetTime: 0.0, speed: 250},
        {direction: "3", turntype: 0, targetTime: 0.25, speed: 250},
        {direction: "1", turntype: 0, targetTime: 0.5, speed: 250},
        {direction: "4", turntype: 0, targetTime: 0.75, speed: 250},
        {direction: "2", turntype: 0, targetTime: 1.0, speed: 250},
        {direction: "3", turntype: 0, targetTime: 1.25, speed: 250},
        {direction: "1", turntype: 0, targetTime: 1.5, speed: 250},
        {direction: "4", turntype: 0, targetTime: 1.75, speed: 250},
        {direction: "1", turntype: 0, targetTime: 2.0, speed: 250},
        {direction: "3", turntype: 0, targetTime: 2.25, speed: 250}
    ],
    nextSets: ["hSp1"]
};

var hSp1 = {
    type: "spear",
    nextTime: 10,
    bufferTime: 2,
    spearInterval: 600,
    nextSets: ["hAg7"]
};

var hAg7 = {
    type: "arrow",
    nextTime: 4.0,
    arrows: [
        {direction: "1", turntype: 0, targetTime: 0.0, speed: 300},
        {direction: "3", turntype: 0, targetTime: 0.25, speed: 300},
        {direction: "1", turntype: 0, targetTime: 0.5, speed: 300},
        {direction: "3", turntype: 0, targetTime: 0.75, speed: 300},
        {direction: "3", turntype: 0, targetTime: 1.0, speed: 300},
        {direction: "1", turntype: 0, targetTime: 1.25, speed: 300},
        {direction: "3", turntype: 0, targetTime: 1.5, speed: 300},
        {direction: "1", turntype: 0, targetTime: 1.75, speed: 300}
    ],
    nextSets: ["hAg8"]
};

var hAg8 = {
    type: "arrow",
    nextTime: 2.5,
    arrows: [
        {direction: "3", turntype: 0, targetTime: 0.0, speed: 300},
        {direction: "4", turntype: 0, targetTime: 0.25, speed: 300},
        {direction: "1", turntype: 0, targetTime: 0.5, speed: 300},
        {direction: "3", turntype: 0, targetTime: 0.75, speed: 300},
        {direction: "4", turntype: 0, targetTime: 1.0, speed: 300},
        {direction: "1", turntype: 0, targetTime: 1.25, speed: 300},
        {direction: "2", turntype: 0, targetTime: 1.5, speed: 75}
    ],
    nextSets: ["hAg9"]
};

var hAg9 = {
    type: "arrow",
    nextTime: 3.6,
    arrows: [
        {direction: "2", turntype: 0, targetTime: 0.0, speed: 400},
        {direction: "2", turntype: 0, targetTime: 0.2, speed: 320},
        {direction: "2", turntype: 0, targetTime: 0.5, speed: 240},
        {direction: "4", turntype: 0, targetTime: 0.9, speed: 400},
        {direction: "4", turntype: 0, targetTime: 1.1, speed: 320},
        {direction: "4", turntype: 0, targetTime: 1.4, speed: 240},
        {direction: "1", turntype: 0, targetTime: 1.7, speed: 300},
        {direction: "3", turntype: 0, targetTime: 2.0, speed: 300},
        {direction: "1", turntype: 0, targetTime: 2.3, speed: 300},
        {direction: "3", turntype: 0, targetTime: 2.6, speed: 300}
    ],
    nextSets: ["hAg10"]
};

var hAg10 = {
    type: "arrow",
    nextTime: 3.75,
    arrows: [
        {direction: "4", turntype: 0, targetTime: 0.0, speed: 200},
        {direction: "2", turntype: 0, targetTime: 0.25, speed: 200},
        {direction: "4", turntype: 0, targetTime: 0.5, speed: 200},
        {direction: "2", turntype: 0, targetTime: 0.75, speed: 200},
        {direction: "2", turntype: 0, targetTime: 0.9, speed: 300},
        {direction: "3", turntype: 0, targetTime: 1.15, speed: 300},
        {direction: "1", turntype: 0, targetTime: 1.4, speed: 300},
        {direction: "3", turntype: 0, targetTime: 1.65, speed: 300},
        {direction: "3", turntype: 0, targetTime: 2.0, speed: 400},
        {direction: "1", turntype: 0, targetTime: 2.25, speed: 400},
        {direction: "4", turntype: 0, targetTime: 2.5, speed: 400},
        {direction: "2", turntype: 0, targetTime: 2.75, speed: 400}
    ],
    nextSets: ["hSp2"]
};

var hSp2 = {
    type: "spear",
    nextTime: 10,
    bufferTime: 2,
    spearInterval: 500,
    nextSets: ["hAg11"]
};

var hAg11 = {
    type: "arrow",
    nextTime: 3.2,
    arrows: [
        {direction: "4", turntype: 0, targetTime: 0.0, speed: 200},
        {direction: "2", turntype: 0, targetTime: 0.4, speed: 200},
        {direction: "4", turntype: 0, targetTime: 0.8, speed: 200},
        {direction: "2", turntype: 0, targetTime: 1.2, speed: 200},
        {direction: "4", turntype: 3, targetTime: 1.6, speed: 300}
    ],
    nextSets: ["hAg12"]
};

var hAg12 = {
    type: "arrow",
    nextTime: 4.4,
    arrows: [
        {direction: "2", turntype: 0, targetTime: 0.0, speed: 200},
        {direction: "4", turntype: 0, targetTime: 0.4, speed: 200},
        {direction: "1", turntype: 2, targetTime: 0.8, speed: 200},
        {direction: "1", turntype: 0, targetTime: 1.2, speed: 200},
        {direction: "2", turntype: 0, targetTime: 1.6, speed: 300},
        {direction: "4", turntype: 0, targetTime: 2.0, speed: 300},
        {direction: "3", turntype: 0, targetTime: 2.4, speed: 300},
        {direction: "1", turntype: 3, targetTime: 2.8, speed: 300}
    ],
    nextSets: ["hAg13"]
};

var hAg13 = {
    type: "arrow",
    nextTime: 4.4,
    arrows: [
        {direction: "2", turntype: 0, targetTime: 0.0, speed: 200},
        {direction: "1", turntype: 0, targetTime: 0.4, speed: 200},
        {direction: "4", turntype: 0, targetTime: 0.8, speed: 200},
        {direction: "3", turntype: 0, targetTime: 1.2, speed: 200},
        {direction: "4", turntype: 2, targetTime: 2.0, speed: 300},
        {direction: "3", turntype: 3, targetTime: 2.4, speed: 300},
        {direction: "2", turntype: 2, targetTime: 2.8, speed: 300},
        {direction: "1", turntype: 3, targetTime: 3.2, speed: 300}
    ],
    nextSets: ["hAg14"]
};

var hAg14 = {
    type: "arrow",
    nextTime: 4.8,
    arrows: [
        {direction: "4", turntype: 0, targetTime: 0.0, speed: 200},
        {direction: "4", turntype: 0, targetTime: 0.35, speed: 200},
        {direction: "2", turntype: 0, targetTime: 0.7, speed: 200},
        {direction: "2", turntype: 0, targetTime: 1.05, speed: 200},
        {direction: "1", turntype: 0, targetTime: 1.4, speed: 300},
        {direction: "3", turntype: 2, targetTime: 1.75, speed: 300},
        {direction: "3", turntype: 0, targetTime: 2.1, speed: 300},
        {direction: "1", turntype: 2, targetTime: 2.45, speed: 300},
        {direction: "1", turntype: 0, targetTime: 2.8, speed: 500},
        {direction: "4", turntype: 0, targetTime: 3.3, speed: 500},
        {direction: "2", turntype: 0, targetTime: 3.6, speed: 500}
    ],
    nextSets: ["hAg15"]
};

var hAg15 = {
    type: "arrow",
    nextTime: 4.7,
    arrows: [
        {direction: "4", turntype: 0, targetTime: 0.0, speed: 200},
        {direction: "3", turntype: 0, targetTime: 0.35, speed: 200},
        {direction: "3", turntype: 0, targetTime: 0.7, speed: 200},
        {direction: "3", turntype: 2, targetTime: 1.6, speed: 200},
        {direction: "2", turntype: 0, targetTime: 1.8, speed: 300},
        {direction: "3", turntype: 0, targetTime: 2.6, speed: 300},
        {direction: "2", turntype: 0, targetTime: 2.9, speed: 300},
        {direction: "4", turntype: 3, targetTime: 3.2, speed: 300},
        {direction: "2", turntype: 0, targetTime: 3.5, speed: 300}
    ],
    nextSets: ["hAg16"]
};

var hAg16 = {
    type: "arrow",
    nextTime: 4.6,
    arrows: [
        {direction: "3", turntype: 0, targetTime: 0.0, speed: 500},
        {direction: "4", turntype: 0, targetTime: 0.4, speed: 500},
        {direction: "4", turntype: 0, targetTime: 0.8, speed: 500},
        {direction: "1", turntype: 0, targetTime: 1.2, speed: 500},
        {direction: "1", turntype: 0, targetTime: 1.6, speed: 500},
        {direction: "4", turntype: 0, targetTime: 2.0, speed: 500},
        {direction: "3", turntype: 0, targetTime: 2.4, speed: 500},
        {direction: "4", turntype: 0, targetTime: 2.8, speed: 500},
        {direction: "4", turntype: 0, targetTime: 3.2, speed: 500},
        {direction: "3", turntype: 0, targetTime: 3.6, speed: 500}
    ],
    nextSets: ["hAg17"]
};

var hAg17 = {
    type: "arrow",
    nextTime: 4.5,
    arrows: [
        {direction: "2", turntype: 0, targetTime: 0.0, speed: 300},
        {direction: "2", turntype: 0, targetTime: 0.32, speed: 300},
        {direction: "2", turntype: 0, targetTime: 0.64, speed: 300},
        {direction: "2", turntype: 0, targetTime: 0.80, speed: 300},
        {direction: "2", turntype: 0, targetTime: 0.96, speed: 300},
        {direction: "2", turntype: 0, targetTime: 1.28, speed: 300},
        {direction: "4", turntype: 3, targetTime: 1.60, speed: 300},
        {direction: "2", turntype: 0, targetTime: 1.92, speed: 300},
        {direction: "4", turntype: 3, targetTime: 2.24, speed: 300},
        {direction: "4", turntype: 0, targetTime: 2.56, speed: 300},
        {direction: "2", turntype: 2, targetTime: 2.88, speed: 300},
        {direction: "4", turntype: 0, targetTime: 3.20, speed: 300},
        {direction: "2", turntype: 2, targetTime: 3.52, speed: 300}
    ],
    nextSets: ["hAg18"]
};

var hAg18 = {
    type: "arrow",
    nextTime: 4.5,
    arrows: [
        {direction: "4", turntype: 3, targetTime: 0.0, speed: 300},
        {direction: "3", turntype: 2, targetTime: 0.35, speed: 300},
        {direction: "2", turntype: 2, targetTime: 0.7, speed: 300},
        {direction: "1", turntype: 2, targetTime: 1.05, speed: 300},
        {direction: "4", turntype: 3, targetTime: 1.4, speed: 300},
        {direction: "3", turntype: 2, targetTime: 1.75, speed: 300},
        {direction: "2", turntype: 2, targetTime: 2.1, speed: 300},
        {direction: "1", turntype: 2, targetTime: 2.45, speed: 300},
        {direction: "4", turntype: 3, targetTime: 2.8, speed: 300},
        {direction: "3", turntype: 2, targetTime: 3.15, speed: 300},
        {direction: "2", turntype: 2, targetTime: 3.5, speed: 300},
        {direction: "1", turntype: 2, targetTime: 3.85, speed: 300}
    ],
    nextSets: ["hSp3"]
};

var hSp3 = {
    type: "spear",
    nextTime: 10,
    bufferTime: 2,
    spearInterval: 400,
    nextSets: ["hAg19"]
};

var hAg19 = {
    type: "arrow",
    nextTime: 3.5,
    arrows: [
        {direction: "R", turntype: 0, targetTime: 0.0, speed: 300},
        {direction: "R", turntype: 0, targetTime: 0.3, speed: 300},
        {direction: "R", turntype: 0, targetTime: 0.6, speed: 300},
        {direction: "R", turntype: 0, targetTime: 0.8, speed: 300},
        {direction: "R", turntype: 0, targetTime: 1.1, speed: 300},
        {direction: "R", turntype: 0, targetTime: 1.4, speed: 300},
        {direction: "R", turntype: 0, targetTime: 1.6, speed: 300},
        {direction: "R", turntype: 0, targetTime: 1.9, speed: 300},
        {direction: "R", turntype: 0, targetTime: 2.1, speed: 300},
        {direction: "R", turntype: 0, targetTime: 2.4, speed: 300},
        {direction: "R", turntype: 0, targetTime: 2.7, speed: 300}
    ],
    nextSets: ["hAg20"]
};

var hAg20 = {
    type: "arrow",
    nextTime: 4.0,
    arrows: [
        {direction: "$3", turntype: 0, targetTime: 0.00, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 0.15, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 0.30, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 0.45, speed: 500},
        {direction: "$2", turntype: 0, targetTime: 0.80, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 0.95, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 1.10, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 1.25, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 1.40, speed: 500},
        {direction: "$4", turntype: 0, targetTime: 1.65, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 1.80, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 1.95, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 2.10, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 2.25, speed: 500},
        {direction: "$2", turntype: 0, targetTime: 2.50, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 2.65, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 2.80, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 2.95, speed: 500},
        {direction: "$4", turntype: 0, targetTime: 3.20, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 3.35, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 3.50, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 3.65, speed: 500}
    ],
    nextSets: ["hAg21"]
};

var hAg21 = {
    type: "arrow",
    nextTime: 5.0,
    arrows: [
        {direction: "1", turntype: 0, targetTime: 0.0, speed: 300},
        {direction: "2", turntype: 0, targetTime: 0.25, speed: 300},
        {direction: "3", turntype: 0, targetTime: 0.5, speed: 300},
        {direction: "4", turntype: 0, targetTime: 0.75, speed: 300},
        {direction: "3", turntype: 2, targetTime: 1.0, speed: 300},
        {direction: "4", turntype: 2, targetTime: 1.25, speed: 300},
        {direction: "1", turntype: 2, targetTime: 1.5, speed: 300},
        {direction: "2", turntype: 2, targetTime: 1.75, speed: 300},
        {direction: "1", turntype: 3, targetTime: 2.5, speed: 300},
        {direction: "2", turntype: 3, targetTime: 2.75, speed: 300},
        {direction: "3", turntype: 3, targetTime: 3.0, speed: 300},
        {direction: "4", turntype: 3, targetTime: 3.25, speed: 300},
        {direction: "3", turntype: 0, targetTime: 3.5, speed: 300},
        {direction: "4", turntype: 0, targetTime: 3.75, speed: 300},
        {direction: "1", turntype: 0, targetTime: 4.0, speed: 300},
        {direction: "2", turntype: 0, targetTime: 4.25, speed: 300}
    ],
    nextSets: ["hAg22"]
};

var hAg22 = {
    type: "arrow",
    nextTime: 4.0,
    arrows: [
        {direction: "$2", turntype: 2, targetTime: 0.0, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 0.15, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 0.3, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 0.45, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 0.6, speed: 500},
        {direction: "$4", turntype: 3, targetTime: 0.85, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 1.0, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 1.15, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 1.3, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 1.45, speed: 500},
        {direction: "$2", turntype: 2, targetTime: 1.7, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 1.85, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 2.0, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 2.15, speed: 500},
        {direction: "$4", turntype: 3, targetTime: 2.4, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 2.55, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 2.7, speed: 500},
        {direction: "$3", turntype: 0, targetTime: 2.85, speed: 500}
    ],
    nextSets: ["hPk1"]
};

var hPk1 = {
    type: "pike",
    nextTime: 6,
    bufferTime: 0.8,
    pikeInterval: 500,
    down: false,
    nextSets: ["hAg23", "hAg24", "hAg25", "hAg26", "hAg27"]
};

var hAg23 = {
    type: "arrow",
    nextTime: 4.8,
    arrows: [
        {direction: "1", turntype: 0, targetTime: 0.0, speed: 300},
        {direction: "3", turntype: 0, targetTime: 0.2, speed: 300},
        {direction: "1", turntype: 0, targetTime: 0.4, speed: 300},
        {direction: "3", turntype: 0, targetTime: 0.6, speed: 300},
        {direction: "2", turntype: 0, targetTime: 1.2, speed: 300},
        {direction: "4", turntype: 0, targetTime: 1.4, speed: 300},
        {direction: "2", turntype: 0, targetTime: 1.6, speed: 300},
        {direction: "4", turntype: 0, targetTime: 1.8, speed: 300},
        {direction: "1", turntype: 0, targetTime: 2.4, speed: 300},
        {direction: "1", turntype: 2, targetTime: 2.6, speed: 300},
        {direction: "1", turntype: 0, targetTime: 2.8, speed: 300},
        {direction: "1", turntype: 2, targetTime: 3.0, speed: 300},
        {direction: "2", turntype: 0, targetTime: 3.6, speed: 300},
        {direction: "2", turntype: 3, targetTime: 3.8, speed: 300},
        {direction: "2", turntype: 0, targetTime: 4.0, speed: 300},
        {direction: "2", turntype: 3, targetTime: 4.2, speed: 300}
    ],
    nextSets: ["hSp4", "hPk1", "hAg24", "hAg25", "hAg26", "hAg27"]
};

var hAg24 = {
    type: "arrow",
    nextTime: 5.5,
    arrows: [
        {direction: "1", turntype: 2, targetTime: 0.0, speed: 300},
        {direction: "2", turntype: 3, targetTime: 0.3, speed: 300},
        {direction: "3", turntype: 2, targetTime: 0.6, speed: 300},
        {direction: "4", turntype: 3, targetTime: 0.9, speed: 300},
        {direction: "1", turntype: 3, targetTime: 1.2, speed: 300},
        {direction: "2", turntype: 2, targetTime: 1.5, speed: 300},
        {direction: "3", turntype: 3, targetTime: 1.8, speed: 300},
        {direction: "4", turntype: 2, targetTime: 2.1, speed: 300},
        {direction: "1", turntype: 2, targetTime: 2.4, speed: 300},
        {direction: "3", turntype: 2, targetTime: 2.7, speed: 300},
        {direction: "2", turntype: 3, targetTime: 3.0, speed: 300},
        {direction: "4", turntype: 3, targetTime: 3.3, speed: 300},
        {direction: "1", turntype: 3, targetTime: 3.6, speed: 300},
        {direction: "3", turntype: 3, targetTime: 3.9, speed: 300},
        {direction: "2", turntype: 2, targetTime: 4.2, speed: 300},
        {direction: "4", turntype: 2, targetTime: 4.5, speed: 300}
    ],
    nextSets: ["hSp4", "hAg23", "hPk1", "hAg25", "hAg26", "hAg27"]
};

var hAg25 = {
    type: "arrow",
    nextTime: 5.0,
    arrows: [
        {direction: "R", turntype: 0, targetTime: 0.0, speed: 400},
        {direction: "+0", turntype: 3, targetTime: 0.2, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 0.6, speed: 400},
        {direction: "+0", turntype: 3, targetTime: 0.8, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.2, speed: 400},
        {direction: "+0", turntype: 2, targetTime: 1.4, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 1.8, speed: 400},
        {direction: "+0", turntype: 2, targetTime: 2.0, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.4, speed: 400},
        {direction: "+0", turntype: 2, targetTime: 2.6, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 3.0, speed: 400},
        {direction: "+0", turntype: 3, targetTime: 3.2, speed: 400},
        {direction: "R", turntype: 0, targetTime: 3.6, speed: 400},
        {direction: "+0", turntype: 3, targetTime: 3.8, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 4.2, speed: 400},
        {direction: "+0", turntype: 2, targetTime: 4.4, speed: 400}
    ],
    nextSets: ["hSp4", "hAg23", "hAg24", "hPk1", "hAg26", "hAg27"]
};

var hAg26 = {
    type: "arrow",
    nextTime: 4.2,
    arrows: [
        {direction: "R", turntype: 0, targetTime: 0.0, speed: 500},
        {direction: "R", turntype: 0, targetTime: 0.3, speed: 500},
        {direction: "R", turntype: 0, targetTime: 0.6, speed: 500},
        {direction: "R", turntype: 0, targetTime: 0.9, speed: 500},
        {direction: "R", turntype: 0, targetTime: 1.2, speed: 500},
        {direction: "R", turntype: 0, targetTime: 1.5, speed: 500},
        {direction: "R", turntype: 0, targetTime: 1.8, speed: 500},
        {direction: "R", turntype: 0, targetTime: 2.1, speed: 500},
        {direction: "R", turntype: 0, targetTime: 2.4, speed: 500},
        {direction: "R", turntype: 0, targetTime: 2.7, speed: 500},
        {direction: "R", turntype: 0, targetTime: 3.0, speed: 500},
        {direction: "R", turntype: 0, targetTime: 3.3, speed: 500},
        {direction: "R", turntype: 0, targetTime: 3.6, speed: 500}
    ],
    nextSets: ["hSp4", "hAg23", "hAg24", "hAg25", "hPk1", "hAg27"]
};

var hAg27 = {
    type: "arrow",
    nextTime: 3.7,
    arrows: [
        {direction: "R", turntype: 0, targetTime: 0.0, speed: 500},
        {direction: "R", turntype: 0, targetTime: 0.3, speed: 400},
        {direction: "R", turntype: 0, targetTime: 0.6, speed: 300},
        {direction: "R", turntype: 0, targetTime: 0.9, speed: 200},
        {direction: "R", turntype: 0, targetTime: 1.0, speed: 500},
        {direction: "R", turntype: 0, targetTime: 1.3, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.5, speed: 300},
        {direction: "R", turntype: 0, targetTime: 1.7, speed: 200},
        {direction: "R", turntype: 0, targetTime: 2.0, speed: 500},
        {direction: "R", turntype: 0, targetTime: 2.4, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.5, speed: 300},
        {direction: "R", turntype: 0, targetTime: 2.7, speed: 200},
        {direction: "R", turntype: 0, targetTime: 2.8, speed: 500}
    ],
    nextSets: ["hSp4", "hAg23", "hAg24", "hAg25", "hAg26", "hPk1"]
};

var hPk2 = {
    type: "pike",
    nextTime: 6,
    bufferTime: 0.8,
    pikeInterval: 400,
    down: true,
    nextSets: ["hAg23", "hAg24", "hAg25", "hAg26", "hAg27"]
};

var hSp4 = {
    type: "spear",
    nextTime: 10,
    bufferTime: 2,
    spearInterval: 300,
    nextSets: ["hAg23", "hAg24", "hAg25", "hAg26", "hAg27"]
};

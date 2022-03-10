var ag1 = {
    type: "arrow",
    id: "ag1",
    nextTime: 3.2,
    arrows: [
        {direction: "$3", turntype: 0, targetTime: 0.0, speed: 100},
        {direction: "$3", turntype: 0, targetTime: 0.6, speed: 100},
        {direction: "$3", turntype: 0, targetTime: 1.2, speed: 100}
    ],
    nextSets: ["ag2"]
};

var ag2 = {
    type: "arrow",
    id: "ag2",
    nextTime: 4.5,
    arrows: [
        {direction: "$3", turntype: 0, targetTime: 0.0, speed: 150},
        {direction: "$3", turntype: 0, targetTime: 0.5, speed: 150},
        {direction: "$2", turntype: 0, targetTime: 1.0, speed: 150},
        {direction: "$2", turntype: 0, targetTime: 1.5, speed: 150},
        {direction: "$4", turntype: 0, targetTime: 2.0, speed: 150},
        {direction: "$4", turntype: 0, targetTime: 2.5, speed: 150}
    ],
    nextSets: ["ag3"]
};

var ag3 = {
    type: "arrow",
    id: "ag3",
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
    nextSets: ["ag4a", "ag4b"]
};

var ag4a = {
    type: "arrow",
    id: "ag4a",
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
    nextSets: ["ag5"]
};

var ag4b = {
    type: "arrow",
    id: "ag4b",
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
    nextSets: ["ag5"]
};

var ag5 = {
    type: "arrow",
    id: "ag5",
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
    nextSets: ["ag6"]
};

var ag6 = {
    type: "arrow",
    id: "ag6",
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
    nextSets: ["sp1"]
};

var sp1 = {
    type: "spear",
    nextTime: 10,
    bufferTime: 2,
    spearInterval: 600,
    nextSets: ["ag7"]
};

var ag7 = {
    type: "arrow",
    id: "ag7",
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
    nextSets: ["ag8"]
};

var ag8 = {
    type: "arrow",
    id: "ag8",
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
    nextSets: ["ag9"]
};

var ag9 = {
    type: "arrow",
    id: "ag9",
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
    nextSets: ["ag10"]
};

var ag10 = {
    type: "arrow",
    id: "ag10",
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
    nextSets: ["sp2"]
};

var sp2 = {
    type: "spear",
    nextTime: 10,
    bufferTime: 2,
    spearInterval: 500,
    nextSets: ["ag11"]
};

var ag11 = {
    type: "arrow",
    id: "ag11",
    nextTime: 3.2,
    arrows: [
        {direction: "4", turntype: 0, targetTime: 0.0, speed: 200},
        {direction: "2", turntype: 0, targetTime: 0.4, speed: 200},
        {direction: "4", turntype: 0, targetTime: 0.8, speed: 200},
        {direction: "2", turntype: 0, targetTime: 1.2, speed: 200},
        {direction: "4", turntype: 3, targetTime: 1.6, speed: 300}
    ],
    nextSets: ["ag12"]
};

var ag12 = {
    type: "arrow",
    id: "ag11",
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
    nextSets: ["ag13"]
};

var ag13 = {
    type: "arrow",
    id: "ag13",
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
    nextSets: ["ag14"]
};

var ag14 = {
    type: "arrow",
    id: "ag14",
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
    nextSets: ["ag15"]
};

var ag15 = {
    type: "arrow",
    id: "ag15",
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
    nextSets: ["ag16"]
};

var ag16 = {
    type: "arrow",
    id: "ag16",
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
    nextSets: ["ag17"]
};

var ag17 = {
    type: "arrow",
    id: "ag17",
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
    nextSets: ["ag18"]
};

var ag18 = {
    type: "arrow",
    id: "ag18",
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
    nextSets: ["sp2"]
};

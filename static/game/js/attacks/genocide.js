var gAg1 = {
    type: "arrow",
    id: "gAg1",
    nextTime: 4.8,
    arrows: [
        {direction: "$3", turntype: 0, targetTime: 0.0, speed: 40},
        {direction: "$3", turntype: 0, targetTime: 1.6, speed: 40},
        {direction: "$3", turntype: 0, targetTime: 3.2, speed: 40},
        
        {direction: "N3", turntype: 0, targetTime: 0.3, speed: 500},
        {direction: "N3", turntype: 0, targetTime: 0.6, speed: 500},
        {direction: "N3", turntype: 0, targetTime: 0.9, speed: 500},
        {direction: "N3", turntype: 0, targetTime: 1.2, speed: 500},
        {direction: "N3", turntype: 0, targetTime: 1.4, speed: 500},
        
        {direction: "N3", turntype: 0, targetTime: 1.9, speed: 500},
        {direction: "N3", turntype: 0, targetTime: 2.2, speed: 500},
        {direction: "N3", turntype: 0, targetTime: 2.5, speed: 500},
        {direction: "N3", turntype: 0, targetTime: 2.8, speed: 500},
        {direction: "N3", turntype: 0, targetTime: 3.0, speed: 500},
        
        {direction: "N3", turntype: 0, targetTime: 3.5, speed: 500},
        {direction: "N3", turntype: 0, targetTime: 3.8, speed: 500},
        {direction: "N3", turntype: 0, targetTime: 4.1, speed: 500},
        {direction: "N3", turntype: 0, targetTime: 4.4, speed: 500},
        {direction: "N3", turntype: 0, targetTime: 4.6, speed: 500}
    ],
    nextSets: ["gSp1"]
};

var gSp1 = {
    type: "spear",
    nextTime: 1.6,
    bufferTime: 0.3,
    spearInterval: 300,
    nextSets: ["gAg2"]
};

var gAg2 = {
    type: "arrow",
    id: "gAg2",
    nextTime: 6.0,
    arrows: [
        {direction: "R", turntype: 0, targetTime: 0.3, speed: 400},
        {direction: "R", turntype: 0, targetTime: 0.6, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 0.9, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.2, speed: 400},
        {direction: "+2", turntype: 0, targetTime: 1.4, speed: 400},
        {direction: "+0", turntype: 2, targetTime: 1.6, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.9, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.2, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 2.5, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.8, speed: 400},
        {direction: "-2", turntype: 0, targetTime: 3.0, speed: 400},
        {direction: "-0", turntype: 3, targetTime: 3.2, speed: 400},
        {direction: "R", turntype: 0, targetTime: 3.5, speed: 400},
        {direction: "R", turntype: 0, targetTime: 3.8, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 4.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 4.4, speed: 400},
        {direction: "-2", turntype: 0, targetTime: 4.6, speed: 400},
        {direction: "-0", turntype: 2, targetTime: 4.8, speed: 400},
        {direction: "R", turntype: 0, targetTime: 5.1, speed: 400},
        {direction: "+2", turntype: 2, targetTime: 5.4, speed: 400}
    ],
    nextSets: ["gSp2"]
};

var gSp2 = {
    type: "spear",
    nextTime: 6.8,
    bufferTime: 0.8,
    spearInterval: 200,
    nextSets: ["gAg3"]
};

var gAg3 = {
    type: "arrow",
    id: "gAg3",
    nextTime: 6.4,
    arrows: [
        {direction: "R", turntype: 0, targetTime: 0.0, speed: 200},
        {direction: "R", turntype: 0, targetTime: 0.2, speed: 200},
        {direction: "R", turntype: 0, targetTime: 0.4, speed: 200},
        {direction: "R", turntype: 0, targetTime: 0.6, speed: 200},
        {direction: "R", turntype: 0, targetTime: 0.8, speed: 200},
        {direction: "R", turntype: 0, targetTime: 1.0, speed: 200},
        {direction: "R", turntype: 0, targetTime: 1.2, speed: 200},
        {direction: "R", turntype: 0, targetTime: 1.4, speed: 200},
        {direction: "R", turntype: 0, targetTime: 1.6, speed: 200},
        {direction: "R", turntype: 0, targetTime: 1.8, speed: 200},
        {direction: "R", turntype: 0, targetTime: 2.0, speed: 200},
        {direction: "R", turntype: 0, targetTime: 2.2, speed: 200},
        {direction: "R", turntype: 0, targetTime: 2.4, speed: 200},
        {direction: "R", turntype: 0, targetTime: 2.6, speed: 200},
        {direction: "R", turntype: 0, targetTime: 2.8, speed: 200},
        {direction: "R", turntype: 0, targetTime: 3.0, speed: 200},
        {direction: "R", turntype: 2, targetTime: 3.2, speed: 200},
        {direction: "R", turntype: 0, targetTime: 3.4, speed: 200},
        {direction: "R", turntype: 0, targetTime: 3.6, speed: 200},
        {direction: "R", turntype: 0, targetTime: 3.8, speed: 200},
        {direction: "R", turntype: 3, targetTime: 4.0, speed: 200},
        {direction: "R", turntype: 0, targetTime: 4.2, speed: 200},
        {direction: "R", turntype: 0, targetTime: 4.4, speed: 200},
        {direction: "R", turntype: 0, targetTime: 4.6, speed: 200},
        {direction: "R", turntype: 2, targetTime: 4.8, speed: 200},
        {direction: "R", turntype: 0, targetTime: 5.0, speed: 200},
        {direction: "R", turntype: 3, targetTime: 5.2, speed: 200},
        {direction: "R", turntype: 0, targetTime: 5.4, speed: 200},
        {direction: "R", turntype: 2, targetTime: 5.6, speed: 200},
        {direction: "R", turntype: 3, targetTime: 5.8, speed: 200},
        {direction: "R", turntype: 2, targetTime: 6.0, speed: 200},
        {direction: "R", turntype: 3, targetTime: 6.2, speed: 200}
    ],
    nextSets: ["gSp3"]
};

var gSp3 = {
    type: "spear",
    nextTime: 6.4,
    bufferTime: 0.8,
    spearInterval: 200,
    nextSets: ["gAg4"]
};

var gAg4 = {
    type: "arrow",
    id: "gAg4",
    nextTime: 6.4,
    arrows: [
        {direction: "1", turntype: 0, targetTime: 0.0, speed: 400},
        {direction: "1", turntype: 0, targetTime: 0.1, speed: 400},
        {direction: "2", turntype: 0, targetTime: 0.2, speed: 400},
        {direction: "2", turntype: 0, targetTime: 0.3, speed: 400},
        {direction: "3", turntype: 0, targetTime: 0.4, speed: 400},
        {direction: "3", turntype: 0, targetTime: 0.5, speed: 400},
        {direction: "4", turntype: 0, targetTime: 0.6, speed: 400},
        {direction: "4", turntype: 0, targetTime: 0.7, speed: 400},
        {direction: "1", turntype: 0, targetTime: 0.8, speed: 400},
        {direction: "1", turntype: 0, targetTime: 0.9, speed: 400},
        {direction: "2", turntype: 0, targetTime: 1.0, speed: 400},
        {direction: "2", turntype: 0, targetTime: 1.1, speed: 400},
        {direction: "3", turntype: 0, targetTime: 1.2, speed: 400},
        {direction: "3", turntype: 0, targetTime: 1.3, speed: 400},
        {direction: "4", turntype: 0, targetTime: 1.4, speed: 400},
        {direction: "4", turntype: 0, targetTime: 1.5, speed: 400},
        {direction: "1", turntype: 0, targetTime: 1.6, speed: 400},
        {direction: "1", turntype: 0, targetTime: 1.7, speed: 400},
        {direction: "2", turntype: 0, targetTime: 1.8, speed: 400},
        {direction: "2", turntype: 0, targetTime: 1.9, speed: 400},
        {direction: "3", turntype: 0, targetTime: 2.0, speed: 400},
        {direction: "3", turntype: 0, targetTime: 2.1, speed: 400},
        {direction: "4", turntype: 0, targetTime: 2.2, speed: 400},
        {direction: "4", turntype: 0, targetTime: 2.3, speed: 400},
        {direction: "1", turntype: 0, targetTime: 2.4, speed: 400},
        {direction: "1", turntype: 0, targetTime: 2.5, speed: 400},
        {direction: "2", turntype: 0, targetTime: 2.6, speed: 400},
        {direction: "2", turntype: 0, targetTime: 2.7, speed: 400},
        {direction: "3", turntype: 0, targetTime: 2.8, speed: 400},
        {direction: "3", turntype: 0, targetTime: 2.9, speed: 400},
        {direction: "4", turntype: 0, targetTime: 3.0, speed: 400},
        {direction: "4", turntype: 0, targetTime: 3.1, speed: 400},
        {direction: "1", turntype: 0, targetTime: 3.2, speed: 400},
        {direction: "1", turntype: 0, targetTime: 3.3, speed: 400},
        {direction: "3", turntype: 0, targetTime: 3.4, speed: 400},
        {direction: "3", turntype: 0, targetTime: 3.5, speed: 400},
        {direction: "2", turntype: 0, targetTime: 3.6, speed: 400},
        {direction: "2", turntype: 0, targetTime: 3.7, speed: 400},
        {direction: "4", turntype: 0, targetTime: 3.8, speed: 400},
        {direction: "4", turntype: 0, targetTime: 3.9, speed: 400},
        {direction: "1", turntype: 0, targetTime: 4.0, speed: 400},
        {direction: "1", turntype: 0, targetTime: 4.1, speed: 400},
        {direction: "3", turntype: 0, targetTime: 4.2, speed: 400},
        {direction: "3", turntype: 0, targetTime: 4.3, speed: 400},
        {direction: "2", turntype: 0, targetTime: 4.4, speed: 400},
        {direction: "2", turntype: 0, targetTime: 4.5, speed: 400},
        {direction: "4", turntype: 0, targetTime: 4.6, speed: 400},
        {direction: "4", turntype: 0, targetTime: 4.7, speed: 400},
        {direction: "1", turntype: 0, targetTime: 4.8, speed: 400},
        {direction: "1", turntype: 0, targetTime: 4.9, speed: 400},
        {direction: "3", turntype: 0, targetTime: 5.0, speed: 400},
        {direction: "3", turntype: 0, targetTime: 5.1, speed: 400},
        {direction: "2", turntype: 0, targetTime: 5.2, speed: 400},
        {direction: "2", turntype: 0, targetTime: 5.3, speed: 400},
        {direction: "4", turntype: 0, targetTime: 5.4, speed: 400},
        {direction: "4", turntype: 0, targetTime: 5.5, speed: 400},
        {direction: "1", turntype: 0, targetTime: 5.6, speed: 400},
        {direction: "1", turntype: 0, targetTime: 5.7, speed: 400},
        {direction: "3", turntype: 0, targetTime: 5.8, speed: 400},
        {direction: "3", turntype: 0, targetTime: 5.9, speed: 400},
        {direction: "2", turntype: 0, targetTime: 6.0, speed: 400},
        {direction: "2", turntype: 0, targetTime: 6.1, speed: 400},
        {direction: "4", turntype: 0, targetTime: 6.2, speed: 400},
        {direction: "4", turntype: 0, targetTime: 6.3, speed: 400}
    ],
    nextSets: ["gPk1"]
};

var gPk1 = {
    type: "pike",
    nextTime: 6.4,
    bufferTime: 0.8,
    pikeInterval: 400,
    down: false,
    nextSets: ["gAg5"]
};

var gAg5 = {
    type: "arrow",
    id: "gAg5",
    nextTime: 6.4,
    arrows: [
        {direction: "R", turntype: 0, targetTime: 0.0, speed: 200},
        {direction: "R", turntype: 0, targetTime: 0.2, speed: 200},
        {direction: "R", turntype: 0, targetTime: 0.4, speed: 200},
        {direction: "R", turntype: 0, targetTime: 0.6, speed: 200},
        {direction: "R", turntype: 0, targetTime: 0.8, speed: 200},
        {direction: "R", turntype: 0, targetTime: 1.0, speed: 200},
        {direction: "R", turntype: 0, targetTime: 1.2, speed: 200},
        {direction: "R", turntype: 0, targetTime: 1.4, speed: 200},
        {direction: "R", turntype: 0, targetTime: 1.6, speed: 200},
        {direction: "R", turntype: 0, targetTime: 1.8, speed: 200},
        {direction: "R", turntype: 0, targetTime: 2.0, speed: 200},
        {direction: "R", turntype: 0, targetTime: 2.2, speed: 200},
        {direction: "R", turntype: 0, targetTime: 2.4, speed: 200},
        {direction: "R", turntype: 0, targetTime: 2.6, speed: 200},
        {direction: "R", turntype: 0, targetTime: 2.8, speed: 200},
        {direction: "R", turntype: 0, targetTime: 3.0, speed: 200},
        {direction: "R", turntype: 2, targetTime: 3.2, speed: 200},
        {direction: "R", turntype: 0, targetTime: 3.4, speed: 200},
        {direction: "R", turntype: 0, targetTime: 3.6, speed: 200},
        {direction: "R", turntype: 0, targetTime: 3.8, speed: 200},
        {direction: "R", turntype: 3, targetTime: 4.0, speed: 200},
        {direction: "R", turntype: 0, targetTime: 4.2, speed: 200},
        {direction: "R", turntype: 0, targetTime: 4.4, speed: 200},
        {direction: "R", turntype: 0, targetTime: 4.6, speed: 200},
        {direction: "R", turntype: 2, targetTime: 4.8, speed: 200},
        {direction: "R", turntype: 0, targetTime: 5.0, speed: 200},
        {direction: "R", turntype: 3, targetTime: 5.2, speed: 200},
        {direction: "R", turntype: 0, targetTime: 5.4, speed: 200},
        {direction: "R", turntype: 2, targetTime: 5.6, speed: 200},
        {direction: "R", turntype: 3, targetTime: 5.8, speed: 200},
        {direction: "R", turntype: 2, targetTime: 6.0, speed: 200},
        {direction: "R", turntype: 3, targetTime: 6.2, speed: 200}
    ],
    nextSets: ["gPk2"]
};

var gPk2 = {
    type: "pike",
    nextTime: 6.4,
    bufferTime: 0.8,
    pikeInterval: 400,
    down: true,
    nextSets: ["gAg6"]
};

var gAg6 = {
    type: "arrow",
    id: "gAg4",
    nextTime: 6.4,
    arrows: [
        {direction: "1", turntype: 0, targetTime: 0.0, speed: 400},
        {direction: "3", turntype: 2, targetTime: 0.1, speed: 400},
        {direction: "2", turntype: 0, targetTime: 0.2, speed: 400},
        {direction: "4", turntype: 2, targetTime: 0.3, speed: 400},
        {direction: "3", turntype: 0, targetTime: 0.4, speed: 400},
        {direction: "1", turntype: 2, targetTime: 0.5, speed: 400},
        {direction: "4", turntype: 0, targetTime: 0.6, speed: 400},
        {direction: "2", turntype: 2, targetTime: 0.7, speed: 400},
        {direction: "1", turntype: 0, targetTime: 0.8, speed: 400},
        {direction: "3", turntype: 3, targetTime: 0.9, speed: 400},
        {direction: "2", turntype: 0, targetTime: 1.0, speed: 400},
        {direction: "4", turntype: 3, targetTime: 1.1, speed: 400},
        {direction: "3", turntype: 0, targetTime: 1.2, speed: 400},
        {direction: "1", turntype: 3, targetTime: 1.3, speed: 400},
        {direction: "4", turntype: 0, targetTime: 1.4, speed: 400},
        {direction: "2", turntype: 3, targetTime: 1.5, speed: 400},
        {direction: "1", turntype: 0, targetTime: 1.6, speed: 400},
        {direction: "3", turntype: 2, targetTime: 1.7, speed: 400},
        {direction: "2", turntype: 0, targetTime: 1.8, speed: 400},
        {direction: "4", turntype: 2, targetTime: 1.9, speed: 400},
        {direction: "3", turntype: 0, targetTime: 2.0, speed: 400},
        {direction: "1", turntype: 2, targetTime: 2.1, speed: 400},
        {direction: "4", turntype: 0, targetTime: 2.2, speed: 400},
        {direction: "2", turntype: 2, targetTime: 2.3, speed: 400},
        {direction: "1", turntype: 0, targetTime: 2.4, speed: 400},
        {direction: "3", turntype: 3, targetTime: 2.5, speed: 400},
        {direction: "2", turntype: 0, targetTime: 2.6, speed: 400},
        {direction: "4", turntype: 3, targetTime: 2.7, speed: 400},
        {direction: "3", turntype: 0, targetTime: 2.8, speed: 400},
        {direction: "1", turntype: 3, targetTime: 2.9, speed: 400},
        {direction: "4", turntype: 0, targetTime: 3.0, speed: 400},
        {direction: "2", turntype: 3, targetTime: 3.1, speed: 400},
        {direction: "1", turntype: 0, targetTime: 3.2, speed: 400},
        {direction: "3", turntype: 2, targetTime: 3.3, speed: 400},
        {direction: "3", turntype: 0, targetTime: 3.4, speed: 400},
        {direction: "1", turntype: 2, targetTime: 3.5, speed: 400},
        {direction: "2", turntype: 0, targetTime: 3.6, speed: 400},
        {direction: "4", turntype: 3, targetTime: 3.7, speed: 400},
        {direction: "4", turntype: 0, targetTime: 3.8, speed: 400},
        {direction: "2", turntype: 3, targetTime: 3.9, speed: 400},
        {direction: "1", turntype: 0, targetTime: 4.0, speed: 400},
        {direction: "3", turntype: 2, targetTime: 4.1, speed: 400},
        {direction: "3", turntype: 0, targetTime: 4.2, speed: 400},
        {direction: "1", turntype: 2, targetTime: 4.3, speed: 400},
        {direction: "2", turntype: 0, targetTime: 4.4, speed: 400},
        {direction: "4", turntype: 3, targetTime: 4.5, speed: 400},
        {direction: "4", turntype: 0, targetTime: 4.6, speed: 400},
        {direction: "2", turntype: 3, targetTime: 4.7, speed: 400},
        {direction: "1", turntype: 0, targetTime: 4.8, speed: 400},
        {direction: "3", turntype: 2, targetTime: 4.9, speed: 400},
        {direction: "3", turntype: 0, targetTime: 5.0, speed: 400},
        {direction: "1", turntype: 3, targetTime: 5.1, speed: 400},
        {direction: "2", turntype: 0, targetTime: 5.2, speed: 400},
        {direction: "4", turntype: 2, targetTime: 5.3, speed: 400},
        {direction: "4", turntype: 0, targetTime: 5.4, speed: 400},
        {direction: "2", turntype: 3, targetTime: 5.5, speed: 400},
        {direction: "1", turntype: 0, targetTime: 5.6, speed: 400},
        {direction: "3", turntype: 2, targetTime: 5.7, speed: 400},
        {direction: "3", turntype: 0, targetTime: 5.8, speed: 400},
        {direction: "1", turntype: 3, targetTime: 5.9, speed: 400},
        {direction: "2", turntype: 0, targetTime: 6.0, speed: 400},
        {direction: "4", turntype: 2, targetTime: 6.1, speed: 400},
        {direction: "4", turntype: 0, targetTime: 6.2, speed: 400},
        {direction: "2", turntype: 3, targetTime: 6.3, speed: 400}
    ],
    nextSets: ["gSp4"]
};

var gSp4 = {
    type: "spear",
    nextTime: 6.4,
    bufferTime: 0.8,
    spearInterval: 200,
    nextSets: ["gAg7"]
};

var gAg7 = {
    type: "arrow",
    id: "gAg7",
    nextTime: 6.4,
    arrows: [
        {direction: "R", turntype: 0, targetTime: 0.0, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 0.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 0.2, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 0.3, speed: 400},
        {direction: "R", turntype: 0, targetTime: 0.4, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 0.5, speed: 400},
        {direction: "R", turntype: 0, targetTime: 0.6, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 0.7, speed: 400},
        {direction: "R", turntype: 0, targetTime: 0.8, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 0.9, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.0, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 1.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.2, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 1.3, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.4, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 1.5, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.6, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 1.7, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.8, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 1.9, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.0, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 2.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.2, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 2.3, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.4, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 2.5, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.6, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 2.7, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.8, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 2.9, speed: 400},
        {direction: "R", turntype: 0, targetTime: 3.0, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 3.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 3.2, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 3.3, speed: 400},
        {direction: "R", turntype: 0, targetTime: 3.4, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 3.5, speed: 400},
        {direction: "R", turntype: 0, targetTime: 3.6, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 3.7, speed: 400},
        {direction: "R", turntype: 0, targetTime: 3.8, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 3.9, speed: 400},
        {direction: "R", turntype: 0, targetTime: 4.0, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 4.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 4.2, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 4.3, speed: 400},
        {direction: "R", turntype: 0, targetTime: 4.4, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 4.5, speed: 400},
        {direction: "R", turntype: 0, targetTime: 4.6, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 4.7, speed: 400},
        {direction: "R", turntype: 0, targetTime: 4.8, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 4.9, speed: 400},
        {direction: "R", turntype: 0, targetTime: 5.0, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 5.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 5.2, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 5.3, speed: 400},
        {direction: "R", turntype: 0, targetTime: 5.4, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 5.5, speed: 400},
        {direction: "R", turntype: 0, targetTime: 5.6, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 5.7, speed: 400},
        {direction: "R", turntype: 0, targetTime: 5.8, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 5.9, speed: 400},
        {direction: "R", turntype: 0, targetTime: 6.0, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 6.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 6.2, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 6.3, speed: 400}
    ],
    nextSets: ["gPk3"]
};

var gPk3 = {
    type: "pike",
    nextTime: 6.4,
    bufferTime: 0.8,
    pikeInterval: 400,
    down: true,
    nextSets: ["gAg8"]
};

var gAg8 = {
    type: "arrow",
    id: "gAg7",
    nextTime: 6.4,
    arrows: [
        {direction: "R", turntype: 0, targetTime: 0.0, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 0.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 0.2, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 0.3, speed: 400},
        {direction: "R", turntype: 0, targetTime: 0.4, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 0.5, speed: 400},
        {direction: "R", turntype: 0, targetTime: 0.6, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 0.7, speed: 400},
        {direction: "R", turntype: 0, targetTime: 0.8, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 0.9, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.0, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 1.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.2, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 1.3, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.4, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 1.5, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.6, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 1.7, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.8, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 1.9, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.0, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 2.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.2, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 2.3, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.4, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 2.5, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.6, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 2.7, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.8, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 2.9, speed: 400},
        {direction: "R", turntype: 0, targetTime: 3.0, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 3.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 3.2, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 3.3, speed: 400},
        {direction: "R", turntype: 0, targetTime: 3.4, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 3.5, speed: 400},
        {direction: "R", turntype: 0, targetTime: 3.6, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 3.7, speed: 400},
        {direction: "R", turntype: 0, targetTime: 3.8, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 3.9, speed: 400},
        {direction: "R", turntype: 0, targetTime: 4.0, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 4.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 4.2, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 4.3, speed: 400},
        {direction: "R", turntype: 0, targetTime: 4.4, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 4.5, speed: 400},
        {direction: "R", turntype: 0, targetTime: 4.6, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 4.7, speed: 400},
        {direction: "R", turntype: 0, targetTime: 4.8, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 4.9, speed: 400},
        {direction: "R", turntype: 0, targetTime: 5.0, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 5.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 5.2, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 5.3, speed: 400},
        {direction: "R", turntype: 0, targetTime: 5.4, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 5.5, speed: 400},
        {direction: "R", turntype: 0, targetTime: 5.6, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 5.7, speed: 400},
        {direction: "R", turntype: 0, targetTime: 5.8, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 5.9, speed: 400},
        {direction: "R", turntype: 0, targetTime: 6.0, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 6.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 6.2, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 6.3, speed: 400}
    ],
    nextSets: ["gCa1"]
};

var gCa1 = {
    type: "circlespear",
    nextTime: 9.6,
    bufferTime: 0.8,
    spearInterval: 1200,
    spearCount: 7,
    nextSets: ["gAg9"]
};

var gAg9 = {
    type: "arrow",
    nextTime: 9.6,
    arrows: [
        {direction: "R", turntype: 0, targetTime: 0.0, speed: 500},
        {direction: "R", turntype: 0, targetTime: 0.2, speed: 500},
        {direction: "R", turntype: 0, targetTime: 0.4, speed: 500},
        {direction: "R", turntype: 0, targetTime: 0.6, speed: 500},
        {direction: "R", turntype: 0, targetTime: 0.8, speed: 500},
        {direction: "R", turntype: 0, targetTime: 1.0, speed: 500},
        {direction: "R", turntype: 0, targetTime: 1.2, speed: 500},
        
        {direction: "R", turntype: 3, targetTime: 1.6, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 1.8, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 2.0, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 2.2, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 2.4, speed: 400},
        
        {direction: "R", turntype: 0, targetTime: 3.0, speed: 500},
        {direction: "R", turntype: 0, targetTime: 3.6, speed: 500},
        {direction: "R", turntype: 0, targetTime: 4.2, speed: 500},
        
        {direction: "R", turntype: 0, targetTime: 4.8, speed: 500},
        {direction: "R", turntype: 0, targetTime: 5.0, speed: 500},
        {direction: "R", turntype: 0, targetTime: 5.2, speed: 500},
        {direction: "R", turntype: 0, targetTime: 5.4, speed: 500},
        {direction: "R", turntype: 0, targetTime: 5.6, speed: 500},
        {direction: "R", turntype: 0, targetTime: 5.8, speed: 500},
        {direction: "R", turntype: 0, targetTime: 6.0, speed: 500},
        
        {direction: "R", turntype: 3, targetTime: 6.4, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 6.6, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 6.8, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 7.0, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 7.2, speed: 400},
        {direction: "R", turntype: 0, targetTime: 7.6, speed: 400},
        {direction: "R", turntype: 0, targetTime: 8.0, speed: 400},
        {direction: "0", turntype: 0, targetTime: 8.3, speed: 300},
        {direction: "+1", turntype: 0, targetTime: 8.35, speed: 300},
        {direction: "+1", turntype: 0, targetTime: 8.4, speed: 300}
    ],
    nextSets: ["gSp5"]
};

var gSp5 = {
    type: "spear",
    nextTime: 4.8,
    bufferTime: 0.4,
    spearInterval: 200,
    nextSets: ["gAg10"]
};

var gAg10 = {
    type: "arrow",
    nextTime: 4.8,
    arrows: [
        {direction: "R", turntype: 0, targetTime: 0.0, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 0.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 0.2, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 0.3, speed: 400},
        {direction: "R", turntype: 0, targetTime: 0.4, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 0.5, speed: 400},
        {direction: "R", turntype: 0, targetTime: 0.6, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 0.7, speed: 400},
        {direction: "R", turntype: 0, targetTime: 0.8, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 0.9, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.0, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 1.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.2, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 1.3, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 1.4, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 1.5, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.6, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 1.7, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.8, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 1.9, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.0, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 2.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.2, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 2.3, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.4, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 2.5, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 2.6, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 2.7, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.8, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 2.9, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 3.0, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 3.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 3.2, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 3.3, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 3.4, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 3.5, speed: 400},
        {direction: "R", turntype: 0, targetTime: 3.6, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 3.7, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 3.8, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 3.9, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 4.0, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 4.1, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 4.2, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 4.3, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 4.4, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 4.5, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 4.6, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 4.7, speed: 400}
    ],
    nextSets: ["gSa1"]
};

var gSa1 = {
    type: "swarmspear",
    nextTime: 9.6,
    bufferTime: 0.8,
    spearInterval: 400,
    nextSets: ["gAg11"]
};

var gAg11 = {
    type: "arrow",
    nextTime: 4.8,
    arrows: [
        {direction: "R", turntype: 0, targetTime: 0.0, speed: 500},
        {direction: "R", turntype: 0, targetTime: 0.2, speed: 500},
        {direction: "R", turntype: 0, targetTime: 0.4, speed: 500},
        {direction: "R", turntype: 0, targetTime: 0.6, speed: 500},
        {direction: "R", turntype: 0, targetTime: 0.8, speed: 500},
        {direction: "R", turntype: 0, targetTime: 1.0, speed: 500},
        {direction: "+0", turntype: 2, targetTime: 1.2, speed: 500},
        
        {direction: "R", turntype: 0, targetTime: 1.6, speed: 400},
        {direction: "+0", turntype: 2, targetTime: 1.8, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 2.0, speed: 400},
        {direction: "+0", turntype: 2, targetTime: 2.2, speed: 400},
        
        {direction: "+0", turntype: 0, targetTime: 2.4, speed: 500},
        {direction: "+2", turntype: 2, targetTime: 2.5, speed: 500},
        {direction: "+2", turntype: 0, targetTime: 2.6, speed: 500},
        {direction: "+2", turntype: 3, targetTime: 2.7, speed: 500},
        {direction: "+2", turntype: 0, targetTime: 2.8, speed: 500},
        {direction: "+2", turntype: 2, targetTime: 2.9, speed: 500},
        {direction: "R", turntype: 0, targetTime: 3.0, speed: 500},
        {direction: "+2", turntype: 2, targetTime: 3.1, speed: 500},
        {direction: "+2", turntype: 0, targetTime: 3.2, speed: 500},
        {direction: "+2", turntype: 3, targetTime: 3.3, speed: 500},
        {direction: "+2", turntype: 0, targetTime: 3.4, speed: 500},
        {direction: "+2", turntype: 2, targetTime: 3.5, speed: 500},
        {direction: "R", turntype: 0, targetTime: 3.6, speed: 500},
        {direction: "+2", turntype: 2, targetTime: 3.7, speed: 500},
        {direction: "+2", turntype: 0, targetTime: 3.8, speed: 500},
        {direction: "+2", turntype: 3, targetTime: 3.9, speed: 500},
        {direction: "+2", turntype: 0, targetTime: 4.0, speed: 500},
        {direction: "+2", turntype: 2, targetTime: 4.1, speed: 500},
        {direction: "R", turntype: 0, targetTime: 4.2, speed: 500},
        {direction: "+2", turntype: 2, targetTime: 4.3, speed: 500},
        {direction: "+2", turntype: 0, targetTime: 4.4, speed: 500},
        {direction: "+2", turntype: 3, targetTime: 4.5, speed: 500},
        {direction: "+2", turntype: 0, targetTime: 4.6, speed: 500},
        {direction: "+2", turntype: 2, targetTime: 4.7, speed: 500}
    ],
    nextSets: ["gSa2"]
};

var gSa2 = {
    type: "circlespear",
    nextTime: 4.8,
    bufferTime: 0.8,
    spearInterval: 400,
    spearCount: 7,
    nextSets: ["gAg12"]
};

var gAg12 = {
    type: "arrow",
    nextTime: 4.8,
    arrows: [
        {direction: "R", turntype: 0, targetTime: 0.0, speed: 400},
        {direction: "+2", turntype: 2, targetTime: 0.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 0.2, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 0.3, speed: 400},
        {direction: "R", turntype: 0, targetTime: 0.4, speed: 400},
        {direction: "+2", turntype: 2, targetTime: 0.5, speed: 400},
        {direction: "R", turntype: 0, targetTime: 0.6, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 0.7, speed: 400},
        {direction: "R", turntype: 0, targetTime: 0.8, speed: 400},
        {direction: "+2", turntype: 2, targetTime: 0.9, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.0, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 1.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.2, speed: 400},
        {direction: "+2", turntype: 2, targetTime: 1.3, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 1.4, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 1.5, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.6, speed: 400},
        {direction: "+2", turntype: 2, targetTime: 1.7, speed: 400},
        {direction: "R", turntype: 0, targetTime: 1.8, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 1.9, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.0, speed: 400},
        {direction: "+2", turntype: 2, targetTime: 2.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.2, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 2.3, speed: 400},
        {direction: "R", turntype: 0, targetTime: 2.4, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 2.5, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 2.6, speed: 400},
        {direction: "+2", turntype: 2, targetTime: 2.7, speed: 400},
        {direction: "+0", turntype: 3, targetTime: 2.8, speed: 400},
        {direction: "+0", turntype: 2, targetTime: 2.9, speed: 400},
        {direction: "R", turntype: 0, targetTime: 3.0, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 3.1, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 3.2, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 3.3, speed: 400},
        {direction: "+0", turntype: 2, targetTime: 3.4, speed: 400},
        {direction: "+0", turntype: 3, targetTime: 3.5, speed: 400},
        {direction: "R", turntype: 0, targetTime: 3.6, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 3.7, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 3.8, speed: 400},
        {direction: "+2", turntype: 2, targetTime: 3.9, speed: 400},
        {direction: "+0", turntype: 3, targetTime: 4.0, speed: 400},
        {direction: "+0", turntype: 2, targetTime: 4.1, speed: 400},
        {direction: "R", turntype: 0, targetTime: 4.2, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 4.3, speed: 400},
        {direction: "+0", turntype: 0, targetTime: 4.4, speed: 400},
        {direction: "+2", turntype: 3, targetTime: 4.5, speed: 400},
        {direction: "+0", turntype: 2, targetTime: 4.6, speed: 400},
        {direction: "+0", turntype: 3, targetTime: 4.7, speed: 400}
    ],
    nextSets: ["gSp6"]
};

var gSp6 = {
    type: "spear",
    nextTime: 4.8,
    bufferTime: 0,
    spearInterval: 200,
    nextSets: ["g2Wait"]
};

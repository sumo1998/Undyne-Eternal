/**
 * Contains sample attacks for testing purposes.
 */
class TestAttacks {
    
    /**
     * Contains the array of test attacks.
     */
    #testAttacks;
    
    /**
     * Creates a TestAttacks instance that contains all of the test attacks.
     */
    constructor() {
        const attack1 = {
            nextTime: 3.2, clockwiseShift: false, arrows: [
                {direction: "2", reversed: false, targetTime: 0.0, speed: 100},
                {direction: "2", reversed: false, targetTime: 0.6, speed: 100},
                {direction: "2", reversed: false, targetTime: 1.2, speed: 100}
            ]
        };
        
        const attack2 = {
            nextTime: 4.5, clockwiseShift: false, arrows: [
                {direction: "2", reversed: false, targetTime: 0.0, speed: 150},
                {direction: "2", reversed: false, targetTime: 0.5, speed: 150},
                {direction: "1", reversed: false, targetTime: 1.0, speed: 150},
                {direction: "1", reversed: false, targetTime: 1.5, speed: 150},
                {direction: "3", reversed: false, targetTime: 2.0, speed: 150},
                {direction: "3", reversed: false, targetTime: 2.5, speed: 150}
            ]
        };
        
        const attack3 = {
            nextTime: 4.8, clockwiseShift: true, arrows: [
                {direction: "1", reversed: false, targetTime: 0.0, speed: 200},
                {direction: "3", reversed: false, targetTime: 0.4, speed: 200},
                {direction: "1", reversed: false, targetTime: 0.8, speed: 200},
                {direction: "3", reversed: false, targetTime: 1.2, speed: 200},
                {direction: "3", reversed: false, targetTime: 1.6, speed: 200},
                {direction: "1", reversed: false, targetTime: 2.0, speed: 200},
                {direction: "1", reversed: false, targetTime: 2.4, speed: 200},
                {direction: "0", reversed: false, targetTime: 2.8, speed: 200}
            ]
        };
        
        const attack4 = {
            nextTime: 4.85, clockwiseShift: true, arrows: [
                {direction: "0", reversed: false, targetTime: 0.0, speed: 250},
                {direction: "1", reversed: false, targetTime: 0.3, speed: 250},
                {direction: "2", reversed: false, targetTime: 0.6, speed: 250},
                {direction: "3", reversed: false, targetTime: 0.9, speed: 250},
                {direction: "0", reversed: false, targetTime: 1.2, speed: 250},
                {direction: "1", reversed: false, targetTime: 1.5, speed: 250},
                {direction: "2", reversed: false, targetTime: 1.8, speed: 250},
                {direction: "3", reversed: false, targetTime: 2.1, speed: 250},
                {direction: "0", reversed: false, targetTime: 2.4, speed: 250},
                {direction: "0", reversed: false, targetTime: 2.55, speed: 250},
                {direction: "0", reversed: false, targetTime: 2.7, speed: 250},
                {direction: "0", reversed: false, targetTime: 2.85, speed: 250}
            ]
        };
        
        const attack5 = {
            nextTime: 4.1, clockwiseShift: true, arrows: [
                {direction: "3", reversed: false, targetTime: 0.0, speed: 250},
                {direction: "2", reversed: false, targetTime: 0.3, speed: 250},
                {direction: "2", reversed: false, targetTime: 0.45, speed: 250},
                {direction: "1", reversed: false, targetTime: 0.75, speed: 250},
                {direction: "2", reversed: false, targetTime: 1.05, speed: 250},
                {direction: "2", reversed: false, targetTime: 1.2, speed: 250},
                {direction: "3", reversed: false, targetTime: 1.5, speed: 250},
                {direction: "2", reversed: false, targetTime: 1.8, speed: 250},
                {direction: "0", reversed: false, targetTime: 2.1, speed: 250}
            ]
        };
        
        const attack6 = {
            nextTime: 4.25, clockwiseShift: true, arrows: [
                {direction: "1", reversed: false, targetTime: 0.0, speed: 250},
                {direction: "2", reversed: false, targetTime: 0.25, speed: 250},
                {direction: "0", reversed: false, targetTime: 0.5, speed: 250},
                {direction: "3", reversed: false, targetTime: 0.75, speed: 250},
                {direction: "1", reversed: false, targetTime: 1.0, speed: 250},
                {direction: "2", reversed: false, targetTime: 1.25, speed: 250},
                {direction: "0", reversed: false, targetTime: 1.5, speed: 250},
                {direction: "3", reversed: false, targetTime: 1.75, speed: 250},
                {direction: "0", reversed: false, targetTime: 2.0, speed: 250},
                {direction: "2", reversed: false, targetTime: 2.25, speed: 250}
            ]
        };
        
        const attack7 = {
            nextTime: 4.0, clockwiseShift: true, arrows: [
                {direction: "0", reversed: false, targetTime: 0.0, speed: 300},
                {direction: "2", reversed: false, targetTime: 0.25, speed: 300},
                {direction: "0", reversed: false, targetTime: 0.5, speed: 300},
                {direction: "2", reversed: false, targetTime: 0.75, speed: 300},
                {direction: "2", reversed: false, targetTime: 1.0, speed: 300},
                {direction: "0", reversed: false, targetTime: 1.25, speed: 300},
                {direction: "2", reversed: false, targetTime: 1.5, speed: 300},
                {direction: "0", reversed: false, targetTime: 1.75, speed: 300}
            ]
        };
        
        const attack8 = {
            nextTime: 2.5, clockwiseShift: true, arrows: [
                {direction: "2", reversed: false, targetTime: 0.0, speed: 300},
                {direction: "3", reversed: false, targetTime: 0.25, speed: 300},
                {direction: "0", reversed: false, targetTime: 0.5, speed: 300},
                {direction: "2", reversed: false, targetTime: 0.75, speed: 300},
                {direction: "3", reversed: false, targetTime: 1.0, speed: 300},
                {direction: "0", reversed: false, targetTime: 1.25, speed: 300},
                {direction: "1", reversed: false, targetTime: 1.5, speed: 75}
            ]
        };
        
        const attack9 = {
            nextTime: 3.6, clockwiseShift: true, arrows: [
                {direction: "1", reversed: false, targetTime: 0.0, speed: 400},
                {direction: "1", reversed: false, targetTime: 0.2, speed: 320},
                {direction: "1", reversed: false, targetTime: 0.5, speed: 240},
                {direction: "3", reversed: false, targetTime: 0.9, speed: 400},
                {direction: "3", reversed: false, targetTime: 1.1, speed: 320},
                {direction: "3", reversed: false, targetTime: 1.4, speed: 240},
                {direction: "0", reversed: false, targetTime: 1.7, speed: 300},
                {direction: "2", reversed: false, targetTime: 2.0, speed: 300},
                {direction: "0", reversed: false, targetTime: 2.3, speed: 300},
                {direction: "2", reversed: false, targetTime: 2.6, speed: 300}
            ]
        };
        
        const attack10 = {
            nextTime: 3.75, clockwiseShift: true, arrows: [
                {direction: "3", reversed: false, targetTime: 0.0, speed: 200},
                {direction: "1", reversed: false, targetTime: 0.25, speed: 200},
                {direction: "3", reversed: false, targetTime: 0.5, speed: 200},
                {direction: "1", reversed: false, targetTime: 0.75, speed: 200},
                {direction: "1", reversed: false, targetTime: 0.9, speed: 300},
                {direction: "2", reversed: false, targetTime: 1.15, speed: 300},
                {direction: "0", reversed: false, targetTime: 1.4, speed: 300},
                {direction: "2", reversed: false, targetTime: 1.65, speed: 300},
                {direction: "2", reversed: false, targetTime: 2.0, speed: 400},
                {direction: "0", reversed: false, targetTime: 2.25, speed: 400},
                {direction: "3", reversed: false, targetTime: 2.5, speed: 400},
                {direction: "1", reversed: false, targetTime: 2.75, speed: 400}
            ]
        };
        
        const attack11 = {
            nextTime: 3.2, arrows: [
                {direction: "3", reversed: false, targetTime: 0.0, speed: 200},
                {direction: "1", reversed: false, targetTime: 0.4, speed: 200},
                {direction: "3", reversed: false, targetTime: 0.8, speed: 200},
                {direction: "1", reversed: false, targetTime: 1.2, speed: 200},
                {direction: "3", reversed: true, targetTime: 1.6, speed: 300}
            ]
        };
        
        const attack12 = {
            nextTime: 4.4, clockwiseShift: true, arrows: [
                {direction: "1", reversed: false, targetTime: 0.0, speed: 200},
                {direction: "3", reversed: false, targetTime: 0.4, speed: 200},
                {direction: "0", reversed: true, targetTime: 0.8, speed: 200},
                {direction: "0", reversed: false, targetTime: 1.2, speed: 200},
                {direction: "1", reversed: false, targetTime: 1.6, speed: 300},
                {direction: "3", reversed: false, targetTime: 2.0, speed: 300},
                {direction: "2", reversed: false, targetTime: 2.4, speed: 300},
                {direction: "0", reversed: true, targetTime: 2.8, speed: 300}
            ]
        };
        
        const attack13 = {
            nextTime: 4.4, clockwiseShift: true, arrows: [
                {direction: "1", reversed: false, targetTime: 0.0, speed: 200},
                {direction: "0", reversed: false, targetTime: 0.4, speed: 200},
                {direction: "3", reversed: false, targetTime: 0.8, speed: 200},
                {direction: "2", reversed: false, targetTime: 1.2, speed: 200},
                {direction: "3", reversed: true, targetTime: 2.0, speed: 300},
                {direction: "2", reversed: true, targetTime: 2.4, speed: 300},
                {direction: "1", reversed: true, targetTime: 2.8, speed: 300},
                {direction: "0", reversed: true, targetTime: 3.2, speed: 300}
            ]
        };
        
        const attack14 = {
            nextTime: 4.8, clockwiseShift: true, arrows: [
                {direction: "3", reversed: false, targetTime: 0.0, speed: 200},
                {direction: "3", reversed: false, targetTime: 0.35, speed: 200},
                {direction: "1", reversed: false, targetTime: 0.7, speed: 200},
                {direction: "1", reversed: false, targetTime: 1.05, speed: 200},
                {direction: "0", reversed: false, targetTime: 1.4, speed: 300},
                {direction: "2", reversed: true, targetTime: 1.75, speed: 300},
                {direction: "2", reversed: false, targetTime: 2.1, speed: 300},
                {direction: "0", reversed: true, targetTime: 2.45, speed: 300},
                {direction: "0", reversed: false, targetTime: 2.8, speed: 500},
                {direction: "3", reversed: false, targetTime: 3.3, speed: 500},
                {direction: "1", reversed: false, targetTime: 3.6, speed: 500}
            ]
        };
        
        const attack15 = {
            nextTime: 4.7, clockwiseShift: true, arrows: [
                {direction: "3", reversed: false, targetTime: 0.0, speed: 200},
                {direction: "2", reversed: false, targetTime: 0.35, speed: 200},
                {direction: "2", reversed: false, targetTime: 0.7, speed: 200},
                {direction: "2", reversed: true, targetTime: 1.6, speed: 200},
                {direction: "1", reversed: false, targetTime: 1.8, speed: 300},
                {direction: "2", reversed: false, targetTime: 2.6, speed: 300},
                {direction: "1", reversed: false, targetTime: 2.9, speed: 300},
                {direction: "3", reversed: true, targetTime: 3.2, speed: 300},
                {direction: "1", reversed: false, targetTime: 3.5, speed: 300}
            ]
        };
        
        const attack16 = {
            nextTime: 4.6, clockwiseShift: true, arrows: [
                {direction: "2", reversed: false, targetTime: 0.0, speed: 500},
                {direction: "3", reversed: false, targetTime: 0.4, speed: 500},
                {direction: "3", reversed: false, targetTime: 0.8, speed: 500},
                {direction: "0", reversed: false, targetTime: 1.2, speed: 500},
                {direction: "0", reversed: false, targetTime: 1.6, speed: 500},
                {direction: "3", reversed: false, targetTime: 2.0, speed: 500},
                {direction: "2", reversed: false, targetTime: 2.4, speed: 500},
                {direction: "3", reversed: false, targetTime: 2.8, speed: 500},
                {direction: "3", reversed: false, targetTime: 3.2, speed: 500},
                {direction: "2", reversed: false, targetTime: 3.6, speed: 500}
            ]
        };
        
        const attack17 = {
            nextTime: 4.5, clockwiseShift: true, arrows: [
                {direction: "1", reversed: false, targetTime: 0.0, speed: 300},
                {direction: "1", reversed: false, targetTime: 0.32, speed: 300},
                {direction: "1", reversed: false, targetTime: 0.64, speed: 300},
                {direction: "1", reversed: false, targetTime: 0.80, speed: 300},
                {direction: "1", reversed: false, targetTime: 0.96, speed: 300},
                {direction: "1", reversed: false, targetTime: 1.28, speed: 300},
                {direction: "3", reversed: true, targetTime: 1.60, speed: 300},
                {direction: "1", reversed: false, targetTime: 1.92, speed: 300},
                {direction: "3", reversed: true, targetTime: 2.24, speed: 300},
                {direction: "3", reversed: false, targetTime: 2.56, speed: 300},
                {direction: "1", reversed: true, targetTime: 2.88, speed: 300},
                {direction: "3", reversed: false, targetTime: 3.20, speed: 300},
                {direction: "1", reversed: true, targetTime: 3.52, speed: 300}
            ]
        };
        
        const attack18 = {
            nextTime: 4.5, clockwiseShift: true, arrows: [
                {direction: "3", reversed: true, targetTime: 0.0, speed: 300},
                {direction: "2", reversed: true, targetTime: 0.35, speed: 300},
                {direction: "1", reversed: true, targetTime: 0.7, speed: 300},
                {direction: "0", reversed: true, targetTime: 1.05, speed: 300},
                {direction: "3", reversed: true, targetTime: 1.4, speed: 300},
                {direction: "2", reversed: true, targetTime: 1.75, speed: 300},
                {direction: "1", reversed: true, targetTime: 2.1, speed: 300},
                {direction: "0", reversed: true, targetTime: 2.45, speed: 300},
                {direction: "3", reversed: true, targetTime: 2.8, speed: 300},
                {direction: "2", reversed: true, targetTime: 3.15, speed: 300},
                {direction: "1", reversed: true, targetTime: 3.5, speed: 300},
                {direction: "0", reversed: true, targetTime: 3.85, speed: 300}
            ]
        };
        
        const attack19 = {
            nextTime: 3.5, clockwiseShift: false, arrows: [
                {direction: "?", reversed: false, targetTime: 0.0, speed: 300},
                {direction: "?", reversed: false, targetTime: 0.3, speed: 300},
                {direction: "?", reversed: false, targetTime: 0.6, speed: 300},
                {direction: "?", reversed: false, targetTime: 0.8, speed: 300},
                {direction: "?", reversed: false, targetTime: 1.1, speed: 300},
                {direction: "?", reversed: false, targetTime: 1.4, speed: 300},
                {direction: "?", reversed: false, targetTime: 1.6, speed: 300},
                {direction: "?", reversed: false, targetTime: 1.9, speed: 300},
                {direction: "?", reversed: false, targetTime: 2.1, speed: 300},
                {direction: "?", reversed: false, targetTime: 2.4, speed: 300},
                {direction: "?", reversed: false, targetTime: 2.7, speed: 300}
            ]
        };
        
        const attack20 = {
            nextTime: 4.0, clockwiseShift: false, arrows: [
                {direction: "2", reversed: false, targetTime: 0.00, speed: 500},
                {direction: "2", reversed: false, targetTime: 0.15, speed: 500},
                {direction: "2", reversed: false, targetTime: 0.30, speed: 500},
                {direction: "2", reversed: false, targetTime: 0.45, speed: 500},
                {direction: "1", reversed: false, targetTime: 0.80, speed: 500},
                {direction: "2", reversed: false, targetTime: 0.95, speed: 500},
                {direction: "2", reversed: false, targetTime: 1.10, speed: 500},
                {direction: "2", reversed: false, targetTime: 1.25, speed: 500},
                {direction: "2", reversed: false, targetTime: 1.40, speed: 500},
                {direction: "3", reversed: false, targetTime: 1.65, speed: 500},
                {direction: "2", reversed: false, targetTime: 1.80, speed: 500},
                {direction: "2", reversed: false, targetTime: 1.95, speed: 500},
                {direction: "2", reversed: false, targetTime: 2.10, speed: 500},
                {direction: "2", reversed: false, targetTime: 2.25, speed: 500},
                {direction: "1", reversed: false, targetTime: 2.50, speed: 500},
                {direction: "2", reversed: false, targetTime: 2.65, speed: 500},
                {direction: "2", reversed: false, targetTime: 2.80, speed: 500},
                {direction: "2", reversed: false, targetTime: 2.95, speed: 500},
                {direction: "3", reversed: false, targetTime: 3.20, speed: 500},
                {direction: "2", reversed: false, targetTime: 3.35, speed: 500},
                {direction: "2", reversed: false, targetTime: 3.50, speed: 500},
                {direction: "2", reversed: false, targetTime: 3.65, speed: 500}
            ]
        };
        
        const attack21 = {
            nextTime: 5.0, clockwiseShift: true, arrows: [
                {direction: "0", reversed: false, targetTime: 0.0, speed: 300},
                {direction: "1", reversed: false, targetTime: 0.25, speed: 300},
                {direction: "2", reversed: false, targetTime: 0.5, speed: 300},
                {direction: "3", reversed: false, targetTime: 0.75, speed: 300},
                {direction: "2", reversed: true, targetTime: 1.0, speed: 300},
                {direction: "3", reversed: true, targetTime: 1.25, speed: 300},
                {direction: "0", reversed: true, targetTime: 1.5, speed: 300},
                {direction: "1", reversed: true, targetTime: 1.75, speed: 300},
                {direction: "0", reversed: true, targetTime: 2.5, speed: 300},
                {direction: "1", reversed: true, targetTime: 2.75, speed: 300},
                {direction: "2", reversed: true, targetTime: 3.0, speed: 300},
                {direction: "3", reversed: true, targetTime: 3.25, speed: 300},
                {direction: "2", reversed: false, targetTime: 3.5, speed: 300},
                {direction: "3", reversed: false, targetTime: 3.75, speed: 300},
                {direction: "0", reversed: false, targetTime: 4.0, speed: 300},
                {direction: "1", reversed: false, targetTime: 4.25, speed: 300}
            ]
        };
        
        const attack22 = {
            nextTime: 4.0, clockwiseShift: false, arrows: [
                {direction: "1", reversed: true, targetTime: 0.0, speed: 500},
                {direction: "2", reversed: false, targetTime: 0.15, speed: 500},
                {direction: "2", reversed: false, targetTime: 0.3, speed: 500},
                {direction: "2", reversed: false, targetTime: 0.45, speed: 500},
                {direction: "2", reversed: false, targetTime: 0.6, speed: 500},
                {direction: "3", reversed: true, targetTime: 0.85, speed: 500},
                {direction: "2", reversed: false, targetTime: 1.0, speed: 500},
                {direction: "2", reversed: false, targetTime: 1.15, speed: 500},
                {direction: "2", reversed: false, targetTime: 1.3, speed: 500},
                {direction: "2", reversed: false, targetTime: 1.45, speed: 500},
                {direction: "1", reversed: true, targetTime: 1.7, speed: 500},
                {direction: "2", reversed: false, targetTime: 1.85, speed: 500},
                {direction: "2", reversed: false, targetTime: 2.0, speed: 500},
                {direction: "2", reversed: false, targetTime: 2.15, speed: 500},
                {direction: "3", reversed: true, targetTime: 2.4, speed: 500},
                {direction: "2", reversed: false, targetTime: 2.55, speed: 500},
                {direction: "2", reversed: false, targetTime: 2.7, speed: 500},
                {direction: "2", reversed: false, targetTime: 2.85, speed: 500}
            ]
        };
        
        const attack23 = {
            nextTime: 4.8, clockwiseShift: true, arrows: [
                {direction: "0", reversed: false, targetTime: 0.0, speed: 300},
                {direction: "2", reversed: false, targetTime: 0.2, speed: 300},
                {direction: "0", reversed: false, targetTime: 0.4, speed: 300},
                {direction: "2", reversed: false, targetTime: 0.6, speed: 300},
                {direction: "1", reversed: false, targetTime: 1.2, speed: 300},
                {direction: "3", reversed: false, targetTime: 1.4, speed: 300},
                {direction: "1", reversed: false, targetTime: 1.6, speed: 300},
                {direction: "3", reversed: false, targetTime: 1.8, speed: 300},
                {direction: "0", reversed: false, targetTime: 2.4, speed: 300},
                {direction: "0", reversed: true, targetTime: 2.6, speed: 300},
                {direction: "0", reversed: false, targetTime: 2.8, speed: 300},
                {direction: "0", reversed: true, targetTime: 3.0, speed: 300},
                {direction: "1", reversed: false, targetTime: 3.6, speed: 300},
                {direction: "1", reversed: true, targetTime: 3.8, speed: 300},
                {direction: "1", reversed: false, targetTime: 4.0, speed: 300},
                {direction: "1", reversed: true, targetTime: 4.2, speed: 300}
            ]
        };
        
        const attack24 = {
            nextTime: 5.5, clockwiseShift: true, arrows: [
                {direction: "0", reversed: true, targetTime: 0.0, speed: 300},
                {direction: "1", reversed: true, targetTime: 0.3, speed: 300},
                {direction: "2", reversed: true, targetTime: 0.6, speed: 300},
                {direction: "3", reversed: true, targetTime: 0.9, speed: 300},
                {direction: "0", reversed: true, targetTime: 1.2, speed: 300},
                {direction: "1", reversed: true, targetTime: 1.5, speed: 300},
                {direction: "2", reversed: true, targetTime: 1.8, speed: 300},
                {direction: "3", reversed: true, targetTime: 2.1, speed: 300},
                {direction: "0", reversed: true, targetTime: 2.4, speed: 300},
                {direction: "2", reversed: true, targetTime: 2.7, speed: 300},
                {direction: "1", reversed: true, targetTime: 3.0, speed: 300},
                {direction: "3", reversed: true, targetTime: 3.3, speed: 300},
                {direction: "0", reversed: true, targetTime: 3.6, speed: 300},
                {direction: "2", reversed: true, targetTime: 3.9, speed: 300},
                {direction: "1", reversed: true, targetTime: 4.2, speed: 300},
                {direction: "3", reversed: true, targetTime: 4.5, speed: 300}
            ]
        };
        
        const attack25 = {
            nextTime: 5.0, clockwiseShift: false, arrows: [
                {direction: "?", reversed: false, targetTime: 0.0, speed: 400},
                {direction: "?", reversed: true, targetTime: 0.2, speed: 400},
                {direction: "?", reversed: false, targetTime: 0.6, speed: 400},
                {direction: "?", reversed: true, targetTime: 0.8, speed: 400},
                {direction: "?", reversed: false, targetTime: 1.2, speed: 400},
                {direction: "?", reversed: true, targetTime: 1.4, speed: 400},
                {direction: "?", reversed: false, targetTime: 1.8, speed: 400},
                {direction: "?", reversed: true, targetTime: 2.0, speed: 400},
                {direction: "?", reversed: false, targetTime: 2.4, speed: 400},
                {direction: "?", reversed: true, targetTime: 2.6, speed: 400},
                {direction: "?", reversed: false, targetTime: 3.0, speed: 400},
                {direction: "?", reversed: true, targetTime: 3.2, speed: 400},
                {direction: "?", reversed: false, targetTime: 3.6, speed: 400},
                {direction: "?", reversed: true, targetTime: 3.8, speed: 400},
                {direction: "?", reversed: false, targetTime: 4.2, speed: 400},
                {direction: "?", reversed: true, targetTime: 4.4, speed: 400}
            ]
        };
        
        const attack26 = {
            nextTime: 4.2, clockwiseShift: false, arrows: [
                {direction: "?", reversed: false, targetTime: 0.0, speed: 500},
                {direction: "?", reversed: false, targetTime: 0.3, speed: 500},
                {direction: "?", reversed: false, targetTime: 0.6, speed: 500},
                {direction: "?", reversed: false, targetTime: 0.9, speed: 500},
                {direction: "?", reversed: false, targetTime: 1.2, speed: 500},
                {direction: "?", reversed: false, targetTime: 1.5, speed: 500},
                {direction: "?", reversed: false, targetTime: 1.8, speed: 500},
                {direction: "?", reversed: false, targetTime: 2.1, speed: 500},
                {direction: "?", reversed: false, targetTime: 2.4, speed: 500},
                {direction: "?", reversed: false, targetTime: 2.7, speed: 500},
                {direction: "?", reversed: false, targetTime: 3.0, speed: 500},
                {direction: "?", reversed: false, targetTime: 3.3, speed: 500},
                {direction: "?", reversed: false, targetTime: 3.6, speed: 500}
            ]
        };
        
        const attack27 = {
            nextTime: 3.7, clockwiseShift: false, arrows: [
                {direction: "?", reversed: false, targetTime: 0.0, speed: 500},
                {direction: "?", reversed: false, targetTime: 0.3, speed: 400},
                {direction: "?", reversed: false, targetTime: 0.6, speed: 300},
                {direction: "?", reversed: false, targetTime: 0.9, speed: 200},
                {direction: "?", reversed: false, targetTime: 1.0, speed: 500},
                {direction: "?", reversed: false, targetTime: 1.3, speed: 400},
                {direction: "?", reversed: false, targetTime: 1.5, speed: 300},
                {direction: "?", reversed: false, targetTime: 1.7, speed: 200},
                {direction: "?", reversed: false, targetTime: 2.0, speed: 500},
                {direction: "?", reversed: false, targetTime: 2.4, speed: 400},
                {direction: "?", reversed: false, targetTime: 2.5, speed: 300},
                {direction: "?", reversed: false, targetTime: 2.7, speed: 200},
                {direction: "?", reversed: false, targetTime: 2.8, speed: 500}
            ]
        };
        
        this.#testAttacks = {
            attack1,
            attack2,
            attack3,
            attack4,
            attack5,
            attack6,
            attack7,
            attack8,
            attack9,
            attack10,
            attack11,
            attack12,
            attack13,
            attack14,
            attack15,
            attack16,
            attack17,
            attack18,
            attack19,
            attack20,
            attack21,
            attack22,
            attack23,
            attack24,
            attack25,
            attack26,
            attack27
        };
    }
    
    /**
     * Returns the test attacks.
     * @returns The test attacks.
     */
    getTestAttacks() {
        return this.#testAttacks;
    }
}

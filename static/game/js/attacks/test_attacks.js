/**
 * Contains sample attacks for testing purposes.
 */
class TestAttacks {
    
    /**
     * Returns the test attacks.
     */
    static get testAttacks() {
        const attack1 = {
            nextTime: 3200, clockwiseShift: false, arrows: [
                {direction: "2", reversed: false, targetTime: 0, speed: 100},
                {direction: "2", reversed: false, targetTime: 600, speed: 100},
                {direction: "2", reversed: false, targetTime: 1200, speed: 100}
            ]
        };
        
        const attack2 = {
            nextTime: 4500, clockwiseShift: false, arrows: [
                {direction: "2", reversed: false, targetTime: 0, speed: 150},
                {direction: "2", reversed: false, targetTime: 500, speed: 150},
                {direction: "1", reversed: false, targetTime: 1000, speed: 150},
                {direction: "1", reversed: false, targetTime: 1500, speed: 150},
                {direction: "3", reversed: false, targetTime: 2000, speed: 150},
                {direction: "3", reversed: false, targetTime: 2500, speed: 150}
            ]
        };
        
        const attack3 = {
            nextTime: 4800, clockwiseShift: true, arrows: [
                {direction: "1", reversed: false, targetTime: 0, speed: 200},
                {direction: "3", reversed: false, targetTime: 400, speed: 200},
                {direction: "1", reversed: false, targetTime: 800, speed: 200},
                {direction: "3", reversed: false, targetTime: 1200, speed: 200},
                {direction: "3", reversed: false, targetTime: 1600, speed: 200},
                {direction: "1", reversed: false, targetTime: 2000, speed: 200},
                {direction: "1", reversed: false, targetTime: 2400, speed: 200},
                {direction: "0", reversed: false, targetTime: 2800, speed: 200}
            ]
        };
        
        const attack4 = {
            nextTime: 4850, clockwiseShift: true, arrows: [
                {direction: "0", reversed: false, targetTime: 0, speed: 250},
                {direction: "1", reversed: false, targetTime: 300, speed: 250},
                {direction: "2", reversed: false, targetTime: 600, speed: 250},
                {direction: "3", reversed: false, targetTime: 900, speed: 250},
                {direction: "0", reversed: false, targetTime: 1200, speed: 250},
                {direction: "1", reversed: false, targetTime: 1500, speed: 250},
                {direction: "2", reversed: false, targetTime: 1800, speed: 250},
                {direction: "3", reversed: false, targetTime: 2100, speed: 250},
                {direction: "0", reversed: false, targetTime: 2400, speed: 250},
                {direction: "0", reversed: false, targetTime: 2550, speed: 250},
                {direction: "0", reversed: false, targetTime: 2700, speed: 250},
                {direction: "0", reversed: false, targetTime: 2850, speed: 250}
            ]
        };
        
        const attack5 = {
            nextTime: 4100, clockwiseShift: true, arrows: [
                {direction: "3", reversed: false, targetTime: 0, speed: 250},
                {direction: "2", reversed: false, targetTime: 300, speed: 250},
                {direction: "2", reversed: false, targetTime: 450, speed: 250},
                {direction: "1", reversed: false, targetTime: 750, speed: 250},
                {direction: "2", reversed: false, targetTime: 1050, speed: 250},
                {direction: "2", reversed: false, targetTime: 1200, speed: 250},
                {direction: "3", reversed: false, targetTime: 1500, speed: 250},
                {direction: "2", reversed: false, targetTime: 1800, speed: 250},
                {direction: "0", reversed: false, targetTime: 2100, speed: 250}
            ]
        };
        
        const attack6 = {
            nextTime: 4250, clockwiseShift: true, arrows: [
                {direction: "1", reversed: false, targetTime: 0, speed: 250},
                {direction: "2", reversed: false, targetTime: 250, speed: 250},
                {direction: "0", reversed: false, targetTime: 500, speed: 250},
                {direction: "3", reversed: false, targetTime: 750, speed: 250},
                {direction: "1", reversed: false, targetTime: 1000, speed: 250},
                {direction: "2", reversed: false, targetTime: 1250, speed: 250},
                {direction: "0", reversed: false, targetTime: 1500, speed: 250},
                {direction: "3", reversed: false, targetTime: 1750, speed: 250},
                {direction: "0", reversed: false, targetTime: 2000, speed: 250},
                {direction: "2", reversed: false, targetTime: 2250, speed: 250}
            ]
        };
        
        const attack7 = {
            nextTime: 4000, clockwiseShift: true, arrows: [
                {direction: "0", reversed: false, targetTime: 0, speed: 300},
                {direction: "2", reversed: false, targetTime: 250, speed: 300},
                {direction: "0", reversed: false, targetTime: 500, speed: 300},
                {direction: "2", reversed: false, targetTime: 750, speed: 300},
                {direction: "2", reversed: false, targetTime: 1000, speed: 300},
                {direction: "0", reversed: false, targetTime: 1250, speed: 300},
                {direction: "2", reversed: false, targetTime: 1500, speed: 300},
                {direction: "0", reversed: false, targetTime: 1750, speed: 300}
            ]
        };
        
        const attack8 = {
            nextTime: 2500, clockwiseShift: true, arrows: [
                {direction: "2", reversed: false, targetTime: 0, speed: 300},
                {direction: "3", reversed: false, targetTime: 250, speed: 300},
                {direction: "0", reversed: false, targetTime: 500, speed: 300},
                {direction: "2", reversed: false, targetTime: 750, speed: 300},
                {direction: "3", reversed: false, targetTime: 1000, speed: 300},
                {direction: "0", reversed: false, targetTime: 1250, speed: 300},
                {direction: "1", reversed: false, targetTime: 1500, speed: 75}
            ]
        };
        
        const attack9 = {
            nextTime: 3600, clockwiseShift: true, arrows: [
                {direction: "1", reversed: false, targetTime: 0, speed: 400},
                {direction: "1", reversed: false, targetTime: 200, speed: 320},
                {direction: "1", reversed: false, targetTime: 500, speed: 240},
                {direction: "3", reversed: false, targetTime: 900, speed: 400},
                {direction: "3", reversed: false, targetTime: 1100, speed: 320},
                {direction: "3", reversed: false, targetTime: 1400, speed: 240},
                {direction: "0", reversed: false, targetTime: 1700, speed: 300},
                {direction: "2", reversed: false, targetTime: 2000, speed: 300},
                {direction: "0", reversed: false, targetTime: 2300, speed: 300},
                {direction: "2", reversed: false, targetTime: 2600, speed: 300}
            ]
        };
        
        const attack10 = {
            nextTime: 3750, clockwiseShift: true, arrows: [
                {direction: "3", reversed: false, targetTime: 0, speed: 200},
                {direction: "1", reversed: false, targetTime: 250, speed: 200},
                {direction: "3", reversed: false, targetTime: 500, speed: 200},
                {direction: "1", reversed: false, targetTime: 750, speed: 200},
                {direction: "1", reversed: false, targetTime: 900, speed: 300},
                {direction: "2", reversed: false, targetTime: 1150, speed: 300},
                {direction: "0", reversed: false, targetTime: 1400, speed: 300},
                {direction: "2", reversed: false, targetTime: 1650, speed: 300},
                {direction: "2", reversed: false, targetTime: 2000, speed: 400},
                {direction: "0", reversed: false, targetTime: 2250, speed: 400},
                {direction: "3", reversed: false, targetTime: 2500, speed: 400},
                {direction: "1", reversed: false, targetTime: 2750, speed: 400}
            ]
        };
        
        const attack11 = {
            nextTime: 3200, arrows: [
                {direction: "3", reversed: false, targetTime: 0, speed: 200},
                {direction: "1", reversed: false, targetTime: 400, speed: 200},
                {direction: "3", reversed: false, targetTime: 800, speed: 200},
                {direction: "1", reversed: false, targetTime: 1200, speed: 200},
                {direction: "3", reversed: true, targetTime: 1600, speed: 300}
            ]
        };
        
        const attack12 = {
            nextTime: 4400, clockwiseShift: true, arrows: [
                {direction: "1", reversed: false, targetTime: 0, speed: 200},
                {direction: "3", reversed: false, targetTime: 400, speed: 200},
                {direction: "0", reversed: true, targetTime: 800, speed: 200},
                {direction: "0", reversed: false, targetTime: 1200, speed: 200},
                {direction: "1", reversed: false, targetTime: 1600, speed: 300},
                {direction: "3", reversed: false, targetTime: 2000, speed: 300},
                {direction: "2", reversed: false, targetTime: 2400, speed: 300},
                {direction: "0", reversed: true, targetTime: 2800, speed: 300}
            ]
        };
        
        const attack13 = {
            nextTime: 4400, clockwiseShift: true, arrows: [
                {direction: "1", reversed: false, targetTime: 0, speed: 200},
                {direction: "0", reversed: false, targetTime: 400, speed: 200},
                {direction: "3", reversed: false, targetTime: 800, speed: 200},
                {direction: "2", reversed: false, targetTime: 1200, speed: 200},
                {direction: "3", reversed: true, targetTime: 2000, speed: 300},
                {direction: "2", reversed: true, targetTime: 2400, speed: 300},
                {direction: "1", reversed: true, targetTime: 2800, speed: 300},
                {direction: "0", reversed: true, targetTime: 3200, speed: 300}
            ]
        };
        
        const attack14 = {
            nextTime: 4800, clockwiseShift: true, arrows: [
                {direction: "3", reversed: false, targetTime: 0, speed: 200},
                {direction: "3", reversed: false, targetTime: 350, speed: 200},
                {direction: "1", reversed: false, targetTime: 700, speed: 200},
                {direction: "1", reversed: false, targetTime: 1050, speed: 200},
                {direction: "0", reversed: false, targetTime: 1400, speed: 300},
                {direction: "2", reversed: true, targetTime: 1750, speed: 300},
                {direction: "2", reversed: false, targetTime: 2100, speed: 300},
                {direction: "0", reversed: true, targetTime: 2450, speed: 300},
                {direction: "0", reversed: false, targetTime: 2800, speed: 500},
                {direction: "3", reversed: false, targetTime: 3300, speed: 500},
                {direction: "1", reversed: false, targetTime: 3600, speed: 500}
            ]
        };
        
        const attack15 = {
            nextTime: 4700, clockwiseShift: true, arrows: [
                {direction: "3", reversed: false, targetTime: 0, speed: 200},
                {direction: "2", reversed: false, targetTime: 350, speed: 200},
                {direction: "2", reversed: false, targetTime: 700, speed: 200},
                {direction: "2", reversed: true, targetTime: 1600, speed: 200},
                {direction: "1", reversed: false, targetTime: 1800, speed: 300},
                {direction: "2", reversed: false, targetTime: 2600, speed: 300},
                {direction: "1", reversed: false, targetTime: 2900, speed: 300},
                {direction: "3", reversed: true, targetTime: 3200, speed: 300},
                {direction: "1", reversed: false, targetTime: 3500, speed: 300}
            ]
        };
        
        const attack16 = {
            nextTime: 4600, clockwiseShift: true, arrows: [
                {direction: "2", reversed: false, targetTime: 0, speed: 500},
                {direction: "3", reversed: false, targetTime: 400, speed: 500},
                {direction: "3", reversed: false, targetTime: 800, speed: 500},
                {direction: "0", reversed: false, targetTime: 1200, speed: 500},
                {direction: "0", reversed: false, targetTime: 1600, speed: 500},
                {direction: "3", reversed: false, targetTime: 2000, speed: 500},
                {direction: "2", reversed: false, targetTime: 2400, speed: 500},
                {direction: "3", reversed: false, targetTime: 2800, speed: 500},
                {direction: "3", reversed: false, targetTime: 3200, speed: 500},
                {direction: "2", reversed: false, targetTime: 3600, speed: 500}
            ]
        };
        
        const attack17 = {
            nextTime: 4500, clockwiseShift: true, arrows: [
                {direction: "1", reversed: false, targetTime: 0, speed: 300},
                {direction: "1", reversed: false, targetTime: 320, speed: 300},
                {direction: "1", reversed: false, targetTime: 640, speed: 300},
                {direction: "1", reversed: false, targetTime: 800, speed: 300},
                {direction: "1", reversed: false, targetTime: 960, speed: 300},
                {direction: "1", reversed: false, targetTime: 1280, speed: 300},
                {direction: "3", reversed: true, targetTime: 1600, speed: 300},
                {direction: "1", reversed: false, targetTime: 1920, speed: 300},
                {direction: "3", reversed: true, targetTime: 2240, speed: 300},
                {direction: "3", reversed: false, targetTime: 2560, speed: 300},
                {direction: "1", reversed: true, targetTime: 2880, speed: 300},
                {direction: "3", reversed: false, targetTime: 3200, speed: 300},
                {direction: "1", reversed: true, targetTime: 3520, speed: 300}
            ]
        };
        
        const attack18 = {
            nextTime: 4500, clockwiseShift: true, arrows: [
                {direction: "3", reversed: true, targetTime: 0, speed: 300},
                {direction: "2", reversed: true, targetTime: 350, speed: 300},
                {direction: "1", reversed: true, targetTime: 700, speed: 300},
                {direction: "0", reversed: true, targetTime: 1050, speed: 300},
                {direction: "3", reversed: true, targetTime: 1400, speed: 300},
                {direction: "2", reversed: true, targetTime: 1750, speed: 300},
                {direction: "1", reversed: true, targetTime: 2100, speed: 300},
                {direction: "0", reversed: true, targetTime: 2450, speed: 300},
                {direction: "3", reversed: true, targetTime: 2800, speed: 300},
                {direction: "2", reversed: true, targetTime: 3150, speed: 300},
                {direction: "1", reversed: true, targetTime: 3500, speed: 300},
                {direction: "0", reversed: true, targetTime: 3850, speed: 300}
            ]
        };
        
        const attack19 = {
            nextTime: 3500, clockwiseShift: false, arrows: [
                {direction: "?", reversed: false, targetTime: 0, speed: 300},
                {direction: "?", reversed: false, targetTime: 300, speed: 300},
                {direction: "?", reversed: false, targetTime: 600, speed: 300},
                {direction: "?", reversed: false, targetTime: 800, speed: 300},
                {direction: "?", reversed: false, targetTime: 1100, speed: 300},
                {direction: "?", reversed: false, targetTime: 1400, speed: 300},
                {direction: "?", reversed: false, targetTime: 1600, speed: 300},
                {direction: "?", reversed: false, targetTime: 1900, speed: 300},
                {direction: "?", reversed: false, targetTime: 2100, speed: 300},
                {direction: "?", reversed: false, targetTime: 2400, speed: 300},
                {direction: "?", reversed: false, targetTime: 2700, speed: 300}
            ]
        };
        
        const attack20 = {
            nextTime: 4000, clockwiseShift: false, arrows: [
                {direction: "2", reversed: false, targetTime: 0, speed: 500},
                {direction: "2", reversed: false, targetTime: 150, speed: 500},
                {direction: "2", reversed: false, targetTime: 300, speed: 500},
                {direction: "2", reversed: false, targetTime: 450, speed: 500},
                {direction: "1", reversed: false, targetTime: 800, speed: 500},
                {direction: "2", reversed: false, targetTime: 950, speed: 500},
                {direction: "2", reversed: false, targetTime: 1100, speed: 500},
                {direction: "2", reversed: false, targetTime: 1250, speed: 500},
                {direction: "2", reversed: false, targetTime: 1400, speed: 500},
                {direction: "3", reversed: false, targetTime: 1650, speed: 500},
                {direction: "2", reversed: false, targetTime: 1800, speed: 500},
                {direction: "2", reversed: false, targetTime: 1950, speed: 500},
                {direction: "2", reversed: false, targetTime: 2100, speed: 500},
                {direction: "2", reversed: false, targetTime: 2250, speed: 500},
                {direction: "1", reversed: false, targetTime: 2500, speed: 500},
                {direction: "2", reversed: false, targetTime: 2650, speed: 500},
                {direction: "2", reversed: false, targetTime: 2800, speed: 500},
                {direction: "2", reversed: false, targetTime: 2950, speed: 500},
                {direction: "3", reversed: false, targetTime: 3200, speed: 500},
                {direction: "2", reversed: false, targetTime: 3350, speed: 500},
                {direction: "2", reversed: false, targetTime: 3500, speed: 500},
                {direction: "2", reversed: false, targetTime: 3650, speed: 500}
            ]
        };
        
        const attack21 = {
            nextTime: 5000, clockwiseShift: true, arrows: [
                {direction: "0", reversed: false, targetTime: 0, speed: 300},
                {direction: "1", reversed: false, targetTime: 250, speed: 300},
                {direction: "2", reversed: false, targetTime: 500, speed: 300},
                {direction: "3", reversed: false, targetTime: 750, speed: 300},
                {direction: "2", reversed: true, targetTime: 1000, speed: 300},
                {direction: "3", reversed: true, targetTime: 1250, speed: 300},
                {direction: "0", reversed: true, targetTime: 1500, speed: 300},
                {direction: "1", reversed: true, targetTime: 1750, speed: 300},
                {direction: "0", reversed: true, targetTime: 2500, speed: 300},
                {direction: "1", reversed: true, targetTime: 2750, speed: 300},
                {direction: "2", reversed: true, targetTime: 3000, speed: 300},
                {direction: "3", reversed: true, targetTime: 3250, speed: 300},
                {direction: "2", reversed: false, targetTime: 3500, speed: 300},
                {direction: "3", reversed: false, targetTime: 3750, speed: 300},
                {direction: "0", reversed: false, targetTime: 4000, speed: 300},
                {direction: "1", reversed: false, targetTime: 4250, speed: 300}
            ]
        };
        
        const attack22 = {
            nextTime: 4000, clockwiseShift: false, arrows: [
                {direction: "1", reversed: true, targetTime: 0, speed: 500},
                {direction: "2", reversed: false, targetTime: 150, speed: 500},
                {direction: "2", reversed: false, targetTime: 300, speed: 500},
                {direction: "2", reversed: false, targetTime: 450, speed: 500},
                {direction: "2", reversed: false, targetTime: 600, speed: 500},
                {direction: "3", reversed: true, targetTime: 850, speed: 500},
                {direction: "2", reversed: false, targetTime: 1000, speed: 500},
                {direction: "2", reversed: false, targetTime: 1150, speed: 500},
                {direction: "2", reversed: false, targetTime: 1300, speed: 500},
                {direction: "2", reversed: false, targetTime: 1450, speed: 500},
                {direction: "1", reversed: true, targetTime: 1700, speed: 500},
                {direction: "2", reversed: false, targetTime: 1850, speed: 500},
                {direction: "2", reversed: false, targetTime: 2000, speed: 500},
                {direction: "2", reversed: false, targetTime: 2150, speed: 500},
                {direction: "3", reversed: true, targetTime: 2400, speed: 500},
                {direction: "2", reversed: false, targetTime: 2550, speed: 500},
                {direction: "2", reversed: false, targetTime: 2700, speed: 500},
                {direction: "2", reversed: false, targetTime: 2850, speed: 500}
            ]
        };
        
        const attack23 = {
            nextTime: 4800, clockwiseShift: true, arrows: [
                {direction: "0", reversed: false, targetTime: 0, speed: 300},
                {direction: "2", reversed: false, targetTime: 200, speed: 300},
                {direction: "0", reversed: false, targetTime: 400, speed: 300},
                {direction: "2", reversed: false, targetTime: 600, speed: 300},
                {direction: "1", reversed: false, targetTime: 1200, speed: 300},
                {direction: "3", reversed: false, targetTime: 1400, speed: 300},
                {direction: "1", reversed: false, targetTime: 1600, speed: 300},
                {direction: "3", reversed: false, targetTime: 1800, speed: 300},
                {direction: "0", reversed: false, targetTime: 2400, speed: 300},
                {direction: "0", reversed: true, targetTime: 2600, speed: 300},
                {direction: "0", reversed: false, targetTime: 2800, speed: 300},
                {direction: "0", reversed: true, targetTime: 3000, speed: 300},
                {direction: "1", reversed: false, targetTime: 3600, speed: 300},
                {direction: "1", reversed: true, targetTime: 3800, speed: 300},
                {direction: "1", reversed: false, targetTime: 4000, speed: 300},
                {direction: "1", reversed: true, targetTime: 4200, speed: 300}
            ]
        };
        
        const attack24 = {
            nextTime: 5500, clockwiseShift: true, arrows: [
                {direction: "0", reversed: true, targetTime: 0, speed: 300},
                {direction: "1", reversed: true, targetTime: 300, speed: 300},
                {direction: "2", reversed: true, targetTime: 600, speed: 300},
                {direction: "3", reversed: true, targetTime: 900, speed: 300},
                {direction: "0", reversed: true, targetTime: 1200, speed: 300},
                {direction: "1", reversed: true, targetTime: 1500, speed: 300},
                {direction: "2", reversed: true, targetTime: 1800, speed: 300},
                {direction: "3", reversed: true, targetTime: 2100, speed: 300},
                {direction: "0", reversed: true, targetTime: 2400, speed: 300},
                {direction: "2", reversed: true, targetTime: 2700, speed: 300},
                {direction: "1", reversed: true, targetTime: 3000, speed: 300},
                {direction: "3", reversed: true, targetTime: 3300, speed: 300},
                {direction: "0", reversed: true, targetTime: 3600, speed: 300},
                {direction: "2", reversed: true, targetTime: 3900, speed: 300},
                {direction: "1", reversed: true, targetTime: 4200, speed: 300},
                {direction: "3", reversed: true, targetTime: 4500, speed: 300}
            ]
        };
        
        const attack25 = {
            nextTime: 5000, clockwiseShift: false, arrows: [
                {direction: "?", reversed: false, targetTime: 0, speed: 400},
                {direction: "?", reversed: true, targetTime: 200, speed: 400},
                {direction: "?", reversed: false, targetTime: 600, speed: 400},
                {direction: "?", reversed: true, targetTime: 800, speed: 400},
                {direction: "?", reversed: false, targetTime: 1200, speed: 400},
                {direction: "?", reversed: true, targetTime: 1400, speed: 400},
                {direction: "?", reversed: false, targetTime: 1800, speed: 400},
                {direction: "?", reversed: true, targetTime: 2000, speed: 400},
                {direction: "?", reversed: false, targetTime: 2400, speed: 400},
                {direction: "?", reversed: true, targetTime: 2600, speed: 400},
                {direction: "?", reversed: false, targetTime: 3000, speed: 400},
                {direction: "?", reversed: true, targetTime: 3200, speed: 400},
                {direction: "?", reversed: false, targetTime: 3600, speed: 400},
                {direction: "?", reversed: true, targetTime: 3800, speed: 400},
                {direction: "?", reversed: false, targetTime: 4200, speed: 400},
                {direction: "?", reversed: true, targetTime: 4400, speed: 400}
            ]
        };
        
        const attack26 = {
            nextTime: 4200, clockwiseShift: false, arrows: [
                {direction: "?", reversed: false, targetTime: 0, speed: 500},
                {direction: "?", reversed: false, targetTime: 300, speed: 500},
                {direction: "?", reversed: false, targetTime: 600, speed: 500},
                {direction: "?", reversed: false, targetTime: 900, speed: 500},
                {direction: "?", reversed: false, targetTime: 1200, speed: 500},
                {direction: "?", reversed: false, targetTime: 1500, speed: 500},
                {direction: "?", reversed: false, targetTime: 1800, speed: 500},
                {direction: "?", reversed: false, targetTime: 2100, speed: 500},
                {direction: "?", reversed: false, targetTime: 2400, speed: 500},
                {direction: "?", reversed: false, targetTime: 2700, speed: 500},
                {direction: "?", reversed: false, targetTime: 3000, speed: 500},
                {direction: "?", reversed: false, targetTime: 3300, speed: 500},
                {direction: "?", reversed: false, targetTime: 3600, speed: 500}
            ]
        };
        
        const attack27 = {
            nextTime: 3700, clockwiseShift: false, arrows: [
                {direction: "?", reversed: false, targetTime: 0, speed: 500},
                {direction: "?", reversed: false, targetTime: 300, speed: 400},
                {direction: "?", reversed: false, targetTime: 600, speed: 300},
                {direction: "?", reversed: false, targetTime: 900, speed: 200},
                {direction: "?", reversed: false, targetTime: 1000, speed: 500},
                {direction: "?", reversed: false, targetTime: 1300, speed: 400},
                {direction: "?", reversed: false, targetTime: 1500, speed: 300},
                {direction: "?", reversed: false, targetTime: 1700, speed: 200},
                {direction: "?", reversed: false, targetTime: 2000, speed: 500},
                {direction: "?", reversed: false, targetTime: 2400, speed: 400},
                {direction: "?", reversed: false, targetTime: 2500, speed: 300},
                {direction: "?", reversed: false, targetTime: 2700, speed: 200},
                {direction: "?", reversed: false, targetTime: 2800, speed: 500}
            ]
        };
        
        return [
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
        ];
    }
}

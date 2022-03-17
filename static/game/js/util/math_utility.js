/**
 * Math utility functions that can be generically used throughout the project.
 */
class MathUtility {
    
    /**
     * Approaches the given destination value by the given increment from the current value.
     * @param current The current value
     * @param destination The destination value
     * @param positiveIncrement The increment to go towards the destination
     * @return The result of approaching the given destination value by the given increment from the current value
     */
    static approach(current, destination, positiveIncrement) {
        if(current < destination) {
            return Math.min(current + positiveIncrement, destination);
        }
        else {
            return Math.max(current - positiveIncrement, destination);
        }
    }
    
    /**
     * Clamps value between clampStart and clampEnd and then uses the proportion of that clamped value between
     * clampStart and clampEnd to linearly interpolate between interpolateStart and interpolateEnd
     * @param value The value to clamp and use in interpolation
     * @param clampStart The minimum clamp value
     * @param clampEnd The maximum clamp value
     * @param interpolateStart The minimum interpolate value
     * @param interpolateEnd The maximum interpolate value
     * @return The result of clamping the value between clampEnd and clampStart and then using the proportion
     */
    static clampInterpolate(value, clampStart, clampEnd, interpolateStart, interpolateEnd) {
        //Case where value is on the side of the start (either less than [start, end] or greater than [end, start])
        if(value <= start && start <= end || end <= start && start <= value) {
            return interpolateStart;
        }
        //Case where value is on the side of the end (either greater than [start, end] or less than [end, start])
        else if(start < end && end < value || value < end && end < start) {
            return interpolateEnd;
        }
        const interpolateProportion = (value - clampStart) / (clampEnd - clampStart);
        return interpolateStart + (interpolateEnd - interpolateStart) * interpolateProportion;
    }
    
    /**
     * Returns the result of restricting the given value in the range [start, end) by wrapping the value. That is, once
     * the value is the ending value or beyond, it wraps around to the start, and when it goes below the starting
     * value, it wraps around to the end.
     * @param value The value to wrap
     * @param start The start of the wrapping range
     * @param end The end of the wrapping range
     * @return The result of wrapping the given value in the range [start, end)
     */
    static wrap(value, start, end) {
        return value + start - (end - start) * Math.floor(value / (end - start));
    }
    
    /**
     * Returns a time component in the form "XX:" where XX is 2-digits and 0-padded.
     * @param num The number to format
     * @return A time component in the form "XX:" where XX is 2-digits and 0-padded
     */
    static #formatTimePart(num) {
        return String(num).padStart(2, "0") + ":";
    }
    
    /**
     * Returns the number of time units that fits into the given number of time units, bounded by the given maximum
     * number of time units, and the milliseconds remaining.
     * @param ms The number of milliseconds
     * @param msInUnit The number of milliseconds in each time unit
     * @param maxUnit The maximum number of the given unit
     * @return The number of units and the number of remaining milliseconds
     */
    static #computeTimeUnitsAndRemainder(ms, msInUnit, maxUnit) {
        let numUnits = Math.floor(ms / msInUnit);
        
        /*
         * If the number of units exceeds the maximum, keep the number of units at max and set the remaining
         * milliseconds to the max remaining
         */
        if(numUnits > maxUnit) {
            numUnits = maxUnit;
            ms = msInUnit - 1;
        }
        else {
            ms -= numUnits * msInUnit;
        }
        
        return {
            "numUnits": numUnits,
            "remainingMs": ms
        };
    }
    
    /**
     * Returns a colon-separated time from the milliseconds that have the given max units, which can be hours, minutes,
     * seconds, and cs
     * @param ms The number of milliseconds to format
     * @param maxUnit The maximum unit of time permitted, which can be "hours", "minutes", "seconds", or "cs"
     * @return A colon-separated time from the milliseconds that have the given max units, which can be hours, minutes,
     *     seconds, and cs
     */
    static formatTime(ms, maxUnit) {
        const msInHour = 3600000;
        const msInMin = 60000;
        const msInSec = 1000;
        const msInCs = 10;
        
        let hours = "";
        let minutes = "";
        let seconds = "";
        let cs = "";
        
        let result;
        
        // noinspection FallThroughInSwitchStatementJS
        switch(maxUnit) {
            case "hours":
                result = this.#computeTimeUnitsAndRemainder(ms, msInHour, 59);
                const numHours = result.numUnits;
                ms = result.remainingMs;
                hours = MathUtility.#formatTimePart(numHours);
            case "minutes":
                result = this.#computeTimeUnitsAndRemainder(ms, msInMin, 59);
                const numMin = result.numUnits;
                ms = result.remainingMs;
                minutes = MathUtility.#formatTimePart(numMin);
            case "seconds":
                result = this.#computeTimeUnitsAndRemainder(ms, msInSec, 59);
                const numSec = result.numUnits;
                seconds = MathUtility.#formatTimePart(numSec);
            case "cs":
                result = this.#computeTimeUnitsAndRemainder(ms, msInCs, 99);
                const numCs = result.numUnits;
                cs = MathUtility.#formatTimePart(numCs);
                break;
        }
        
        return hours + minutes + seconds + cs;
    }
}

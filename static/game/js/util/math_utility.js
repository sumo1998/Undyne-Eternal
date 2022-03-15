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
}

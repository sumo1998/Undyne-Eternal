function formatTimeLong(ms) {

	var optDays = "", optHours = "";

	if (ms > 86400000) {
		optDays = Math.floor(ms / 86400000) + "/";
	} if (ms > 3600000) {
        optHours = String(Math.floor((ms % 86400000) / 3600000)).padStart(2, "0") + ":";
	}

	var minutes = String(Math.floor((ms % 3600000) / 60000)).padStart(2, "0") + ":";
	var seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0") + '.';
	var cs = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");

	return optDays + optHours + minutes + seconds + cs;

}


function clamp(v, start, end) {
	if (v < start && end > start || v > start && end < start) return start;
	if (v > end && end > start || v < end && end < start) return end;
	return v;
}

function interpolateClamp(v, start, end, fStart, fEnd) {
	/*
		a linear function that clamps function return values
		between min and max and then interpolates outputs between
		fStart and fEnd.
	*/
	if (v < start && end > start || v > start && end < start) return fStart;
	if (v > end && end > start || v < end && end < start) return fEnd;
	else return fStart + ((fEnd - fStart) * (v - start) / (end - start));
}


function dotProduct(a, b) {
	return a.x * b.x + a.y * b.y;
}


function vnorm(v) {
	return norm(v.x, v.y);
}

function norm(dx, dy) {
	return Math.sqrt(dx * dx + dy * dy);
}

function scalarMult(v, m){
	return { x: v.x * m, y: v.y * m };
}

/** XOR Operation in an array */


var xorOperation = function (n, start) {
	let result = start;

	for (let i = 1; i < n; i++) {
		result ^= start + 2 * i;
	}

	return result;
}
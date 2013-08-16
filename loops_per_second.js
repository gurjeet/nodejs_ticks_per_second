var killAfter = 5; // Seconds

var ix = 0;
var iy = 0;
var iz = 0;

var looper = function() {
	for(;;) {
		++ix;

		if ((ix % 1000000) === 0) {
			console.log(ix);
		}

		if (ix === 0 || ix < 0) {
			console.log(ix);
			process.exit(0);
/*			++iy;

			if (iy === 0) {
				++iz;
			}
*/		}

	}
}

looper();


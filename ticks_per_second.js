var i = 0;
var prev = 0;

var printIter = 0;
var printInterval = 1000;
var printIterMax = 20;

var avgDiff = 0;

var print = function() {
	++printIter;
	var diff = i - prev;
	avgDiff = ((avgDiff * (printIter-1)) + diff)/printIter;
	console.log(printIter + '. i: ' + i +', diff: ' + diff + ', avg: ' + avgDiff);
	prev = i;

	if (printIter === printIterMax) {
		console.log('Average: ' + avgDiff);
		process.exit(0);
	}
}

setInterval(print, printInterval);

var increment = function() {
	++i;
	setImmediate(increment);
}
increment();

console.log('Starting...');

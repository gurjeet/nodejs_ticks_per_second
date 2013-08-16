var sleepIter = 0;
var sleepInterval = 1000;
var sleepIterMax = 5;

wake = function() {
	console.log('Woke up. ' );
	++sleepIter;
	if (sleepIter === sleepIterMax) {
		process.exit(0);
	}
}

setInterval(wake, sleepInterval);

console.log('Starting...');

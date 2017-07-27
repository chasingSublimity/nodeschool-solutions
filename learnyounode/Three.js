var fs = require('fs');

function readAndLogFile(filePath) {
	var buffer = fs.readFileSync(filePath);
	var bufferString = buffer.toString();
	bufferString.split('/n');
}
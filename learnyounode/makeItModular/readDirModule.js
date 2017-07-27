const fs = require('fs');
const path = require('path');

function readAndFilterDir(dirName, extension, callback) {
	fs.readdir(dirName, (err, list) => {
		if (err) return callback(err);

		const filteredList = list.filter(fileName => {
			return path.extname(fileName) === ('.' + extension);
		});

		callback(null, filteredList);
	});
}

module.exports = readAndFilterDir;

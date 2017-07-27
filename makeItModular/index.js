const readAndFilterDir = require('./readDirModule');

const filePath = process.argv[2];
const extension = process.argv[3];

function logFiles(err, fileArray) {
	if (err) return err;
	fileArray.forEach(file => {
		console.log(file);
	});
}

readAndFilterDir(filePath, extension, logFiles);
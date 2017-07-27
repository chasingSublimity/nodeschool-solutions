const fs = require('fs');
const path = require('path')

const dirPath = process.argv[2];
const extension = '.' + process.argv[3];

fs.readdir(dirPath, (err, list) => {
	if (err) return err;
	const filesWithCorrectExtension = list.forEach(fileName => {
		const fileExtension = path.extname(fileName);
		if (fileExtension === extension) {
			console.log(fileName);
		}
	})
})

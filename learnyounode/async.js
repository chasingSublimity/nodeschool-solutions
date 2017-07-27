const fs = require('fs');

const path = process.argv[2];

fs.readFile(path, (err, buff) => {
	if (err) return err;
	const dataArray = buff.toString().split('\n');
	console.log(dataArray.length-1)

})
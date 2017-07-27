const http = require('http');

const url = process.argv[2];

http.get(url, res => {
	res.setEncoding('utf8');
	
	let finishedData = [];
	res.on('data', data => {
		finishedData.push(data);
	});

	res.on('end', () => {
		console.log(finishedData.join('').length);
		console.log(finishedData.join(''));
	});

	res.on('error', console.error);
}).on('error', console.error);
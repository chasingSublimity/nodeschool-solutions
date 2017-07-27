const http = require('http');
const url = require('url');

const port = process.argv[2];

const parseTimeEndpoint = '/api/parsetime';
const unixTimeEndpoint = '/api/unixtime';

const server = http.createServer((req, res) => {
	const urlObject = url.parse(req.url, true);

	if (urlObject.pathname === parseTimeEndpoint) {
		res.writeHead(200, {'Content-Type': 'application/json'});

		const date = new Date(urlObject.query.iso);
		const jsonData = {
			'hour': date.getHours(),
			'minute': date.getMinutes(),
			'second': date.getSeconds()
		};

		res.write(JSON.stringify(jsonData));

	} else if (urlObject.pathname === unixTimeEndpoint) {

		const date = new Date(urlObject.query.iso);

		const jsonData = {
			'unixtime': date.getTime()
		};

		res.write(JSON.stringify(jsonData));
	}

	res.end();
});

server.listen(port);
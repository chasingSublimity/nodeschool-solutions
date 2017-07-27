const net = require('net');

const port = process.argv[2];

const date = new Date();

var server = net.createServer((socket) => {
	socket.end(`${date.getFullYear()}-${'0' + (date.getMonth() + 1)}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}\n`);
});

server.listen(port);
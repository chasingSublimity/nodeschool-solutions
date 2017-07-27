const net = require('net');

const port = process.argv[2];

const date = new Date();

// console.log(port);
// console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`);

var server = net.createServer((socket) => {
	socket.write(`${date.getFullYear()}-${'0' + (date.getMonth() + 1)}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}\n`);
	socket.end();
});

server.listen(port);
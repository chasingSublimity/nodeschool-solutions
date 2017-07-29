const split = require('split');
const through = require('through2');
let count = 0;


const transform = through((line, _, next) => {
	count++;
	if (count % 2 === 0) {
		this.push(line.toString().toUpperCase());
	} else {
		this.push(line.toString().toLowerCase());
	}
	next();
});

process.stdin.pipe(split()).pipe(transform).pipe(process.stdin);
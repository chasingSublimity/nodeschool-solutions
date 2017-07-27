const fs = require('fs');
const file = process.argv[2];

const readableStream = fs.createReadStream(file);

readableStream.pipe(process.stdout);
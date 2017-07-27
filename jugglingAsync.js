const http = require('http');
const bl = require('bl');

const completedDataArray = [];
let count = 0;

function printData() {
	completedDataArray.forEach(result => {
		console.log(result);
	});
}


function getData(index) {
	http.get(process.argv[2+index], res => {
		res.pipe(bl((err, data) => {
			if (err) return err;

			completedDataArray[index] = data.toString();
			count++;

			if (count === 3) {
				printData();
			}
		}));
	});
}

for (let i=0;i<3; i++) {
	getData(i);
}
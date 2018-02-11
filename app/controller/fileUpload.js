import csv from 'fast-csv';
import fs from 'fs';
import stream, { Readable , Duplex} from 'stream';

const FileUpload = (req, res) => {
	debugger;
	console.log('req body****', req.body);
	// console.log('req.filebuffer**',req.file.buffer);
	// let fileStream = new Readable();
	// console.log('readable steram****', fileStream);

	// fileStream.push(req.file.buffer);
	csv
	.fromString(req.file.buffer.toString(), { headers: true})
		.on("data", function (data) {
			console.log('****', data);
	});

	// const stream = fs.createReadStream(req.file.buffer)
	// 					.pipe(csv.parse({headers: false}))
					// 	.on("data", function () {
					// 		console.log('**** hello data ***', data);
					//   });

	// csv
	// 	.fromStream(stream, { headers: ["Date", "Reference", , "Money In", " Money Out"] })
	// 	.on("data", function (data) {
	// 		console.log('**** hello data ***', data);
	// 	});

	res.send(`file received ${req.file.originalname}`);
};

export default FileUpload;
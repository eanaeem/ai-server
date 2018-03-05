'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fastCsv = require('fast-csv');

var _fastCsv2 = _interopRequireDefault(_fastCsv);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _stream = require('stream');

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileUpload = function FileUpload(req, res) {
	debugger;
	console.log('req body****', req.body);
	console.log('req.filebuffer**', req.file);
	// let fileStream = new Readable();
	// console.log('readable steram****', fileStream);

	// fileStream.push(req.file.buffer);
	_fastCsv2.default.fromString(req.file.buffer.toString(), { headers: true }).transform(function (data) {
		// const {Date, 'Money In': MoneyIn} = data;
		var Type = data.Type,
		    Tags = data.Tags;

		return {
			Type: Type,
			Tags: Tags
		};
	}).on("data", function (data) {
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

	res.send('file received ' + req.file.originalname);
};

exports.default = FileUpload;
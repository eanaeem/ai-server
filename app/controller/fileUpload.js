const FileUpload = (req, res) => {
	debugger;
	console.log('fileupload****', req.body);
	console.log('fileupload****', req.file);
	res.send('file received');
};

export default FileUpload;
// var http = require('http');
// var fs = require('fs');
// console.log("enter testreadstreamfile.js");
// http.createServer(function(req, res) {
// 	console.log("enter createServer");
//   // The filename is simple the local directory and tacks on the requested url
//   var filename = __dirname+req.url;

//   // This line opens the file as a readable stream
//   var readStream = fs.createReadStream(filename);

//   // This will wait until we know the readable stream is actually valid before piping
//   readStream.on('open', function () {
//     // This just pipes the read stream to the response object (which goes to the client)
//     readStream.pipe(res);
//   });

//   // This catches any errors that happen while creating the readable stream (usually invalid names)
//   readStream.on('error', function(err) {
//     res.end(err);
//   });

// }).listen(10099);


const express = require('express');
const app = express();
const port = 10001;
var http = require('http');
var fs = require('fs');

app.get('/readstm', function(req, res){
	console.log("enter readstm");
	// var filename = __dirname+req.url;
	var filename = "./doc/toto.pdf";
	var readStream = fs.createReadStream(filename);
	readStream.on('open', function () {
		readStream.pipe(res);
	});

	readStream.on('error', function(err) {
		res.end(err);
	});

	console.log("this pass 555");
});




app.listen(port, () => {
	console.log("Application is running on port "+port);
});
      
var http = require('http');
var fs = require('fs');

console.log("Download Start ...");

var file = fs.createWriteStream("tom.pdf");
var request = http.get("http://wiki.lib.sun.ac.za/images/c/ca/TLCL-13.07.pdf", function(response){
	response.pipe(file);
	file.on('finish', function(){
		file.close();
		console.log("Download Finished.");
	});
});

      
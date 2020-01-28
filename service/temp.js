const express = require('express');
const app = express();
const port = 10001;

app.get('/xxx', function(req, res){
	console.log("enter xxx");
	res.json({ mesage: "enter xxx res"});
});


// app.get('/', (req, res) => {
//   res.json({ message: 'temp!' })
// })


app.listen(port, () => {
	console.log("Application is running on port "+port);
});


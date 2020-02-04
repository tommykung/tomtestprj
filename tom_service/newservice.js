const express = require('express');
const app = express();
const port = 10001;

app.get('/patient', function(req, res){
	console.log("enter patient");
	res.json({ mesage: "enter patient res"});
});


// app.get('/', (req, res) => {
//   res.json({ message: 'temp!' })
// })


app.listen(port, () => {
	console.log("Application is running on port "+port);
});


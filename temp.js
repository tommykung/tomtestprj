const express = require('express');
const app = express();
const port = 10001;

app.get('/patient', function(req, res){
	console.log("enter patient");
	res.json({ mesage: "enter patient res"});
});


app.get('/', (req, res) => {
  console.log("enter default");   	
  res.json({ message: 'temp!' });
})

app.get('/test1', (req, res) => {
  console.log("enter default");   	
  res.json({ message: 'temp!' });
})

app.get('/testproxy', (req, res) => {
	console.log("enter testproxy");
	res.json({ message: 'enter testproxy'});
}) 


app.listen(port, () => {
	console.log("Application is running on port "+port);
});




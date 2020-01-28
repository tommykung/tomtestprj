const express = require('express');
const app = express();
const service = require('./service/service.js');
const port = 10002;

app.get('/peoples', function(req, res){
	console.log("enter peoples");
	service.findPeoplesInform(req, res); 
	// res.json({ mesage: "enter patient res"});
});

app.get('/peoples/insert/:name/:lastname/:age/:occupations', function(req, res){
	service.insertPeoples(req,res);
});

app.get('/sport/insert/:sportname/:name', function(req, res){
	console.log("enter sport insert");
	service.insertSport(req, res);
});

app.get('/test', function(req, res){
	console.log("enter test insert");
	service.testinst(req, res); 
});

// app.get('/patient/bloodgroup/:bloodgroup', function(req, res){
// 	console.log("enter patient bloodgroup");
// 	service.findPatientsByBloodGroup(req, res);
// });

// app.get('/', (req, res) => { 
//   res.json({ message: 'temp!' })
// })


app.listen(port, () => {
	console.log("Application is running on port "+port);
});


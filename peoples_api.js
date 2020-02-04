const express = require('express');
const app = express();
const service = require('./service/service.js');
const port = 10002;

app.get('/peoples', function(req, res){
	service.findPeoplesInform(req, res); 
});

app.get('/peoples/insert/:name/:lastname/:age/:occupations', function(req, res){
	service.insertPeoples(req,res);
});

app.get('/peoples/update/occupations/:name/:occupations', function(req, res){
	service.updateOccupations(req, res); 
});

app.get('/peoples/remove/:name', function(req, res){
	service.removePeoplesByName(req, res);
});

app.get('/sport/insert/:sportname/:name', function(req, res){
	console.log("enter sport insert");
	service.insertSport(req, res);
});

app.get('/heartratezone', function(req, res){
	console.log("enter heartratezone");
	service.findHeartrateZone(req, res);
});   

app.get('/test', function(req, res){
	console.log("enter test insert");
	service.testinst(req, res); 
});

// app.get('/', (req, res) => { 
//   res.json({ message: 'temp!' })
// })


app.listen(port, () => {
	console.log("Application is running on port "+port);
});


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

app.get('/testfor', function(req, res){
	console.log("enter test for");
	service.testfor(req, res); 
}); 

app.get('/testfor2', function(req, res){
	console.log("enter test for2");
	service.testfor2(req, res); 
}); 

app.get('/testasync', function(req, res){
	console.log("enter testasync");
	service.testasync(req, res); 
}); 

app.get('/testasyncone', function(req, res){
	console.log("enter testasyncone");
	service.testasyncone(req, res);  
}); 

app.get('/infohospitals', function(req, res){
	console.log("enter infohospitals");
	service.findInfoHospitals(req, res);
});

app.get('/grpspecialties', function(req, res){
	console.log("enter findGrpSpecialties");
	service.findGrpSpecialties(req, res);
});

app.get('/testcovdate/:name', function(req, res){
	console.log("enter testcovdate");
	service.instConvDate(req, res);
});

app.get('/xxx', function(req, res){
	console.log("enter temp");
});

// app.get('/', (req, res) => { 
//   res.json({ message: 'temp!' })
// })


app.listen(port, () => {
	console.log("Application is running on port "+port);
});


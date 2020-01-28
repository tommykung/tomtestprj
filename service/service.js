const express = require("express"); 
const mongoClient = require('mongodb').MongoClient;


module.exports.findTemp = function (req, res) {
	console.log("enter patient module");
	mongoClient.connect('mongodb://localhost:27017', (err, client) => {
		if (err) throw err;
		const db = client.db('dbname');
		db.collection('tablename').find().toArray(function(err, result){
			if (err) throw err;
			/* Exam Access Data
				console.log(result[0].name);
				console.log(result[0].name[1].given);
				console.log(JSON.stringify(result));
				console.log(result); 
			*/
			// res.send(JSON.stringify(result));
			res.send(JSON.stringify(result));
		});
 
	});
}

module.exports.findPeoplesInform = function (req, res) {
	mongoClient.connect('mongodb://localhost:27017', (err, client) => {
		if (err) throw err;
		const db = client.db('tomproject');
		db.collection('peoples').aggregate([
		    { $lookup:
		       {
		         from: 'occupations',
		         localField: 'occupations',
		         foreignField: 'name',
		         as: 'occupationsdetail'
		       }
		     }
	    ]).toArray(function(err, result){
	    	if (err) throw err;
	    	res.send(JSON.stringify(result));
	    });
	});
}

module.exports.insertSport = function (req, res) {
	console.log("enter insertSport ");
	mongoClient.connect('mongodb://localhost:27017', (err, client) => {
		if (err) throw err;
		const db = client.db('tomproject');
		db.collection('sport').insert({
			"sportname": req.params.sportname,
			"name": req.params.name
		}, function(err, res) {
		    if (err) throw err;
		    console.log("1 document inserted");
		    db.close();
		});
	}); 
}

module.exports.insertPeoples = function (req, res) {
	var self_res = res;
	mongoClient.connect('mongodb://localhost:27017', (err, client) => { 
		if (err) throw err;
		const db = client.db('tomproject');
		db.collection('peoples').insert({
			"name" : req.params.name,
			"lastname" : req.params.lastname,
			"age" : req.params.age,
			"occupations" : req.params.occupations
		}, function(err, res){
			if (err) throw err	
			console.log("1 people inserted");
			self_res.send(JSON.stringify({ "result": "success" }));  
			// db.close();
		});

	});
}

// module.exports.testinst = function (req, res) {
// 	var MongoClient = require('mongodb').MongoClient;
// 	var url = "mongodb://localhost:27017/";

// 	MongoClient.connect(url, function(err, db) {
// 	  if (err) throw err;
// 	  var dbo = db.db("mydb");
// 	  var myobj = { name: "Company Inc", address: "Highway 37" };
// 	  dbo.collection("customers").insertOne(myobj, function(err, res) {
// 	    if (err) throw err;
// 	    console.log("1 document inserted");
// 	    db.close();
// 	  });
// 	});
// }

// module.exports.xxx = function () {
	
// }


// module.exports.showParams = function (req, res) {
// 	console.log("enter showRet")
// 	res.send(JSON.stringify({
// 		mode: req.params.mode,
// 		specific: req.params.specific,
// 		environment: req.params.environment,
// 		by: req.params.by
// 	}))
// }






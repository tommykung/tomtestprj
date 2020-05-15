const express = require("express"); 
const mongoClient = require('mongodb').MongoClient; 

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

module.exports.findHeartrateZone = function (req, res) {
	console.log("enter findHeartrateZone service");
	mongoClient.connect('mongodb://localhost:27017', (err, client) => { 
		if (err) {
			throw err;
			res.send(JSON.stringify({ "err": "error" }));
		}else{	
			const db = client.db("tomproject");
			db.collection("heartratezone").find().toArray(function (err, result){
				if(err) {
					throw err;
					res.send(JSON.stringify({ "err": "error" }));    
				}else{	
					res.send(JSON.stringify(result));
				}
			});
		}
	});
}

module.exports.updateOccupations = function (req, res){   
	console.log("enter updateOccupations");
	mongoClient.connect('mongodb://localhost:27017', (err, client) => {
		if (err) {
			throw err;
			res.send(JSON.stringify({ "result": "error" }));
		}else{
			const db = client.db("tomproject"); 
			db.collection("peoples").update(  
				{ "name" : req.params.name },
				{ $set: 
					{
						"occupations" : req.params.occupations   
					}
				}
			);

			res.send(JSON.stringify({ "result": "success" }));     
		}
	});
}
   
module.exports.removePeoplesByName = function(req, res) {
	console.log("enter removePeoplesByName"); 
	mongoClient.connect('mongodb://localhost:27017', (err, client) =>{
		if (err) {
			throw err; 
			res.send(JSON.stringify({ "result": "error" }));
		}else{
			const db = client.db("tomproject");
			db.collection("peoples").remove({ "name": req.params.name });
			res.send(JSON.stringify({ "result": "success" }));
		}
	});
}
 
module.exports.findInfoHospitals = function(req, res) {
	console.log("enter findInfoHospitals");
	mongoClient.connect('mongodb://localhost:27017', (err, client) =>{
		if (err) {
			throw err;
			res.send(JSON.stringify({"result": "fault"}));
		}else{
			const db = client.db("BDMSHealthpassport");
			db.collection("infohospitals").find().toArray(function (err, result){
				console.log("enter return infohospitals");
				res.send(JSON.stringify(result));
			});  
		}
	});
} 

module.exports.findGrpSpecialties = function(req, res){
	console.log("enter findGrpSpecialties"); 
	mongoClient.connect('mongodb://localhost:27017', (err, client) => {
		if(err) {
			throw err;
			res.send(JSON.stringify({"result": "fault"}));
		}else{
			const db = client.db("BDMSHealthpassport");
			db.collection("groupspecialties").find().toArray(function (err, result){
				console.log("enter return groupspecialties");
				res.send(JSON.stringify(result));
			});
		}
	});
}

module.exports.testfor = function(req, res) {
	console.log("enter testformodule");
	let data = [];
	let tmp = {};
	for(let i = 0;i < 100; i++){
		mongoClient.connect('mongodb://localhost:27017', (err, client) => {
			if (err) throw err;
			const db = client.db('tomproject');
			db.collection('peoples').find().toArray(function(err, result){
		    	if (err) throw err;
		    	tmp.id = i+1;
		    	tmp.name = result[0].name;
		    	tmp.lastname = result[0].lastname;
		    	tmp.age = result[0].age;
		    	tmp.occupations = result[0].occupations;
		    	console.log(tmp);
		    	data.push(tmp);
		    	tmp = {};
		    });
		});
	}
	console.log("out of for");
	// setTimeout(function(){  
	// 	res.send(JSON.stringify({data}));
	// }, 3000);
	res.send(JSON.stringify({data}));
	console.log("out2 of for"); 
}

module.exports.testfor2 = function(req, res) {
	var j = 10;
	for (var i = 0; i < j; i++) {
	    // asynchronousProcess(i, function(cntr) {
	    //     console.log(cntr);
	    // });
	}
	console.log("enter testfor2 module exports"); 
}


module.exports.instConvDate = function (req, res) {
	console.log("enter instConvDate");
	var self_res = res;
	var datetime = new Date().toLocaleString();
	// var datetime = new Date().toISOString();
	// var datetime = new Date();
	console.log("datetime iso default = "+datetime);     
	mongoClient.connect('mongodb://localhost:27017', (err, client) => { 
		if (err) throw err;
		const db = client.db('tomproject');
		db.collection('convdate').insert({
			"name" : req.params.name,
			"team" : 'b',
			"datetime" : datetime
		}, function(err, res){
			if (err) throw err	
			console.log("instConvDate inserted");
			self_res.send(JSON.stringify({ "result": "success" }));  
		});

	});
}
//-----------------------------------------------------------------------   
module.exports.testasyncone = function(req, res){
	console.log("enter module testasyncone");
	const fruitsToGet = ['apple', 'grape', 'pear']
	async (fruitsToGet) => {
	 for (let i = 0; i < items.length; i++) {
	    const result = await db.get(items[i]);
	    console.log("======== testasyncone =========");
	    // console.log(result); 
	  }
	}
	console.log("enter end"); 
}

module.exports.testasync = function(req, res) {
	doFirst(10);
}

async function doFirst(data) {		
  const a = await doA(data);
  const b = await doB(a);
  const c = await doC(b);  
  console.log("enter doFirst"); 
  console.log("result = "+ c);
}

function doA(data) {
	console.log("enter a");
	mongoClient.connect('mongodb://localhost:27017', (err, client) => {
		if (err) throw err;
		const db = client.db('BEXCHECKUP');
		db.collection('bexcheckups').find().toArray(function(err, result){
	    	console.log("=============== Result ===============");
	    	console.log(result);
	    	return 10;
	    });
	}); 
}

function doB(data) { 
	console.log("enter b");
	return data;
}

function doC(data) { 
	console.log("enter c");
	return data;
}
               
// ----------------------------------------------------------- 

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

// module.exports.findTemp = function (req, res) {
// 	console.log("enter patient module");
// 	mongoClient.connect('mongodb://localhost:27017', (err, client) => {
// 		if (err) throw err;
// 		const db = client.db('dbname');
// 		db.collection('tablename').find().toArray(function(err, result){
// 			if (err) throw err;
// 			 Exam Access Data
// 				console.log(result[0].name);
// 				console.log(result[0].name[1].given);
// 				console.log(JSON.stringify(result));
// 				console.log(result); 
			
// 			res.send(JSON.stringify(result));
// 			res.send(JSON.stringify(result));
// 		});
 
// 	});
// }   










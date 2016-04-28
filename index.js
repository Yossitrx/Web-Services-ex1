'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var Students = require("./students");
//var eventConfig = require("./config");

var app = express(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
var port = process.env.PORT || 3000;

//creating object from
var StudentsController = new Students();

//obtaining url
app.all('*',function (req,res,next){
	console.log("connection was successfull");
	req.next();
});
//show all students 
app.get('/students',function(req,res){
	console.log("connection request 'show all students' was successfull");
	res.send(StudentsController.showAllStudents());
	res.end();
});

//show students by id 
app.get('/showId/:id',function(req,res){
	var id = req.params.id;
	console.log("connection request 'show student by Id' was successfull");
	res.send(StudentsController.showStudentsById(id));
	res.end();
});
//show student by year
app.get('/showYear/:year',function(req,res){
	var year = req.params.year;
	console.log("connection request 'show student by year' was successfull");
	res.send(StudentsController.showStudentsByYear(year));
	res.end();
});

app.listen(port);
console.log("listening on port: " + port);
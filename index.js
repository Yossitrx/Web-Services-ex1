'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var Students = require("./students");

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
//config the url students
app.get('/students',function(req,res){
	//console log successfull connection
	console.log("connection request 'show all students' was successfull");
	//activiting method to search by all students
	res.send(StudentsController.showAllStudents());
	res.end();
});

//show students by id 
//config the url Id
app.get('/showId/:id',function(req,res){
	//getting from url the Id
	var id = req.params.id;
	//console log successfull connection
	console.log("connection request 'show student by Id' was successfull");
	//activiting method to search by Id
	res.send(StudentsController.showStudentsById(id));
	res.end();
});
//show student by year
//config the url Year
app.get('/showYear/:year',function(req,res){
	//getting from url the year
	var year = req.params.year;
	//console log successfull connection
	console.log("connection request 'show student by year' was successfull");
	//activiting method to search by year
	res.send(StudentsController.showStudentsByYear(year));
	res.end();
});

app.listen(port);
console.log("listening on port: " + port);
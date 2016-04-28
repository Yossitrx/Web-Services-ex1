'use strict'
var EventEmitter = require("events");
//var eventConfig = require("../config");
//var moment = require('moment');
var fileSystem = require("fs");

var studentData = ("./students/studentsData.json");


module.exports = class student {

	constructor(){
		//super();
	}
	showAllStudents(){
		console.log("Show All students");
		var data = fileSystem.readFileSync(studentData);
		console.log("students: " + data );
		var jsonContent = JSON.parse(data);
		return jsonContent;
	}
	showStudentsById(id){
		console.log("Show student by Id");
		var data = fileSystem.readFileSync(studentData);
		var jsonContent = JSON.parse(data);
		var i,student;
		for (i = 0 ; i < jsonContent.length ; i++ ){
			
			if (jsonContent[i].id == id) {
				console.log("Found id: " + jsonContent[i].id + "\nName: " + jsonContent[i].name);	
				student = jsonContent[i];
				return student;
			}		
		}
		console.log("student: " + id + ", not exist");		
	}
	showStudentsByYear(year){
		console.log("Show student By year: ");
		var data = fileSystem.readFileSync(studentData);
		var jsonContent = JSON.parse(data);
		var i;
		for (i = 0 ; i < jsonContent.length ; i++ ){
			if (jsonContent[i].year != year) {
				//conosle.log(jsonContent[i].year);
				jsonContent.splice(i--,1);
			}		
		}
		console.log("Students that qualifies: "+ JSON.stringify(jsonContent) + "\n");
		return jsonContent;
	}
} 
'use strict'

var fileSystem = require("fs");
var studentData = ("./students/studentsData.json");


module.exports = class student {

	constructor(){
		
	}
	showAllStudents(){
		console.log("Show All students");
		var data = fileSystem.readFileSync(studentData);
		console.log("students: " + data );
		var jsonData = JSON.parse(data);
		return jsonData;
	}
	showStudentsById(id){
		console.log("Show student by Id");
		var data = fileSystem.readFileSync(studentData);
		var jsonData = JSON.parse(data);
		var i,student;
		for (i = 0 ; i < jsonData.length ; i++ ){
			
			if (jsonData[i].id == id) {
				console.log("Found id: " + jsonData[i].id + "\nName: " + jsonData[i].name);	
				student = jsonData[i];
				return student;
			}		
		}
		console.log("student: " + id + ", not exist");		
	}
	showStudentsByYear(year){
		console.log("Show student By year: ");
		var data = fileSystem.readFileSync(studentData);
		var jsonData = JSON.parse(data);
		var i;
		for (i = 0 ; i < jsonData.length ; i++ ){
			if (jsonData[i].year != year) {
				jsonData.splice(i--,1);
			}		
		}
		console.log("Students that qualifies: "+ JSON.stringify(jsonData) + "\n");
		return jsonData;
	}
} 
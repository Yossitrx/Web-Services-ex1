'use strict'

var fileSystem = require("fs");
//requireing json data
var studentData = ("./students/studentsData.json");

//ES6 student class
module.exports = class student {
	constructor(){
		
	}
	//parsing all students from json and returning them plus console log them
	showAllStudents(){
		console.log("Show All students");
		var data = fileSystem.readFileSync(studentData);
		console.log("students: " + data );
		var jsonData = JSON.parse(data);
		return jsonData;
	}
	//parsing all students from json then searching for exact match with ID and returning the student
	//plus console log ID
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
		//If ID not not exist console will display + empty array in webPage
		console.log("student: " + id + ", not exist");		
	}
    //parsing all students from json then searching for exact match with Year and returning and students that have this year 
	//plus console log students from that year
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
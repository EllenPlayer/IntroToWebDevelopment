/*
Created by: Ellen Player
Created on: 23.08.2020
Last edited:
*/
var testArray= [17, 42, 311, 5, 9, 10, 28, 7, 6];
var sum=0; // Initialise the variable that will hold results

var newElement=prompt("Enter a number of your choice:");// takes user imput
newElement = parseInt(newElement);// Assures user input accepted as a number
testArray.push(newElement);// tacs imput to the array preiviously defined


// loop sums up the nubers position by position
for(var position=0; position<testArray.length; position++){
	sum +=testArray[position];
}
// This prints the string of numbers and there sum as written and calculated
console.log("The sum of " + testArray + " is: " + sum);


// Challenge activity----------------
var newArray= [];
var sum=0; // Initialise the variable that will hold results

//collecting numbers in newArray

for(var i=0; i<5;i++){
	num=i+1;
	newElementChallenge=parseInt(prompt('Enter 5 numbers of your choice. Number '+num+':'));
	newArray.push(newElementChallenge);
}


// loop sums up the nubers position by position
for(var position=0; position<newArray.length; position++){
	sum +=newArray[position];
}
// This prints the string of numbers and there sum as written and calculated
console.log("The sum of your numbers " + newArray + " is: " + sum);
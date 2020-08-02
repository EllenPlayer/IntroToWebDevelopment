/*
Created by:Ellen Player
Date Created:02/08/2020
Date updated: NA
*/




/*for(var i=0; i<100;i++){
	console.log(Math.floor(Math.random()*6)+1);
}For calling a list of numbers */
/*function rollDice(){
	return Math.floor(Math.random()*6)+1;
}
for(var i=0; i<100;i++){
	console.log(rollDice())
}For a 6 sided die*/

var numSides = prompt("How many sides does the die have?");
var numDice = prompt("How many die are you using?");

function rollDice(numSides){
	return Math.floor(Math.random()*numSides)+1;
}

for (var i = 0; i < numDice; i++) {
    console.log(rollDice(numSides));
}

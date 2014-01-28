$(document).ready(function(){

var trueNum = Math.floor((Math.random()*100)+1);
var submitCount = 0

$('#mainform').submit(function(){
	var userGuess = $('#guessNum').val();
	var absTest = Math.abs(userGuess-trueNum);
	submitCount ++;
	
	if (submitCount==1){
		if (absTest==0)
			alert("You Win, Nice Work");
		else if (absTest <= 5)
			alert("You're Hot!"); 
		else if (absTest > 5 && absTest <=15)
			alert("You're Warm!");
		else
			alert("You're Cold");

		absTest1 = absTest
		return false;
		
	}

	else if (submitCount>1){
		if (absTest==0)
			alert("You Win, Nice Work");
		else if (absTest > absTest1)
			alert("Getting Colder, Try Again");
		else if (absTest < absTest1)
			alert("Getting Warmer, Keep Going!");
		else 
			alert ("Uh Oh");

		absTest1 = absTest
		return false;

	}
		

})

})
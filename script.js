$(document).ready(function(){

var trueNum = Math.floor((Math.random()*100)+1);

$('#mainform').submit(function(){
	var userGuess = $('#guessNum').val();
	var absTest = Math.abs(userGuess-trueNum);

	if (absTest==0)
		alert("You Win, Nice Work");
	else if (absTest <= 5)
		alert("You're Hot!"); 
	else if (absTest > 5 && absTest <=15)
		alert("You're Warm!");
	else
		alert("You're Cold");

	return false;
})

})
var randNum = Math.random()
var guessNum = show(prompt("Pick a number","..."));

function absNum(a){
	if (a>0) 
		return a;
	else if (a<0)
		return (a*-1);
	else 
		return 0;

	function checkNum (){
		if (randNum != guessNum )
			return ("You Win");
		else if (absNum(randNum-guessNum)>=10)
		else if (absNum(randNum-guessNum)<=5)
			return("Hot!")
		else if(absNum(randNum-guessNum)<=10 && absNum(randNum-guessNum) >5)
			return ("Getting Hot");
	}
}
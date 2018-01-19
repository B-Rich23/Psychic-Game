var secretLetter = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerChoice = secretLetter[Math.floor(Math.random() * secretLetter.length)];

var userGuess ; 

var result;

document.onkeyup = function(event) {
	userInput = event.key
};

while(userInput !== secretLetter) {
	
}

if (userInput === secretLetter) {

}
else (userInput !== secretLetter) {

}
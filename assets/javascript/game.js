
// Variable array of alphabet characters
var secretLetter = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variable for random computer choice of letters
var computerChoice = secretLetter[Math.floor(Math.random() * secretLetter.length)];

// Undefined variable for user's guess
var userGuess ; 

// Undefined variable for result of user's guess
var result;

// Event handler that documents what letter user selects when key is released
document.onkeyup = function(event) {
	userGuess = event.key
};

// function to increase number of displayed wins when user guesses correctly
function winsCounter(userGuess) {
	// define a result variable
	var = result
	// Conditional if user guesses correctly
	if (userGuess === computerChoice) {
		// for loop to continue game

		// event handler to display and increase wins by 1  
	} else {
		// event handler to display and increase losses by 1 

		// event handler to display and decrease guesses by 1

		// event handler to display each letter that user guesses incorrectly

		// for loop to continue game
	}
};

// function to increase number of displayed lossses when user guesses incorrectly
function lossesCounter() {

};

// function to decrease number of displayed guesses user has left when user guesses incorrectly
function guessesLeft () {

};

// function to display each letter that user guesses incorrectly
function guessedAlready () {

};



while(userGuess !== secretLetter) {
	
}


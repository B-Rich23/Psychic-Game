
// Variable array of alphabet characters
var secretLetter = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(secretLetter)

// Undefined variable for computer choice of letters
var computerChoice;

// Variables for counters
var winsCounter = 0;

var lossesCounter = 0;

var guessesLeft = 9;

var guessedAlready = []


// Undefined variable for user's guess
var userGuess; 

// Undefined variable for result of user's guess
var result;

// Variable to reset incorrect answer accumulators
var reset = function() {
				guessesLeft = 9;
				guessedAlready = [];
				// Variable for random computer choice of letters
				computerChoice = secretLetter[Math.floor(Math.random() * secretLetter.length)];
				console.log("Computer chose this: " + computerChoice);
}

				// Variable for random computer choice of letters
		computerChoice = secretLetter[Math.floor(Math.random() * secretLetter.length)];
		console.log("Computer chose this: " + computerChoice);

// Event handler that initiates game
	document.onkeyup = function(event) {

		// userGuess variable given value of released key
		userGuess = event.key;
		console.log(userGuess);

		// Conditional statement to increase the winsCounter variable, update the counter in the html, and reset non-wins counters with each win
		if (userGuess == computerChoice && winsCounter <=9) {
		winsCounter++;
		console.log("You have " + winsCounter + " wins!");
			result = document.getElementById("wins");
			result.textContent = winsCounter;
			reset();
			
		} 
			// Conditional statement to decrease the guessesLeft variable and update the counter in the html
			else if (guessesLeft > 0){
			
			guessesLeft--;
			console.log("You have " + guessesLeft + " guesses left!");
			result = document.getElementById("guessleft");
			result.textContent = guessesLeft;

			// Conditional statement to fill the variable array guessedAlready with incorrect guesses and display the array in the html
			console.log(userGuess);
			guessedAlready.push(userGuess);
			result = document.getElementById("misses");
			result.textContent = guessedAlready.join(", ");	

		}

			else if (guessesLeft === 0) {

			// Conditional statement to increase the lossesCounter variable, update the counter in the html, and reset the non-wins counters
			lossesCounter++;
			console.log("You have " + lossesCounter + " losses!");
			result = document.getElementById("losses");
			result.textContent = lossesCounter;
			reset();

			
		}
	}
		
		




// Variable array of alphabet characters
var secretLetter = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(secretLetter)
// Variable for random computer choice of letters
// var computerChoice;

var computerChoice;

var winsCounter = 0;

var lossesCounter = 0;

var guessesLeft = 9;

var guessedAlready = []


// Undefined variable for user's guess
var userGuess; 

// Undefined variable for result of user's guess
var result;

var reset = function() {
				guessesLeft = 9;
				guessedAlready = [];}

// Event handler that documents what letter user selects when key is released

// document.getElementById("button").onclick = function() {startGame()}

// function startGame() {


		

		document.onkeyup = function(event) {

		computerChoice = secretLetter[Math.floor(Math.random() * secretLetter.length)];
		console.log(computerChoice);

		userGuess = event.key;
		console.log(userGuess);


		if (userGuess == computerChoice && winsCounter <=9) {
		winsCounter++;
		console.log("You have " + winsCounter + " wins!");
			result = document.getElementById("wins");
			result.textContent = winsCounter;
			reset();
			
		} 
		// else if (guessleft === 0) {

			else if (guessesLeft > 0){
			
			guessesLeft--;
			console.log("You have " + guessesLeft + " guesses left!");
			result = document.getElementById("guessleft");
			result.textContent = guessesLeft;

			console.log(userGuess);
			guessedAlready.push(userGuess);
			result = document.getElementById("misses");
			result.textContent = guessedAlready.join(", ");	

		}

			else if (guessesLeft === 0) {

			lossesCounter++;
			console.log("You have " + lossesCounter + " losses!");
			result = document.getElementById("losses");
			result.textContent = lossesCounter;
			reset();

			
		}
	}
		
		


// function to increase number of displayed wins when user guesses correctly
// function winsCounter();

// function to increase number of displayed lossses when user guesses incorrectly
// var lossesCounter = function lossesCounter()

// function to decrease number of displayed guesses user has left when user guesses incorrectly
// var guessesLeft = function guessesLeft ()

// function to display each letter that user guesses incorrectly
// var guessedAlready = function guessedAlready()




// Conditional if user guesses correctly
// if (userGuess == computerChoice) {
	// winsCounter++;
	// var userText = document.getElementById("wins");
	// document.onkeyup = function(event) {
		// console.log("You win!");
	// } 
// else {
// 		var userText = document.getElementById("losses");
// 	document.onkeyup = function(event) {
// 		console.log(loss++);
// 	}
// }
// for loop to continue game

// event handler to display and increase wins by 1 

// } else {
// event handler to display and increase losses by 1 

// event handler to display and decrease guesses by 1

// event handler to display each letter that user guesses incorrectly

// for loop to continue game
// 	}
// };




// };



// while(userGuess !== secretLetter) {
	
// }


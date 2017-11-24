// Create an array of computer choices

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// // Variables needed to track score

var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetters = [];



// Have the user guess a letter by pressing the key of any letter

document.onkeyup = function (event) {

// Determines which key was pressed.
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();




  // Lists the letters the user hased guessed

  guessedLetters.push(userGuess);
  console.log(userGuess)

  // // Randomly chooses a choice from the computerChoices array. (computer's guess)

  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(computerGuess);

  // Call a function to start the game over

  var reset = function () {
    guesses = 10;
    guessesLeft = 10;
    guessedLetters = [];


  }




  // If the user guesses right lette tell them thy are a psychic and start the game over


  if (userGuess == computerGuess) {
    wins++;
    console.log(wins);
    alert("You're Psychic!!");
    // The game will start over
    reset(guesses, guessesLeft, guessedLetters);

  } else {
    guessesLeft--;
    console.log(guessesLeft);
  }

  if (guessesLeft == 0) {
    losses++;
    alert("You're Not A Psychic, Better Luck Next Time!");
    // The game will start over
    reset(guesses, guessesLeft, guessedLetters);
  }

  // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.


  var html =
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guess Left: " + guessesLeft + "</p>" +
    "<p>Guessed Letters: " + userGuess + "</p>";

  // Set the inner HTML contents of the #game div to our html string
  document.querySelector("#game").innerHTML = html;


  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(", ");









};
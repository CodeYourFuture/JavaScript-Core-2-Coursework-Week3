let randomNumber = Math.floor(Math.random() * 100 + 1);

function guessNumber() {
  // Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  // If the user inputs a bad input (0, empty string, number greater than 100, number less than zero)
  if (guess === "" || guess < 1 || guess > 100) {
    // Print "Please enter a number between 1 and 100"
    document.querySelector(".final-output").textContent =
      "Please enter a number between 1 and 100";
  } else {
    // If the user's guess is higher than the random number
    if (guess > randomNumber) {
      // Print "Number is too high, try again"
      document.querySelector(".final-output").textContent =
        "Number is too high, try again";
    }
    // If the user's guess is lower than the random number
    else if (guess < randomNumber) {
      // Print "Number is too low, try again"
      document.querySelector(".final-output").textContent =
        "Number is too low, try again";
    }
    // If the user has guessed the random number correctly
    else {
      // Print out the randomNumber with a message "Guess is correct. You win!"
      document.querySelector(".final-output").textContent =
        "Guess is correct. You win!";
    }
  }
}

// New Game function
function newGame() {
  // Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);

  // Reset users input field
  document.querySelector(".inputs-Values").value = "";

  // Reset output messages
  document.querySelector(".Tries-output").textContent = "";
  document.querySelector(".final-output").textContent =
    "Guess a number between 1 and 100";
}

// Event listener for the "Guess" button click
document.querySelector(".btnGuess").addEventListener("click", guessNumber);

// Event listener for the "New Game" button click
document.querySelector(".btnNewGame").addEventListener("click", newGame);

// Event listener for keyboard enter key press
document.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    guessNumber();
  }
});

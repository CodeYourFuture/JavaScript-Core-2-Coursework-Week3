let randomNumber = Math.floor(Math.random() * 100 + 1);
let tries = 7;           // number of tries the user can take to guess the random number
let triesTaken = 0;      // number of tries taken by the user

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  //If the user inputs a bad input ie 0, empty string, number greater that 100,
  //number less than zero Print "Please enter a number between 1 and 100"

  //If the users guess is higher than the random number print Number is too high,
  //try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low,
  //try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with
  //a message "Guess is correct. You win!"

//edit codes below:

  // Check if the user's input is valid
  if (guess < 1 || guess > 100 || guess === "") {
    document.querySelector(".final-output").innerText =
      "Please enter a number between 1 and 100";
    return;
  }

  // Check if the user's guess is correct
  if (guess == randomNumber) {
    document.querySelector(".final-output").innerText =
      "Guess is correct. You win!";
  // show the pop-up when user wins
   document.querySelector(".pop-up").style.display = "block";
    return;
  }
  // If the user's guess is higher than the random number
  else if (guess > randomNumber) {
    document.querySelector(".final-output").innerText =
      "Number is too high, try again";
  }
  // If the user's guess is lower than the random number
  else {
    document.querySelector(".final-output").innerText =
      "Number is too low, try again";
  }

  triesTaken++;         // increment the number of tries taken by the user
  // Check if the user has reached the maximum number of tries
  if (triesTaken >= tries) {
    document.querySelector(".final-output").innerText =
      "You have reached the maximum number of tries. You lose!";
  // Show the pop-up when user loses
    document.querySelector(".pop-up").styel.display = "block";
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button

// newGame function resets the game:
function newGame() {
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user

  //edit codes below:
  randomNumber = Math.floor(Math.random() * 100 + 1);    // generate a new random number
  document.querySelector(".inputs-Values center").value = "";   // clear the user's input field
  triesTaken = 0; // reset the number of tries taken
  document.querySelector(".final-output").innerText = "";   // clear the previous result
  document.querySelector(".pop-up").style.display = "none"   // hide the pop-up
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

// Add event listeners for the buttons
document
  .querySelector(".btnGuess btn btn-outline-success")
  .addEventListener("click", guessNumber);
document
  .querySelector(".btnNewGame btn btn-outline-success")
  .addEventListener("click", newGame);
document.addEventListener("keypress", keyBoardEvents);

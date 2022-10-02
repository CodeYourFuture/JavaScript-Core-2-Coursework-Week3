let randomNumber = Math.floor(Math.random() * 100 + 1);

let triesField = document.querySelector(".Tries-output");
let numberOfTries = 7;
triesField.innerText = `Number of Tries: ${numberOfTries}`;

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  let guessButton = document.querySelector(".btnGuess");
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
let outputField = document.querySelector(".final-output");

if (guess <= 0 || guess > 100 || guess == "") {
  outputField.innerText = "Please enter a number between 1 and 100";
  outputField.style.color = "red";
}
if (guess > randomNumber && guess <= 100) {
  outputField.innerText = "Number is too high, try again";
}
if (guess < randomNumber && guess > 0) {
  outputField.innerText = "Number is too low, try again";
}
if (guess == randomNumber) {
  outputField.innerText = `${randomNumber} Guess is correct. You win!`;
}

let newGamebtn = document.querySelector(".btnNewGame");
newGamebtn.addEventListener("click", function () {
  window.location.reload();
});

numberOfTries--;
triesField.innerText = `Number of Tries: ${numberOfTries}`;
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);

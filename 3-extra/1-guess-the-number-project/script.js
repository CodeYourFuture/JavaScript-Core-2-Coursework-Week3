let randomNumber = Math.floor(Math.random() * 100 + 1);
let outputTries = document.querySelector(".Tries-output");
let finalMessage = document.querySelector(".final-output");
let guessBtn = document.querySelector(".btnGuess btn btn-outline-success");

function guessNumber() {
  let guess = document.querySelector(".inputs-Values").value;
  if (
    Number(guess) <= 0 ||
    typeof Number(guess) !== "number" ||
    Number(guess) > 100
  )
    outputTries.innerHTML = "Please enter a number between 1 and 100";
  finalMessage.innerHTML = "";
  if (Number(guess) < randomNumber && Number(guess) > 0)
    finalMessage.innerHTML = "Number is too low, try again";
  if (Number(guess) > randomNumber && Number(guess) > 0)
    finalMessage.innerHTML = "Number is too high, try again";
  if (Number(guess) === randomNumber)
    finalMessage.innerHTML = "Guess is correct. You win!";
}
let count = 0;

function triesLeft() {
  count++;
  let noLeft = 7 - count;
  if (noLeft === 0) {
    outputTries.innerHTML = `You lose the number was ${guess}`;
  } else outputTries.innerHTML = `You have ${noLeft} guesses left`;
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

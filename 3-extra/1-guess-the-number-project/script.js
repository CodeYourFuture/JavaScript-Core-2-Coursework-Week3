let randomNumber = Math.floor(Math.random() * 100 + 1);
let outputTries = document.querySelector(".Tries-output");
let finalMessage = document.querySelector(".final-output");
let guessBtn = document.querySelector(".btnGuess btn btn-outline-success");
let guess = document.querySelector(".inputs-Values").value;
let count = 1;

function guessNumber() {
  let guess = document.querySelector(".inputs-Values").value;
  if (
    Number(guess) <= 0 ||
    typeof Number(guess) !== "number" ||
    Number(guess) > 100
  )
    outputTries.innerHTML = "Please enter a number between 1 and 100";
  finalMessage.innerHTML = "";
  if (Number(guess) < randomNumber)
    finalMessage.innerHTML = "Number is too low, try again";
  if (Number(guess) > randomNumber)
    finalMessage.innerHTML = "Number is too high, try again";
  if (Number(guess) === randomNumber)
    finalMessage.innerHTML = "Guess is correct. You win!";
}

function triesLeft() {
  let guess = document.querySelector(".inputs-Values").value;
  count++;
  let noLeft = 7 - count;
  if (noLeft === 0 && randomNumber !== guess) {
    finalMessage.innerHTML = "";
    outputTries.innerHTML = `You lose the number was ${randomNumber}`;
  } else outputTries.innerHTML = `You have ${noLeft} guesses left`;
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  let input = document.querySelector(".inputs-Values");
  input.value = "";
  outputTries.innerHTML = " ";
  finalMessage.innerHTML = " ";
  count = 1;
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);

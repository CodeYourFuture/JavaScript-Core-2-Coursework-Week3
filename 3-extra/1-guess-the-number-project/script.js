let randomNumber = Math.floor(Math.random() * 100 + 1);
let message = document.querySelector(".final-output");
let tries = document.querySelector(".Tries-output");
let count = 7;
tries.innerHTML = "Number of Tries: " + count;

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  if (guess > randomNumber && guess <= 100) {
    message.innerHTML = "Number is too high, try again";
  } else if (guess < randomNumber && guess > 0) {
    message.innerHTML = "Number is too low, try again";
  } else if (guess == randomNumber) {
    message.innerHTML = "Guess is correct. You win!";
  } else {
    message.innerHTML = "Please enter a number between 1 and 100";
  }
  if (count > 1) {
    count--;
    tries.innerHTML = "Number of Tries: " + count;
  } else {
    tries.innerHTML = `You Lose, the number was ${randomNumber}`;
    message.innerHTML = "";
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  randomNumber = Math.floor(Math.random() * 100 + 1);
  document.querySelector(".inputs-Values").value = "";
  message.innerHTML = "Guess a number between 1 and 100";
  count = 7;
  tries.innerHTML = "Number of Tries: " + count;
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
document.querySelector(".btnNewGame").addEventListener("click", newGame);

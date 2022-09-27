let randomNumber = Math.floor(Math.random() * 100 + 1);

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  let message = document.querySelector(".final-output");

  if (guess > randomNumber && guess <= 100) {
    message.innerHTML = "Number is too high, try again";
  } else if (guess < randomNumber && guess > 0) {
    message.innerHTML = "Number is too low, try again";
  } else if (guess == randomNumber) {
    message.innerHTML = "Guess is correct. You win!";
  } else {
    message.innerHTML = "Please enter a number between 1 and 100";
  }
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

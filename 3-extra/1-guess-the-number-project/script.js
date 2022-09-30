let randomNumber = Math.floor(Math.random() * 100 + 1);

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  let result = document.querySelector(".final-output");

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess == 0 || guess == "" || guess > 100) {
    result.innerHTML = "Please enter a number between 1 and 100";
  } else if (guess > randomNumber) {
    result.innerHTML = "Number is too high, try again";
  } else if (guess < randomNumber) {
    result.innerHTML = "Number is too low, try again";
  } else if (guess == randomNumber) {
    result.innerHTML = "Guess is correct. You win!";
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  var newGa = document.querySelector(".btnNewGame");

  newGa.addEventListener("click", newClick);

  function newClick() {
    randomNumber = Math.floor(Math.random() * 100 + 1);
    guessNumber();
  }
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

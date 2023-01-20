let randomNumber = Math.floor(Math.random() * 100 + 1);
let tries = 5;
let triesTaken = 0;

document.querySelector(".Tries-output").innerHTML =
  "You have " + tries + " tries";
function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess <= 0 || guess > 100 || guess === "") {
    document.querySelector(".final-output").innerHTML =
      "Please enter a number between 1 and 100";
    return;
  }

  tries--;
  triesTaken++;

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  if (guess > randomNumber) {
    document.querySelector(".final-output").innerHTML =
      "Number is too high, try again";
  } else if (guess < randomNumber) {
    document.querySelector(".final-output").innerHTML =
      "Number is too low, try again";
  } else {
    document.querySelector(".final-output").innerHTML =
      "Guess is correct. You win! It took you " + triesTaken + " tries";
    return;
  }

  if (tries === 0) {
    document.querySelector(".final-output").innerHTML =
      "You lose, the number was " + randomNumber;
    return;
  } else {
    document.querySelector(".Tries-output").innerHTML =
      "You still have " + tries + " tries";
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
  randomNumber = Math.floor(Math.random() * 100 + 1);
  document.querySelector(".inputs-Values").value = "";
  tries = 5;
  triesTaken = 0;
  document.querySelector(".final-output").innerHTML = "New Game started";
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

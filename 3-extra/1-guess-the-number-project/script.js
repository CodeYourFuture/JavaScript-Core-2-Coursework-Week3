let randomNumber = Math.floor(Math.random() * 100 + 1);
let tries = 7;

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess === "" || guess < 1 || guess > 100) {
    document.querySelector(".final-output").innerHTML = "Please enter a number between 1 and 100";
  }
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  else if (guess > randomNumber) {
    document.querySelector(".final-output").innerHTML = "Number is too high, try again";
  }

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  else if (guess < randomNumber) {
    document.querySelector(".final-output").innerHTML = "Number is too low, try again";
  }
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  else if (guess == randomNumber) {
    document.querySelector(
      ".final-output"
    ).innerHTML = `Guess is correct. You win! The number was ${randomNumber}`;
  }
  reduceTries();
}

function reduceTries() {
  tries--;
  printTries();
}

function printTries() {
  document.querySelector(".Tries-output").value = `You have ${tries} tries left`;
}
// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  randomNumber = Math.floor(Math.random() * 100 + 1); //Reset randomNumber
  tries = 7; //Reset tries
  printTries(); //Update tries
  document.querySelector(".inputs-Values").value = ""; //Reset users input field
  document.querySelector(".final-output").innerHTML = ""; //Reset tries, and triesTaken by the user

  console.log(tries);
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);

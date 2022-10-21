let randomNumber = Math.floor(Math.random() * 100 + 1);

let messageGuess = document.querySelector(".final-output");
let triesGuess = document.querySelector(".Tries-output");
let countTries = 7;

function guessNumber() {
  //Collect input from the user
  let guessNumber = document.querySelector(".inputs-Values").value;

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  if (guessNumber > randomNumber && guessNumber <= 100) {
    messageGuess.innerText = "Number is too high, try again";
    //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  } else if (guessNumber < randomNumber && guessNumber > 0) {
    messageGuess.innerText = "Number is too low, try again";
    //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  } else if (guessNumber == randomNumber) {
    messageGuess.innerText = "Guess is correct. You win!";
    //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  } else {
    messageGuess.innerText = "Please enter a number between 1 and 100";
  }

  if (
    countTries > 1 &&
    messageGuess.innerText != "Please enter a number between 1 and 100"
  ) {
    countTries--;
    triesGuess.innerHTML = `Number of Tries: ${countTries}`;
  } else if (countTries === 0) {
    triesGuess.innerHTML = `You Lose, the number was ${randomNumber}`;
    messageGuess.innerHTML = "";
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset users input field
  document.querySelector(".inputs-Values").value = "";
  messageGuess.innerHTML = "Guess a number between 1 and 100";
  //Reset tries, and triesTaken by the user
  countTries = 7;
  triesGuess.innerHTML = `Number of Tries: ${countTries}`;
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.addEventListener("keypress", keyBoardEvents);

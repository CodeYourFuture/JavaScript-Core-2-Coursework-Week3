let randomNumber = Math.floor(Math.random() * 100 + 1);
const maxAttempts = 7;
let triesRemaining = 7;
let triesTaken = 0;
let stillPlaying = true;
function guessNumber() {
  if (!stillPlaying) return;
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess === "0" || guess === "" || parseInt(guess) > 100) {
    document.querySelector(
      ".Tries-output"
    ).innerText = `Number of tries: ${triesRemaining}`;
    document.querySelector(".final-output").innerText =
      "Please enter a number between 1 and 100";
    return;
  }
  triesRemaining--;
  if (triesRemaining < 1) {
    document.querySelector(
      ".Tries-output"
    ).innerText = `You Lose, the number was ${randomNumber}`;
    document.querySelector(".final-output").innerText = "";
    stillPlaying = false;
    return;
  }
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  if (parseInt(guess) > randomNumber) {
    document.querySelector(".final-output").innerText =
      "Number is too high, try again";

    document.querySelector(
      ".Tries-output"
    ).innerText = `Number of tries: ${triesRemaining}`;
  }
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  if (parseInt(guess) < randomNumber) {
    document.querySelector(".final-output").innerText =
      "Number is too low, try again";

    document.querySelector(
      ".Tries-output"
    ).innerText = `Number of tries: ${triesRemaining}`;
  }
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  if (parseInt(guess) === randomNumber) {
    document.querySelector(".Tries-output").innerText = `It took you ${
      maxAttempts - triesRemaining
    } tries`;
    document.querySelector(".final-output").innerText =
      "Guess is correct. You win!";
    stillPlaying = false;
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset users input field
  document.querySelector(".inputs-Values").value = "";
  document.querySelector(".final-output").innerText =
    "Guess a number between 1 and 100";
  //Reset tries, and triesTaken by the user
  triesRemaining = 7;
  triesTaken = 0;
  document.querySelector(
    ".Tries-output"
  ).innerText = `Number of tries: ${triesRemaining}`;
  stillPlaying = true;
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}
document.querySelector(
  ".Tries-output"
).innerText = `Number of tries: ${triesRemaining}`;
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.addEventListener("keypress", keyBoardEvents);

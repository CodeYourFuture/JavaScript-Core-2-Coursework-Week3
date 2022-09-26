let randomNumber,
  tries = 0;

let output = document.querySelector(".final-output");

const generateRandomNumber = () => {
  randomNumber = Math.floor(Math.random() * 100 + 1);
};

console.log(randomNumber);
generateRandomNumber();
function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  guess < 1 || guess.length < 1 || guess > 100
    ? (document.querySelector(".final-output").innerHTML =
        "Please enter a number between 1 and 100")
    : //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
    guess > randomNumber
    ? (output.innerHTML = `${randomNumber} Number is too high, try again`)
    : //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
    guess < randomNumber
    ? (output.innerHTML = `${randomNumber} Number is too low, try again`)
    : //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
      (output.innerHTML = `${randomNumber} Guess is correct. You win!`);
  document.querySelector(".Tries-output").innerHTML = `${++tries} attempt`;
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  generateRandomNumber();
  //Reset users input field
  document.querySelector(".inputs-Values").value = null;
  //Reset tries, and triesTaken by the user
  tries = 0;
  document.querySelector(".Tries-output").innerHTML = "";
  output.innerHTML = "Guess a number between 1 and 100";
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

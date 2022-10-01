const newGameBtn = document.querySelector(".btnNewGame");
let randomNumber = Math.floor(Math.random() * 100 + 1);
let countTries = document.querySelector("#count-tries");
let output = document.querySelector(".final-output");
countTries.innerHTML = 7;

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  let userGuess = Number(guess);
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  // if (countTries.innerHTML <= 0) {
  //   output.innerText = "Out of Tries. You lose! ";
  // } else if (userGuess < 1 || userGuess > 100 || userGuess === "") {
  //   output.innerText = "Please enter a number between 1 and 100";
  //   countTries.innerHTML -= 1;
  // }
  // //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  // else if (userGuess > randomNumber) {
  //   output.innerText = "too high, try again 😦";
  //   countTries.innerHTML -= 1;
  // }
  // //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  // else if (userGuess < randomNumber) {
  //   output.innerText = "too low, try again 😬";
  //   countTries.innerHTML -= 1;
  // }
  // //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  // else if (userGuess === randomNumber) {
  //   output.innerText = "Guess is correct. You win! 🎉";
  // }

  countTries.innerHTML -= 1;
  countTries.innerHTML <= 0
    ? (output.innerText = "Out of Tries. You lose!")
    : userGuess < 1 || userGuess > 100 || userGuess === ""
    ? (output.innerText = "Please enter a number between 1 and 100")
    : userGuess > randomNumber
    ? (output.innerText = "too high, try again 😦")
    : userGuess < randomNumber
    ? (output.innerText = "too low, try again 😬")
    : userGuess === randomNumber
    ? (output.innerText = "Guess is correct. You win! 🎉")
    : (document.querySelector(".inputs-Values").value = "");
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

  newGameBtn.addEventListener("click", () => {
    document.querySelector(".inputs-Values").value = "";
    randomNumber = Math.floor(Math.random() * 100 + 1);
    countTries.innerHTML = 7;
    output.innerText = "Guess a number between 1 and 100";
  });
}
newGame();
//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);

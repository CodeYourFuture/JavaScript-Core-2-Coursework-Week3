const newGameBtn = document.querySelector(".btnNewGame");
let randomNumber = Math.floor(Math.random() * 100 + 1);
let countTries = document.querySelector("#count-tries");
let output = document.querySelector(".final-output");
let score = 7;
countTries.innerHTML = score;

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  let userGuess = Number(guess);

  score === 0 ? (score = 0) : (score -= 1);
  console.log(score);
  score <= 0
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
  countTries.innerHTML = score;
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

// let randomNumber = Math.floor(Math.random() * 100 + 1);

// function guessNumber() {
//   //Collect input from the user
//   let guess = document.querySelector(".inputs-Values").value;

//   //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"

//   //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

//   //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

//   //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
// }

// // For this task we will be making a "New Game" button function which will reset our game,
// // Once the user clicks on this button the user will have new random number to guess
// // 1. Reset the values inside the body of the function
// // 2. Attach our new game button using an event listener to the .btnNewGame button
// function newGame() {
//   //Your code here
//   //Reset randomNumber
//   //Reset users input field
//   //Reset tries, and triesTaken by the user
// }

//keyboard exception
// function keyBoardEvents(e) {
//   if (e.keyCode === 13) {
//     guessNumber();
//   }
// }

// document.querySelector(".btnGuess").addEventListener("click", guessNumber);
// document.addEventListener("keypress", keyBoardEvents);
//💫💫💫
let randomNumber = Math.floor(Math.random() * 100 + 1);
let score = 7;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(
    ".Tries-output"
  ).textContent = `Number of Tries: ${message}`;
};
function guessNumber() {
  let guess = document.querySelector(".inputs-Values").value;

  console.log(guess, typeof guess);

  if (!guess || +guess > 100 || +guess < 0) {
    document.querySelector(".final-output").textContent =
      "Please enter a number between 1 and 100";
  } else if (+guess === randomNumber) {
    document.querySelector(
      ".final-output "
    ).textContent = `  ${randomNumber} is correct, You Win!!!`;

    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highscore) {
      highscore = score;
      displayMessage(highscore);
    }
  } else if (+guess !== randomNumber) {
    if (score > 1) {
      document.querySelector(".final-output").textContent =
        +guess > randomNumber
          ? "Number is too hight, try again"
          : "Number is too low, try again";
      score--;
      displayMessage(score);
    } else {
      displayMessage(0);
      document.querySelector(
        ".final-output"
      ).textContent = `You Lose, the number was ${randomNumber}`;
      document.querySelector(".Tries-output").textContent = "";
    }
  }
}
//💫💫💫💫💫💫💫💫💫

function newGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  document.querySelector(".inputs-Values").value = " ";
  score = 7;
  document.querySelector(
    ".Tries-output"
  ).textContent = `Number Of Tries : ${score}`;
  document.querySelector(".final-output").textContent =
    "Get a number between 1 and 100";
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.addEventListener("keypress", keyBoardEvents);

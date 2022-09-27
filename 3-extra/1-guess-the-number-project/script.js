let randomNumber = Math.floor(Math.random() * 100 + 1);
let count = 0;

function guessNumber() {
  //Collect input from the user

  let guess = document.querySelector(".inputs-Values").value;
  count++;
  if (
    guess.length === 0 ||
    parseInt(guess) === 0 ||
    parseInt(guess) > 100 ||
    guess.includes(".") ||
    eval(guess) <= 0
  ) {
    document.querySelector(".final-output").innerHTML =
      "Please enter a number between 1 and 100";
    console.log(parseInt(guess));
  } else if (eval(guess) > randomNumber && count <= 10) {
    document.querySelector(
      ".final-output"
    ).innerHTML = `Try number: ${count}. Number is too high.`;
  } else if (eval(guess) < randomNumber && count <= 10) {
    document.querySelector(
      ".final-output"
    ).innerHTML = `Try number: ${count}. Number is too LOW.`;
  } else if (eval(guess) === randomNumber && count <= 10) {
    document.querySelector(
      ".final-output"
    ).innerHTML = `Guess is correct. You win!. By ${count} tries. The page restart in 10 seconds`;
    setTimeout(function () {
      document.location.reload();
    }, 5000);
  } else {
    document.querySelector(
      ".final-output"
    ).innerHTML = `You exceeds the number of tries. The game will restart after 10 seconds `;
    setTimeout(function () {
      document.location.reload();
    }, 5000);
  }
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
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
  document.location.reload(true);
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

let randomNumber = Math.floor(Math.random() * 100 + 1);

let tries = 7;
const triesOutput = document.querySelector(".Tries-output");
triesOutput.innerText = `Number of Tries: ${tries}`;

const finalOutput = document.querySelector(".final-output");

let won = 0;
console.log(randomNumber);

function guessNumber() {
  //Collect input from the user
  let guess = Number(document.querySelector(".inputs-Values").value);
  const finalOutput = document.querySelector(".final-output");

  if (won) return;

  if (tries <= 1) {
    triesOutput.innerText = `You Lose, the number was ${randomNumber}`;
    finalOutput.innerText = "";
  }

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  else if (!guess || guess > 100 || guess < 0) {
    finalOutput.innerText = "Please enter a number between 1 and 100";
  }

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  else if (guess > randomNumber) {
    finalOutput.innerText = "Number is too high, try again";
    tries--;
    triesOutput.innerText = `Number of Tries: ${tries}`;
  }

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  else if (guess < randomNumber) {
    finalOutput.innerText = "Number is too low, try again";
    tries--;
    triesOutput.innerText = `Number of Tries: ${tries}`;
  }

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  else if (guess === randomNumber) {
    triesOutput.innerText = `It took you ${tries} tries`;
    finalOutput.innerText = `${randomNumber} is correct, You Win!!!`;
    won = 1;
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
  console.log(randomNumber);
  //Reset users input field
  document.querySelector(".inputs-Values").value = "";
  //Reset tries, and triesTaken by the user
  tries = 7;
  triesOutput.innerText = `Number of Tries: ${tries}`;
  finalOutput.innerText = "Guess a number between 1 and 100";

  won = 0;
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

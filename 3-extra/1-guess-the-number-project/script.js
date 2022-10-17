let randomNumber = Math.floor(Math.random() * 100 + 1);
const triesOutput = document.querySelector(".Tries-output");
const finalOutput = document.querySelector(".final-output");
triesOutput.textContent = "Number of Tries: 7";
let numOfTries = 7;
function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  let correctInput;
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess && guess < 100 && guess > 0) {
    correctInput = guess;
  }
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  if (correctInput && correctInput > randomNumber) {
    numOfTries--;
    printResult("Number is too high, try again");
  } else if (correctInput && correctInput < randomNumber) {
    numOfTries--;
    printResult("Number is too low, try again");
  } else if (correctInput) {
    numOfTries--;
    printResult(`${randomNumber} is correct, You Win!!!`);
  }
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
}

function printResult(text) {
  if (numOfTries < 0) {
    triesOutput.innerHTML = `You Lose, the number was ${randomNumber}`;
    finalOutput.textContent = "";
  } else {
    triesOutput.innerHTML = `Number of Tries: ${numOfTries}`;
    finalOutput.textContent = text;
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
  numOfTries = 7;
  randomNumber = Math.floor(Math.random() * 100 + 1);
  document.querySelector(".inputs-Values").value = "";
  printResult("Guess a number between 1 and 100");
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

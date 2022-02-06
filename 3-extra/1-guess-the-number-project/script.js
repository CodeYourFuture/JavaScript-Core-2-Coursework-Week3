/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
let randomNumber = Math.floor(Math.random() * 100 + 1);
let guessCount = 7;
let isWon = false;
const numberInput = document.querySelector('.inputs-Values');
const finalOutput = document.querySelector('.final-output');
const triesOutput = document.querySelector('.tries-output');
document.querySelector('.btnNewGame').addEventListener('click', newGame);

function guessNumber() {
  // Collect input from the user
  const guess = parseInt(numberInput.value, 10);

  if (typeof guess !== 'number' || guess <= 0 || guess > 100) {
    finalOutput.innerText = 'Please enter a number between 1 and 100';
    return;
  }
  if (guess !== randomNumber && guessCount <= 1) {
    triesOutput.innerText = '';
    finalOutput.innerText = `You Lose, the number was ${randomNumber}`;
    return;
  }
  if (guess > randomNumber) {
    guessCount--;
    triesOutput.innerText = `Number of Tries: ${guessCount}`;
    finalOutput.innerText = 'Number is too high, try again';
    return;
  }
  if (guess < randomNumber) {
    guessCount--;
    triesOutput.innerText = `Number of Tries: ${guessCount}`;
    finalOutput.innerText = 'Number is too low, try again';
    return;
  }
  if (guess === randomNumber) {
    guessCount -= !isWon ? 1 : 0;
    triesOutput.innerText = `It took you ${7 - guessCount} tries`;
    finalOutput.innerText = `${guess} is correct. You win!`;
    isWon = true;
  }
  // If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"

  // If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  // If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  // If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  numberInput.value = '';
  finalOutput.innerText = 'Guess a number between 1 and 100';
  guessCount = 7;
  triesOutput.innerText = `Number of Tries: ${guessCount}`;
  isWon = false;
  // Your code here
  // Reset randomNumber
  // Reset users input field
  // Reset tries, and triesTaken by the user
}

// keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector('.btnGuess').addEventListener('click', guessNumber);
document.addEventListener('keypress', keyBoardEvents);

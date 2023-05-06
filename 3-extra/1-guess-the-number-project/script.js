
function generateRandomNumber() {
  //Collect input from the user
  return Math.floor(Math.random() * 100 + 1);
}

let randomNumber = generateRandomNumber();

let triesTaken = 0;
const attemptLimit = 7;

function guessNumber() {
  const finalOutputElement = document.querySelector('.final-output');
  const loseGameMessage = `You Lose, the number was ${randomNumber}`;

  triesTaken++;

  if (triesTaken === attemptLimit) {
    finalOutputElement.innerText = loseGameMessage;
    return;
  }

  let guess = Number(document.querySelector('.inputs-Values').value);

  const lowerBound = 1;
  const upperBound = 100;

  const invalidInputConditions = {
    isZero: (input) => input === 0,
    isEmptyString: (input) => input === '',
    isLessThanZero: (input) => input < lowerBound,
    isMoreThan100: (input) => input > upperBound,
  };
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  const invalidInputMessage = 'Please enter a number between 1 and 100';

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  const tooHighMessage = 'Number is too high, try again';

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  const tooLowMessage = 'Number is too low, try again';

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
// }
  const correctGuessMessage = `Guess is correct. You win! It took you ${triesTaken} tries`;

  const isInvalid = Object.values(invalidInputConditions).some((checkInputIsInvalid) =>
    checkInputIsInvalid(guess)
  );

  if (isInvalid) {
    finalOutputElement.innerText = invalidInputMessage;
    return;
  }

  if (guess > randomNumber) {
    finalOutputElement.innerText = tooHighMessage;
  } else if (guess < randomNumber) {
    finalOutputElement.innerText = tooLowMessage;
  } else if (guess === randomNumber) {
    finalOutputElement.innerText = correctGuessMessage;
  }
  document.querySelector(".Tries-output").innerText = `Tries: ${triesTaken}/${attemptLimit}`;
}

// For this task we will be making a "New Game" button function which will reset our game,
// // Once the user clicks on this button the user will have new random number to guess
// // 1. Reset the values inside the body of the function
// // 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
   //Reset randomNumber
   //Reset users input field
   //Reset tries, and triesTaken by the user
  randomNumber = generateRandomNumber();

  document.querySelector('.inputs-Values').value = '';

  const enterGuessMessage = 'Guess a number between 1 and 100';

  document.querySelector('.final-output').innerText = enterGuessMessage;
  document.querySelector('.Tries-output').innerText = " ";
  triesTaken = 0;
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector('.btnNewGame').addEventListener('click', newGame);
document.querySelector('.btnGuess').addEventListener('click', guessNumber);
document.addEventListener('keypress', keyBoardEvents);
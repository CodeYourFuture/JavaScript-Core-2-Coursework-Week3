//Help taken from Solutions

function generateRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

const randomNumber = generateRandomNumber();
const numOfTries = 0;
const attemptLimit = 7;

function guessNumber() {
  const finalOutputElement = document.querySelector('.final-output');
  const loseGameMessage = `You Lose, the number was ${randomNumber}`;

  numOfTries++;

  if (numOfTries === attemptLimit) {
    finalOutputElement.innerText = loseGameMessage;
    return;
  }

 const guess = Number(document.querySelector('.inputs-Values').value);

  const lowerBound = 0;
  const upperBound = 100;

  const invalidInputConditions = {
    isZero: (input) => input === 0,
    isEmptyString: (input) => input === '',
    isLessThanZero: (input) => input < lowerBound,
    isMoreThan100: (input) => input > upperBound,
  };

  const invalidInputMessage = 'Please enter a number between 1 and 100';
  const tooHighMessage = 'Number is too high, try again';
  const tooLowMessage = 'Number is too low, try again';
  const correctGuessMessage = `Guess is correct. You win! It took you ${numOfTries} tries`;

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
}

function newGame() {
  randomNumber = generateRandomNumber();

  document.querySelector('.inputs-Values').value = '';

  const enterGuessMessage = 'Guess a number between 1 and 100';

  document.querySelector('.final-output').innerText = enterGuessMessage;
  numOfTries = 0;
}

function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector('.btnNewGame').addEventListener('click', newGame);
document.querySelector('.btnGuess').addEventListener('click', guessNumber);
document.addEventListener('keypress', keyBoardEvents);
let functRandomNumber = () => Math.floor(Math.random() * 100 + 1);
let randomNumber = functRandomNumber();
let triesCount = 7;
let triesOutput = document.querySelector(".Tries-output");
let finalOutput = document.querySelector(".final-output");
let btnNewGame = document.querySelector(".btnNewGame");
function guessNumber() {
let guess = Number(document.querySelector(".inputs-Values").value);

  if (triesCount === 0) {
    triesOutput.innerText = "You lose the number was " + randomNumber;
  } else {
    triesOutput.innerText = "Number of Tries:" + triesCount;
  }

  if (guess === randomNumber) {
    finalOutput.innerText = "Guess is correct. You win!";
  } else if (guess > 100 && guess < 0) {
    finalOutput.innerText = "Please enter a number between 1 and 100";
  } else if (guess > randomNumber) {
    triesCount -= 1;
    finalOutput.innerText = "Number is too high, try again";
  } else if (guess < randomNumber) {
    triesCount -= 1;
    finalOutput.innerText = "Number is too low, try again";
  }
}
btnNewGame.addEventListener("click", () => {
  newGame();
});
function newGame() {
  randomNumber = functRandomNumber();
  triesCount = 7;
  triesOutput.innerText = "Number of Tries:" + triesCount;
  finalOutput.innerText = "Start new game";
}

function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);

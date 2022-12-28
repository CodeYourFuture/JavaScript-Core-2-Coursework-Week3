let randomNumber = 0;
const finalOutputEl = document.querySelector(".final-output");
const triesOutputEl = document.querySelector(".Tries-output");
let leftNum;

function guessNumber() {
  let guess = document.querySelector(".inputs-Values").value;
  if (!leftNum > 0) return;
  if (guess > 100 || guess < 1) {
    triesOutputEl.textContent = `Number of Tries: ${leftNum}`;
    finalOutputEl.textContent = "Please enter a number between 1 and 100";
  } else if (guess > randomNumber || guess < randomNumber) {
    leftNum--;
    triesOutputEl.textContent = `Number of Tries: ${leftNum}`;
    finalOutputEl.textContent = `Number is too ${
      guess > randomNumber ? `high` : `low`
    }, try again`;
    if (leftNum < 1) {
      triesOutputEl.textContent = `You Lose, the number was ${randomNumber}`;
      finalOutputEl.textContent = "";
    }
  } else if (guess == randomNumber) {
    triesOutputEl.textContent = `It took you ${7 - leftNum} tries`;
    finalOutputEl.textContent = `${guess} is correct. You win!!!`;
  }
}

function newGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  leftNum = 7;
  triesOutputEl.textContent = `Number of Tries: ${leftNum}`;
  finalOutputEl.textContent = `Guess a number between 1 and 100`;
  document.querySelector(".inputs-Values").value = null;
  console.log(randomNumber, leftNum);
}
newGame();
//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}
document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);

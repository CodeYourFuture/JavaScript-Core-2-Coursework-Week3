let randomNumber = Math.floor(Math.random() * 100 + 1),
  newGameButton = document.querySelector(".btnNewGame"),
  input = document.querySelector(".inputs-Values"),
  tries = document.querySelector(".Tries-output"),
  output = document.querySelector(".final-output"),
  triesLeft = 7,
  hasWon = false;

tries.innerText = `Number of tries: ${triesLeft}`;

function guessNumber() {
  console.log(randomNumber);
  if (!hasWon) {
    triesLeft -= 1;
    if (triesLeft === 0) {
      if (input.value == randomNumber) {
        tries.innerText = `It took you ${7 - triesLeft} tries`;
        output.innerText = `${randomNumber} is correct, You Win!!!`;
        hasWon = true;
      } else {
        output.innerText = "";
        tries.innerText = `You Lose, the number was ${randomNumber}`;
      }
    } else if (triesLeft > 0) {
      if (input.value < 1 || input.value > 100) {
        triesLeft += 1;
        output.innerText = `Please enter a number between 1 and 100`;
      } else if (input.value > randomNumber) {
        tries.innerText = `Number of tries: ${triesLeft}`;
        output.innerText = `Number is too high, try again`;
      } else if (input.value < randomNumber) {
        tries.innerText = `Number of tries: ${triesLeft}`;
        output.innerText = `Number is too low, try again`;
      } else {
        tries.innerText = `It took you ${7 - triesLeft} tries`;
        output.innerText = `${randomNumber} is correct, You Win!!!`;
        hasWon = true;
      }
    }
  }
}

newGameButton.addEventListener("click", newGame);

function newGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  output.innerText = "Get a number between 1 and 100";
  input.value = "";
  triesLeft = 7;
  hasWon = false;
  tries.innerText = `Number of tries: ${triesLeft}`;
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);

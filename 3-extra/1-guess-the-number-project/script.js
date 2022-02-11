let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);
let count = 7;
let outputTriesEl = document.querySelector(".Tries-output");
let outputFinalEl = document.querySelector(".final-output");
outputFinalEl.innerHTML = "Guess a number between 1 and 100";
outputTriesEl.innerHTML = `Number of Tries: ${count}`;

function guessNumber() {
  //Collect input from the user
  let guessNum = Number(document.querySelector(".inputs-Values").value);

  if (count > 0) {
    if (guessNum > 100 || guessNum < 1) {
      outputFinalEl.innerHTML = "Please enter a number between 1 and 100";
    } else {
      if (guessNum === randomNumber) {
        outputFinalEl.innerHTML = `It looks you  ${
          8 - count
        } tries, ${guessNum} is correct, You Win!!!`;
        outputTriesEl.innerHTML = "";
      } else {
        if (guessNum < randomNumber) {
          outputFinalEl.innerHTML = `Number is too low, try again`;
        } else {
          outputFinalEl.innerHTML = `Number is too high, try again`;
        }
        count--;
        outputTriesEl.innerHTML = `Number of Tries: ${count}`;
      }
    }
  } else {
    outputFinalEl.innerHTML = `You Lose, the number was ${randomNumber}`;
    outputTriesEl.innerHTML = "";
  }

  let NewGameBtn = document.querySelector(".btnNewGame");
  NewGameBtn.addEventListener("click", newGame);

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
  randomNumber = Math.floor(Math.random() * 100 + 1);
  document.querySelector(".inputs-Values").value = "";
  count = 7;
  outputFinalEl.innerHTML = "Guess a number between 1 and 100";
  outputTriesEl.innerHTML = `Number of Tries: ${count}`;
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);

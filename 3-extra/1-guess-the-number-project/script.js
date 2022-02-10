let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);
function guessNumber() {
  let times = 10;
  console.log(times);

  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  let tryAnswer = document.querySelector(".Tries-output");
  let finalAnswer = document.querySelector(".final-output");
  document
    .querySelector(".btnGuess")
    .addEventListener("click", () => (times = times - 1));
  tryAnswer.innerText = `Number of Tries : ${times}`;
  if (times > 0) {
    //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
    if (guess === 0 || guess.length === 0 || guess > 100 || guess < 0) {
      finalAnswer.innerText = "Please enter a number between 1 and 100";
    } else if (guess > randomNumber) {
      //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
      finalAnswer.innerText = "Number is too high, try again ";
      finalAnswer.style.color = "orange";
    } else if (guess < randomNumber) {
      //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
      finalAnswer.innerText = "Number is too low, try again ";
      finalAnswer.style.color = "orange";
    } else if (guess == randomNumber) {
      //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
      finalAnswer.innerText = "Guess is correct. You win!";
      finalAnswer.style.color = "green";
    }
  } else if (times === 0) {
    finalAnswer.innerText = "Try again game finished!";
    finalAnswer.style.color = "red";
  } else if (times < 0) {
    newGame();
  }

  // console.log(guess, answer);
  // document.querySelector(".inputs-Values").value = " ";
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  let tryAnswer = document.querySelector(".Tries-output");
  let finalAnswer = document.querySelector(".final-output");
  let newGameBtn = document.querySelector(".btnNewGame");

  newGameBtn.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(randomNumber);
    document.querySelector(".inputs-Values").value = " ";
    let times = 10;
    tryAnswer.innerText(`Number of Tries : ${times}`);
    finalAnswer.innerText = "Guess a number between 1 and 100";
    finalAnswer.style.color = "#000";
  });
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
}

newGame();

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);

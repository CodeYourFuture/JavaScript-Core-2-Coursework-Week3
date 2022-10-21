let randomNumber = Math.floor(Math.random() * 100 + 1);
let count = 7;
let spaceForOutput = document.querySelector(".final-output");
const tries = document.querySelector(".Tries-output");
function guessNumber() {
  //Collect input from the user

  let guess = document.querySelector(".inputs-Values").value;

  let spaceForOutput = document.querySelector(".final-output");

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess < 1 || guess > 99 || guess == "") {
    spaceForOutput.innerHTML =
      "Please enter a number between 1 and 100 \n last" + count + " tries";
  }
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  else if (guess > randomNumber) {
    spaceForOutput.innerHTML =
      "Number is too high, try again \n last " + count + " tries";
  }
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  else if (guess < randomNumber) {
    spaceForOutput.innerHTML =
      "Number is too low, try again! \n last " + count + " tries";
  }
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  else {
    spaceForOutput.innerHTML =
      "Guess is correct. You win! \n last " + count + " tries";
  }

  if (count < 1) {
    if (guess == randomNumber) {
      "Guess is correct. You win! \n last " + count + " tries";
    } else {
      spaceForOutput.innerHTML = "You should click the 'New Game'";
      randomNumber = Math.floor(Math.random() * 100 + 1);
    }
  }
  count--;
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  let randomNumber = Math.floor(Math.random() * 100 + 1);
  count = 7;
  spaceForOutput.innerHTML = "new!";
  tries.innerText = `Number of Tries: ${count}`;
  tries.innerText = "Guess a number between 1 and 100";
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);

document.querySelector(".btnNewGame").addEventListener("click", newGame);

document.addEventListener("keypress", keyBoardEvents);

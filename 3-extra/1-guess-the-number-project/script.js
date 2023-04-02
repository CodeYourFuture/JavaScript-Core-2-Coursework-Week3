let randomNumber = Math.floor(Math.random() * 100 + 1);
// Access to div to show message
const output = document.querySelector(".final-output");
// Accesss to div to show the number of try
const triesValue = document.querySelector(".Tries-output");
// Access to guess button
let guess = document.querySelector(".inputs-Values");
// Default try for game
let counter = 6;

// Guess the number function
function guessNumber() {
  // Reach to input values
  const input = document.querySelector(".inputs-Values");
  // turn string to number
  const guess = Number(input.value);
  //check the user inputes
  if (guess <= 0 || guess > 100 || guess === "") {
    output.textContent = "Please enter a number between 1 and 100";
  } else if (guess > randomNumber) {
    output.textContent = "Number is too high, try again";
    // decrease the number of try
    counter -= 1;
  } else if (guess < randomNumber) {
    output.textContent = "Number is too low, try again";
    // decrease the number of try
    counter -= 1;
  } else if (guess == randomNumber) {
    output.textContent = "Guess is correct. You win!";
  }
  // Show the remain number of guess
  triesValue.textContent = `Number of Tries: ${counter}`;
  // if the number of try is finished
  if (counter == 0) {
    // show message
    triesValue.textContent = `You Lose, the number was ${randomNumber}`;
    // reset value of output
    output.textContent = "";
  }
}

// Reset the game
function newGame() {
  // create new random number
  randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
  // Reset guess value
  guess.value = "";
  // reset the number of try
  counter = 0;
  // reset content of try values
  triesValue.textContent = "";
  output.textContent = "Please enter a number between 1 and 100";
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}
// Access to guess bitton
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
// Access to new game button
document.querySelector(".btnNewGame").addEventListener("click", newGame);
// Press enter on keyboard
document.addEventListener("keypress", keyBoardEvents);

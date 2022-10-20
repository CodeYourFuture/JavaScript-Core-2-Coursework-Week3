let randomNumber = Math.floor(Math.random() * 100 + 1);

let triesofGusse = document.querySelector(".Tries-output");
let tries = 7;
triesofGusse.innertext = `Number of tries = ${tries}`;

let final = document.querySelector(".final-output");
let won = 0;

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  let final = document.querySelector(".final-output");
  if (won) return;
  if (tries <= 1) {
    triesofGusse.innerText = `you could not find the ${randomNumber}`;
  }

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  else if (guess <= 0 || guess > 100 || guess === "") {
    final.innerText = "Please enter a number between 1 and 100";
    // center.appendChild(final);
  }

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  else if (guess > randomNumber) {
    final.innerText = "Number is too high, try again ";
    tries--;
    triesofGusse.innerText = `You tired ${tries} gusse `;
    // center.appendChild(guess);
  }
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  else if (guess < randomNumber) {
    final.innerText = `Number is too low, try again `;
    tries--;
    triesofGusse.innerText = `You tired ${tries} gusse `;

    // center.appendChild(guess);
  }
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  else if (guess === randomNumber) {
    final.innerText = `${randomNumber} Guess is correct `;
    triesofGusse.innerText = `you had ${tries} gusse`;
    won = 1;
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
  //Reset users input field
  document.querySelector(".inputs-Values").value;
  //Reset tries, and triesTaken by the user
  tries = 7;
  final.innerText = `Guess a number between 1 and 100 `;
  triesofGusse.innerText = `you have ${tries} gusse`;
  won = 0;
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
document.querySelector(".btnNewGame").addEventListener("click", newGame);

guessNumber();

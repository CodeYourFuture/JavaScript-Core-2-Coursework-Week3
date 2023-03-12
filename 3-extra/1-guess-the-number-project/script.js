let randomNumber = Math.floor(Math.random() * 100 + 1);
let triesOutput = document.querySelector(".Tries-output")
let finalOutput = document.querySelector(".final-output");
let i = 7;
triesOutput.innerHTML = `Number of Tries: ${i}`

function guessNumber() {
  //Collect input from the user
  let guess = Number(document.querySelector(".inputs-Values").value);
  
  if (guess <= 0 || guess >= 100 || "") {                            //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
    finalOutput.innerHTML = "Please enter a number between 1 and 100"
  } else if (guess > randomNumber) {                                  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
    finalOutput.innerHTML = "Number is too high"
    i--;
  } else if (guess < randomNumber) {                                  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
    finalOutput.innerHTML = "Number is too low"
    i--;
  } else if (guess === randomNumber && i > 0) {                                //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
    triesOutput.innerHTML = `It took you ${i} tries `
    finalOutput.innerHTML = "Guess is correct. You won!";
  }

  if (i > 0) {
    triesOutput.innerHTML = `Number of Tries: ${i}`
  } else if (i <= 0) {
    triesOutput.innerHTML = `You Lose, the number was ${randomNumber}`
    finalOutput.textContent = "";
  }
}
console.log(randomNumber)
// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
//Your code here
randomNumber = Math.floor(Math.random() * 100 + 1); //Reset randomNumber
guess = document.querySelector(".inputs-Values").value = "";  //Reset users input field
i = 7;  //Reset tries, and triesTaken by the user
triesOutput.innerHTML = `Number of Tries: ${i}`;
finalOutput.innerHTML = "Please enter a number between 1 and 100"
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}
document.querySelector('.btnNewGame').addEventListener("click", newGame);
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);

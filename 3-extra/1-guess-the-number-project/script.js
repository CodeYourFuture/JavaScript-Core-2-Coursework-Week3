let randomNumber = Math.floor(Math.random() * 100 + 1);
let result = document.querySelector(".final-output");
let numberOfTries = document.querySelector(".Tries-output");
let tries = 0;
numberOfTries.innerHTML = "Tries: " + tries;

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"

 if(guess<=0 || guess>100 || guess===""){
    result.innerHTML= "Please enter a number between 1 and 100"
  }else if(guess>randomNumber){
    result.innerHTML="Number is too high, try again";
  }else if(guess<randomNumber){
    result.innerHTML="Number is too low, try again";
  }else{
    if(tries>1){
      numberOfTries.innerHTML='It took you ' + (7-tries) + ' tries';
       }
    result.innerHTML= "Guess is correct. You win!"
  }
  if(tries>1){
    tries--;
    numberOfTries.innerHTML="Number of tries"+ tries;
  }else{
      numberOfTries.innerHTML='You Lose, the number was ' + randomNumber;
      result.innerHTML=""
    }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user

  randomNumber = Math.floor(Math.random() * 100 + 1);
  document.querySelector(".inputs-Values").value = "";
  result.innerHTML = "Guess a number between 1 and 100";
  tries = 7;
  numberOfTries.innerHTML = "Tries: " + tries;
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

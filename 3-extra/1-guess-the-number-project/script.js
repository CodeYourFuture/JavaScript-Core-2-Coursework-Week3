const finalOutPut = document.querySelector('.final-output');
const newGameBtn = document.querySelector('.btnNewGame');
const noOfTries = document.querySelector('.Tries-output')
let randomNumber = Math.floor(Math.random() * 100 + 1);
let guessInput = document.querySelector('.inputs-Values')
let numberOfTriesLeft = 7;

newGameBtn.addEventListener('click', () => {
  

  newGame()
  
})

function guessNumber() {
  
  
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  
  noOfTries.innerText = `Number of tries left: ${numberOfTriesLeft}`
  //if condition to change the message according to the guess number
  if (guess <= 0 || guess === " " || guess>100) {
    finalOutPut.innerText = "Please enter a number between 1 and 100"
  }else if (guess > randomNumber) {
    finalOutPut.innerText = 'Number is too high, try again'
  } else if (guess < randomNumber) {
    finalOutPut.innerText = 'Number is too low, try again'
  }else {
    finalOutPut.innerText = `${guess} is correct. You win!`
    
  }
  // for displaying the number of tries left, which decreases by 1 every time the guess function is called
  numberOfTriesLeft -= 1;
  if (numberOfTriesLeft === 0) {
    noOfTries.innerText = '' 
    finalOutPut.innerText = `You Lose, the number was ${randomNumber}`;
    newGame()
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  guessInput.value = ''
  numberOfTriesLeft = 7;
  noOfTries.innerText = `Number of Tries: ${numberOfTriesLeft}`
  randomNumber = Math.floor(Math.random() * 100 + 1);
  guessNumber()

}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}


document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
newGame()


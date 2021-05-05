function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}
function displayTime (timeRemain) {
  let timeTitle = document.getElementById('timeRemaining');
  let minutes = pad(Math.floor(timeRemain/60), 2);
  let seconds = pad(timeRemain % 60, 2);
  timeTitle.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
}
function setAlarm() {
  let timeRemain = document.getElementById('alarmSet').value;
  displayTime(timeRemain);
  window.setInterval(function (){
    if (timeRemain > 0) {
      timeRemain -= 1;
      displayTime(timeRemain);
    } else {
      playAlarm();
      document.body.style.background = 'blue';
     }
    }, 1000);
    console.log(timeRemain);
};


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;

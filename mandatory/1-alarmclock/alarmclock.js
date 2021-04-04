function setAlarm() {
  let gettingTheHeading = document.getElementById("timeRemaining");
  let gettingTheInput = document.getElementById("alarmSet").value;
 
  
  let minutes = Math.floor(gettingTheInput / 60);
  let seconds =gettingTheInput % 60;

  let settingTheTimeInterval = setInterval(() => {
    if (minutes > 0 && seconds === 0) {
      minutes--;
      seconds = 59;
    }
    if (seconds === 0) {
      clearInterval(settingTheTimeInterval);
      audio.play();
      
    }

    gettingTheHeading.textContent = `Time Remaining: ${minutes} : ${seconds}`;
    seconds--;
  }, 1000);

  audio.pause();
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

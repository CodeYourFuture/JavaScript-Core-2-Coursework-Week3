function setAlarm() {
  let time = document.getElementById("timeRemaining");
  let alarm = document.getElementById("alarmSet").value;


  let mins = Math.floor(alarm / 60);
  let secs = alarm % 60;

  let inter = setInterval(() => {
    if (mins > 0 && secs === 0) {
      mins--;
      secs = 59;
    }
    if (secs === 0) {
      clearInterval(inter);
      audio.play();
      document.querySelector(".centre").style.backgroundColor = "red";
    }

    time.textContent = `Time Remaining: ${mins} : ${secs}`;
    secs--;
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

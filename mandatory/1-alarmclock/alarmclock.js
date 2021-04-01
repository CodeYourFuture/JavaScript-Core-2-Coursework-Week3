function setAlarm() {

  let remainingTime = document.getElementById("timeRemaining");
  let setAlarmTime = document.getElementById("alarmSet").value;

  let alarmTimer = setInterval(countDown, 1000);

    function countDown() {
      if (setAlarmTime < 0) {
          playAlarm();
          document.body.style.backgroundColor = "Turquoise";
          clearInterval(alarmTimer);

        } else {
          let alarmMinutes = Math.floor(setAlarmTime / 60);
          let alarmSeconds = setAlarmTime % 60;
          remainingTime.textContent = `Time Remaining: ${alarmMinutes}: ${alarmSeconds}`;
          setAlarmTime -= 1;
        }
      }
}



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

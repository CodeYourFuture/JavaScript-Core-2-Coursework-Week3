function setAlarm() {
  // timeKeep
  const timeKeep = document.getElementById('timeRemaining')
  // input we get
  const input = document.getElementById('alarmSet').value;
  // set button
  const setBtn = document.getElementById('set');
  // stop button
  let stopBtn = document.getElementById('stop');

  let count = input, clear;
  valueCount();
  setBtn.addEventListener("click", setTime);
  stopBtn.addEventListener("click", stopCount);
};
function valueCount() {
  const minutes = math.floor(count / 60);
  const seconds = count % 60;
  count--;
  timekeep.innerText = `Time Remaining: ${minutes}:${seconds}`
};
function setTime() {
  clear = setInterval(valueCount, 1000);
  if (count < 0) {
    playAlarm();
    stopCount();
    timekeep.innerText = "Time Remaining: 00:00";
  }
};
function stopCount() {
  clearInterval(clear);
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

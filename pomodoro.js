const btnStart = document.getElementById("pomodoro-start");
const btnPause = document.getElementById("pomodoro-pause");
const btnStop = document.getElementById("pomodoro-stop");
const btnContinue = document.getElementById("pomodoro-continue");
const btnRestart = document.getElementById("pomodoro-restart");


const minutes = document.getElementById("pomodoro-minutes");
const seconds = document.getElementById("pomodoro-seconds");


let mins;
let secs;
let interval;
let continueInterv;


function countdown() {
  secs--;
  if(secs < 0) {
    secs = 59;
    mins--;
  }

  if(mins < 0) {
    mins = 0;
    secs = 0;
  }

  let secondsText = secs;
  if(secs < 10) {
    secondsText = '0' + secs;
  }

  let minutesText = mins;
  if(mins < 10) {
    minutesText = '0' + mins;
  }

  minutes.innerText = mins;
  seconds.innerText = secondsText;
}

function cleanInnerText() {
  mins = 25;
  secs = 0;
  secondsText = '0' + secs;
  minutes.innerText = mins;
  seconds.innerText = secondsText;
}

function start() {
  cleanInnerText();
  interval = setInterval(countdown, 1000);
  btnStart.classList.add("hide");
  btnPause.classList.remove("hide");
  btnStop.classList.remove("hide");
  btnRestart.classList.remove("hide");
}

function stop() {
  clearInterval(interval);
  clearInterval(continueInterv);
  cleanInnerText();
  btnStart.classList.remove("hide");
  btnRestart.classList.add("hide");
  btnPause.classList.add("hide");
  btnStop.classList.add("hide");
  btnContinue.classList.add("hide");
}

function pause() {
  clearInterval(interval);
  btnContinue.classList.remove("hide");
  btnRestart.classList.remove("hide");
  btnPause.classList.add("hide");
}

function rmvPause() {
  minutes.innerText = mins;
  if(mins < 10) {
    minutesText = '0' + mins;
  }
  seconds.innerText = secs;
  if(secs < 10) {
    secondsText = '0' + secs;
    secondsText.innerText = secondsText;
  }
  continueInterv = setInterval(countdown, 1000);
  btnContinue.classList.add("hide");
  btnStart.classList.add("hide");
}

function restart() {
  stop();
  start();
}

btnStart.addEventListener("click", start);
btnPause.addEventListener("click", pause);
btnStop.addEventListener("click", stop);
btnContinue.addEventListener("click", rmvPause);
btnRestart.addEventListener("click", restart);

const btnStart = document.getElementById("pomodoro-start");
const btnPause = document.getElementById("pomodoro-pause");
const btnStop = document.getElementById("pomodoro-stop");


const minutes = document.getElementById("pomodoro-minutes");
const seconds = document.getElementById("pomodoro-seconds");


// const timeNow = new Date().toLocaleTimeString(); //'5:37:27 PM'
// const timeGoal = Date.parse(new Date().toLocaleDateString())
// console.log(timeGoal)



// function setTimeGoal(now){
//   const time = now.split(':');
//   let hour = parseInt(time[0]);
//   let minutes = parseInt(time[1]);
//   let seconds = parseInt(time[2]);
//   console.log(hour, minutes, seconds)
// }

// setTimeGoal(timeNow)


let mins = 25;
let secs = 00;
let started = false;
let interv;


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



function timer() {
  interv = setInterval(countdown, 1000);
  btnStart.classList.add("hide");
  btnPause.classList.remove("hide");
  btnStop.classList.remove("hide");
}

function stop() {
  clearInterval(interv);
  btnStart.classList.remove("hide");
  btnPause.classList.add("hide");
  btnStop.classList.add("hide");
}



btnStart.addEventListener("click", timer);
btnStop.addEventListener("click", stop);

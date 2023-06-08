let timer = document.getElementById("timer");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let restart = document.querySelector("#restart");
let second = 0;
let miliSecond = 0;

function padSecond(num) {
  return num.toString().padStart(3, "0");
}

function padMiliSecond(num) {
  return num.toString().padStart(2, "0");
}
let interval;
start.addEventListener("click", () => {
  interval = setInterval(() => {
    if (miliSecond == 60) {
      miliSecond = 0;
      if (second == 999) {
        timer.innerHTML = "999:59";
      }
      second++;
    }
    miliSecond++;
    timer.innerHTML = `${padSecond(second)}:${padMiliSecond(miliSecond)}`;
  }, 20);
});

stop.addEventListener("click", () => {
  clearInterval(interval);
});

restart.addEventListener("click", () => {
  second = 0;
  miliSecond = 0;
  timer.innerHTML = "000:00";
});

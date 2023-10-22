let isRunning = false;
    let interval;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    function startStop() {
      if (isRunning) {
        clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
      } else {
        interval = setInterval(updateTime, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
      }
      isRunning = !isRunning;
    }

    function updateTime() {
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
      }
      document.getElementById("display").innerHTML =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
    }

    function reset() {
      clearInterval(interval);
      isRunning = false;
      seconds = 0;
      minutes = 0;
      hours = 0;
      document.getElementById("display").innerHTML = "00:00:00";
      document.getElementById("startStop").innerHTML = "Start";
    }
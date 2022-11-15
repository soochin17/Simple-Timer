let timer = null;
var seconds, minutes;
var pause = false;
var audio = new Audio('clock.mp3');
audio.loop = true;

function startTimer() {
    if ((timer == null) && (pause == false)) {
        seconds = 0;
        minutes = 0;
    } else {
        pause = false;
    }

    document.getElementById("start").disabled = true;
    document.getElementById("resume").disabled = true;
    document.getElementById("stop").removeAttribute("disabled");
    timer = setInterval(function () {
        if (seconds == 59) {
            seconds = 0;
            minutes += 1;
        } else {
            seconds += 1;
        }
        audio.play();
        document.getElementById("timer-seconds").innerHTML = (seconds < 10) ? "0" + seconds : seconds;
        document.getElementById("timer-minutes").innerHTML = (minutes < 10) ? "0" + minutes : minutes;
    }, 1000);

}

function stopTimer() {
    clearInterval(timer);
    timer = null;
    document.getElementById("start").innerHTML = "Restart";
    document.getElementById("stop").disabled = true;
    document.getElementById("resume").removeAttribute("disabled");
    document.getElementById("start").removeAttribute("disabled");
    audio.pause();
}

function resumeTimer() {
    // alert(seconds);
    pause = true;
    startTimer();
}
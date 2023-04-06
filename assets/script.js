var timer = document.querySelector("#currentTime")
$("#currentDay").html(timer);

function displayTime () {
    var now = dayjs().format("MMMM D, YYYY, hh:mm:ss");
    timer.textContent = now;
}

displayTime ();
setInterval(displayTime, 1000);

var APIkey = "7d622ed797f96c87522cc2f44e3ebc16";

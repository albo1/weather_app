var timer = document.querySelector("#currentTime")
$("#currentDay").html(timer);

function displayTime () {
    var now = dayjs().format("MMMM D, YYYY, hh:mm:ss");
    timer.textContent = now;
}

displayTime ();
setInterval(displayTime, 1000);

var APIkey = "7d622ed797f96c87522cc2f44e3ebc16";

function getAPI(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {})
}
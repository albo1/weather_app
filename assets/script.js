var timer = document.querySelector("#currentTime")
$("#currentDay").html(timer);

function displayTime () {
    var now = dayjs().format("MMMM D, YYYY");
    timer.textContent = now;
}

displayTime ();
setInterval(displayTime, 1000);

var APIkey = "7d622ed797f96c87522cc2f44e3ebc16";
var city;
var searchButton = document.getElementById("searchBtn");
var searchInput = document.getElementById("forecast");
cityLocation.innerHTML= data.city.name + " (" + dayjs().format('M/D/YY') + ") <img src='https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png'/>";
function getWeather(data) {
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat="+data.coord.lat+"&lon="+data.coord.lon+"&appid=1a6e242c584145cebf5c8827e5e6e268&units=imperial";
fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
  }
  
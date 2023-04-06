var timer = document.querySelector("#currentTime")
$("#currentDay").html(timer);

function displayTime () {
    var now = dayjs().format("MMMM D, YYYY, hh:mm:ss");
    timer.textContent = now;
}

displayTime ();
setInterval(displayTime, 1000);

var APIkey = "7d622ed797f96c87522cc2f44e3ebc16";

if(localStorage.get("city")) {
    var searchCity = localStorage.getItem("city");
} else {
    var searchCity = "Philadelphia";
};

var searchButton = document.querySelector("#user-form");
var forecastView = document.querySelector("#forecast");
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



// function getAPI(city) {
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
// fetch(queryURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         getWeather(data);
//         var button = document.createElement("button");
//         button.className = "btn";
//         button.textContent = city;
//         button.onlcick = function() {getAPI(city)};
//         document.getElementById("city-buttons").appendChild(button);
//         localStorage.setItem("city", city);
//     });
// };

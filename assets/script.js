
var timer = document.querySelector("#currentTime")
$("#currentDay").html(timer);

function displayTime() {
  var now = dayjs().format("MMMM D, YYYY");
  timer.textContent = now;
}

displayTime();
setInterval(displayTime, 1000);
// getWeather(savedCity);

var APIkey = "7d622ed797f96c87522cc2f44e3ebc16";
var city;
var newCityButton;
var searchButton = document.getElementById("search-button");
var searchBar = document.querySelector(".search-bar");
var searchInput = document.getElementById("forecast");
var cityLocation = document.querySelector("#city-location");
var cityInput = document.querySelector("#city-input")
var savedCity = localStorage.getItem("city");
var cityList = document.querySelector("#city-list");
var savedCities = JSON.parse(localStorage.getItem("savedCities")) || [];


function getWeather(city) {
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector(".city").textContent = data.name;

      var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=1a6e242c584145cebf5c8827e5e6e268&units=imperial";
      fetch(queryURL2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          document.querySelector(".temp").textContent = "Temperature: " + data.list[0].main.temp + "°F"
          document.querySelector(".humidity").textContent = "Humidity: " + data.list[0].main.humidity + "%"
          document.querySelector(".wind").textContent = "Wind Speed: " + data.list[0].wind.speed + "MPH"

          var boxOne = document.querySelector("#box1");
          boxOne.innerHTML = dayjs().add(1, "day").format('M/D/YY') + "<br/><img src='https://openweathermap.org/img/wn/" + data.list[8].weather[0].icon + "@2x.png'/><br/>Temp: " + data.list[8].main.temp + "°F<br/>Wind: " + data.list[8].wind.speed + " mph<br/>Humidity: " + data.list[8].main.humidity + "%";

          var boxTwo = document.querySelector("#box2");
          boxTwo.innerHTML = dayjs().add(2, "day").format('M/D/YY') + "<br/><img src='https://openweathermap.org/img/wn/" + data.list[8].weather[0].icon + "@2x.png'/><br/>Temp: " + data.list[8].main.temp + "°F<br/>Wind: " + data.list[8].wind.speed + " mph<br/>Humidity: " + data.list[8].main.humidity + "%";

          var boxThree = document.querySelector("#box3");
          boxThree.innerHTML = dayjs().add(3, "day").format('M/D/YY') + "<br/><img src='https://openweathermap.org/img/wn/" + data.list[24].weather[0].icon + "@2x.png'/><br/>Temp: " + data.list[24].main.temp + "°F<br/>Wind: " + data.list[24].wind.speed + " mph<br/>Humidity: " + data.list[24].main.humidity + "%";

          var boxFour = document.querySelector("#box4");
          boxFour.innerHTML = dayjs().add(4, "day").format('M/D/YY') + "<br/><img src='https://openweathermap.org/img/wn/" + data.list[32].weather[0].icon + "@2x.png'/><br/>Temp: " + data.list[32].main.temp + "°F<br/>Wind: " + data.list[32].wind.speed + " mph<br/>Humidity: " + data.list[32].main.humidity + "%";

          var boxFive = document.querySelector("#box5");
          boxFive.innerHTML = dayjs().add(5, "day").format('M/D/YY') + "<br/><img src='https://openweathermap.org/img/wn/" + data.list[39].weather[0].icon + "@2x.png'/><br/>Temp: " + data.list[39].main.temp + "°F<br/>Wind: " + data.list[39].wind.speed + " mph<br/>Humidity: " + data.list[39].main.humidity + "%";


        })
    })
}

function saveCityLS(city) {
  savedCity = city;
  var cities = JSON.parse(localStorage.getItem("cities")) || [];
  cities.push(city);
  localStorage.setItem("cities", JSON.stringify(cities));
  localStorage.setItem("city", city);
}

window.addEventListener("load", () => {
  if (savedCity) {
    getWeather(savedCity);
  }
  var cities = JSON.parse(localStorage.getItem("cities")) || [];
  for (var i = Math.max(0, cities.length - 4); i < cities.length; i++) {
    var city = cities[i];
    const listItem = document.createElement("button");
    listItem.className = "list-group-item";
    listItem.textContent = city;
    listItem.addEventListener("click", () => {
      getWeather(city, APIkey);
      cityLocation.textContent = cityInput.value;
    });
    cityList.appendChild(listItem);
  }
});

cityList.addEventListener("click", (event) => {
  if (event.target && event.target.nodeName === "BUTTON") {
    var city = event.target.textContent;
    getWeather(city, APIkey);
    cityLocation.textContent = city;
  }
});

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityInput = document.querySelector("#cityInput");
  const city = cityInput.value;
  console.log(city);
  saveCityLS(city);

  const newCityButton = document.createElement("button");
  newCityButton.className = 'list-group-item';
  newCityButton.textContent = city;
  newCityButton.addEventListener("click", () => {
    getWeather(city, APIkey);
    cityLocation.textContent = city;
  });

  cityList.appendChild(newCityButton);
  if (cityList.childElementCount > 4) {
    cityList.removeChild(cityList.firstChild);
  }

  getWeather(city);
  savedCity = city;
});


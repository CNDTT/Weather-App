let currentDate = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentDate.getDay()];
let hours = currentDate.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentDate.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let time = `${hours}:${minutes}`;
let displayDayTime = document.querySelector("#current-time");
displayDayTime.innerHTML = `${day} ${time}`;

function displayCurrentTemperature(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;

  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#low-temperature").innerHTML = Math.round(
    response.data.main.temp_min
  );

  document.querySelector("#high-temperature").innerHTML = Math.round(
    response.data.main.temp_max
  );
}

function search(city) {
  let apiKey = "e5f889e7b3d6f28b9f5c81e13ac7af5b";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayCurrentTemperature);
}

function searchBar(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}
let citySearch = document.querySelector("#city-form");
citySearch.addEventListener("submit", searchBar);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 77;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 25;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

search("Tokyo");

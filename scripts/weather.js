const headerLocation = document.querySelector('.weather__location');
const weatherImg = document.querySelector('.weather__img');
const temp = document.querySelector('.weather__temp');

navigator.geolocation.getCurrentPosition(function (position) {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=fc45e16cea844ae1a07174043221310&q=${
      position.coords.latitude
    },${position.coords.longitude}&aqi=no&lang=pt&hour=${date.getHours()}`
  )
    .then((date) => date.json())
    .then((weather) => {
      console.log(weather);
      headerLocation.innerText = `${weather.location.tz_id.split('/')[1]} - ${
        weather.location.region
      }`;
      weatherImg.setAttribute('src', weather.current.condition.icon);
      weatherImg.setAttribute('alt', weather.current.condition.text);
      temp.innerText = `${parseInt(weather.current.temp_c)}º`;
    });
});

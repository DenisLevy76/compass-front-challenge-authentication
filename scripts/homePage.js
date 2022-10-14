if (!localStorage.getItem('user') || !localStorage.getItem('password')) {
  window.location.href = '../index.html';
}

getCurrentWeather();

countdown();

showHour();
showDate();

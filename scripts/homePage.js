if (!localStorage.getItem('user') || !localStorage.getItem('password')) {
  window.location.href = '../index.html';
}

const handleLogout = () => {
  if (confirm('Você realmente deseja sair?')) {
    logout();
  }
};

getCurrentWeather();

countdown(600);

showHour();
showDate();

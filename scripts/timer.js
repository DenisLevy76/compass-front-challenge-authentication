const date = new Date();
const hour = document.querySelector('.header__time strong');
const today = document.querySelector('.header__time p');
const countdownElement = document.querySelector('.timer__countdown strong');

const padNumber = (number) => {
  return number.toString().padStart(2, '0');
};

const showHour = () => {
  hour.innerText = `${padNumber(date.getHours())}:${padNumber(
    date.getMinutes()
  )}`;
};

const showDate = () => {
  moment.locale('pt-BR');
  today.innerText = moment().format('dddd[,] D [de] MMMM [de] YYYY');
};

const timer = setInterval(() => {
  showDate();
  showHour();
}, 60 * 1000); // 60 secs

const countdown = () => {
  let seconds = 600;
  const interval = setInterval(() => {
    if (seconds !== 0) {
      seconds -= 1;
      countdownElement.innerText = seconds.toString().padStart(3, '0');
    } else if (seconds === 0) {
      if (confirm('Deseja efetuar o logout da aplicação?')) {
        clearInterval(interval);
        document.location.replace('../index.html');
      } else {
        seconds = 600;
      }
    }
  }, 1000);
};

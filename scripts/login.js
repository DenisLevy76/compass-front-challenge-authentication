const formRef = document.querySelector('.signIn');
const userInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const login = (event) => {
  event.preventDefault();
  const user = userInput.value;
  const password = passwordInput.value;

  if (user === 'admin' && password === 'admin') {
    formRef.classList.remove('error');
    window.location.href = '../pages/home.html';

    localStorage.setItem('user', user);
    localStorage.setItem('password', password);
  } else formRef.classList.add('error');
};

const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('password');
  window.location.href = '../index.html';
};

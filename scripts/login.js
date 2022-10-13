const formRef = document.querySelector('.signIn');
const userInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const login = (event) => {
  event.preventDefault();
  const user = userInput.value;
  const password = passwordInput.value;

  if (user === 'admin@admin.com.br' && password === 'admin') {
    formRef.classList.remove('error');
    window.location.replace('../pages/home.html');
  } else formRef.classList.add('error');
};

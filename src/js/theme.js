const checkbox = document.querySelector('input[type="checkbox"]');
const headBtn = document.querySelector('.sign-up-button');

const refs = {
  startBackdrop: document.querySelector('.start-backdrop'),
  startCloseBtn: document.querySelector('.start-close-btn'),
  form: document.querySelector('.start-form'),
};

const LOCAL_KEY = 'form-data';
let inputData = {};

function openStarModal() {
  refs.startBackdrop.classList.remove('start-hidden');
  document.body.classList.add('scroll-lock');
}

function onCloseBtn() {
  refs.startBackdrop.classList.add('start-hidden');
  document.body.classList.remove('scroll-lock');
}

function onFormSub(event) {
  event.preventDefault();
  const { name, email, password } = event.currentTarget.elements;
  inputData.name = name.value;
  inputData.email = email.value;
  inputData.password = password.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(inputData));
  event.currentTarget.reset();
  refs.startBackdrop.classList.add('start-hidden');
}

function onEscClose(e) {
  if (e.code !== 'Escape') {
    return;
  } else {
    refs.startBackdrop.classList.add('start-hidden');
    document.body.classList.remove('scroll-lock');
  }
}

refs.startCloseBtn.addEventListener('click', onCloseBtn);
refs.form.addEventListener('submit', onFormSub);
window.addEventListener(`keydown`, onEscClose);

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
  checkbox.checked = savedTheme === 'dark';
}

function changeTheme() {
  if (checkbox.checked) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

checkbox.addEventListener('change', changeTheme);
headBtn.addEventListener('click', openStarModal);

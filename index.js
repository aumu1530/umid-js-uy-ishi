let main = document.querySelector('.main');
let x1 = document.querySelector('.x1');
let x4 = document.querySelector('.x4');

x1.onclick = function () {
  main.classList.add('demo');
};

x4.onclick = function () {
  main.classList.remove('demo');
};

let theme = document.querySelector('.theme');
let light = document.querySelector('.light');

theme.onclick = function () {
  theme.classList.toggle('sun');
  light.classList.toggle('dark');
};
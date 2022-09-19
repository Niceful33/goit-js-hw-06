function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('button');
const textBgColor = document.querySelector('.color');
const bgColorOfBody = document.querySelector('body');

changeColorBtn.addEventListener('click', onClickBtn);
function onClickBtn() {
  bgColorOfBody.style.backgroundColor = getRandomHexColor();
  textBgColor.textContent = getRandomHexColor();
}

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueId = document.querySelector('#value');

let counterValue = 0;

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueId.textContent = `${counterValue}`;
});
decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueId.textContent = `${counterValue}`;
});

const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInput);

function onInput(evt) {
  input.classList.remove('valid');
  input.classList.remove('invalid');

  if (evt.currentTarget.value.length === +input.dataset.length) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
}

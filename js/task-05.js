const nameOfInput = document.querySelector('#name-input');
const nameOfOutput = document.querySelector('#name-output');

nameOfInput.addEventListener('input', onInputChange);

function onInputChange(evt) {
  console.log(evt.currentTarget.value);
  nameOfOutput.textContent = evt.currentTarget.value;
  if (evt.currentTarget.value === '') {
    nameOfOutput.textContent = 'Anonymous';
  }
}

// nameOfInput.addEventListener('input', event => {
//   nameOfOutput.textContent = event.currentTarget.value;
//   if (event.currentTarget.value === '') {
//     nameOfOutput.textContent = 'Anonymous';
//   }
// });

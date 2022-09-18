const rangeControl = document.querySelector('#font-size-control');
const textChange = document.querySelector('#text');

rangeControl.addEventListener('change', onChange);

function onChange(evt) {
  textChange.style.fontSize = `${evt.currentTarget.value}px`;
}

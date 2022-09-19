const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;
  if (email.value === '' || password.value === '') {
    alert('Please, fiil all fields!!');
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    evt.currentTarget.reset();
    console.log(data);
  }
}

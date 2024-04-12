const form = document.querySelector('.signup-form form');
const inputs = document.querySelectorAll('.signup-form form input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    if (!input.value) {
      input.classList.add('alert');
    } else {
      input.classList.remove('alert');
      if (input.type == 'email') {
        if (validateEmail(input.value)) {
          input.parentElement.classList.remove('alert');
        } else {
          input.parentElement.classList.add('alert');
        }
      }
    }
  });
});

function validateEmail(email) {
  var re =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return re.test(String(email).toLowerCase());
}

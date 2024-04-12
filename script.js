const form = document.querySelector('.signup-form form');
const inputs = document.querySelectorAll('.signup-form form input');

form.addEventListener('submit-button', (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    if (!input.value) {
      input.parentElement.classList.add('alert');
    } else {
      input.parentElement.classList.remove('alert');
      // if (input.type == 'email') {
      //   if (validateEmail(input.value)) {
      //     input.parentElement.classList.remove('error');
      //   } else {
      //     input.parentElement.classList.add('error');
      //   }
      // }
    }
  });
});

function validateEmail(email) {
  var re =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return re.test(String(email).toLowerCase());
}

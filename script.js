document
  .getElementById('signup-form')
  .addEventListener('submit-button', function (event) {
    // Prevent form submission
    event.preventDefault();

    // Reset error messages
    var errorMessages = document.getElementsByClassName('error');
    for (var i = 0; i < errorMessages.length; i++) {
      errorMessages[i].innerHTML = '';
    }

    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validate first name
    if (firstName.trim() === '') {
      document.getElementById('firstNameError').innerHTML =
        'First name is required!!!';
    }

    // Validate last name
    if (lastName.trim() === '') {
      document.getElementById('lastNameError').innerHTML =
        'Last name is required';
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').innerHTML = 'Invalid email format';
    }

    // Validate password
    if (password.trim() === '') {
      document.getElementById('passwordError').innerHTML =
        'Password is required';
    } else if (password.length < 8) {
      document.getElementById('passwordError').innerHTML =
        'Password must be at least 8 characters long';
    }

    // If any field fails validation, prevent form submission
    var errorsFound = document.querySelectorAll('.error');
    for (var j = 0; j < errorsFound.length; j++) {
      if (errorsFound[j].innerHTML !== '') {
        return;
      }
    }
    if (confirm('Are you sure you want to submit the form?')) {
      // You can submit the form here if needed
      // document.getElementById("myForm").submit();
      alert('Form submitted successfully!');
    }
  });

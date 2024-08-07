document.getElementById('signup-form').addEventListener('submit', function(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Clear previous error messages
    clearErrors();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate form
    let isValid = true;

    // Validate name
    if (name.length < 3) {
        showError('name-error', 'Name must be at least 3 characters long');
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate password
    if (password.length < 6) {
        showError('password-error', 'Password must be at least 6 characters long');
        isValid = false;
    }

    // If the form is valid, submit it
    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can add code to submit the form data using AJAX or other methods
    }
});

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(element) {
        element.style.display = 'none';
        element.textContent = '';
    });
}

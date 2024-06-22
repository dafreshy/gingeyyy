window.onload = function() {
    const modal = document.getElementById('passwordModal');
    const form = document.getElementById('password-form');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    modal.style.display = 'block'; // Show the modal on page load

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const password = passwordInput.value;
        if (password === 'snickers') { // Replace 'yourpassword' with your actual password
            modal.style.display = 'none'; // Hide the modal
        } else {
            errorMessage.style.display = 'block';
        }
    });
};

document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    if (password === 'snickers') {
        document.getElementById('passwordModal').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});

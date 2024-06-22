document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    if (password === 'snickers') {
        window.location.href = 'index.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});

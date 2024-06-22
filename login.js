document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    if (password === '1205') {
        window.location.href = 'index.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});

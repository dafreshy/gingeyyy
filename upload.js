document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const datetimeInput = document.getElementById('datetimeInput').value;

    formData.append('datetime', datetimeInput);

    fetch('upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        location.reload(); // Reload the page to show uploaded image
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error uploading image.');
    });
});

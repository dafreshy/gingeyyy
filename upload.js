document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    
    fetch('upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        location.href = 'calendar.html'; // Redirect to calendar page after successful upload
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error uploading image.');
    });
});

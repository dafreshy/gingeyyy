document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const fileInput = document.getElementById('fileInput');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        formData.append('file', file);

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
    } else {
        alert('Please select an image file.');
    }
});

document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('file-input').files[0];
    const comment = document.getElementById('comment').value;

    if (fileInput) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const newImage = {
                src: e.target.result.split(',')[1],
                comment: comment
            };
            images.push(newImage);  // Append to images array
            alert('Image uploaded successfully!');
        };
        reader.readAsDataURL(fileInput);
    }
});

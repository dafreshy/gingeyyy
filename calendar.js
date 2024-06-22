document.addEventListener('DOMContentLoaded', function() {
    fetch('uploaded_images.json')
        .then(response => response.json())
        .then(data => {
            const calendar = document.getElementById('calendar');

            data.forEach(item => {
                const imageElement = document.createElement('img');
                imageElement.src = 'images/' + item.src;
                imageElement.alt = 'Uploaded Image';
                imageElement.title = `${item.comment}\nDate/Time: ${item.datetime}`;

                calendar.appendChild(imageElement);
            });
        })
        .catch(error => console.error('Error fetching uploaded images:', error));
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('uploaded_images.json')
        .then(response => response.json())
        .then(data => {
            const calendar = document.getElementById('calendar');

            data.forEach(image => {
                const imageElement = document.createElement('img');
                imageElement.src = 'images/' + image.src;
                imageElement.alt = 'Uploaded Image';
                imageElement.title = `${image.comment}\nDate/Time: ${image.datetime}`;

                // You can customize how you want to display images in the calendar
                calendar.appendChild(imageElement);
            });
        })
        .catch(error => console.error('Error fetching uploaded images:', error));
});

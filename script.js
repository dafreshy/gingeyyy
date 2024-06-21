const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
    // Add more image paths as needed
];

function getRandomImages() {
    let selectedImages = [];
    while (selectedImages.length < 3) {
        let randomIndex = Math.floor(Math.random() * images.length);
        if (!selectedImages.includes(images[randomIndex])) {
            selectedImages.push(images[randomIndex]);
        }
    }
    return selectedImages;
}

function displayImages() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';  // Clear any existing images
    const randomImages = getRandomImages();
    randomImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        gallery.appendChild(imgElement);
    });
}

window.onload = displayImages;
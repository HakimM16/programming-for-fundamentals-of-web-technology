let next = document.getElementById('next');
let previous = document.getElementById('previous');

let images = ['tottenham.jpg', 'eithad.jpg', 'qatar.jpg']

function nextImage() {
    let gallery = document.getElementById('gallery');
    let currentImage = gallery.src.split('/').pop(); // get current image
    
    // get index of current image
    let index = images.indexOf(currentImage.split('/').pop());

    // get next image
    let nextIndex = (index + 1) % images.length; // This is to make sure it loops back to the first image
    let nextImage = images[nextIndex];

    gallery.src = 'images/' + nextImage;
}

function previousImage() {
    let gallery = document.getElementById('gallery');
    let currentImage = gallery.src.split('/').pop(); // get current image
    
    // get index of current image
    let index = images.indexOf(currentImage.split('/').pop());

    // get previous image
    let prevIndex = (index - 1) % images.length; // This is to make sure it loops back to the first image
    if (prevIndex < 0) {
        prevIndex = images.length - 1;
    }
    let prevImage = images[prevIndex];

    gallery.src = 'images/' + prevImage;
}

next.addEventListener('click', nextImage);
previous.addEventListener('click', previousImage);

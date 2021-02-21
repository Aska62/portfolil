let images = [
    './images/capture/1.jpg',
    './images/capture/2.jpg',
    './images/capture/3.jpg',
    './images/capture/4.jpg',
    './images/capture/5.jpg',
    './images/capture/6.jpg',
    './images/capture/7.jpg',
    './images/capture/8.jpg',
    './images/capture/9.jpg',
    './images/capture/10.jpg',
    './images/capture/11.jpg',
    './images/capture/12.jpg',
    './images/capture/13.jpg',
    './images/capture/14.jpg',
    './images/capture/15.jpg',
];

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.previous');

// set images
const imageWindow = document.querySelector('.image-container');
for (let i = 0; i < images.length; i++) {
    const img = document.createElement('img');
    img.classList.add('image','right');
    img.setAttribute('id', `image${i + 1}`);
    img.setAttribute('src', images[i]);
    imageWindow.appendChild(img);
};

// set default image and dot
window.onload = () => {
    const firstImage = document.querySelector('#image1');
    firstImage.classList.replace('right', 'shown');
};

const allImages = document.querySelectorAll('.image');

const moveToNext = () => {
    // Initialize shown image
    const shownImage = document.querySelector('.shown');
    const currentId = parseInt(shownImage.id.split('e')[1]);
    // Initialize the next image + id
    let nextId = 0;
    let nextImage = 0;
    // move shown image to left
    shownImage.classList.replace('shown', 'left');

    // If the shownimage is the last,
    // move all the images from left to right and set the nextId to 1
    if (currentId === images.length) {
        allImages.forEach((image) => {
            image.classList.replace('left', 'right');
        });
        nextId = 1;
    } else {
        nextId = currentId + 1;
    };
    nextImage = document.getElementById(`image${nextId}`);
    // show the next image hidden in the right side
    nextImage.classList.replace('right', 'shown');
}

// click 'next' button to show next image
nextBtn.addEventListener('click', () => {
    moveToNext();
});

setInterval(moveToNext, 6000);

const moveToPrevious = () => {
    // Initialize shown image
    const shownImage = document.querySelector('.shown');
    const currentId = parseInt(shownImage.id.split('e')[1]);
    // Initialize the next image + id
    let prevId = 0;
    let prevImage = 0;
    // move shown image to left
    shownImage.classList.replace('shown', 'right');

    // If the shownimage is the first,
    // move all the images from right to left and set the nextId to 1
    if (currentId === 1) {
        allImages.forEach((image) => {
            image.classList.replace('right', 'left');
        });
        prevId = images.length;
    } else {
        prevId = currentId - 1;
    };
    // show the next image hidden in the right side
    prevImage = document.getElementById(`image${prevId}`);
    prevImage.classList.replace('left', 'shown');
}
// click 'previous' button to show previous image
prevBtn.addEventListener('click', () => {
    moveToPrevious();
});

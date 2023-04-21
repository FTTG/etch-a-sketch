const container = document.querySelector('.grid-container');

// Create the grid inside the grid-container
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 16; j++) {
        const divs = document.createElement('div');
        divs.classList.add('pixel');
        row.appendChild(divs);
    }
    container.appendChild(row);
}

const pixels = document.querySelectorAll('.pixel');

// Give each pixel div the class to paint them black on hover
for (let pixel of pixels) {
    pixel.addEventListener('mouseenter', () => pixel.classList.add('black-pixel'));
}

// Provide the instructions to remove the class to paint them black on use of clear button
const clearnBtn = document.querySelector('#clear');
clearnBtn.addEventListener('click', () => {
    for (let pixel of pixels) {
        pixel.classList.remove('black-pixel');
    }
});
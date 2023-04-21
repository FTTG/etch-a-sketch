const container = document.querySelector('.grid-container');
const gridSize = document.querySelector('#grid-size');
const sliderText = document.querySelector('#grid-text');
let pixels = document.querySelectorAll('.pixel');

createGrid();

gridSize.addEventListener("input", createGrid);

// Create the grid inside the grid-container
function createGrid() {
    container.textContent = '';
    for (let i = 0; i < gridSize.value; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < gridSize.value; j++) {
            const divs = document.createElement('div');
            divs.classList.add('pixel');
            row.appendChild(divs);
        }
        container.appendChild(row);
    }
    sliderText.textContent = `Grid Size: ${gridSize.value}`;
    // After all pixels are created, update pixels node
    pixels = document.querySelectorAll('.pixel');
    paintBlack();
}


function paintBlack() {
    // Give each pixel div the class to paint them black on hover
    for (let pixel of pixels) {
        pixel.addEventListener('mouseenter', () => pixel.classList.add('black-pixel'));
    }
}
// Provide the instructions to remove the class to paint them black on use of clear button
const clearnBtn = document.querySelector('#clear');
clearnBtn.addEventListener('click', () => {
    for (let pixel of pixels) {
        pixel.classList.remove('black-pixel');
    }
});
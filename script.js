const gridSize = document.querySelector('#grid-size');


createGrid();

gridSize.addEventListener("input", createGrid);

// Create the grid inside the grid-container
function createGrid() {
    const container = document.querySelector('.grid-container');
    const sliderText = document.querySelector('#grid-text');
    let pixels = document.querySelectorAll('.pixel');
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
    paintBlack(pixels);
}


function paintBlack(pixels) {
    // Give each pixel div the class to paint them black on hover
    for (let pixel of pixels) {
        pixel.addEventListener('mouseenter', () => pixel.classList.add('black-pixel'));
    }
}
// Provide the instructions to remove the class to paint them black on use of clear button
const clearnBtn = document.querySelector('#clear');
clearnBtn.addEventListener('click', () => {
    let pixels = document.querySelectorAll('.pixel');
    for (let pixel of pixels) {
        pixel.classList.remove('black-pixel');
    }
});
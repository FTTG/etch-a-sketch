const container = document.querySelector('.grid-container');

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


for (let pixel of pixels) {
    pixel.addEventListener('mouseenter', () => pixel.classList.add('black-pixel'));
}
let color = "0123456789ABCDEF";
let container = document.getElementById('container');

function generateRandomColor() {
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
        randomColor += color[Math.floor(Math.random() * color.length)];
    }
    return randomColor;
}

function generateColors() {
    container.innerHTML = ''; // Clear previous boxes
    for (let i = 0; i < 5; i++) {
        let box = document.createElement('div');
        box.classList.add('color-box');
        box.style.backgroundColor = generateRandomColor();
        container.appendChild(box);
    }
}

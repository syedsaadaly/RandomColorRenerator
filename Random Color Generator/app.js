let color = "0123456789ABCDEF";
let container = document.getElementById('container');

function generateRandomColor() {
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
        randomColor += color[Math.floor(Math.random() * color.length)];
    }
    return randomColor;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Color code copied to clipboard!");
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

function generateColors() {
    container.innerHTML = ''; // Clear previous boxes
    for (let i = 0; i < 5; i++) {
        let colorCode = generateRandomColor();
        let box = document.createElement('div');
        box.classList.add('color-box');
        box.style.backgroundColor = colorCode;
        box.textContent = colorCode; // Set color code as text content
        box.addEventListener('click', () => {
            copyToClipboard(colorCode);
        });
        container.appendChild(box);
    }
}

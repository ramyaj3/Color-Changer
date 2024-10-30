function changeColor(color) {
    if (color === 'random') {
        document.body.style.backgroundColor = getRandomColor();
    } else {
        document.body.style.backgroundColor = color;
    }
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
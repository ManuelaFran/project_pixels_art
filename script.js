const black = document.getElementById('black');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const colorSelect = document.querySelectorAll('.color');

/* black.addEventListener('click', addSelected);
red.addEventListener('click', addSelected);
blue.addEventListener('click', addSelected);
green.addEventListener('click', addSelected); */
function addSelected(event) {
    let selectedRemove = document.querySelector('.selected');
    selectedRemove.classList.remove('selected');
    event.target.classList.add('selected');
}

for(let color of colorSelect) {
    color.addEventListener('click', addSelected);
}

function selectColor(event) {
    let color = document.querySelector('.selected');
    event.target.style.backgroundColor = color.id;
}
function clickPixel() {
    let pixel = document.querySelectorAll('.pixel');
}
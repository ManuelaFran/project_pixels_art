const colorSelect = document.querySelectorAll('.color');

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
    const background = window.getComputedStyle(color).getPropertyValue('background-color');
    event.target.style.background = background;
}
/*function clickPixel() {
    let pixel = document.querySelectorAll('.pixel');
}*/
let pixel = document.querySelectorAll('.pixel');
for(let index of pixel) {
    index.addEventListener('click', selectColor);
}
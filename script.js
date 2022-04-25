const black = document.getElementById('black');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');

black.addEventListener('click', addSelected);
red.addEventListener('click', addSelected);
blue.addEventListener('click', addSelected);
green.addEventListener('click', addSelected);
function addSelected(event) {
    let selectedRemove = document.querySelector('.selected');
    selectedRemove.classList.remove('selected');
    event.target.classList.add('selected');
}
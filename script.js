const colorSelect = document.querySelectorAll('.color');

function addSelected(event) {
  const selectedRemove = document.querySelector('.selected');
  selectedRemove.classList.remove('selected');
  event.target.classList.add('selected');
}
for (const color of colorSelect) {
  color.addEventListener('click', addSelected);
}

function selectColor(event) {
  const color = document.querySelector('.selected');
  const background = window.getComputedStyle(color).getPropertyValue('background-color');
  event.target.style.background = background;
}
const pixel = document.querySelectorAll('.pixel');
for (const index of pixel) {
  index.addEventListener('click', selectColor);
}

function clearPixel() {
  for (const index of board) {
    index.style.backgroundColor = 'white';
  }
}
const board = document.querySelectorAll('.pixel')
const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearPixel);


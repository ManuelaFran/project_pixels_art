const colorSelect = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');

// Adicionou e removeu a classe selected - Requisito 7
function addSelected(event) {
  const selectedRemove = document.querySelector('.selected');
  selectedRemove.classList.remove('selected');
  event.target.classList.add('selected');
}
for (const color of colorSelect) {
  color.addEventListener('click', addSelected);
}
// Preenche os quadros com a cor selecionada - Requisito 8
function selectColor(event) {
  const color = document.querySelector('.selected');
  const background = window.getComputedStyle(color).getPropertyValue('background-color');
  event.target.style.background = background;
}
// Preenche os quadros com a cor branca - Requisito 9
function clearPixel() {
  const clearButton = document.getElementById('clear-board');
  const square = document.querySelectorAll('.pixel');
  const clearColor = 'white';

  clearButton.addEventListener('click', function () {
    for (let index = 0; index < square.length; index += 1) {
      if (square[index].style.backgroundColor !== 'white') {
        square[index].style.backgroundColor = clearColor;
      }
    }
  });
}clearPixel();
// Criou o quadro de Pixels - Requisito 4
function createPixelsBoard(size) {
  for (let index = 0; index < size * size; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.className = 'pixel';
    createDiv.addEventListener('click', selectColor);
    createDiv.addEventListener('click', clearPixel);
    pixelBoard.appendChild(createDiv);
  }
}
createPixelsBoard(5);

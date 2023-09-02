let currentColor = "#000000";
let currentMode = "color";
function setCurrentColor(newColor) {
  currentColor = newColor;
}
function setCurrentMode(newMode) {
  currentMode = newMode;
}

let container = document.querySelector("#container");
let picker = document.querySelector("#picker");
let pickerBtn = document.querySelector("#pickerbtn");
let rainbowBtn = document.querySelector("#rainbow");
let eraserBtn = document.querySelector("#eraser");
let resetBtn = document.querySelector("#reset");
let sizeValue = document.querySelector("#size");
let sliderValue = document.querySelector("#slider");
let input = document.querySelector("#range"); //selects the input element
sliderValue = input.value; //slider value
sizeValue.textContent = `${input.value} X ${input.value}`;// value printed
input.addEventListener("input", (event) =>{
  sliderValue = event.target.value; //updates the value on slide
  sizeValue.textContent = `${input.value} X ${input.value}`;// value printed
  clearGrid(); //reloads the grid and create a new grid with value selected on slider  
});
picker.oninput = (e) => setCurrentColor(e.target.value);
pickerBtn.onclick = () => setCurrentMode('color');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
eraserBtn.onclick = () => setCurrentMode('eraser');
resetBtn.onclick = () => clearGrid();

function createGrid(size){
/* set grid row and column height and width*/
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;  
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (var i = 0; i < size * size; i++) {
    let grid = document.createElement('div');
    grid.classList.add('grid');
    grid.addEventListener('mouseover', changeColor);
    container.appendChild(grid);
  }
}


function changeColor(e) {
  if (currentMode === 'rainbow') {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
  } else if (currentMode === 'color') {
    e.target.style.backgroundColor = currentColor
  } else if (currentMode === 'eraser') {
    e.target.style.backgroundColor = '#fefefe'
  }
    /*e.target.style.backgroundColor = "black";*/
}

function clearGrid() {
  container.innerHTML = '';
  createGrid(sliderValue);
}

window.onload = () => {
  createGrid(sliderValue);
}



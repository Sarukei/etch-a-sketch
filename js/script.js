// const gridContainer = document.getElementById('grid');
const clearGridBtn = document.getElementById('grid-btn');
const gridSquareSize = 16;

function createGrid(gridSquareSize) {
  const gridContainer = document.createElement('div');
  const gridContainerSize = 960;
  gridContainer.setAttribute('id', 'grid');
  gridContainer.style = `
  
  display: grid;
  grid-template-columns: repeat(${gridSquareSize}, 1fr);
  grid-template-rows: repeat(${gridSquareSize}, 1fr);
  width: ${gridContainerSize}px;
  height: ${gridContainerSize}px;

  `;

  document.body.appendChild(gridContainer);
}

function populateGrid(gridSquareSize) {
  const gridContainer = document.getElementById('grid');
  for (let i = 0; i < gridSquareSize ** 2; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    gridContainer.appendChild(squareDiv);
  }

  gridContainer.addEventListener('mouseover', (e) => {
    e.preventDefault();
    const currEl = e.target;
    // console.log(currEl);
    currEl.classList.add('square-black');
  });
}
function promptForNewGridSize() {
  const createNewGrid = confirm('Create new grid?');

  if (createNewGrid) {
    // Get rid of old grid
    document.getElementById('grid').remove();

    // Prompt for new grid size
    const gridSize = parseInt(prompt('What grid size do you want (square): '));
    createGrid(gridSize);
    populateGrid(gridSize);
  }
}

function clearGrid() {
  const gridContainer = document.getElementById('grid');
  [...gridContainer.children].forEach((square) => {
    console.log('clearing');
    square.classList.remove('square-black');
  });
  promptForNewGridSize();
}
createGrid(gridSquareSize);
populateGrid(gridSquareSize);

clearGridBtn.addEventListener('click', clearGrid);

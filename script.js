// create a 16 x 16 grid of square divs

for (let i = 0; i < 256; i++) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    container = document.getElementById('container');
    container.appendChild(gridSquare);
    gridSquare.addEventListener('mouseenter', changeColor);
}

//create a function that changes a div's color

function changeColor(e) { 
    e.target.style.backgroundColor = 'black';
    console.log('hover');
}

// Make it so the clear grid button clears the grid

clearGridButton = document.getElementById('clear-grid-button')
clearGridButton.addEventListener('click', clearGrid);

function clearGrid() {
    squareGrid = document.querySelectorAll('.grid-square');

    for (let i = 0; i < squareGrid.length; i++) {
        squareGrid[i].style.backgroundColor = 'white';
    }
}

// change grid size

setNewGridButton = document.getElementById('set-new-grid-button');
setNewGridButton.addEventListener('click', setNewGrid);

function setNewGrid() {
    squareGrid = document.querySelectorAll('.grid-square');

    for (let i = 0; i < squareGrid.length; i++) {
        squareGrid[i].remove();
    }

    let newGrid = prompt('How many squares would you like in your grid? Please select a number 1-100', '16');

    if (newGrid > 100 || newGrid < 0) {
        alert('enter a number between 1 - 100');
        prompt('How many squares would you like in your grid? Please select a number 1-100', '16');
    } 

    let newGridTotal = newGrid * newGrid;
    

    for (let i = 0; i < newGridTotal; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        container = document.getElementById('container');
        container.appendChild(gridSquare);
        gridSquare.addEventListener('mouseenter', changeColor);
    }

    container.style.gridTemplateColumns = 'repeat(' + newGrid + ', auto)';
    container.style.gridTemplateRows = 'repeat(' + newGrid + ', auto)';
}

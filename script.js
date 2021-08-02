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
    if (e.target.style.backgroundColor === 'black') {
        e.target.style.backgroundColor = 'white';
    } else {
        e.target.style.backgroundColor = 'black';
    }
}

//add event listener for hover


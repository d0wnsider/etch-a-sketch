let gridSize = 16;
const size = document.querySelector('#size');
const clear = document.querySelector('#clear');
let value = document.querySelector('#color').getAttribute('value');
const container = document.querySelector('.container');

gridCalculate = (gridSize) => {
    for (let x = 0; x < gridSize * gridSize; x++) {
        maker(gridSize);
    }
    container.style.setProperty(`grid-template-columns`,`repeat(${gridSize},1fr)`);
}

maker = (gridSize) => {
    const square = document.createElement('div');
    square.className = 'box';
    container.appendChild(square);
}

squareColorHover = () => {
    // hovering color using forEach on Nodelist squareColor and putting addEventListener each element
    const squareColor = document.querySelectorAll('.box');
    squareColor.forEach(item => {
        item.addEventListener('mouseenter',() => {
            item.style.backgroundColor = value;
        });
    });
}

enterGrid = () => {
    let userInput;
    do {
        userInput = Number(prompt("Enter grid size: "));
    } while (userInput > 100 || userInput < 1);
    return userInput;
}

removeGrid = () => {
    const removeElement = document.querySelectorAll('.box');
    removeElement.forEach(item => item.remove());
}

size.addEventListener('click', () => {
    gridSize = enterGrid();
    removeGrid();
    gridCalculate(gridSize);
    squareColorHover(color);
});

clear.addEventListener('click', () => {
    const squareColor = document.querySelectorAll('.box');
    squareColor.forEach(item => {
            item.style.backgroundColor = '';
    });
});

color.addEventListener('change', (e) => {
    value = e.target.value;
});

// start
gridCalculate(gridSize);
squareColorHover();
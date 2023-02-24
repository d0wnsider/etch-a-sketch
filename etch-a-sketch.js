function gridCalculate () {
    for (let x = 0; x < row; x++) {
        for (let y = 0; y < column; y++) {
            const square = document.createElement('div');
            square.className = 'square';
            container.appendChild(square);
        }
    }
}

function squareColorHover () {
    // hovering color using forEach on Nodelist squareColor and putting addEventListener each element
    const squareColor = document.querySelectorAll('.square');
    squareColor.forEach(item => {
        item.addEventListener('mouseenter',() => {
            item.style.backgroundColor = 'orange';
        });
    });
}

function enterGrid () {
    do {
        userInput = Number(prompt("Enter grid size: "));
    } while (userInput > 100);
    row = userInput;
    column = userInput;
}

function removeGrid () {
    const removeElement = document.querySelector('.square');
    removeElement.remove();
}

let userInput = null;
let row = 1;
let column = 1;
const container = document.querySelector('.container');
const button = document.querySelector('.button');

function game () {
    gridCalculate();
    squareColorHover();

    button.addEventListener('click', () => {
        enterGrid();
        removeGrid();
        gridCalculate();
        squareColorHover();
    });
}

game();
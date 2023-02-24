function gridCalculate () {
    for (let x = 0; x < row; x++) {
        for (let y = 0; y < column; y++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.textContent = y + 1;
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

let row = 16;
let column = 16;
const container = document.querySelector('.container');

gridCalculate();
squareColorHover();
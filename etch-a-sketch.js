let row = 16;
let column = 16;
const container = document.querySelector('.container');
const squareSelect = document.querySelectorAll('div');


function gridCalculate () {
    for (let x = 0; x < row; x++) {
        for (let y = 0; y < column; y++) {
            const square = document.createElement('div');
            square.className = 'color';
            square.textContent = y + 1;
            container.appendChild(square);
        }
    }
}


gridCalculate();

squareSelect.addEventListener('mouseover', () => {
    squareSelect[0].style.backgroundColor = 'orange';
})
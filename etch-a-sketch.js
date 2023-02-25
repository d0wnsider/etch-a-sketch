gridCalculate = (gridSize) => {
    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            const square = document.createElement('div');
            square.className = 'square';
            container.appendChild(square);
        }
    }
    container.style.setProperty(`grid-template-columns`,`repeat(${gridSize},1fr)`);
}

squareColorHover = () => {
    // hovering color using forEach on Nodelist squareColor and putting addEventListener each element
    const squareColor = document.querySelectorAll('.square');
    squareColor.forEach(item => {
        item.addEventListener('mouseenter',() => {
            item.style.backgroundColor = 'orange';
        });
    });
}

enterGrid = (a) => {
    let userInput;
    do {
        userInput = Number(prompt("Enter grid size: "));
    } while (userInput > 100);
    return userInput;
}

removeGrid = () => {
    const removeElement = document.querySelectorAll('.square');
    removeElement.forEach(item => item.remove());
}

let gridSize = 16;
const button = document.querySelector('.button');
const container = document.querySelector('.container');

gridCalculate(gridSize);
squareColorHover();

button.addEventListener('click', () => {
    gridSize = enterGrid();
    removeGrid();
    gridCalculate(gridSize);
    squareColorHover();
});
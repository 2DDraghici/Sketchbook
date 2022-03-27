let color = 'black'
let body= document.querySelector('body')
body.addEventListener("mouseup", mouseUp)
body.addEventListener("mousedown", mouseDown)

function populateBoard(size) {
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll("div")
    squares.forEach(div => div.remove())
    grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    let dimension = size * size;
    for (let i = 0; i < dimension; i++) {
        let square = document.createElement("div");
        square.classList.add("square")
        square.addEventListener("mouseover", colorSquare)
        


        grid.insertAdjacentElement("beforeend", square);
    }
}

let checkMouse = false
function mouseDown() {
    checkMouse = true;
}
function mouseUp() {
    checkMouse = false;
}
populateBoard(16);
function changeSize(input) {
    populateBoard(input)
}
function colorSquare() {
    if (checkMouse) {
        this.style.backgroundColor = color;
    }
}
function changeColor(choice) {
    color = choice

}
function Eraser() {
    color = "white"
}

function resetGrid() {
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll("div")
    squares.forEach(div => div.style.backgroundColor = "white")
}
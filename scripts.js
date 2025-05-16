const GRID_ROWS = 10;
const GRID_COLUMNS = 10;
const container = document.querySelector("#gridContainer");
const newGrid = document.querySelector("#newGrid");

createGrid();
let square = document.querySelectorAll(".grid");
let rows = document.querySelectorAll(".row");
addSquareEvents();

function createGrid(){
    for(let i = 0; i < GRID_ROWS; i++){
        const outerSquare = document.createElement("div");
        outerSquare.classList.add("row");
        for(let o = 0; o < GRID_COLUMNS; o++){
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid");
            outerSquare.appendChild(gridSquare);
        }
        container.appendChild(outerSquare);
    }
}

/* Event Listeners */

newGrid.addEventListener("click", refreshGrid);

function refreshGrid(){
    for(row of rows){
        container.removeChild(row);
    }
    createGrid();
    square = document.querySelectorAll(".grid");
    rows = document.querySelectorAll(".row");
    addSquareEvents();
}

function addSquareEvents(){
    square.forEach((square) =>{
        square.addEventListener("mouseenter", changeColor);
    });
}

function changeColor(){
    this.style.backgroundColor = "black";
}

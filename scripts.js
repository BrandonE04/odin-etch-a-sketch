let gridRows = 16;
let gridColumns = 16;
const container = document.querySelector("#gridContainer");
const newGrid = document.querySelector("#newGrid");

createGrid();
let square = document.querySelectorAll(".grid");
let rows = document.querySelectorAll(".row");
addSquareEvents();

function createGrid(){
    for(let i = 0; i < gridRows; i++){
        const outerSquare = document.createElement("div");
        let minHeight = 100/gridRows;
        outerSquare.style.minHeight = `${minHeight}%`;
        outerSquare.classList.add("row");
        for(let o = 0; o < gridColumns; o++){
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
    let size = prompt("Enter the size of the grid: ");

    if(size > 100)
        size = 100;

    gridColumns = size;
    gridRows = size;
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

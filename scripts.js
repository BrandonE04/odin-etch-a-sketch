const GRID_ROWS = 10;
const GRID_COLUMNS = 10;
const container = document.querySelector("#container");

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

createGrid();

const square = document.querySelectorAll(".grid");
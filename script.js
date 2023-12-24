// This is javascript file for NNA portfolio

const back_grid = document.querySelector(".back-grid")

function makeGrid(row, col) {
    back_grid.style.setProperty('--gr', row)
    back_grid.style.setProperty('--gc', col)

    for (i =0; i< row*col; i++){
        let sq = document.createElement("div")
        sq.className = "sq"
        back_grid.appendChild(sq)
    }
}

makeGrid(8, 10)
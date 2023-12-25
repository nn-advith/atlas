// This is javascript file for NNA portfolio

const skill_array = ['Python', 'Ansible', 'Webdev', 'Shell Scripting']

function makeGrid(row, col) {
    const back_grid = document.querySelector(".back-grid")
    back_grid.style.setProperty('--gr', row)
    back_grid.style.setProperty('--gc', col)

    for (i =0; i< row*col; i++){
        let sq = document.createElement("div")
        sq.className = "sq"
        back_grid.appendChild(sq)
    }
}

function populateSkills() {
    const skill_grid = document.querySelector(".skill-grid")

    skill_array.forEach((item) => {
        let skill_item = document.createElement("div")
        skill_item.className = "skill-item"
        skill_item.innerText = item
        skill_grid.appendChild(skill_item)
    })
    
}

makeGrid(20, 20)
populateSkills()


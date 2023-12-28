// This is javascript file for NNA portfolio

const skill_array = ['Python', 'Ansible', 'Javascript', 'ReactJS', 'Go', 'Automation', 'Webdev', 'Shell Scripting']
const work_experience = [
    {
        'duration': 'AUG 2023 - PRESENT',
        'title': 'Software Engineer',
        'company': 'HPE',
        'description': '',
    },
    {
        'duration': 'JAN - JULY 2023',
        'title': 'R & D Intern',
        'company': 'HPE',
        'description': 'Worked on Ansible and Python automation of CaaS deployments such as Redhat Openshift and VMware TCP CaaS, alongside input validation and hardware validation.',
    }
]

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

function populateExperience() {
    const work_list = document.querySelector(".work-list")

    work_experience.forEach((item) => {

        let work_item = document.createElement("div")
        work_item.className = "work-item"

        let work_dot =  document.createElement("span")
        work_dot.className = "work-dot"
        work_dot.innerText = "•"

        let work_duration = document.createElement("div")
        work_duration.className = 'work-date'
        work_duration.innerText = item['duration']

        let work_title = document.createElement("div")
        work_title.className = 'work-title'
        work_title.innerHTML = String(item['title'])+" <span class='work-dot'> • </span> "+String(item['company']) 

        let work_description = document.createElement("div")
        work_description.className = 'work-desc'
        work_description.innerText = item['description']

        work_item.appendChild(work_duration)
        work_item.appendChild(work_title)
        work_item.appendChild(work_description)
        work_list.appendChild(work_item)
    })
}

makeGrid(20, 20)
populateSkills()
populateExperience()

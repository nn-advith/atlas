// This is javascript file for NNA portfolio

const skill_array = [
  "Golang",
  "Python",
  "Javascript",
  "ReactJS",
  "React-Native",
  "Bash scripting",
  "Openstack",
  "Webdev",
  "NoSQL",
  "Wails",
  "Apache Ant",
];
const work_experience = [
  {
    duration: "NOV 2024 - PRESENT",
    title: "Senior Software Developer",
    company: "HCLTech",
    description:
      "Working on high performance application development, primarily related to RADIUS and RadSec protocols. ",
  },
  {
    duration: "AUG 2023 - OCT 2023",
    title: "Software Engineer",
    company: "HPE",
    description:
      "Developed high quality automation code for internal projects using a wide variety of technologies. Part of the development team for a high performance loadbalancer/router application to forward TS.43 token requests.",
  },
  {
    duration: "JAN - JULY 2023",
    title: "R & D Intern",
    company: "HPE",
    description:
      "Worked on Ansible and Python automation of CaaS deployments such as Redhat Openshift and VMware TCP CaaS, alongside input validation and hardware validation.",
  },
];

var luminanceMode = "dark";
let lumToggler = document.querySelector(".lum-mode");
let icons = document.querySelectorAll(".ext-icon");
var root_element = document.querySelector(":root");

function makeGrid(row, col) {
  const back_grid = document.querySelector(".back-grid");
  back_grid.style.setProperty("--gr", row);
  back_grid.style.setProperty("--gc", col);

  for (i = 0; i < row * col; i++) {
    let sq = document.createElement("div");
    sq.className = "sq";
    back_grid.appendChild(sq);
  }
}

function populateSkills() {
  const skill_grid = document.querySelector(".skill-grid");

  skill_array.forEach((item) => {
    let skill_item = document.createElement("div");
    skill_item.className = "skill-item";
    skill_item.innerText = item;
    skill_grid.appendChild(skill_item);
  });
}

function populateExperience() {
  const work_list = document.querySelector(".work-list");

  work_experience.forEach((item) => {
    let work_item = document.createElement("div");
    work_item.className = "work-item";

    let work_dot = document.createElement("span");
    work_dot.className = "work-dot";
    work_dot.innerText = "•";

    let work_duration = document.createElement("div");
    work_duration.className = "work-date";
    work_duration.innerText = item["duration"];

    let work_title = document.createElement("div");
    work_title.className = "work-title";
    work_title.innerHTML =
      String(item["title"]) +
      " <span class='work-dot'> • </span> " +
      String(item["company"]);

    let work_description = document.createElement("div");
    work_description.className = "work-desc";
    work_description.innerText = item["description"];

    work_item.appendChild(work_duration);
    work_item.appendChild(work_title);
    work_item.appendChild(work_description);
    work_list.appendChild(work_item);
  });
}

function toggleLuminanceMode() {
  if (luminanceMode == "light") {
    // lumToggler.innerHTML = '<i class="fa-solid fa-sun"></i>'
    lumToggler.classList.add("lum-light");
    lumToggler.classList.remove("lum-dark");
    icons.forEach((i) => {
      i.classList.remove("icon-img-inverted");
      i.classList.add("icon-img");
    });
    root_element.style.setProperty("--b0", "#000000");
    root_element.style.setProperty("--b1", "#0c0c0c");
    root_element.style.setProperty("--b2", "#1e1e1e");
    root_element.style.setProperty("--w0", "#ffffff");
    root_element.style.setProperty("--g1", "#b8b8b8");
    root_element.style.setProperty("--p1", "#6e70fa");
    luminanceMode = "dark";
  } else {
    // lumToggler.innerHTML = '<i class="fa-solid fa-moon"></i>'
    lumToggler.classList.add("lum-dark");
    lumToggler.classList.remove("lum-light");
    icons.forEach((i) => {
      i.classList.remove("icon-img");
      i.classList.add("icon-img-inverted");
    });
    root_element.style.setProperty("--b0", "#fff");
    root_element.style.setProperty("--b1", "#efefef");
    root_element.style.setProperty("--b2", "#d1d1d1");
    root_element.style.setProperty("--w0", "#000");
    root_element.style.setProperty("--g1", "#121212");
    root_element.style.setProperty("--p1", "#6e70fa");
    luminanceMode = "light";
  }
}

function getLink() {
  // console.log(this.href.split('#')[1])
  nav_links.forEach((i) => {
    i.classList.remove("nav-link-active");
  });
  this.classList.add("nav-link-active");
}

makeGrid(50, 50);
populateSkills();
populateExperience();

lumToggler.addEventListener("click", toggleLuminanceMode);
// lumToggler.innerHTML = '<i class="fa-solid fa-sun"></i>'

let nav_links = document.querySelectorAll(".nav-link");
let sections = document.querySelectorAll(".section-cont");

// click handler
nav_links.forEach((i) => {
  i.addEventListener("click", getLink);
});

// intersection handler
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        nav_links.forEach((i) => {
          i.classList.toggle("nav-link-active", i.getAttribute("href")===`#${id}`)
        });
      }
    });
  },
  {
    threshold:0,
    rootMargin: "-25% 0px -75% 0px",
  }
)
sections.forEach((sec) => {
  observer.observe(sec)
})

window.addEventListener("load", (event) => {
  let sec = window.location.href.split("#")[1];
  nav_links.forEach((i) => {
    if (String(i.children[0].children[1].innerText).toLowerCase() == sec) {
      i.classList.add("nav-link-active");
    }
  });
  if (sec == undefined) {
    nav_links[0].classList.add("nav-link-active");
  }
});

window.addEventListener("hashchange", (e) => {
  let section = e.newURL.split("#")[1];
  nav_links.forEach((i) => {
    if (String(i.children[0].children[1].innerText).toLowerCase() == section) {
      i.classList.add("nav-link-active");
    } else {
      i.classList.remove("nav-link-active");
    }
  });
});

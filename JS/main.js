/*======================= MENU SHOW Y HIDDEN ==========================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*========= MENU SHOW Y HIDDEN =============*/
/* validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*========= MENU HIDDEN =============*/
/* validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*======================= REMOVE MENU MOBILE ==========================*/
// Removes show-menu class when any nav-link is clicked
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*======================= ACCORDION SKILLS ==========================*/
const skillsContent = document.getElementsByClassName("skills_content"),
    skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
    let itemClass = this.parentNode.className;

    if(itemClass === "skills_content skills_close") {
        this.parentNode.className = "skills_content skills_open"
    } else {
        this.parentNode.className = "skills_content skills_close"
    }
}

skillsHeader.forEach(Element =>{
    Element.addEventListener('click', toggleSkills);
});
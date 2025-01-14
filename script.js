const menu = document.querySelector('#menu-icon')
const navList = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navList.classList.toggle('open')
}

const sr = ScrollReveal({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true
})

sr.reveal('.hero-text', {delay: 200, oirigin: 'top'})
sr.reveal('.hero-img', {delay: 450, oirigin: 'top'})
sr.reveal('.icons', {delay: 500, oirigin: 'left'})
sr.reveal('.scroll-down', {delay: 450, oirigin: 'right'})
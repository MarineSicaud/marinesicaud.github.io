// Navbar

const open = document.querySelector('.menu-burger')
const close = document.querySelector('.cross')
const ongletContainer = document.querySelectorAll('.onglet-container')

open.addEventListener('click', () => {
    console.log('e')
    ongletContainer[1].classList.add('onglet-container-open')
    document.querySelector('html').classList.add('remove-scroll')
})

close.addEventListener('click', () => {
    console.log('e')
    ongletContainer[1].classList.remove('onglet-container-open')
    document.querySelector('html').classList.remove('remove-scroll')
})

const loading = document.querySelector('#loading')

window.addEventListener('load',() => {
    setTimeout(() => {
        loading.style.display = 'none'
        document.querySelector('html').classList.add('remove-overflow')
    }, 500)
})
const photographiePage = document.querySelector('#photographie')
const photographieContainer = document.querySelectorAll('.photographie-container')

let timer = 0

for (let i = 0; i < photographieContainer.length; i++) {
    const element = photographieContainer[i]


    setTimeout(() => {
        element.style.opacity = '1'
    }, (timer + 300))

    timer = timer + 300

    console.log(timer)
}
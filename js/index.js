const allProject = document.querySelectorAll('.project-content')
const animationContainer = document.querySelector('.projects')



const leftImage = document.querySelector('.left')
const title = document.querySelectorAll('.title')
const paragraphePresentation = document.querySelector('.paragraph-presentation')
const competanceContainer = document.querySelector('.competance-container')
const competanceLogo = document.querySelectorAll('.logo-competence')
const callToAction = document.querySelectorAll('.calltoaction')
const footer = document.querySelector('.footer-container')

console.log(callToAction)

setTimeout(() => {
    leftImage.style.transform = 'translateX(0)'
}, 1000)

setTimeout(() => {
    title[0].classList.add('title-remove')
}, 1300)

setTimeout(() => {
    paragraphePresentation.style.opacity = '1'
}, 2100)

document.body.onscroll = () => {
    const scroll = window.scrollY
    const pageHeight = document.querySelector('html').offsetHeight

    const pourcentage = Math.round((scroll + window.innerHeight) / pageHeight * 100)

    if (pourcentage >= 43) {
        competanceContainer.classList.add('competance-anim');
        competanceLogo.forEach(logo => {
            logo.style.opacity = '1';
        })
    }

    if(window.innerWidth < 750){
        if (pourcentage >= 48 ) {

            title[1].classList.add('title-remove')
            callToAction[0].classList.add('calltoaction-animation')
        }
    }else{
        if (pourcentage >= 47) {

            title[1].classList.add('title-remove')
            callToAction[0].classList.add('calltoaction-animation')
        }
    }


    if(pourcentage >= 60){
        allProject.forEach(project => {
            project.classList.add('project-content-animation')
        })
    }

    if (pourcentage >= 92) {
        title[1].classList.add('title-remove')
        callToAction[11].classList.add('calltoaction-animation')
    }
    if(pourcentage >= 98){
        footer.classList.add('footer-container-animation')
    }
}


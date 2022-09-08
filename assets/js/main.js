/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*==================== SWIPER JS ====================*/
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,
})

let galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,

    thumbs: {
      swiper: galleryThumbs
    }
})


/*==================== POPUP ====================*/
const btnOpenVideo = document.querySelectorAll('.wonders-video-content')
const wondersPopup = document.getElementById('popup')

function poPup(){
    wondersPopup.classList.add('show-popup')
}
btnOpenVideo.forEach(b => b.addEventListener('click', poPup))

const btnCloseVideo = document.getElementById('popup-close')

btnCloseVideo.addEventListener('click', ()=> {
    wondersPopup.classList.remove('show-popup')
})

/*==================== GSAP ANIMATION ====================*/
const controlImg = document.querySelectorAll('.controls-img')

function scrollAnimation(){
    gsap.from('.wonders-subtitle', {opacity: 0, duration: .2, delay: .2, y: -20})
    gsap.from('.wonders-title', {opacity: 0, duration: .3, delay: .3, y: -20})
    gsap.from('.wonders-description', {opacity: 0, duration: .4, delay: .4, y: -20})
    gsap.from('.wonders-button', {opacity: 0, duration: .5, delay: .5, y: -20})
    gsap.from('.wonders-video-content', {opacity: 0, duration: .6, delay: .6, y: -20})

    wondersPopup.classList.remove('show-popup')
}

controlImg.forEach(c => c.addEventListener('click', scrollAnimation))
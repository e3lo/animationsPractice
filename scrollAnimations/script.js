console.log("hi")

var animationClass = document.getElementsByClassName('slide-right')

window.addEventListener('scroll', () => {
    for (let slideIn of animationClass){
        let value = 1 - (slideIn.getBoundingClientRect().top/window.innerHeight);
        console.log(value)
        slideIn.style.setProperty('--scroll', value)
    }
})

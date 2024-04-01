
const btns = document.querySelectorAll(".customers__cards__button")
const carousel = document.querySelector(".customers__carousel")
const CARD_WIDTH = document.querySelector(".customer__card").offsetWidth
let isEnd = false

btns[1].addEventListener("click", () => {
    if (!isEnd) {

        let currentTranslateX = carousel.style.transform ? parseFloat(carousel.style.transform.match(/translateX\((.+?)px\)/)[1]) : 0;
        carousel.style.transform = `translateX(-${currentTranslateX + CARD_WIDTH}px)`;
        isEnd = true

        btns[1].classList.add("active__card")
        btns[0].classList.remove("active__card")
    }
    else {
        carousel.style.transform = `translateX(0px)`;
        isEnd = false
        btns[0].classList.add("active__card")
        btns[1].classList.remove("active__card")
    }


})

btns[0].addEventListener("click", () => {
    if (isEnd) {
        let currentTranslateX = carousel.style.transform ? parseFloat(carousel.style.transform.match(/translateX\((.+?)px\)/)[1]) : 0;
        carousel.style.transform = `translateX(${currentTranslateX + CARD_WIDTH}px)`;
        isEnd = false
        btns[0].classList.add("active__card")
        btns[1].classList.remove("active__card")
    }

    else {
        let currentTranslateX = carousel.style.transform ? parseFloat(carousel.style.transform.match(/translateX\((.+?)px\)/)[1]) : 0;
        carousel.style.transform = `translateX(${currentTranslateX - CARD_WIDTH}px)`;
        btns[1].classList.add("active__card")
        btns[0].classList.remove("active__card")
        isEnd = true

    }
})
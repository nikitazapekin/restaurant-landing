
const cards = document.querySelectorAll(".popular__card");

const modalWindow = document.querySelector(".modal")
const overlay = document.querySelector(".modal__overlay")
console.log("MOD" +modalWindow)
//const modalWindow = document.getElementById("modal");
let isOpenWindow = false; 

console.log("Cards: " + JSON.stringify(cards));

cards.forEach((card, index) => {
    card.addEventListener("click", (event) => {
       // event.preventDefault()
        console.log(1);
        isOpenWindow = true;  
        if( isOpenWindow){

            console.log(JSON.stringify(modalWindow));
            modalWindow.style.display = "flex";
        }
    });
});


overlay.addEventListener("click", ()=> {
   
isOpenWindow=false;
modalWindow.style.display = "none";
})

document.querySelector(".modal__content__right__btn").addEventListener("click", ()=> {
    isOpenWindow=false;
modalWindow.style.display = "none";
})
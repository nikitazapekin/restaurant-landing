 /*
const inputs = document.querySelectorAll(".book__table__input")
const bookBtn = document.querySelector(".book__table__btn")
console.log(inputs)
let isBook = false;
bookBtn.addEventListener("click", () => {
isBook=true
if(isBook) {
    console.log("sd")
}
})

 */



/*

const cards = document.querySelectorAll(".popular__card")
const modalWindow = document.getElementById("#modal")
//let isOpen = false
console.log("Cardssss "+ JSON.stringify(cards))
cards.forEach((card, index)=> {
    card.addEventListener("click", ()=> {
        console.log(1)
       // isOpen = true
        console.log(JSON.stringify(modalWindow))
       modalWindow.style.display = "block"

    })
})

*/
const cards = document.querySelectorAll(".popular__card");

const modalWindow = document.querySelector(".modal")
const overlay = document.querySelector(".modal__overlay")
console.log("MOD" +modalWindow)
//const modalWindow = document.getElementById("modal");
let isOpenWindow = false; 

console.log("Cards: " + JSON.stringify(cards));

cards.forEach((card, index) => {
    card.addEventListener("click", (event) => {
        event.preventDefault()
        console.log(1);
        isOpenWindow = true;  
        if( isOpenWindow){

            console.log(JSON.stringify(modalWindow));
            modalWindow.style.display = "flex";
        }
    });
});


overlay.addEventListener("click", ()=> {
    console.log("000000000")
isOpenWindow=false;
modalWindow.style.display = "none";
})
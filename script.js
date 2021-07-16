
let singleCard = document.querySelectorAll(".singleCard")
console.log(singleCard)

for(let i=0; i < singleCard.length; i++) {
    singleCard[i].addEventListener("click", () => {
        singleCard[i].classList.toggle("flipCard")
    });
}


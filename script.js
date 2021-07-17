
let singleCard = document.querySelectorAll(".singleCard")


for(let i=0; i < singleCard.length; i++) {
    singleCard[i].addEventListener("click", () => {
        singleCard[i].classList.toggle("flipCard")
    });
}

let back = document.querySelectorAll(".back")

for(let i = 0; i < back.length; i++) {
    back[i].innerText = chooseText()
}


function chooseText() {
    let random = Math.floor(Math.random() * 25)
    console.log(random, "random")
    if(random === 1) return "they wake us from sweet hibernation"
    if(random === 2) return "it's okay to be a little sour"
    if(random === 3) return "patty pan, I never knew your name"
    if(random === 4) return "susan, with eye contact so heavy it feels like you could fall into her centers"
    if(random === 5) return "so delicate so wispy sometimes I forget you are real"
    if(random === 6) return "POSION!"
    if(random === 7) return "in the weeds"
    if(random === 8) return "sorry out of office forever"
    if(random === 9) return "everything grows back"
    if(random === 10) return "in the closet, our clothes hang stagnant as though we are dead"
    if(random === 11) return "water every other day or so"
    if(random === 12) return "fried okra fried squash fresh tomatoes with salt"
    if(random === 13) return "adult play-doh"
    if(random === 14) return "delicate skeletons. clumps of soft grey fur"
    if(random === 15) return "loose purse twizzlers"
    if(random === 16) return "what's playing now, on the dusty tape recorder in the back of your mind?"
    if(random === 17) return "Of course also our LORD and SAVIOR Jesus Christ who holds our lives in his hands but maybe he just isn’t very careful with them"
    if(random === 18) return "docile grass snakes"
    if(random === 19) return "is it over?"
    if(random === 20) return "naps in the sunshine like a rattlesnake"
    if(random === 21) return "the supply chain is not intact"
    if(random === 22) return "soon we will have enough wood to build a coop for pixelated chickens"
    if(random === 23) return "all nasty tidbits and breathless angst"
    if(random === 24) return "early retirement dreams"
    if(random === 25) return "full moon in scorpio"

}
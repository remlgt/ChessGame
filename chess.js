let gameboard=document.querySelector(".board")
let numbers = document.querySelector(".numbers")
let letters = document.querySelector(".letters")


let white = true
let letter="ABCDEFGH"

for (let i=1;i<=64;i++){
    let square=document.createElement("div")
    square.classList.add("square")
    if (!white){
        square.classList.add("black")
    }
    white=!white
    if (i%8===0){
        white=!white
    }
    gameboard.appendChild(square)
}

for(i=1;i<=8;i++){

    let numbersli=document.createElement("li")
    numbersli.textContent=i
    numbers.appendChild(numbersli)

    let lettersli=document.createElement("li")
    lettersli.textContent=letter[i-1]
    letters.appendChild(lettersli)
}
//COSE DA FARE
// la griglia gioco
// aggiungere IDalle celle
// generare le bombe
// al CLICK della cella
    // accendere la cella
    // verificare se ho pestato una bomba --> FINE GICO
    // contare i tentativi --> FINE GIOCO

// FINE GICO
// stampare il risultato
// congelare la griglia
// accendere tutte le bombe

//al click di PLAY --> RESET

//PLAY --> RESET
// ne genero una nuova in base al livello
// genero nuove bombe

// RESET
// cancello la vecchia griglia
// cancello tutte le bombe


const container = document.querySelector(".container");
const elementsPerRow = 10;
const nBox = document.getElementById('difficulty');
const resetButton = document.getElementById('reset');
const startButton = document.getElementById('start');
const BOMBS_NUMBER = 16;
let bombs = [4, 78, 12, 52, 35];
let score = 0;

 startButton.addEventListener('click', function(){
     container.innerHTML = '';
     for(let i = 0; i < nBox.value; i++){
         createSquare(i);
     }
})

resetButton.addEventListener('click', function(){
    nBox.value = '';
    container.innerHTML = '';
    score = 0;
})


init(elementsPerRow);

function init(numElements){
    const totalSquares = Math.pow(numElements, 2);
    console.log(totalSquares);
    for( let i = 0; i < totalSquares; i++ ){
        createSquare(i);
    }
}

function createSquare(maxSquare){
    const square = document.createElement("div");
    square.className = "square";
    square.innerHTML = maxSquare + 1;
    square.idElement = maxSquare + 1;
    square.style.width = genCalcCss();
    square.style.height = genCalcCss();
    square.addEventListener("click", function(){
        console.log(this.idElement);
        this.innerHTML = this.idElement;
        if (bombs.includes(this.idElement)) {
            console.log('hai perso. Bomba!');
        } else {
            console.log('square vuoto');
        }
    })
    container.append(square);
}

function clickSquare(){
    console.log(this.idElement);
    this.innerHTML = this.idElement;
}

function genCalcCss(){
    return `calc(100% / ${elementsPerRow}`;
}

function livello(difficultyChosen){
    if (difficultyChosen === "hard") {
        return 10;
    }
    else if (difficultyChosen === "medium") {
        return 9;
    }
    else {
        return 7;
    }
}

function clickSquare(){
    this.classList.add('square-colore');
}
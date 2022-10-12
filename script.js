let resultLeft = 0;
let resultRight = 0;

//getting html elements by IDs
const scoreDisplayLeft = document.getElementById('scoreDisplay')
const scoreDisplayRight = document.getElementById('scoreDisplay-right')
const newGameBtn = document.getElementById('newGameBtn')


//Left 
function plusOne(){
    resultLeft += 1;
    scoreDisplayLeft.textContent = resultLeft;
}

function plusTwo(){
    resultLeft += 2;
    scoreDisplayLeft.textContent = resultLeft;
}

function plusThree(){
    resultLeft += 3;
    scoreDisplayLeft.textContent = resultLeft;
}


//Right
function plusOneRight(){
    resultRight += 1;
     scoreDisplayRight.textContent = resultRight;
 }
 
 function plusTwoRight(){
     resultRight += 2;
     scoreDisplayRight.textContent = resultRight;
 }
 
 function plusThreeRight(){
     resultRight += 3;
     scoreDisplayRight.textContent = resultRight;
}

//New game

newGameBtn.addEventListener('click', () => {
    resultLeft = 0;
    resultRight = 0;
    scoreDisplayLeft.textContent = 0;
    scoreDisplayRight.textContent = 0
})
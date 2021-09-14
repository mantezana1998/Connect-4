/*----- constants -----*/

let mainMe;
let mainComputer;
let winner;
let checker;


/*---------------------- app's state (variables) -----------------*/

function init(){
let connect4game = [
    [null, null, null, null, null, null, null,],
    [null, null, null, null, null, null, null,],
    [null, null, null, null, null, null, null,],
    [null, null, null, null, null, null, null,],
    [null, null, null, null, null, null, null,],
    [null, null, null, null, null, null, null,],
    [null, null, null, null, null, null, null,],
]

let columnOne = [0, 1, 2, 3, 4, 5, 6, 7]

let columnTwo = [7, 8, 9, 10, 11, 12, 13,]

let columnThree = [14, 15, 16, 17, 18, 19, 20]

let columnFour = [21, 22, 23, 24, 25, 26, 27]

let columnFive = [28, 29, 30, 31, 32, 33, 34]

let columnSix = [35, 36, 37, 38, 39, 40, 41]

let columnSeven = [42, 43, 44, 45, 46, 47, 48]

}



/*---------------------- cached element references -------------*/
const gameBoard = document.getElementById('connect4game');
//console.log(gameBoard)

const footballs = document.querySelectorAll('.slots');
//console.log(footballs)

const playerScore = document.querySelector('#p-score');
// console.log(playerScore)

const computerScore = document.querySelector('#c-score');
// console.log(computerScore)

const winnerResult = document.querySelector('#winner');
// console.log(winnerResult)

const pressRestart = document.querySelector('#restart');
// console.log(pressRestart)

const firstColumn = document.querySelectorAll('.column1');
// console.log(firstColumn)

const secondColumn = document.querySelectorAll('.column2');
// console.log(secondColumn)

const thirdColumn = document.querySelectorAll('.column3');
// console.log(thirdColumn)

const fourthColumn = document.querySelectorAll('.column4');
// console.log(fourthColumn)

const fifthColumn = document.querySelectorAll(".column5");
// console.log(fifthColumn)

const sixthColumn = document.querySelectorAll('.column6');
// console.log(sixthColumn)

const seventhColumn = document.querySelectorAll('.column7');
// console.log(seventhColumn)



/*------------------------ event listeners ------------------------*/

// pressRestart.addEventListener('click', init);

gameBoard.addEventListener('click',function(e){
    // console.log(e.target)
    console.log(e.target.tagName)

if (e.target.tagName === 'DIV'){
    e.target.style.background ='blue';
    console.log(e.target, "football")
 } else {
     console.log(e.target, "soccer")
 }

})



// pressRestart.addEventListener('click', init);

// document.querySelector('#restart')
//      addEventListener('click', restartGame);


/*-------------------------- functions ---------------------------*/

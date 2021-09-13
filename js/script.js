/*----- constants -----*/

let mainMe;
let mainComputer;
let winner;
let connect_4_game;
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


/*------------------------ event listeners ------------------------*/

// pressRestart.addEventListener('click', init);

gameBoard.addEventListener('click',function(e){
    console.log(e.target)
    console.log(e.target.tagName)
})




/*----- functions -----*/
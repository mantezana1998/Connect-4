/*----- constants -----*/

let mainMe;
let mainComputer;
let tie;
let result;
let turns = 0;

let winningArray = [
    [ 0, 1, 2, 3],[ 0, 7, 14, 21],[ 0, 6, 12, 18],[ 1, 2, 3, 4],
    [ 1, 8, 15, 22],[ 1, 7, 13, 19],[ 2, 3, 4, 5],[ 2, 9, 16, 23],
    [ 2, 8, 14, 20],[ 6, 7, 8, 9],[ 6, 13, 20, 27],[ 6, 12, 18, 24],
    [ 7, 8, 9, 10],[ 7, 14, 21, 28],[ 7, 13, 19, 25],[ 8, 9, 10, 11],
    [ 8, 15, 22, 29],[ 8, 14, 20, 26],[ 12, 13, 14, 15],[ 12, 19, 26, 33],
    [ 12, 18, 24, 30],[ 13, 14, 15, 16],[ 13, 20, 27, 34],[ 13, 19, 25, 31],
    [ 14, 15, 16, 17],[ 14, 21, 28, 35],[ 14, 20, 26, 32],[ 18, 19, 20, 21],
    [ 18, 25, 32, 39],[ 18, 24, 30, 36],[ 19, 20, 21, 22],[ 19, 26, 33, 40],
    [ 19, 25, 31, 37],[ 20, 21, 22, 23],[ 20, 27, 34, 41],[ 20, 26, 32, 38],
    [ 24, 25, 26, 27],[ 30, 31, 32, 33],[ 36, 37, 38, 39],[ 3, 8, 13, 18],
    [ 4, 9, 14, 19],[ 9, 14, 19, 24],[ 5, 10, 15, 20],[ 10, 15, 20, 25],
    [ 15, 20, 25, 30],[ 11, 16, 21, 26],[ 16, 21, 26, 31],[ 21, 26, 31, 36],
    [ 17, 22, 27, 32],[ 22, 27, 32, 37],[ 23, 28, 33, 38],[ 18, 25, 32, 39],
    [ 12, 19, 26, 33],[ 19, 26, 33, 40],[ 6, 13, 20, 27],[ 13, 20, 27, 34],
    [ 20, 27, 34, 41],[ 0, 7, 14, 21],[ 7, 14, 21, 28],[ 14, 21, 28, 35],
    [ 1, 8, 15, 22],[ 8, 15, 22, 29],[ 2, 9, 16, 23],[ 4, 10, 16, 22],
    [ 10, 16, 22, 28],[ 16, 22, 28, 34],[ 22, 28, 34, 40],[ 5, 11, 17, 23],
    [ 11, 17, 23, 29],[ 17, 23, 29, 35],[ 23, 29, 35, 41]
    ]


/*---------------------- app's state (variables) -----------------*/

function init(){}

let connectFourGameBoard = [
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null]
]

/*---------------------- cached element references -----------------------*/
const gameBoard = document.getElementById('connectfourgame');

const footballs = document.querySelectorAll('.slots');

const finalScores = {
    mainMe: document.querySelector('#p-score'),
    mainComputer: document.querySelector('#c-score')    
}

const results = document.querySelector('#result')

/*------------------------ event listeners -------------------------------*/

gameBoard.addEventListener('click',function(e){
    checkerMove(e)
    // console.log(e.target)
    // console.log(e.target.tagName)
});


/*-------------------------- functions ---------------------------*/

function initGame(){
    render ()
}

function render (){
    console.log(gameBoard)
}

function takeTurns () {
    return mainMe = turns % 2
} 

function playerColor () {
    if (mainMe === true){  
    }
}

function whoWon(){
    for (let i = 0; i < winningArray.length; i++){
        for (let j = 0; j < 1; j++){
            if (document.getElementById(`${winningArray[i][j]}`).style.backgroundColor != ''){
                let a = document.getElementById(`${winningArray[i][j]}`).style.backgroundColor
                let b = document.getElementById(`${winningArray[i][j + 1]}`).style.backgroundColor
                let c = document.getElementById(`${winningArray[i][j + 2]}`).style.backgroundColor
                let d = document.getElementById(`${winningArray[i][j + 3]}`).style.backgroundColor

                if (a == b && b == c && c == d){
                    results.innerHTML = 'Winner!'
                }
            }
        }
    }
}

function checkerMove(e){
    let idx = e.target.id
    let y = Math.floor(idx / 6)
    let x = idx % 6
    
    if (e.target.tagName === 'DIV' && mainMe){
        e.target.style.backgroundColor ='blue';
        connectFourGameBoard[x][y] = 'blue'
        turns++
 }  else if (e.target.tagName === 'DIV' && !mainMe){
        e.target.style.backgroundColor ='red';
        connectFourGameBoard[x][y] = 'red'
        turns++
 }  

 whoWon()
 takeTurns()
 render()
}

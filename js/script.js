/*----- constants -----*/

let mainMe;
let mainComputer;
let winner;
let tie;
let scores;
let checker;
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

console.log(connectFourGameBoard)


//property of each play taking in for the index of this connect 4 index 
//use once for for loop to get first level of array --> nested for loop to get access to the array inside of the array //ex) [3][2]

// let columnOne = [0, 1, 2, 3, 4, 5, 6]

// let columnTwo = [7, 8, 9, 10, 11, 12, 13,]

// let columnThree = [14, 15, 16, 17, 18, 19, 20]

// let columnFour = [21, 22, 23, 24, 25, 26, 27]

// let columnFive = [28, 29, 30, 31, 32, 33, 34]

// let columnSix = [35, 36, 37, 38, 39, 40, 41]

// let columnSeven = [42, 43, 44, 45, 46, 47, 48]




/*---------------------- cached element references -------------*/
const gameBoard = document.getElementById('connectfourgame');
//console.log(gameBoard)

const footballs = document.querySelectorAll('.slots');
//console.log(footballs)

const finalScores = {
    mainMe: document.querySelector('#p-score'),
    mainComputer: document.querySelector('#c-score')    // tie: document.querySelector()
}

const results = document.querySelector('#result')

// const firstColumn = document.querySelectorAll('.column1');
// // console.log(firstColumn)

// const secondColumn = document.querySelectorAll('.column2');
// // console.log(secondColumn)

// const thirdColumn = document.querySelectorAll('.column3');
// // console.log(thirdColumn)

// const fourthColumn = document.querySelectorAll('.column4');
// // console.log(fourthColumn)

// const fifthColumn = document.querySelectorAll(".column5");
// // console.log(fifthColumn)

// const sixthColumn = document.querySelectorAll('.column6');
// // console.log(sixthColumn)

// const seventhColumn = document.querySelectorAll('.column7');
// // console.log(seventhColumn)

/*------------------------ event listeners ------------------------*/

// pressRestart.addEventListener('click', init);

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
} //true if even turns 

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
                    results.innerHTML = 'Player wins'
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
        // console.log(e.target.tagName)
        e.target.style.backgroundColor ='blue';
        connectFourGameBoard[x][y] = 'blue'
        turns++
        // console.log(e.target, "football")
 }  else if (e.target.tagName === 'DIV' && !mainMe){
        e.target.style.backgroundColor ='red';
        connectFourGameBoard[x][y] = 'red'
        turns++
        //  console.log(e.target, "soccer")
 }  

 whoWon()
 takeTurns()
 render()
//  takeTurns () //calling "takeTurns" function
//  console.log(turns, mainMe)
}

// function init () {
//     scores = {
//         mainMe: 0,
//         mainComputer: 0,
//         tie: 0
//     }

//     winner = null;

//     render ()

// }

// function render (){
//     for (let score in scores){
//         finalScores[score].textContent = scores[score];
//         // console.log(scores[score]);
//     }

// }

//Question: Ask where and when to use render

//who owns the square? --> victory conditions is triggered

//define function that checks whose turn it is

//check victory
//check ties
//whose turn is it
//keeping track of score
/*----- constants -----*/

let mainMe;
let mainComputer;
let winner;
let tie;
let scores;
let checker;
let turns = 0;

let winningArray = [
    [ 0, 8, 16, 24,],[ 0, 7, 14, 21,],[ 1, 2, 3, 4,],
    [ 1, 2, 3, 4,],[ 1, 8, 15, 22,],[ 1, 9, 17, 25,],[ 2, 3, 4, 5,],
    [ 2, 10, 18, 26,],[ 2, 9, 16, 23,],[ 3, 4, 5, 6,],[ 3, 11, 19, 27,],
    [ 7, 8, 9, 10,],[ 7, 15, 23, 31,],[ 7, 14, 21, 28,],[ 8, 9, 10, 11,],
    [ 8, 16, 24, 32,],[ 8, 15, 22, 29,],[ 9, 10, 11, 12,],[ 9, 17, 25, 33,],
    [ 9, 16, 23, 30,],[ 10, 11, 12, 13,],[ 10, 18, 26, 34,],[ 10, 17, 24, 31,],
    [ 14, 15, 16, 17,],[ 14, 22, 30, 38,],[ 14, 21, 28, 35,],[ 15, 16, 17, 18,],
    [ 15, 23, 31, 39,],[ 15, 22, 29, 36,],[ 16, 17, 18, 19,],[ 16, 24, 32, 40,],
    [ 16, 23, 30, 37,],[ 17, 18, 19, 20,],[ 17, 25, 33, 41,],[ 17, 24, 31, 38,],
    [ 21, 22, 23, 24,],[ 21, 29, 37, 45,],[ 21, 28, 35, 42,],[ 22, 23, 24, 25,],
    [ 22, 30, 38, 46,],[ 22, 29, 36, 43,],[ 23, 24, 25, 26,],[ 23, 31, 39, 47,],
    [ 24, 25, 26, 27,],[ 24, 32, 40, 48,],[ 24, 31, 38, 45,],[ 28, 29, 30, 31,],
    [ 28, 29, 30, 31,],[ 35, 36, 37, 38,],[ 42, 43, 44, 45,],[ 4, 11, 18, 25,],
    [ 5, 12, 19, 26,],[ 6, 13, 20, 27,],[ 11, 18, 25, 32,],[ 18, 25, 32, 39,],
    [ 25, 32, 39, 46,],[ 12, 19, 26, 33,],[ 19, 26, 33, 40,],[ 26, 33, 40, 47,],
    [ 13, 20, 27, 34,],[ 20, 27, 34, 41,],[ 27, 34, 41, 48,],[ 3, 9, 15, 21,],
    [ 4, 10, 16, 22,],[ 10, 16, 22, 28,],[ 5, 11, 17, 23,],[ 11, 17, 23, 29,],
    [ 17, 23, 29, 35,],[ 6, 12, 18, 24,],[ 12, 18, 24, 30,],[ 18, 24, 30, 36,],
    [ 24, 30, 36, 42,],[ 13, 19, 25, 31,],[ 19, 25, 31, 37,],[ 25, 31, 37, 43,],
    [ 20, 26, 32, 38,],[ 26, 32, 38, 44,],[ 27, 33, 39, 45,]
    ]


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

// console.log(connect4game[3][4])


//property of each play taking in for the index of this connect 4 index 
//use once for for loop to get first level of array --> nested for loop to get access to the array inside of the array //ex) [3][2]

// let columnOne = [0, 1, 2, 3, 4, 5, 6]

// let columnTwo = [7, 8, 9, 10, 11, 12, 13,]

// let columnThree = [14, 15, 16, 17, 18, 19, 20]

// let columnFour = [21, 22, 23, 24, 25, 26, 27]

// let columnFive = [28, 29, 30, 31, 32, 33, 34]

// let columnSix = [35, 36, 37, 38, 39, 40, 41]

// let columnSeven = [42, 43, 44, 45, 46, 47, 48]

}



/*---------------------- cached element references -------------*/
const gameBoard = document.getElementById('connect4game');
//console.log(gameBoard)

const footballs = document.querySelectorAll('.slots');
//console.log(footballs)

const finalScores = {
    mainMe: document.querySelector('#p-score'),
    mainComputer: document.querySelector('#c-score')    // tie: document.querySelector()
}

//console.log(finalScores)

const winnerResult = document.querySelector('#winner');
// console.log(winnerResult)

const pressRestart = document.querySelector('#restart');
// console.log(pressRestart)

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
    // console.log(e.target)
    // console.log(e.target.tagName)

if (e.target.tagName === 'DIV' && mainMe){
    e.target.style.backgroundColor ='blue';
    turns++
    // console.log(e.target, "football")
 } else if (e.target.tagName === 'DIV' && !mainMe){
     e.target.style.backgroundColor ='red';
     turns++
    //  console.log(e.target, "soccer")
 }
 takeTurns () //calling "takeTurns" function
 console.log(turns, mainMe)
});

//HOVER CODE below

/*-------------------------- functions ---------------------------*/

function takeTurns () {
    return mainMe = turns % 2
} //true if even turns 

function playerColor () {
    if (mainMe === true){
    }
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
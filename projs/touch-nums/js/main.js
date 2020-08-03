'use strict';

var gBoard = createBoard();;
var gCounter = 1;
var gStartTime;
var gTimer;


function init() {
    gBoard = createBoard();
    renderBoard(gBoard);
}



function createBoard() {
    var board = [];
    for (var i = 0; i < 4; i++) {
        board.push([])
        for (var j = 0; j < 4; j++) {
            board[i][j] = Math.ceil(Math.random() * 15);
        }
    }
    return board;
}

function createNums() {
    var nums = []
    var newNums = [];
    var randIdx = Math.floor(Math.random() * 15);
    for (var i = 0; i < 16; i++) {
        nums.push(i + 1);
    }
    for (var i = 0; i < 16; i++) {
        var currNum = nums.splice(randIdx, 1);
        newNums.push(currNum[0]);
        randIdx = Math.floor(Math.random() * 15 - i);
    }
    return newNums;
}



function renderBoard(board) {
    var nums = createNums();
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>\n'
        for (var j = 0; j < board[i].length; j++) {
            var cell = nums.pop();
            strHTML += `
            \t<th onclick="cellClicked(this)">${cell}</td>\n`
        }
        strHTML += '</tr>\n'
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML;
}


function cellClicked(clickedNum) {
    if (clickedNum.innerText === '1') {
        gStartTime = Date.now();
        var elTimer = document.querySelector('.timer');
        elTimer.style.visibility = 'visible';
        intervalTimer()
    }
    if (gCounter === 16) {
        clearInterval(gTimer);
        msgVictoy()

    }
    if (clickedNum.innerText == gCounter) {
        clickedNum.style.backgroundColor = 'red';
        gCounter++
    }



}

function intervalTimer() {
    gTimer = setInterval(activateTimer, 20)
}

function activateTimer() {
    var currTime = Date.now()
    var diffTime = new Date(currTime - gStartTime)
    var pritedTime = diffTime.getSeconds() + '.' + diffTime.getMilliseconds();
    var elTimer = document.querySelector('.timer');
    elTimer.innerText = 'Timer:\n' + pritedTime;
    //  return pritedTime;
}

function msgVictoy() {
    var elVictory = document.querySelector('.victory');
    elVictory.style.display = 'block';

}

function startOver() {
    var elVictory = document.querySelector('.victory');
    elVictory.style.display = '';
    var elTimer = document.querySelector('.timer');
    elTimer.style.visibility = 'hidden';
    gCounter = 1;
    gBoard = createBoard();
    renderBoard(gBoard);
}

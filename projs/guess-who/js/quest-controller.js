'use strict';

var gLastRes = null;

$(document).ready(init);

function init() {
    createQuestsTree();
}

function onStartGuessing() {
    $('.game-start').hide();
    renderQuest();
    $('.quest').show()
}

function renderQuest() {
    var currQuest = getCurrQuest();
    $('.quest h2').text(currQuest.txt)
}

function onUserResponse(res) {
    if (isChildless(getCurrQuest())) {
        if (res === 'yes') {
            $('.modal').show()
            $('.modal-body').text('Yes, I knew it!') 
        } else {
            $('.modal').show()
            $('.modal-body').text('I don\'t know...teach me!')
            setTimeout(onCloseModal, 3000);
            $('.quest').hide();
            $('.new-quest').show();
        }
    } else {
        gLastRes = res;
        moveToNextQuest(res);
        renderQuest();
    }
}

function onCloseModal(){
    $('.modal').hide();
}

function onAddGuess() {
    var $newGuessVal = $('#newGuess').val();
    var $newQuestVal = $('#newQuest').val();
    if (!$newGuessVal || !$newQuestVal) return;
    addGuess($newQuestVal, $newGuessVal, gLastRes)
    $('.modal').hide()
    onRestartGame();
}


function onRestartGame() {
    $('.new-quest').hide();
    $('.game-start').show();
    $('.quest').hide()
    $('.modal').hide()
    gLastRes = null;
    init();
}


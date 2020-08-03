const QUEST_KEY = 'myQuestsTree';
var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;

function createQuestsTree() {
    var questsTree = loadFromStorage(QUEST_KEY);
    if (!questsTree || questsTree.length === 0) {
        questsTree = createQuest('Male?');
        
        questsTree.yes = createQuest('Gandhi');
        questsTree.no = createQuest('Rita');
        
    }
    gPrevQuest = null;
    gQuestsTree = questsTree;
    gCurrQuest = gQuestsTree;
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    gPrevQuest = gCurrQuest;
    gCurrQuest = gCurrQuest[res];
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    var newQuest = createQuest(newQuestTxt);
    newQuest.yes = createQuest(newGuessTxt);
    newQuest.no = gCurrQuest;
    gPrevQuest[lastRes] = newQuest;
    gCurrQuest = gQuestsTree;
    _saveQuestsTree()
}

function getCurrQuest() {
    return gCurrQuest
}

function _saveQuestsTree() {
    saveToStorage(QUEST_KEY, gQuestsTree)
}







var gProjs = _createProjs();



function _createProjs() {
    gProjs = [{
        id: 'minesweeper',
        name: 'Minesweeper',
        desc: 'A brand new version to the great classic Minesweeper game! there are suprises, you must try it!',
        imgUrl: 'img/portfolio/minesweeper-photo.jpg',
        publishedAt: Date.now(),
        labels: ['Games', 'Skill projs']
    },
    {
        id: 'touch-nums',
        name: 'Touch the numbers',
        desc: 'Simple and addictive game. try to click all the numbers in the right order as fast as you can!',
        imgUrl: 'img/portfolio/touch-nums-img.jpg',
        publishedAt: Date.now(),
        labels: ['Games', 'Skill projs']
    },
    {
        id: 'guess-who',
        name: 'Guess Who',
        desc: 'Let the game guess what character is in your mind! if it gets wrong, teach it and it will learn your answers for the next rounds!',
        imgUrl: 'img/portfolio/guess-who-img.jpg',
        publishedAt: Date.now(),
        labels: ['Games', 'Skill projs']
    },
    
    ]
    return gProjs;
}

function getProjsForDisplay() {
    return gProjs;
}

function getProjById(projId) {
    var proj = gProjs.find(function (proj) {
        return proj.id === projId;
    })
    return proj;
}


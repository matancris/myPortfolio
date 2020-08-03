



var gProjs = _createProjs();



function _createProjs() {
    gProjs = [{
        id: 'minesweeper',
        name: 'Minesweeper',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        url: '',
        img: 'img/portfolio/minesweeper-photo.jpg',
        publishedAt: Date.now(),
        labels: ['Games', 'Skill projs']
    },
    {
        id: 'touch-nums',
        name: 'Touch the Numbers',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        url: '',
        img: 'img/portfolio/touch-nums-img.jpg',
        publishedAt: Date.now(),
        labels: ['Sites', 'Skill projs']
    },
    {
        id: 'book-shop',
        name: 'Book Shop',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        url: '',
        img: 'img/portfolio/01-thumbnail.jpg',
        publishedAt: Date.now(),
        labels: ['Sites', 'Skill projs']
    },
    {
        id: 4,
        name: 'book-shop',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        url: '',
        img: 'img/portfolio/01-thumbnail.jpg',
        publishedAt: Date.now(),
        labels: ['Sites', 'Skill projs']
    },
    {
        id: 5,
        name: 'book-shop',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        url: '',
        img: 'img/portfolio/01-thumbnail.jpg',
        publishedAt: Date.now(),
        labels: ['Sites', 'Skill projs']
    },
    {
        id: 6,
        name: 'book-shop',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        url: '',
        img: 'img/portfolio/01-thumbnail.jpg',
        publishedAt: Date.now(),
        labels: ['Sites', 'Skill projs']
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


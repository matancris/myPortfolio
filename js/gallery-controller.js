


function initPage() {

    renderPortfolios()


}

function renderPortfolios() {
    var strHTML = '';
    var projs = getProjsForDisplay();

    for (var i = 0; i < projs.length; i++) {
        strHTML += `
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal"
          onclick="onOpenModal('${projs[i].id}')" href="#portfolioModal">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="${projs[i].img}" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${projs[i].name}</h4>
            <p class="text-muted"></p>
          </div>
          </div>
        `
    }
    $('.pojs-portfolio').html(strHTML);
}


function onOpenModal(projId) {
    var proj = getProjById(projId);
    var projPublishDate = new Date(proj.publishedAt);
    var projMonthYear =  projPublishDate.getMonth() + '/' + projPublishDate.getFullYear();
    var modalHTML = `
    <h2>${proj.name}</h2>
    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}-big.jpg">
    <p>${proj.desc}</p>
    <ul class="list-inline">
      <li>Date: ${projMonthYear}</li>
      <li>Client: Threads</li>
      <li>Category: Illustration</li>
      <a class="text-info mt-3" href="projs/${proj.id}/index.html" target="_blank">Try it now!</a>
    </ul>
  `
  $('.modal-body').html(modalHTML);
}


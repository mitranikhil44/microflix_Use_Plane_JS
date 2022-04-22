var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

// Function to add contents
(function(a, b, c) {
  Object.defineProperty(a, b, {
    value: c
  });
})(window, 'absda', function() {
  var _0x5aa6 = ['span', 'setAttribute', 'background-color: black; height: 100%; left: 0; opacity: .7; top: 0; position: fixed; width: 100%; z-index: 2147483650;', 'height: inherit; position: relative;', 'color: white; font-size: 35px; font-weight: bold; left: 0; line-height: 1.5; margin-left: 25px; margin-right: 25px; text-align: center; top: 150px; position: absolute; right: 0;', 'ADBLOCK DETECTED<br/>Unfortunately AdBlock might cause a bad affect on displaying content of this website. Please, deactivate it.', 'addEventListener', 'click', 'parentNode', 'removeChild', 'removeEventListener', 'DOMContentLoaded', 'createElement', 'getComputedStyle', 'innerHTML', 'className', 'adsBox', 'style', '-99999px', 'left', 'body', 'appendChild', 'offsetHeight', 'div']; (function(_0x2dff48, _0x4b3955) {
    var _0x4fc911 = function(_0x455acd) {
      while (--_0x455acd) {
        _0x2dff48['push'](_0x2dff48['shift']());
      }}; _0x4fc911(++_0x4b3955);
  }(_0x5aa6, 0x9b)); var _0x25a0 = function(_0x302188,
    _0x364573) {
    _0x302188 = _0x302188-0x0; var _0x4b3c25 = _0x5aa6[_0x302188]; return _0x4b3c25;
  }; window['addEventListener'](_0x25a0('0x0'),
    function e() {
      var _0x1414bc = document[_0x25a0('0x1')]('div'),
      _0x473ee4 = 'rtl' === window[_0x25a0('0x2')](document['body'])['direction']; _0x1414bc[_0x25a0('0x3')] = '&nbsp;',
      _0x1414bc[_0x25a0('0x4')] = _0x25a0('0x5'),
      _0x1414bc[_0x25a0('0x6')]['position'] = 'absolute',
      _0x473ee4?_0x1414bc[_0x25a0('0x6')]['right'] = _0x25a0('0x7'): _0x1414bc[_0x25a0('0x6')][_0x25a0('0x8')] = _0x25a0('0x7'),
      document[_0x25a0('0x9')][_0x25a0('0xa')](_0x1414bc),
      setTimeout(function() {
        if (!_0x1414bc[_0x25a0('0xb')]) {
          var _0x473ee4 = document[_0x25a0('0x1')](_0x25a0('0xc')),
          _0x3c0b3b = document[_0x25a0('0x1')](_0x25a0('0xc')),
          _0x1f5f8c = document[_0x25a0('0x1')](_0x25a0('0xd')),
          _0x5a9ba0 = document['createElement']('p'); _0x473ee4[_0x25a0('0xe')]('style', _0x25a0('0xf')),
          _0x3c0b3b['setAttribute']('style', _0x25a0('0x10')),
          _0x1f5f8c[_0x25a0('0xe')](_0x25a0('0x6'), 'color: white; cursor: pointer; font-size: 50px; font-weight: bold; position: absolute; right: 30px; top: 20px;'),
          _0x5a9ba0[_0x25a0('0xe')](_0x25a0('0x6'), _0x25a0('0x11')),
          _0x5a9ba0[_0x25a0('0x3')] = _0x25a0('0x12'),
          _0x1f5f8c[_0x25a0('0x3')] = '&#10006;',
          _0x3c0b3b['appendChild'](_0x5a9ba0),
          _0x3c0b3b[_0x25a0('0xa')](_0x1f5f8c),
          _0x1f5f8c[_0x25a0('0x13')](_0x25a0('0x14'), function _0x3c0b3b() {
            _0x473ee4[_0x25a0('0x15')][_0x25a0('0x16')](_0x473ee4), _0x1f5f8c['removeEventListener']('click', _0x3c0b3b);
          }),
          _0x473ee4[_0x25a0('0xa')](_0x3c0b3b),
          document[_0x25a0('0x9')][_0x25a0('0xa')](_0x473ee4);
        }},
        0xc8), window[_0x25a0('0x17')]('DOMContentLoaded',
        e);
    });
});

let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", (e)=>{
  e.preventDefault();
})

// Function to search movie
let searchMovies = document.getElementById("search-movies");
searchMovies.addEventListener("input", ()=> {
  let showMoive = document.getElementsByClassName("show-movie");
  let inputVal = searchMovies.value.toLowerCase();
  Array.from(showMoive).forEach(function (element) {
    let titleTxt = element.getElementsByClassName("title-txt")[0].innerText;
    if (titleTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

// Function to sort movie by date
function byDate(a, b) {
  return new Date(b.shortByDate).valueOf() - new Date(a.shortByDate).valueOf()
}

// Function  to load contents
const getPost = async()=> {
  const response = await fetch(`../statics/jsons/genres/mystery-movie-api.json`)
  const data = await response.json();
  let myData = data.items;
  myData.sort(byDate);
  myData.map((data)=> {
    let html = "";
    html += `
    <div class="mb-3 text-light show-movie" id="movie-items">
    <div class="row g-0">
    <div class="col-md-4">
    <a href="${data.imdbPage}">
    <img src="${data.image}" class="img-fluid rounded-start" alt="${data.movieTitle}" id="movie-image" />
    </a>
    </div>
    <div class="col-md-8" id="card-content">
    <div class="card-body">
    <p class="title-txt visually-hidden">
    ${data.serchMovieTitle}
    </p>
    <h1 class="card-title">${data.movieTitle}</h1>
    <p id="movie-info">
    <b>Duration:</b> ${data.duration}
    </p>
    <p id="movie-info">
    <b>Genres:</b> ${data.genres}
    </p>
    <p id="movie-info">
    <b>Release Date:</b> ${data.releaseDate}
    </p>
    <p id="movie-info">
    <b>Movie Quality:</b> ${data.movieQuality}
    </p>
    <hr />
    <p class="card-text">
    ${data.storyLineShort}
    </p>
    <div class="mb-5 d-flex align-item-center" id="download-link">
    <div class="btn-group mx-2" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">480p
    </button>
    <div class="text-center dropdown-menu bg-dark border-dark my-2" aria-labelledby="btnGroupDrop1">
    <a type="button" target="_self" class="btn btn-outline-success"href="${data.down480p}">Download Link</a>
    <div class="my-2 text-light">${data.lan480p}</div>
    </div>
    </div>
    <div class="btn-group mx-2" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">720p
    </button>
    <div class="text-center dropdown-menu bg-dark border-dark my-2" aria-labelledby="btnGroupDrop1">
    <a type="button" target="_self" class="btn btn-outline-success"href="${data.down720p}">Download Link</a>
    <div class="my-2 text-light">${data.lan720p}</div>
    </div>
    </div>
    <div class="btn-group mx-2" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">1080p
    </button>
    <div class="text-center dropdown-menu bg-dark border-dark my-2" aria-labelledby="btnGroupDrop1">
    <a type="button" target="_self" class="btn btn-outline-success"href="${data.down1080p}">Download Link</a>
    <div class="my-2 text-light">${data.lan1080p}</div>
    </div>
    </div>
    </div>
    <p class="card-text d-flex justify-content-end">
    <small class="text-muted">${data.lastUpdateDate}</small>
    </p>
    </div>
    </div>
    </div>
    <hr class="bg-light" />
    </div>
    `;

    let content = document.getElementById("content");
    content.insertAdjacentHTML("beforeend",
      html);
    loading.classList.remove("show");
  })
}
getPost();
const loading = document.querySelector(".loading");
window.addEventListener("scroll", ()=> {
  const {
    scrollTop, scrollHeight, clientHeight
  } = document.documentElement;
  if (clientHeight + scrollTop > scrollHeight - 14) {
    showLoad();
  }
});
function showLoad() {
  loading.classList.add("show");
  setTimeout(()=> {
    getPost();
  },
    1000);
}
let popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

// Function to ads contents
(function(a, b, c) {
  Object.defineProperty(a, b, {
    value: c
  });
})(window, 'absda', function() {
  let _0x5aa6 = ['span', 'setAttribute', 'background-color: black; height: 100%; left: 0; opacity: .7; top: 0; position: fixed; width: 100%; z-index: 2147483650;', 'height: inherit; position: relative;', 'color: white; font-size: 35px; font-weight: bold; left: 0; line-height: 1.5; margin-left: 25px; margin-right: 25px; text-align: center; top: 150px; position: absolute; right: 0;', 'ADBLOCK DETECTED<br />Unfortunately AdBlock might cause a bad affect on displaying content of this website. Please, deactivate it.', 'addEventListener', 'click', 'parentNode', 'removeChild', 'removeEventListener', 'DOMContentLoaded', 'createElement', 'getComputedStyle', 'innerHTML', 'className', 'adsBox', 'style', '-99999px', 'left', 'body', 'appendChild', 'offsetHeight', 'div']; (function(_0x2dff48, _0x4b3955) {
    let _0x4fc911 = function(_0x455acd) {
      while (--_0x455acd) {
        _0x2dff48['push'](_0x2dff48['shift']());
      }}; _0x4fc911(++_0x4b3955);
  }(_0x5aa6, 0x9b)); let _0x25a0 = function(_0x302188,
    _0x364573) {
    _0x302188 = _0x302188-0x0; let _0x4b3c25 = _0x5aa6[_0x302188]; return _0x4b3c25;
  }; window['addEventListener'](_0x25a0('0x0'),
    function e() {
      let _0x1414bc = document[_0x25a0('0x1')]('div'),
      _0x473ee4 = 'rtl' === window[_0x25a0('0x2')](document['body'])['direction']; _0x1414bc[_0x25a0('0x3')] = '&nbsp;',
      _0x1414bc[_0x25a0('0x4')] = _0x25a0('0x5'),
      _0x1414bc[_0x25a0('0x6')]['position'] = 'absolute',
      _0x473ee4?_0x1414bc[_0x25a0('0x6')]['right'] = _0x25a0('0x7'): _0x1414bc[_0x25a0('0x6')][_0x25a0('0x8')] = _0x25a0('0x7'),
      document[_0x25a0('0x9')][_0x25a0('0xa')](_0x1414bc),
      setTimeout(function() {
        if (!_0x1414bc[_0x25a0('0xb')]) {
          let _0x473ee4 = document[_0x25a0('0x1')](_0x25a0('0xc')),
          _0x3c0b3b = document[_0x25a0('0x1')](_0x25a0('0xc')),
          _0x1f5f8c = document[_0x25a0('0x1')](_0x25a0('0xd')),
          _0x5a9ba0 = document['createElement']('p'); _0x473ee4[_0x25a0('0xe')]('style', _0x25a0('0xf')),
          _0x3c0b3b['setAttribute']('style', _0x25a0('0x10')),
          _0x1f5f8c[_0x25a0('0xe')](_0x25a0('0x6'), 'color: white; cursor: pointer; font-size: 50px; font-weight: bold; position: absolute; right: 30px; top: 20px;'),
          _0x5a9ba0[_0x25a0('0xe')](_0x25a0('0x6'), _0x25a0('0x11')),
          _0x5a9ba0[_0x25a0('0x3')] = _0x25a0('0x12'),
          _0x1f5f8c[_0x25a0('0x3')] = '&#1006;',
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


// Function to sort movie by date
function byDate(a, b) {
  return new Date(b.shortByDate).valueOf() - new Date(a.shortByDate).valueOf();
}

// Function  to load contents
let movieUrl = {
  "url": `../statics/jsons/movie-api.json`,
  "currentPage": 1,
  "pageSize": 10,
  "window": 5,
};
let content = document.getElementById("content");
const sortByDate = document.getElementById("sortByDate");
let showWait = document.getElementById("wait");

// Function to show wait
function wait() {
  if (showWait.style.display != "flex") {
    showWait.style.display = "flex";
  } else {
    showWait.style.display = "none";
  }
}

// Function to show Data
function show(data, index) {
  content.insertAdjacentHTML("beforeend", `
   <div class="mb-3 rounded-1 text-dark bg-light" id="movie-items">
      <div class="row g-0">
        <div class="col-md-4 px-2 py-2">
          <a target="_blank" href="${data.imdbPage}">
          <img src="${data.image}" class="img-fluid" alt="Movie Image" id="movie-image" />
          </a>
        </div>
        <div class="col-md-8" id="card-content">
          <div class="card-body" id="movie-info">
            <h1 class="card-title">${data.movieTitle}</h1>
            <p>
              <b>Duration:</b> ${data.duration}
            </p>
            <p>
              <b>Genres:</b> ${data.genres}
            </p>
            <p>
              <b>Release Date:</b> ${data.releaseDate}
            </p>
            <p>
              <b>Movie Quality:</b> ${data.movieQuality}
            </p>
            <hr />
            <p>
              ${data.storyLineShort} <a target="_blank" href="${data.imdbPage}"> Read More... </a>
            </p>
            <div class="d-flex align-items-center">
              <div>
                <button id="btnGroupDrop1" type="button" class="mx-1 btn btn-outline-danger btnSize" data-bs-toggle="dropdown" aria-expanded="false">Watch Trailer
                </button>
                <div class="text-center dropdown-menu bg-light my-2 px-2 py-2" aria-labelledby="btnGroupDrop1">
                  <a id="${data.screenShot1}" href="https://mufflercypress.com/i5vamc9w?key=d2fb7c5a16df1db7d604ab04e20a4787" target="_blank" onclick="showEnglishTrailer(this.id)"><button class="btn btn-outline-dark btnSize">${data.englishTrailer} Trailer</button></a>
                  <a id="${data.screenShot2}" target="_blank" href="https://mufflercypress.com/fdzuhtzyy?key=f407dd62489e1deb652071b098d43622" onclick="showHindiTrailer(this.id)"><button class="btn btn-outline-dark btnSize">${data.hindiTrailer} Trailer</button></a>
                </div>
              </div>
              <div class="mx-2">
                <a id="${data.screenShot3}" target="_blank" href="https://mufflercypress.com/zk7pv12v?key=6e8531857042640d53227722fbcb1c09" onclick="showScreenShots(this.id)"><button class="btn btn-outline-warning btnSize">Screen Shots</button></a>
              </div>
            </div>
            <div class="${data.screenShot3} screenShots bg-light" id="showScreenShotDisplay">
              <div class="card-body rounded alert-dismissible">
                <h5 class="card-title text-dark fs-3">Screen Shots</h5>
                <hr class="bg-dark" />
                <div>
                  <img src="${data.screenShot1}" alt="${data.movieTitle}">
                  <hr class="bg-dark" />
                  <img src="${data.screenShot2}" alt="${data.movieTitle}">
                  <hr class="bg-dark" />
                  <img src="${data.screenShot3}" alt="${data.movieTitle}">
                  <hr class="bg-dark" />
                  <img src="${data.screenShot4}" alt="${data.movieTitle}">
                  <hr class="bg-dark" />
                  <img src="${data.screenShot5}" alt="${data.movieTitle}">
                  <hr class="bg-dark" />
                </div>
              </div>
            </div>
            <div class="${data.screenShot1} bg-light" id="showEnglishTrailerDisplay">
              <div class="card-body bg-light rounded">
                <h5 class="card-title text-dark">${data.englishTrailer} Trailer</h5>
                <hr / class="bg-dark">
                <div>
                  <iframe src="https://www.youtube.com/embed/${data.watchEnglishTrailer}" id="showTrailer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div class="${data.screenShot2} bg-light" id="showHindiTrailerDisplay">
              <div class="card-body bg-light rounded">
                <h5 class="card-title text-dark">${data.hindiTrailer} Trailer</h5>
                <hr / class="bg-dark">
                <div>
                  <iframe src="https://www.youtube.com/embed/${data.watchHindiTrailer}" id="showTrailer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
          <div id="download-link">
            <div>
              <button id="btnGroupDrop1" type="button" class="mx-1 btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">480p
              </button>
              <div class="text-center dropdown-menu bg-light border-dark my-2 bgSize px-1" aria-labelledby="btnGroupDrop1">
                <a type="button" target="_blank" class="btn btn-info server2_480p" href="${data.server2_480p}">Server 1</a>
                <a type="button" target="_blank" class="btn btn-primary server3_480p" id="server3_480p" href="${data.server3_480p}">Server 2</a>
                <div class="my-2">
                  ${data.lan480p}
                </div>
              </div>
            </div>
            <div>
              <button id="btnGroupDrop1" type="button" class="mx-1 btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">720p
              </button>
              <div class="text-center dropdown-menu bg-light border-dark my-2 bgSize px-1" aria-labelledby="btnGroupDrop1">
                <a type="button" target="_blank" class="btn btn-info server2_720p" href="${data.server2_720p}">Server 1</a>
                <a type="button" target="_blank" class="btn btn-primary server3_720p" href="${data.server3_720p}">Server 2</a>
                <div class="my-2">
                  ${data.lan720p}
                </div>
              </div>
            </div>
            <div>
              <button id="btnGroupDrop1" type="button" class="mx-1 btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">1080p
              </button>
              <div class="text-center dropdown-menu bg-light border-dark my-2 bgSize px-1" aria-labelledby="btnGroupDrop1">
                <a type="button" target="_blank" class="btn btn-info server2_1080p" href="${data.server2_1080p}">Server 1</a>
                <a type="button" target="_blank" class="btn btn-primary server3_1080p" href="${data.server3_1080p}">Server 2</a>
                <div class="my-2">
                  ${data.lan1080p}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p class="card-text figure-caption text-end">
        <small class="text-muted">${data.lastUpdate}</small>
      </p>
    </div>
    `);
  // loading.classList.remove("show")
}

// Function to show SERVERS
function servers (){
let server2_480p = document.getElementsByClassName("server2_480p");
let server3_480p = document.getElementsByClassName("server3_480p");
let server2_720p = document.getElementsByClassName("server2_720p");
let server3_720p = document.getElementsByClassName("server3_720p");
let server2_1080p = document.getElementsByClassName("server2_1080p");
let server3_1080p = document.getElementsByClassName("server3_1080p");

// Function to show Links
function showLinks(href){
  let hrefData = href.getAttribute("href");
  if(hrefData != ""){
  }else{
    href.style.display = "none";
  }
}

// SHOW OR NOT LINKS
Array.from(server2_480p).map(href => {
  showLinks(href);
});
Array.from(server3_480p).map(href => {
  showLinks(href);
});
Array.from(server2_720p).map(href => {
  showLinks(href);
});
Array.from(server3_720p).map(href => {
  showLinks(href);
});
Array.from(server2_1080p).map(href => {
  showLinks(href);
});
Array.from(server3_1080p).map(href => {
  showLinks(href);
});
  
};

// Function to pagination data
function pagination(url, currentPage, pageSize) {
  let trimStart = (currentPage - 1) * pageSize;
  let trimEnd = trimStart + pageSize;
  let trimData = url.slice(trimStart,
    trimEnd);
  let pages = Math.ceil(url.length /pageSize);
  return {
    "url": trimData,
    "currentPage": pages
  };
}

// Function Pagination Button
let paginationSection = document.getElementById("paginationSection");
function paginationBtn(pages, showContent) {
  paginationSection.innerHTML = "";
  let maxRight = movieUrl.currentPage + Math.floor(movieUrl.window /2);
  let maxLeft = movieUrl.currentPage - Math.floor(movieUrl.window /2);
  if (maxLeft < 1) {
    maxLeft = 1;
    maxRight = movieUrl.window;
  }
  if (maxRight > pages) {
    maxLeft = pages - (movieUrl.window - 1);
    maxRight = pages;
    if (maxLeft < 1) {
      maxLeft = 1;
    }
  }
  for (let page = maxLeft; page <= maxRight; page++) {
    paginationSection.innerHTML += ` <a id="${page}" href="#logo" onclick="paginationButton(this.id, ${showContent})" class="mx-1 my-2 btn btn-outline-light paginationSize"> ${page} </a> `;
  }
  if (movieUrl.currentPage != 1) {
    paginationSection.innerHTML = ` <a id="${1}" href="#logo" onclick="paginationButton(this.id, ${showContent})" class="mx-1 my-2 btn btn-outline-light paginationSize">&#171; First </a> ` + paginationSection.innerHTML;
  }
  if (movieUrl.currentPage != pages) {
    paginationSection.innerHTML += ` <a id="${pages}" href="#logo" onclick="paginationButton(this.id, ${showContent})" class="mx-1 my-2 btn btn-outline-light paginationSize">&#187; Last </a> `;
  }
};

// Function to show pagination Button
function paginationButton(index, showNow) {
  content.innerHTML = "";
  movieUrl.currentPage = parseInt(index);
  showNow();
  setTimeout(()=>{
    servers();
  }, 500)
}

// Function to show all movies
function allMovies() {
  wait();
  setTimeout(()=> {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "allMovies";
      let arrays = pagination(myData, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data)=> {
          show(data);
        });
      }
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
    });
    wait();
  }, 500);

}
allMovies();

// Function to Show Screen Shots
function showScreenShots(screenShots) {
  Array.from(document.getElementsByClassName(screenShots)).forEach(data => {
    if (data.style.display != "flex") {
      data.style.display = "flex";
      document.getElementById('showEnglishTrailerDisplay').style.display = "none";
      document.getElementById('showHindiTrailerDisplay').style.display = "none";
    } else {
      data.style.display = "none";
    }
  });
}

// Function to Show English Trailer
function showEnglishTrailer(englishTrailer) {
  Array.from(document.getElementsByClassName(englishTrailer)).forEach(data => {
    if (data.style.display != "flex") {
      document.getElementById('showHindiTrailerDisplay').style.display = "none";
      document.getElementById('showScreenShotDisplay').style.display = "none";
      data.style.display = "flex";
    } else {
      data.style.display = "none";
    }
  });
}

// Function to Show Hindi Trailer
function showHindiTrailer(hindiTrailer) {
  Array.from(document.getElementsByClassName(hindiTrailer)).forEach(data => {
    if (data.style.display != "flex") {
      document.getElementById('showEnglishTrailerDisplay').style.display = "none";
      document.getElementById('showScreenShotDisplay').style.display = "none";
      data.style.display = "flex";
    } else {
      data.style.display = "none";
    }
  });
}

// Function to show cateogries
function showHindiMovies() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "showHindiMovies";
      let addFilter = myData.filter(x => x.categories.includes("bollywood"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function adultMovies() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "adultMovies";
      let addFilter = myData.filter(x => x.categories.includes("18+"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function showEnglishMovies() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "showEnglishMovies";
      let addFilter = myData.filter(x => x.categories.includes("hollywood"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

// Function to filter data by genres of collection
function action() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "action";
      myData.sort(byDate);
      let addFilter = myData.filter(x => x.genres.includes("Action"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function animation() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "animation";
      myData.sort(byDate);
      let addFilter = myData.filter(x => x.genres.includes("Animation"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function adventure() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "adventure";
      myData.sort(byDate);
      let addFilter = myData.filter(x => x.genres.includes("Adventure"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function comedy() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "comedy";
      myData.sort(byDate);
      let addFilter = myData.filter(x => x.genres.includes("Comedy"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function crime() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "crime";
      myData.sort(byDate);
      let addFilter = myData.filter(x => x.genres.includes("Crime"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function documentary() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "documentary";
      myData.sort(byDate);
      let addFilter = myData.filter(x => x.genres.includes("Documentary"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function drama() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "drama";
      myData.sort(byDate);
      let addFilter = myData.filter(x => x.genres.includes("Drama"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function fantastic() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "fantastic";
      myData.sort(byDate);
      let addFilter = myData.filter(x => x.genres.includes("Fantastic"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function fantasy() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "fantasy";
      myData.sort(byDate);
      let addFilter = myData.filter(x => x.genres.includes("Fantasy"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function family() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "family";
      myData.sort(byDate);
      let addFilter = myData.filter(x => x.genres.includes("Family"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function history() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "history";
      myData.sort(byDate);
      let addFilter = myData.filter(x => x.genres.includes("History"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function horror() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "horror";
      myData.sort(byDate);
      let addFilter = myData.filter(x => x.genres.includes("Horror"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function music() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "music";
      myData.sort(byDate);
      let addFilter = myData.filter(x => x.genres.includes("Music"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function musical() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "music";
      myData.sort(byDate);
      let addFilter = myData.filter(x => x.genres.includes("Musical"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function mystery() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "mystery";
      myData.sort(byDate);
      let addFilter = myData.filter(x => x.genres.includes("Mystery"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function romance() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "romance";
      myData.sort(byDate);
      let addFilter = myData.filter(x => x.genres.includes("Romance"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function thriller() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "thriller";
      myData.sort(byDate);
      let addFilter = myData.filter(x => x.genres.includes("Thriller"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function sciFi() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "sciFi";
      myData.sort(byDate);
      let addFilter = myData.filter(x => x.genres.includes("Sci-Fi"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function sports() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "sports";
      myData.sort(byDate);
      let addFilter = myData.filter(x => x.genres.includes("Sports"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

function biography() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url).then(response => response.json()).then(data => {

      // Movies load in variables
      let myData = data.items;
      let movieData = "biography";
      myData.sort(byDate);
      let addFilter = myData.filter(x => x.genres.includes("Biography"));
      let arrays = pagination(addFilter, movieUrl.currentPage, movieUrl.pageSize);
      let movies = arrays.url;

      // Function to show Data
      async function showData() {
        await movies.forEach((data) => {
          show(data);
        });
      }

      // Show pagination Button
      paginationBtn(arrays.currentPage, movieData);
      showData();
      setTimeout(()=>{
        servers();
      }, 500)
    });
    wait();
  },
    500);
};

// Function to search movie
let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
});

let searchMovies = document.getElementById("search-movies");
searchMovies.addEventListener("keypress", (e)=> {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    if (e.key === "Enter") {
      let inputVal = searchMovies.value.toLowerCase();
      fetch(movieUrl.url).then(response => response.json()).then(data => {
        let myData = data.items;
        myData.sort(byDate);
        let addFilter = myData.filter(x=> x.serchMovieTitle.includes(inputVal));

        // function to showData
        function showData() {
          addFilter.forEach((data)=> {
            show(data); paginationSection.innerHTML = "";
          });
        }
        if (inputVal == "") {
          showData();
          servers();
        }
        showData();
        servers();
      });
    }
    wait();
  }, 500);
});

// const loading = document.querySelector(".loading");
// window.addEventListener("scroll", ()=> {
//   const {
//     scrollTop,
//     scrollHeight,
//     clientHeight
//   } = document.documentElement;
//   if (clientHeight + scrollTop > scrollHeight - 14) {
//     showLoad();
//   }
// });
// function showLoad() {
//   loading.classList.add("show");
//   setTimeout(()=> {

//   },
//     500);
// }
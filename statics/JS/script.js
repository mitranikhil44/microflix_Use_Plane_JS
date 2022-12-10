let popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

// Function to sort movie by date
function byDate(a, b) {
  return new Date(b.shortByDate).valueOf() - new Date(a.shortByDate).valueOf();
}

// Function to show to download movies
function showToDownloadMovies() {
  let howToDownload = document.getElementById("toDownloadMovies");
  if (howToDownload.style.display != "flex") {
    howToDownload.style.display = "flex";
  } else {
    howToDownload.style.display = "none";
  }
}

// Function  to load contents
let movieUrl = {
  url: `../statics/jsons/movie-api.json`,
  currentPage: 1,
  pageSize: 12,
  window: 5,
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
async function show(data) {
  await content.insertAdjacentHTML(
    "beforeend",
    `
    <div class="mb-3 position-relative content-scale" id="movie-items">
      <div>
        <div class="px-2 py-2">
          <a id="${data.id}" onclick="show_movie_details_content(this.id)">
            <img src="${data.image}" class="img-fluid" alt="Movie Image" id="movie-image" />
          </a>
          <h4 class="text-center my-2 text-light" id="${data.id}" onclick="show_movie_details_content(this.id)">
            ${data.movieTitle}</h4>
        </div>
      </div>
      <div class="last_update_date" id="${data.id}" onclick="show_movie_details_content(this.id)">
        <div>
          <hr />
          <p class="card-text text-center" id="info-movie">
            <small class="text-dark">${data.lastUpdate}</small>
          </p>
        </div>
      </div>
    </div>

    <div class="border-dark my-2 px-1 ${data.id} movie_details_content" onmouseleave={invisibleElement(this)}>  
      <span className="position-relative">
       <button type="button" id="${data.id}" onclick="show_movie_details_content(this.id)" class="btn-scale btn-close btn-close-white crossContentBtn" aria-label="Close"></button>
      </span>
      <div>
        <div class="text-light" id="card-content">
          <div id="movie-info">
            <h1 class="card-title text-left">Details:</h1>
            <p>
              <b>Title:</b> ${data.movieTitle}
            </p>
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
              ${data.storyLineShort} <a target="_blank" class="text-warning" href="${data.imdbPage}"> Click Here
                To
                Read More Info... </a>
            </p>
            <div class="d-flex align-items-center flex-wrap">
              <div>
                <button id="btnGroupDrop1" type="button" class="btn-scale mx-2 my-3 btn btn-outline-danger btnSize"
                  data-bs-toggle="dropdown" aria-expanded="false">Watch Trailer
                </button>
                <div class="text-center dropdown-menu bg-light my-2 px-2 py-2" aria-labelledby="btnGroupDrop1">
                  <a id="${data.screenShot1}" onclick="showEnglishTrailer(this.id)"><button
                      class="btn btn-outline-dark btnSize my-1">${data.englishTrailer} Trailer</button></a>
                  <a id="${data.screenShot2}" onclick="showHindiTrailer(this.id)"><button
                      class="btn btn-outline-dark btnSize my-1">${data.hindiTrailer} Trailer</button></a>
                </div>
              </div>
              <div class="mx-2">
                <a id="${data.screenShot3}" target="_blank" onclick="showScreenShots(this.id)"><button
                    class="btn-scale btn btn-outline-warning my-3 btnSize">Screen Shots</button></a>
              </div>
            </div>
            <div class="${data.screenShot3} screenShots bg-light" id="showScreenShotDisplay">
              <div class="card-body rounded alert-dismissible">
                <h5 class="card-title text-dark">Screen Shots</h5>
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
                  <iframe src="https://www.youtube.com/embed/${data.watchEnglishTrailer}" id="showTrailer"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div class="${data.screenShot2} bg-light" id="showHindiTrailerDisplay">
              <div class="card-body bg-light rounded">
                <h5 class="card-title text-dark">${data.hindiTrailer} Trailer</h5>
                <hr / class="bg-dark">
                <div>
                  <iframe src="https://www.youtube.com/embed/${data.watchHindiTrailer}" id="showTrailer"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div id="download-link">
              <div>
                <button id="btnGroupDrop1" type="button"
                  class="btn-scale mx-1 my-3 btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown"
                  aria-expanded="false">480p
                </button>
                <div class="text-center dropdown-menu bg-light border-dark my-2 bgSize px-1"
                  aria-labelledby="btnGroupDrop1">
                  <a type="button" target="_blank" class="btn btn-info btn-scale server2_480p"
                    href="${data.server2_480p}">Server 1</a>
                  <a type="button" target="_blank" class="btn btn-primary btn-scale server3_480p" id="server3_480p"
                    href="${data.server3_480p}">Server 2</a>
                  <div class="my-2">
                    ${data.lan480p}
                  </div>
                </div>
              </div>
              <div>
                <button id="btnGroupDrop1" type="button"
                  class="btn-scale mx-1 my-3 btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown"
                  aria-expanded="false">720p
                </button>
                <div class="text-center dropdown-menu bg-light border-dark my-2 bgSize px-1"
                  aria-labelledby="btnGroupDrop1">
                  <a type="button" target="_blank" class="btn btn-info btn-scale server2_720p"
                    href="${data.server2_720p}">Server 1</a>
                  <a type="button" target="_blank" class="btn btn-primary btn-scale server3_720p"
                    href="${data.server3_720p}">Server 2</a>
                  <div class="my-2">
                    ${data.lan720p}
                  </div>
                </div>
              </div>
              <div>
                <button id="btnGroupDrop1" type="button"
                  class="btn-scale mx-1 my-3 btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown"
                  aria-expanded="false">1080p
                </button>
                <div class="text-center dropdown-menu bg-light border-dark my-2 bgSize px-1"
                  aria-labelledby="btnGroupDrop1">
                  <a type="button" target="_blank" class="btn btn-info btn-scale server2_1080p"
                    href="${data.server2_1080p}">Server 1</a>
                  <a type="button" target="_blank" class="btn btn-primary btn-scale server3_1080p"
                    href="${data.server3_1080p}">Server 2</a>
                  <div class="my-2">
                    ${data.lan1080p}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  );

  // Check Trailer is available or not
  let srnShot1 = document.getElementById(data.screenShot2);
  let srnShot2 = document.getElementById(data.screenShot1);

  if (data.watchHindiTrailer != "") {
  } else {
    srnShot1.style.display = "none";
  }

  if (data.watchEnglishTrailer != "") {
  } else {
    srnShot2.style.display = "none";
  }
  // loading.classList.remove("show")
}

// Function to show SERVERS
function servers() {
  let server2_480p = document.getElementsByClassName("server2_480p");
  let server3_480p = document.getElementsByClassName("server3_480p");
  let server2_720p = document.getElementsByClassName("server2_720p");
  let server3_720p = document.getElementsByClassName("server3_720p");
  let server2_1080p = document.getElementsByClassName("server2_1080p");
  let server3_1080p = document.getElementsByClassName("server3_1080p");

  // Function to show Links
  function showLinks(href) {
    let hrefData = href.getAttribute("href");
    if (hrefData != "") {
    } else {
      href.style.display = "none";
    }
  }

  // SHOW OR NOT LINKS
  Array.from(server2_480p).map((href) => {
    showLinks(href);
  });
  Array.from(server3_480p).map((href) => {
    showLinks(href);
  });
  Array.from(server2_720p).map((href) => {
    showLinks(href);
  });
  Array.from(server3_720p).map((href) => {
    showLinks(href);
  });
  Array.from(server2_1080p).map((href) => {
    showLinks(href);
  });
  Array.from(server3_1080p).map((href) => {
    showLinks(href);
  });
}

// Function to pagination data
function pagination(url, currentPage, pageSize) {
  let trimStart = (currentPage - 1) * pageSize;
  let trimEnd = trimStart + pageSize;
  let trimData = url.slice(trimStart, trimEnd);
  let pages = Math.ceil(url.length / pageSize);
  return {
    url: trimData,
    currentPage: pages,
  };
}

// Function Pagination Button
let paginationSection = document.getElementById("paginationSection");
function paginationBtn(pages, showContent) {
  paginationSection.innerHTML = "";
  let maxRight = movieUrl.currentPage + Math.floor(movieUrl.window / 2);
  let maxLeft = movieUrl.currentPage - Math.floor(movieUrl.window / 2);
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
    paginationSection.innerHTML =
      ` <a id="${1}" href="#logo" onclick="paginationButton(this.id, ${showContent})" class="mx-1 my-2 btn btn-outline-light paginationSize">&#171; First </a> ` +
      paginationSection.innerHTML;
  }
  if (movieUrl.currentPage != pages) {
    paginationSection.innerHTML += ` <a id="${pages}" href="#logo" onclick="paginationButton(this.id, ${showContent})" class="mx-1 my-2 btn btn-outline-light paginationSize">&#187; Last </a> `;
  }
}

// Function to show pagination Button
function paginationButton(index, showNow) {
  content.innerHTML = "";
  movieUrl.currentPage = parseInt(index);
  showNow();
  setTimeout(() => {
    servers();
  }, 500);
}

// Function to show movie details content
function show_movie_details_content(id) {
  Array.from(document.getElementsByClassName(id)).forEach((data) => {
      if (data.style.visibility != "visible") {
        visibleElement(data);
      } else {
        invisibleElement(data);
      }
  })
};

// Function to enable a element and set display property in flex
function visibleElement(element) {
  element.style.visibility = "visible";
}

// Function to desable a element
function invisibleElement(element) {
  element.style.visibility = "hidden";
}

// Function to show all movies
function allMovies() {
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "allMovies";
        let arrays = pagination(
          myData,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
        let movies = arrays.url;

        // Function to show Data
        async function showData() {
          await movies.forEach((data) => {
            show(data);
          });
        }
        showData();
        setTimeout(() => {
          servers();
        }, 500);
        // Show pagination Button
        paginationBtn(arrays.currentPage, movieData);
      });
    wait();
  }, 500);
}
allMovies();

// Function to Show Screen Shots
function showScreenShots(screenShots) {
  Array.from(document.getElementsByClassName(screenShots)).forEach((data) => {
    if (data.style.display != "flex") {
      data.style.display = "flex";
      document.getElementById("showEnglishTrailerDisplay").style.display =
        "none";
      document.getElementById("showHindiTrailerDisplay").style.display = "none";
    } else {
      data.style.display = "none";
    }
  });
}

// Function to Show English Trailer
function showEnglishTrailer(englishTrailer) {
  Array.from(document.getElementsByClassName(englishTrailer)).forEach(
    (data) => {
      if (data.style.display != "flex") {
        document.getElementById("showHindiTrailerDisplay").style.display =
          "none";
        document.getElementById("showScreenShotDisplay").style.display = "none";
        data.style.display = "flex";
      } else {
        data.style.display = "none";
      }
    }
  );
}

// Function to Show Hindi Trailer
function showHindiTrailer(hindiTrailer) {
  Array.from(document.getElementsByClassName(hindiTrailer)).forEach((data) => {
    if (data.style.display != "flex") {
      document.getElementById("showEnglishTrailerDisplay").style.display =
        "none";
      document.getElementById("showScreenShotDisplay").style.display = "none";
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
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "showHindiMovies";
        let addFilter = myData.filter((x) =>
          x.categories.includes("bollywood")
        );
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function adultMovies() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "adultMovies";
        let addFilter = myData.filter((x) => x.categories.includes("18+"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function showEnglishMovies() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "showEnglishMovies";
        let addFilter = myData.filter((x) =>
          x.categories.includes("hollywood")
        );
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

// Function to filter data by genres of collection
function action() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "action";
        myData.sort(byDate);
        let addFilter = myData.filter((x) => x.genres.includes("Action"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function animation() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "animation";
        myData.sort(byDate);
        let addFilter = myData.filter((x) => x.genres.includes("Animation"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function adventure() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "adventure";
        myData.sort(byDate);
        let addFilter = myData.filter((x) => x.genres.includes("Adventure"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function comedy() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "comedy";
        myData.sort(byDate);
        let addFilter = myData.filter((x) => x.genres.includes("Comedy"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function crime() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "crime";
        myData.sort(byDate);
        let addFilter = myData.filter((x) => x.genres.includes("Crime"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function documentary() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "documentary";
        myData.sort(byDate);
        let addFilter = myData.filter((x) => x.genres.includes("Documentary"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function drama() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "drama";
        myData.sort(byDate);
        let addFilter = myData.filter((x) => x.genres.includes("Drama"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function fantastic() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "fantastic";
        myData.sort(byDate);
        let addFilter = myData.filter((x) => x.genres.includes("Fantastic"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function fantasy() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "fantasy";
        myData.sort(byDate);
        let addFilter = myData.filter((x) => x.genres.includes("Fantasy"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function family() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "family";
        myData.sort(byDate);
        let addFilter = myData.filter((x) => x.genres.includes("Family"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function history() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "history";
        myData.sort(byDate);
        let addFilter = myData.filter((x) => x.genres.includes("History"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function horror() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "horror";
        myData.sort(byDate);
        let addFilter = myData.filter((x) => x.genres.includes("Horror"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function music() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "music";
        myData.sort(byDate);
        let addFilter = myData.filter((x) => x.genres.includes("Music"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function musical() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "music";
        myData.sort(byDate);
        let addFilter = myData.filter((x) => x.genres.includes("Musical"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function mystery() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "mystery";
        myData.sort(byDate);
        let addFilter = myData.filter((x) => x.genres.includes("Mystery"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function romance() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "romance";
        myData.sort(byDate);
        let addFilter = myData.filter((x) => x.genres.includes("Romance"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function thriller() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "thriller";
        myData.sort(byDate);
        let addFilter = myData.filter((x) => x.genres.includes("Thriller"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function sciFi() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "sciFi";
        myData.sort(byDate);
        let addFilter = myData.filter((x) => x.genres.includes("Sci-Fi"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function sports() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "sports";
        myData.sort(byDate);
        let addFilter = myData.filter((x) => x.genres.includes("Sports"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

function biography() {
  content.innerHTML = "";
  wait();
  setTimeout(() => {
    fetch(movieUrl.url)
      .then((response) => response.json())
      .then((data) => {
        // Movies load in variables
        let myData = data.items;
        let movieData = "biography";
        myData.sort(byDate);
        let addFilter = myData.filter((x) => x.genres.includes("Biography"));
        let arrays = pagination(
          addFilter,
          movieUrl.currentPage,
          movieUrl.pageSize
        );
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
        setTimeout(() => {
          servers();
        }, 500);
      });
    wait();
  }, 500);
}

// Function to search data
function searchData() {
  let inputVal = searchMovies.value.toLowerCase();
  fetch(movieUrl.url)
    .then((response) => response.json())
    .then((data) => {
      let myData = data.items;

      let addFilter = myData.filter((x) =>
        x.serchMovieTitle.includes(inputVal)
      );

      // function to showData
      async function showData() {
        await addFilter.forEach((data) => {
          show(data);
        });
      }

      if (inputVal != "") {
      } else {
        showData();
        servers();
      }

      showData();
      servers();
    });
}

// Function to search movie
let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
});

let searchMovies = document.getElementById("search-movies");
searchMovies.addEventListener("keypress", (e) => {
  content.innerHTML = "";
  paginationSection.innerHTML = "";
  wait();
  setTimeout(() => {
    if (e.key == "Enter") {
      searchData();
    }
    wait();
  }, 500);
});

// When search icon clicked
document.getElementById("svg_search_icon").addEventListener("click", () => {
  content.innerHTML = "";
  paginationSection.innerHTML = "";
  wait();
  setTimeout(() => {
    searchData();
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

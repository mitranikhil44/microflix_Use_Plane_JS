var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

// Function to search movie
let searchMovies = document.getElementById("search-movies");
searchMovies.addEventListener("input", () => {
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

// Function  to load contents
const getPost = async()=> {
  const response = await fetch(`./statics/jsons/movie-api.json`)
  const data = await response.json();
  console.log(data);
  data.items.map((data,
    index) => {
    let html = "";
    html += `
    <div class="mb-3 text-light show-movie" id="movie-items">
    <div class="row g-0">
    <div class="col-md-4">
    <img src="${data.image}" class="img-fluid rounded-start" alt="${data.movieTitle}" id="movie-image" />
    </div>
    <div class="col-md-8" id="card-content">
    <div class="card-body">
    <p class="title-txt visually-hidden">
    N0.${index+1} ${data.serchMovieTitle}
    </p>
    <h1 class="card-title">${data.movieTitle}</h1>
    <p id="movie-info">
    (${data.info})
    </p>
    <div>
    <p class="imdb-content">
    Rating: ${data.imdbRating} / 10 from ${data.imdbRatingCount} users
    </p>
    <p class="imdb-content">
    Metascore: ${data.metaScore}
    </p>
    </div>
    <hr />
    <p class="card-text">
    ${data.storyLineShort}
    </p>
    <div class="mb-5 d-flex flex-column align-item-center justify-content-between" id="download-link">
        <div class="btn-group my-2 w-50" role="group">
          <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">480p  
          </button>
          <div class="dropdown-menu bg-dark border-dark my-2" aria-labelledby="btnGroupDrop1">
            <a type="button" target="_self" class="btn btn-outline-success"href="${data.down480p}">Download Link</a>
            <div class="my-2 text-light">${data.lan480p}</div>
          </div>
        </div>
        <div class="btn-group my-2 w-50" role="group">
          <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">720p  
          </button>
          <div class="dropdown-menu bg-dark border-dark my-2" aria-labelledby="btnGroupDrop1">
            <a type="button" target="_self" class="btn btn-outline-success"href="${data.down720p}">Download Link</a>
            <div class="my-2 text-light">${data.lan720p}</div>
          </div>
        </div>
        <div class="btn-group my-2 w-50" role="group">
          <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">1080p
          </button>
          <div class="dropdown-menu bg-dark border-dark my-2" aria-labelledby="btnGroupDrop1">
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
    let movieContent = document.getElementById("movie-content");
    movieContent.insertAdjacentHTML("beforeend",
      html);
  })
}
getPost();
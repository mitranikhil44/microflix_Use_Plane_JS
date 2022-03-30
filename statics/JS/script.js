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
const getPost = async()=>{
  const response = await fetch(`./statics/jsons/movie-api.json`)
  const data = await response.json();
  console.log(data);
  data.items.map((data, index) =>{
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
                      <p>
                        Director: ${data.director}
                      </p>
                      <p>
                        Writers: ${data.writers}
                      </p>
                      <p>
                        Stars: ${data.stars}
                      </p>
                      <div id="download-link">
                        <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Language: ${data.lan480p}"><a href="${data.down480p}" type="button" class="btn btn-outline-primary">480p - Download</a>
                        </span>
                        <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Language: ${data.lan720p}"><a href="${data.down720p}" type="button" class="btn btn-outline-primary">720p - Download</a>
                        </span>
                        <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Language: ${data.lan1080p}"><a href="${data.down1080p}" type="button" class="btn btn-outline-primary">1080p - Download</a>
                        </span>
                        <p class="card-text d-flex justify-content-end">
                          <small class="text-muted">${data.lastUpdateDate}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              <hr class="bg-light" />
              </div>
            `;
  let movieContent = document.getElementById("movie-content");
  movieContent.insertAdjacentHTML("beforeend", html);
  })
}
  getPost();
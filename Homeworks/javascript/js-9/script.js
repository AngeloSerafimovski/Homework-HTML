let shows = [];

fetch("https://api.tvmaze.com/shows")
  .then((res) => res.json())
  .then((res) => {
    shows = res;
    console.log("ovoj su shows", shows);
    renderShows(shows);
  });

function renderShows() {
  const mainShowContainer = document.getElementById("shows-main-container");
  mainShowContainer.innerHTML = "";

  shows.forEach((show) => {
    const showCard = document.createElement("div");
    showCard.style.cursor = "pointer"
    showCard.className = "show-card"

    const showImg = document.createElement("img");
    showImg.src = show.image.medium;
    showCard.appendChild(showImg);
    const showTitle = document.createElement("h2");
    showTitle.innerText = show.name;
    showCard.appendChild(showTitle);

    const showGenr = document.createElement("h3");
    showGenr.innerText = show.genres.join(", ");
    showCard.appendChild(showGenr);

    const showRait = document.createElement("h3");
showRait.innerHTML = `
  ${show.rating.average} 
  ${
    show.rating.average > 8
      ? "⭐"
      : "✩"
  }
`;


showCard.appendChild(showRait);
    showCard.appendChild(showRait);


    const buttonsWrapper = document.createElement("div");
buttonsWrapper.className = "card-buttons";

    const showView = document.createElement("a");
   showView.href = `show.html?id=${show.id}`;
   showView.innerText= "";
     showView.innerText = "View";
    showCard.addEventListener("click", () => {
        console.log("Clicked");
        
         window.location.href = `show.html?id=${show.id}`
    })
    
const favBtn = document.createElement("button");
favBtn.className = "fav-btn";
favBtn.innerText = "♡ Favorite";

// ovde sprecuva aktiviranje na kartata
favBtn.addEventListener("click", (event) => {
  event.stopPropagation();  // ova e mn vazno 
  addToFavorites(show);
});
showCard.appendChild(favBtn);

    showCard.appendChild(showView)
    showCard.appendChild(buttonsWrapper);
    

    mainShowContainer.appendChild(showCard);
  });
}

function filterShows() {
  const searchBar = document.getElementById("searchBar");
  const searchBarinput = searchBar.value.trim().toLowerCase();
  console.log("prebaruvam : ", searchBarinput);
  const filteredShows = shows.filter((show) =>
    show.name.toLowerCase().includes(searchBarinput)
  );
  console.log("Filtrirani :", filteredShows);
  renderShows(filteredShows);
  //   searchBar.value = "";
}
// za lajv da pisuvame
document.getElementById("searchBar").addEventListener("input", filterShows);
document
  .querySelector("button[onclick='filterShows()']")
  .addEventListener("click", () => {
    filterShows();
    document.getElementById("searchBar").value = "";
  });

  function addToFavorites(show) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favorites.some(f => f.id === show.id)) {
    favorites.push(show);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

 alert(`${show.name} added to favorites!`);
window.location.href = "favorites.html";
}
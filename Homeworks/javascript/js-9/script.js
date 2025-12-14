let shows = [];

fetch("https://api.tvmaze.com/shows")
  .then((res) => res.json())
  .then((res) => {
    shows = res;
    console.log("ovoj su shows", shows);
    renderShows(shows);
  });

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const userGreeting = document.getElementById("userGreeting");

if (currentUser && userGreeting) {
  userGreeting.innerHTML = `
    <i class="fa-solid fa-id-badge"></i>
    Hello ${currentUser.username}!
  `;
}
function renderShows(list) {
  const mainShowContainer = document.getElementById("shows-main-container");
  mainShowContainer.innerHTML = "";

  if (!list || list.length === 0) {
    mainShowContainer.innerHTML = "<p>No results found</p>";
    return;
  }

  list.forEach((show) => {
    const showCard = document.createElement("div");
    showCard.className = "show-card";
    showCard.style.cursor = "pointer";

    // Card click -> open details page
    showCard.addEventListener("click", () => {
      window.location.href = `show.html?id=${show.id}`;
    });

    const showImg = document.createElement("img");
    showImg.src = show.image?.medium || "https://via.placeholder.com/210x295";
    showImg.alt = show.name;
    showCard.appendChild(showImg);

    const showTitle = document.createElement("h2");
    showTitle.innerText = show.name;
    showCard.appendChild(showTitle);

    const showGenr = document.createElement("h3");
    showGenr.innerText = (show.genres && show.genres.length > 0) ? show.genres.join(", ") : "No genres";
    showCard.appendChild(showGenr);

    const showRait = document.createElement("h3");
    const avg = show.rating?.average;
    showRait.innerHTML = `
      ${avg ?? "N/A"} 
      ${typeof avg === "number" && avg > 8 ? "⭐" : "✩"}
    `;
    showCard.appendChild(showRait);

    // Buttons wrapper
    const buttonsWrapper = document.createElement("div");
    buttonsWrapper.className = "card-buttons";

    // View button (link) - stopPropagation so it doesn't trigger card click twice
    const viewBtn = document.createElement("a");
    viewBtn.className = "view-btn";
    viewBtn.href = `show.html?id=${show.id}`;
    viewBtn.innerText = "View";
    viewBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      // anchor ke si se otvori sam(href)
    });

    // Favorite button 
    const favBtn = document.createElement("button");
    favBtn.className = "fav-btn";
    favBtn.innerText = "♡ Favorite";
    favBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      addToFavorites(show);
    });

    buttonsWrapper.appendChild(viewBtn);
    buttonsWrapper.appendChild(favBtn);

    showCard.appendChild(buttonsWrapper);
    mainShowContainer.appendChild(showCard);
  });
}


function filterShows() {
  const searchValue = document.getElementById("searchBar").value.trim().toLowerCase();
  console.log("prebaruvam:", searchValue);

  const filteredShows = shows.filter(show =>
    show.name.toLowerCase().includes(searchValue)
  );

  console.log("Filtrirani:", filteredShows);
  renderShows(filteredShows);
}

// live search
document.getElementById("searchBar").addEventListener("input", filterShows);

// click search
document.getElementById("searchBtn").addEventListener("click", () => {
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
JSON.parse(localStorage.getItem("currentUser"))


const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
  });
}
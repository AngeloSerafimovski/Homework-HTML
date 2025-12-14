let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function renderFavorites() {
  const cont = document.getElementById("favorites-container");
  cont.innerHTML = "";

  if (favorites.length === 0) {
    cont.innerHTML = "<p>No favorites yet.</p>";
    return;
  }

  favorites.forEach(show => {
    cont.innerHTML += `
      <div class="fav-card">
        <img src="${show.image?.medium || ""}">
        <h2>${show.name}</h2>
        <h3>${show.rating?.average ?? "N/A"}</h3>

        <button class="remove-btn" onclick="removeFromFavorites(${show.id})">
          Remove
        </button>
      </div>
    `;
  });
}

function removeFromFavorites(showId) {
 
  favorites = favorites.filter(s => s.id !== showId);

  
  localStorage.setItem("favorites", JSON.stringify(favorites));

 
  renderFavorites();
}

renderFavorites();
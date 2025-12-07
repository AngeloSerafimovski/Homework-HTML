const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function renderFavorites() {
  const cont = document.getElementById("favorites-container");
  cont.innerHTML = "";

  favorites.forEach(show => {
    cont.innerHTML += `
      <div class="fav-card">
        <img src="${show.image.medium}">
        <h2>${show.name}</h2>
        <h3>${show.rating.average}</h3>
      </div>
    `;
  });
}

renderFavorites();
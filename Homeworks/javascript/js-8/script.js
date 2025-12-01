const tbody = document.getElementById("mainBody");
console.log("LOADED");



let movies = JSON.parse(localStorage.getItem("movies"));


if (!movies || movies.length === 0) {
  movies = moviesData; // data.js
  localStorage.setItem("movies", JSON.stringify(movies));
}


fetch("https://ghibliapi.vercel.app/films")
  .then(res => res.json())
  .then(data => {
    console.log(data);     // samo za proverka
    movies = data;         // gi cuvame filmovite
    renderTable();         // ja crtame tabelata
  })
  .catch(err => console.error(err));




  function clearForm() {
  document.getElementById("blogTitle").value = "";
  document.getElementById("blogContent").value = "";
  document.getElementById("blogImage").value = "";
}

function disableEditMode() {
  editId = null;
  document.getElementById("submitBtn").innerText = "Add Movie";
  document.getElementById("submitBtn").style.backgroundColor = "#fff";
}

function renderTable() {
  tbody.innerHTML = ""; // ja cistime tabelata

  movies.forEach(movie => {
    const tr = document.createElement("tr");

    // ID
    const tdID = document.createElement("td");
    tdID.textContent = movie.id;
    tr.appendChild(tdID);

    // Title
    const tdTitle = document.createElement("td");
    tdTitle.textContent = movie.title;
    tr.appendChild(tdTitle);

    // Description
    const tdDescription = document.createElement("td");
    tdDescription.textContent = movie.description;
    tr.appendChild(tdDescription);

    // Director
    const tdDirector = document.createElement("td");
    tdDirector.textContent = movie.director;
    tr.appendChild(tdDirector);

    // Release year
    const tdYear = document.createElement("td");
    tdYear.textContent = movie.release_date;
    tr.appendChild(tdYear);

    // Actions колона
    const tdActions = document.createElement("td");

    // DELETE
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.type = "button";
    deleteBtn.style.marginRight = "8px";
    deleteBtn.addEventListener("click", () => {
      deleteMovie(movie.id);
    });
    tdActions.appendChild(deleteBtn);

    // EDIT
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.type = "button";
    editBtn.addEventListener("click", () => {
      editMovie(movie.id);
    });
    tdActions.appendChild(editBtn);

    tr.appendChild(tdActions);

    tbody.appendChild(tr);
  });
}

function deleteMovie(id) {
  movies = movies.filter(movie => movie.id !== id);
  renderTable();
}

function editMovie(id) {
  console.log("EDIT ID:", id);

  const movie = movies.find(movie => movie.id === id);
  if (!movie) return;

  // памтиме кој филм се едитира
  editingId = id;

  // пополнуваме форма
  titleInput.value = movie.title;
  directorInput.value = movie.director || "";      // Ghibli нема category, ама ако имаш свое поле ќе пополнува
  descriptionInput.value = movie.description || "";

  // менуваме копче во "Update"
  submitBtn.textContent = "Update";
  submitBtn.style.backgroundColor = "#1de402";
}

let editId = null;

function editMovie(id) {
  console.log("EDIT:", id);

  const movie = movies.find(movie => movie.id === id);
  console.log(movie);

  document.getElementById("movieTitle").value = movie.title;
  document.getElementById("movieDirector").value = movie.director;
  document.getElementById("movieDescription").value = movie.description;

  submitBtn.innerText = "Update Movie";
  submitBtn.style.backgroundColor = "#1de402";
}
const submitBtn = document.getElementById("submitBtn");

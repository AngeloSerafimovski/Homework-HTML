const tbody = document.getElementById("mainBody");

const movieForm = document.getElementById("movieForm");
const movieTitleInput = document.getElementById("movieTitle");
const movieDirectorInput = document.getElementById("movieDirector");
const movieReleaseInput = document.getElementById("movieRelease");
const submitBtn = document.getElementById("submit");

let movies = [];

const savedMovies = localStorage.getItem("movies");
function saveMoviesToLocalStorage() {
  localStorage.setItem("movies", JSON.stringify(movies));
}

if (savedMovies) {
  // Ако има снимени филмови → користи ги нив
  movies = JSON.parse(savedMovies);
  renderTable();
} else {
  // Ако нема ништо во localStorage → повлечи од API
  fetch("https://ghibliapi.vercel.app/films")
    .then(res => res.json())
    .then(data => {
      movies = data;
      saveMoviesToLocalStorage(); // снимиии
      renderTable();
    })
    .catch(err => console.error(err));
}

let editId = null;



function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      +c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
    ).toString(16)
  );
}

movieForm.addEventListener("submit", function (e) {
  e.preventDefault(); // да не рефрешира страна

  if (editId === null){
    const newMovie = {
    id: crypto.randomUUID(),
    title: movieTitleInput.value,
    director: movieDirectorInput.value,
    description: "", 
    release_date: movieReleaseInput.value
  };
  // Dodaj go noviot film vo nizata
  movies.push(newMovie);
  saveMoviesToLocalStorage();

  }if (editId !== null) {
    const movieToEdit = movies.find(m => m.id == editId);

    if (!movieToEdit) {
        console.log("Film ne postoi vo nizata:", editId);
        return;
    }

    movieToEdit.title = movieTitleInput.value;
    movieToEdit.director = movieDirectorInput.value;
    movieToEdit.release_date = movieReleaseInput.value;
    saveMoviesToLocalStorage();

    editId = null;
    submitBtn.innerText = "Add Movie";
}

  

  // tuka e simnat vo local storage
localStorage.setItem("movies", JSON.stringify(movies));

  //Se precrtuva tabelata
  renderTable();

  // Ce cisti formata
  movieForm.reset();
});

function renderTable(){

    mainBody.innerHTML = "";

    movies.forEach(movie =>{
        const tr = document.createElement("tr");


    const tdID = document.createElement("td");
    tdID.innerText = movie.id;
    
    const tdTitle = document.createElement("td");
    tdTitle.innerText = movie.title;

    const tdDescription = document.createElement("td");
    tdDescription.innerText = movie.description;

    const tdDirector = document.createElement("td");
    tdDirector.innerText = movie.director;

    const tdYear = document.createElement("td");
    tdYear.innerText= movie.release_date


    //Delete kopce
    const tdActions = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click" , () => {
        deleteMovie(movie.id);
    });
    tdActions.appendChild(deleteBtn);

    //Edit kopce
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.addEventListener("click" , () => {
        editMovie(movie.id);
    })
    tdActions.appendChild(editBtn);

    tr.appendChild(tdID);
    tr.appendChild(tdTitle);
    tr.appendChild(tdDescription);
    tr.appendChild(tdDirector);
    tr.appendChild(tdYear);
    tr.appendChild(tdActions);



     mainBody.appendChild(tr);
    })
}



function deleteMovie(id){
    movies = movies.filter(movie => movie.id !== id);
    saveMoviesToLocalStorage();
    renderTable();
}

function editMovie(id) {
    //najdigo filmot
    const movieToEdit = movies.find(m => m.id == id);
    if (!movieToEdit) {
        console.log("Film not found for edit:", id);
        return;
    }
    //napolni gi input polinjata
    movieTitleInput.value = movieToEdit.title;
    movieDirectorInput.value = movieToEdit.director;
    movieReleaseInput.value = movieToEdit.release_date;

    editId = id;
    submitBtn.innerText = "Update Movie";
}
const tbody = document.getElementById("booksBody");
console.log("tbody e:", tbody); // treba da ne e null

// 2) Globalna niza za knigi
let books = [];

// 3) Fetch do API
fetch("https://gutendex.com/books/")
  .then(res => res.json())
  .then(data => {
    books = data.results; // gi polnime globalnite books
    console.log("Vkupno knigi:", books.length); // treba da e 32
    renderTable(); // JA VIKAME funkcijata za crtawe
  })
  .catch(err => console.error(err));

// 4) Funkcija sto ja crta tabelata
function renderTable() {
  console.log("Render table se povika"); // da vidime deka se izvrshuva

  // Praznime se vo tbody
  tbody.innerHTML = "";

  // Za sekoja kniga -> eden red
  books.forEach(book => {
    const tr = document.createElement("tr");

    // ID
    const tdID = document.createElement("td");
    tdID.textContent = book.id;
    tr.appendChild(tdID);

    // title
    const tdTitle = document.createElement("td");
    tdTitle.textContent = book.title;
    tr.appendChild(tdTitle);

    // authors
    const tdAuthors = document.createElement("td");
    tdAuthors.textContent = book.authors.map(a => a.name).join(", ");
    tr.appendChild(tdAuthors);

    // actions (Delete kopce)
    const tdActions = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      deleteBook(book.id);
    });

    tdActions.appendChild(deleteBtn);
    tr.appendChild(tdActions);

    // na kraj go dodavame redot vo tbody
    tbody.appendChild(tr);
  });
}

//  Brisenje kniga po id
function deleteBook(id) {
  books = books.filter(book => book.id !== id);
  renderTable();
}

//pisuvam komentari za da mi e polesno da si gi ucam stvarite.

























 

  
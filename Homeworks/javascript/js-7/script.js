const tbody = document.getElementById("storeBody");
console.log("SCRIPT LOADED");

// globalna niza

let products = JSON.parse(localStorage.getItem("products")) || [];

// FETCH DO FAKESTORE API
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    products = data; // gi cuvame site produkti
    console.log("DATA:", data);
    localStorage.setItem("products", JSON.stringify(products));
    renderTable(); // go crtame
  })
  .catch((err) => console.error(err));

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      +c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
    ).toString(16)
  );
}

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); //sto pravi ove i shto pravi function(e)?
  console.log(e);

  const newItem = {
    id: uuidv4(),
    title,
    description,
  };

  console.log(newItem);

  products.push(newItem);

  document.getElementById("tdTitle").value = "";
  document.getElementById("tdDescription").value = "";
});
function deleteProduct(id) {
  products = products.filter((product) => product.id !== id);
  console.log("delete with id: ", id);
  renderTable();
}

function renderTable() {
  tbody.innerHTML = "";

  products.forEach((product) => {
    const tr = document.createElement("tr");

    // ID
    const tdID = document.createElement("td");
    tdID.textContent = product.id;
    tr.appendChild(tdID);

    // Title
    const tdTitle = document.createElement("td");
    tdTitle.textContent = product.title;
    tr.appendChild(tdTitle);

    // Description
    const tdDescription = document.createElement("td");
    tdDescription.textContent = product.description;
    tr.appendChild(tdDescription);

    // Price
    const tdPrice = document.createElement("td");
    tdPrice.textContent = `$${product.price}`;
    tr.appendChild(tdPrice);

    // Actions
    const tdActions = document.createElement("td");

    // DELETE
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", deleteProduct(product.id));

    // EDIT
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    tdActions.appendChild(editBtn);
    tdActions.appendChild(deleteBtn);

    tr.appendChild(tdActions);

    tbody.appendChild(tr);
  });
}


function startEdit(id) {
  console.log("Editing product:", id);
}

//ne mi funkcioniraat

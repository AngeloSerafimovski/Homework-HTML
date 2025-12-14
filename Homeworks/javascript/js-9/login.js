(function seedUsers() {
  const existing = JSON.parse(localStorage.getItem("users")) || [];

  if (existing.length === 0) {
    const users = [
      { id: crypto.randomUUID(), username: "angelo", password: "1234", isAdmin: true },
      { id: crypto.randomUUID(), username: "stefan", password: "1111", isAdmin: false },
    ];
    localStorage.setItem("users", JSON.stringify(users));
  }
})();


function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function setCurrentUser(user) {
  // НЕ go zazuvuvame pass vo currentUser
  const safeUser = { id: user.id, username: user.username, isAdmin: user.isAdmin };
  localStorage.setItem("currentUser", JSON.stringify(safeUser));
}

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value;

  const errorMsg = document.getElementById("errorMsg");
  errorMsg.textContent = "";

  if (!username || !password) {
    errorMsg.textContent = "Please enter username and password.";
    return;
  }

  const users = getUsers();

  const found = users.find(
    (u) => u.username.toLowerCase() === username && u.password === password
  );

  if (!found) {
    errorMsg.textContent = "Invalid username or password.";
    return;
  }

  setCurrentUser(found);

  // redirect 
  window.location.href = "index.html";
});
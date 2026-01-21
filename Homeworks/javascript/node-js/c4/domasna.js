const fs = require("fs");

function delayedGreeting(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Zdravo ${name}`); //po 2 sekundi,promise-ot se ispolniua
    }, 2000);
  });
}

function loginUser(password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "12345") {
        resolve("Uspesno najavuvanje"); // koga uslovot e tocen
      } else {
        reject("Pogresna lozinka"); //ako ne e tocen
      }
    }, 2000); //wait time
  });
}
//presmetuvanje kvadrat na broj so docnenje od 2sek
function calculateSquare(number) {
  return new Promise((resolve, reject) => { // vrakja promise
    setTimeout(() => {   //ceka 2sek
      if (typeof number !== "number") {  // proveruva, ako ne e broj togash pravi reject
        reject("Mora da vneses broj");
      } else {
        resolve(number * number); //ako e broj, pomnozigo
      }
    }, 2000);
  });
}
function fileRead(filename) {    //funckija za citanje fajl
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
function fileWrite(filename, data) { //funkcija za pisuvanje fajl
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
function fileAppend(filename, data) { //dodavanje tekst
  return new Promise((resolve, reject) => {
    fs.appendFile(filename, data, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}
function fileUnlink(filename) { //brisenje fajl
  return new Promise((resolve, reject) => {
    fs.unlink(filename, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}
function makeDirectory(path) { //kreiranje folder
  return new Promise((resolve, reject) => {
    fs.mkdir(path, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}
function delDirectory(path) { //brisenje folder
  return new Promise((resolve, reject) => {
    fs.rmdir(path, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

// Mock Database
const users = [
  { id: 1, name: "Bojan" },
  { id: 2, name: "Aneta" },
  { id: 3, name: "Stefan" },
];

const grades = {
  1: [10, 8, 9, 10],
  2: [7, 9, 10, 8],
  3: [6, 6, 7, 8],
};

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((u) => u.id === id);
      if (user) resolve(user);
      else reject("User not found");
    }, 1000);
  });
}

function getGrades(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userGrades = grades[userId];
      if (userGrades) resolve(userGrades);
      else reject("Grades not found");
    }, 1000);
  });
}

function getAverage(gradesArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(gradesArray) || gradesArray.length === 0) {
      reject("Invalid grades array");
      return;
    }
    const sum = gradesArray.reduce((prev, curr) => prev + curr, 0);
    const avg = sum / gradesArray.length;
    resolve(avg);
  });
}

module.exports = {
  delayedGreeting,
  loginUser,
  calculateSquare,
  fileRead,
  fileWrite,
  fileAppend,
  fileUnlink,
  makeDirectory,
  delDirectory,
  getUser,
  getGrades,
  getAverage,
};

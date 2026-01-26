const readWrite = require("./readwrite.js");

const FILE = "studenti.json";

// helper: load all students from file (returns array)
async function loadStudents() {
  const dataString = await readWrite.fileRead(FILE);
  return JSON.parse(dataString); // string -> array
}

// helper: save array back to file
async function saveStudents(studenti) {
  const newString = JSON.stringify(studenti, null, 2); // array -> pretty JSON string
  await readWrite.fileWrite(FILE, newString);
}

// ✅ 1) READ ALL (читaње на сите студенти)
async function getAllStudents() {
  const studenti = await loadStudents();
  console.log("Site studenti:", studenti);
  return studenti;
}

// ✅ 2) ADD (додавање студент)
async function addStudent(novStudent) {
  const studenti = await loadStudents();
  studenti.push(novStudent);
  await saveStudents(studenti);
  console.log("Dodan student:", novStudent);
}

// ✅ 3) UPDATE (менување податоци на студент по redenBroj)
async function updateStudent(redenBroj, newData) {
  const studenti = await loadStudents();

  const updated = studenti.map((s) => {
    if (s.redenBroj === redenBroj) {
      return { ...s, ...newData }; // keep old, replace with newData fields
    }
    return s;
  });

  await saveStudents(updated);
  console.log("Student so redenBroj", redenBroj, "e azuriran.");
}

// ✅ 4) DELETE (бришење студент по redenBroj)
async function deleteStudent(redenBroj) {
  const studenti = await loadStudents();

  const filtered = studenti.filter((s) => s.redenBroj !== redenBroj);

  await saveStudents(filtered);
  console.log("Student so redenBroj", redenBroj, "e izbrisan.");
}

// -------------------
// TEST / PRIMER KORISTENJE
// -------------------
(async () => {
  try {
    // ADD пример
    await addStudent({
      redenBroj: 1,
      ime: "AAA",
      prezime: "Petrovski",
      prosek: 8.7,
      grad: "Skopje",
    });

    // UPDATE (AAA -> AAB) пример
    await updateStudent(1, { ime: "AAB" });

    // READ ALL пример
    await getAllStudents();

    // DELETE пример
    // await deleteStudent(1);

  } catch (err) {
    console.error("Greska:", err);
  }
})();





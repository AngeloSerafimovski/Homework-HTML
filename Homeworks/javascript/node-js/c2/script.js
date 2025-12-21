const studenti = [
  { ime: "Angelo", grad: "Gostivar", ocenka: 9 },
  { ime: "Stefan", grad: "Ohrid", ocenka: 8 },
  { ime: "Marko", grad: "Skopje", ocenka: 10 },
  { ime: "Ivan", grad: "Bitola", ocenka: 7 },
  { ime: "Petar", grad: "Prilep", ocenka: 8 },
  { ime: "Nikola", grad: "Kumanovo", ocenka: 9 },
  { ime: "Aleksandar", grad: "Veles", ocenka: 6 },
  { ime: "Filip", grad: "Stip", ocenka: 7 },
  { ime: "Damjan", grad: "Strumica", ocenka: 8 },
  { ime: "Jovan", grad: "Kavadarci", ocenka: 9 },
  { ime: "Martin", grad: "Tetovo", ocenka: 10 },
  { ime: "Bojan", grad: "Kicevo", ocenka: 6 },
  { ime: "Kristijan", grad: "Radovis", ocenka: 7 },
  { ime: "Darko", grad: "Debar", ocenka: 8 },
  { ime: "Goran", grad: "Resen", ocenka: 9 },
  { ime: "Viktor", grad: "Negotino", ocenka: 7 },
  { ime: "Andrej", grad: "Kratovo", ocenka: 8 },
  { ime: "Teodor", grad: "Berovo", ocenka: 9 },
  { ime: "Ilija", grad: "Delcevo", ocenka: 6 },
  { ime: "Simeon", grad: "Probistip", ocenka: 8 },
   { ime: "Marija", grad: "Skopje", ocenka: 8 },
];

const studentiSkopjeSoA = studenti
  .filter(
    s => s.grad === "Skopje" && s.ime.toLowerCase().endsWith("a") && s.ocenka > 7
  )
  .sort((a, b) => a.ime.localeCompare(b.ime));

console.log("1, Studenti od Skopje so Ime shto zavrsuva na A , i prosek nad 7 - Podredeni po Ime:", studentiSkopjeSoA);


const studentiNad9NeSkopje = studenti
  .filter(s => s.ocenka > 9 && s.grad !== "Skopje")
  .sort((a, b) => b.ocenka - a.ocenka);

console.log("2) Studenti so prosek nad 9 koi ne se od Skopje, podredeni po prosek opagjacki",studentiNad9NeSkopje);


const prviTriSoPetBukvi = studenti
  .filter(s => s.ime.length === 5)
  .sort((a, b) => a.ocenka - b.ocenka)
  .slice(0, 3);

console.log("3,Prvite tri studenti so iminja od 5 karakteri, podredeni po prosek: ",prviTriSoPetBukvi);


let sumaKumanovo = 0;
let brojKumanovo = 0;

for (let i = 0; i < studenti.length; i++) {
  if (studenti[i].grad === "Kumanovo") {
    sumaKumanovo += studenti[i].ocenka;
    brojKumanovo++;
  }
}

const prosekKumanovo = brojKumanovo === 0 ? 0 : sumaKumanovo / brojKumanovo;

console.log("4,Prosek na studentite od Kumanovo",prosekKumanovo);


let sumaSkopje = 0,
  brojSkopje = 0;
let sumaOhrid = 0,
  brojOhrid = 0;

for (let i = 0; i < studenti.length; i++) {
  const s = studenti[i];

  if (s.grad === "Skopje") {
    sumaSkopje += s.ocenka;
    brojSkopje++;
  } else if (s.grad === "Ohrid") {
    sumaOhrid += s.ocenka;
    brojOhrid++;
  }
}

const prosekSkopje = brojSkopje === 0 ? 0 : sumaSkopje / brojSkopje;
const prosekOhrid = brojOhrid === 0 ? 0 : sumaOhrid / brojOhrid;
const prosekNaProseci = (prosekSkopje + prosekOhrid) / 2;

console.log("5,Prosek na gradovite Skopje i Ohrid: ",prosekNaProseci);


studenti.push({ ime: "Goran", grad: "Delcevo", ocenka: 7.3 });
console.log("6,Dodaden Goran od Delcevo - Nov Student");


studenti.shift();
console.log("7,Izbrishan e prviot student od listata na Studenti");


const studentiOhridKumanovoPlus1 = [];

for (let i = 0; i < studenti.length; i++) {
  const s = studenti[i];

  if (s.grad === "Ohrid" || s.grad === "Kumanovo") {
    studentiOhridKumanovoPlus1.push({
      ...s,
      ocenka: s.ocenka + 1,
    });
  }
}

console.log(
  "8,Lista na studenti od Ohrid i Kumanovo so zgolemen prosek za 1: ",
  studentiOhridKumanovoPlus1
);
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
  { ime: "Stanko", grad:"Skopje", ocenka: 8 },
];


const studentiSkopjeSoA = studenti
  .filter(
    student =>
      student.grad === "Skopje" &&
      student.ime.toLowerCase().endsWith("a") &&
      student.ocenka > 7
  )
  .sort((a, b) => a.ime.localeCompare(b.ime));

console.log("1, Studenti od Skopje so ime sto zavrsuva na A i prosek 7 / nad 7 : ", studentiSkopjeSoA);


const studentiSoVisokProsekNeSkopje = studenti
  .filter(student => student.ocenka > 9 && student.grad !== "Skopje")
  .sort((a, b) => b.ocenka - a.ocenka);

console.log("2, Studenti so prosek nad 9 sto ne se od Skopje", studentiSoVisokProsekNeSkopje);


const prviTriSoPetBukvi = studenti
  .filter(student => student.ime.length === 5)
  .sort((a, b) => a.ocenka - b.ocenka)
  .slice(0, 3);

console.log("3, Prvite 3 studenti so iminja od 5 karakteri", prviTriSoPetBukvi);


const studentiKumanovo = studenti.filter(student => student.grad === "Kumanovo");
const vkupenProsekKumanovo =
  studentiKumanovo.reduce((suma, student) => suma + student.ocenka, 0) /
  studentiKumanovo.length;

console.log("4, Vkupen prosek na studenti od Kumanovo : ", vkupenProsekKumanovo);


const presmetajProsekZaGrad = grad => {
  const studentiOdGrad = studenti.filter(student => student.grad === grad);
  return (
    studentiOdGrad.reduce((suma, student) => suma + student.ocenka, 0) /
    studentiOdGrad.length
  );
};

const prosekSkopje = presmetajProsekZaGrad("Skopje");
const prosekOhrid = presmetajProsekZaGrad("Ohrid");
const prosekNaProseci = (prosekSkopje + prosekOhrid) / 2;

console.log("5, Prosek na studenti od Skopje i Ohrid : ", prosekNaProseci);


studenti.push({ ime: "Goran", grad: "Delcevo", ocenka: 7.3 });
console.log("6, Dodaden nov student Goran");


studenti.shift();
console.log("7,Izbrisan e prviot student od listata");


const studentiSoZgolemenProsek = studenti
  .filter(student => student.grad === "Ohrid" || student.grad === "Kumanovo")
  .map(student => ({
    ...student,
    ocenka: student.ocenka + 1,
  }));

console.log(
  "8, Nov array so studenti od Ohrid i Kumanovo so zgolemen prosek za 1",
  studentiSoZgolemenProsek
);
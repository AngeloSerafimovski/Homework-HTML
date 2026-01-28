//http modulot ke ni ovozmozi kreacija na http server

const http = require("http");

// lista na samoglaski
const samoglaski = ["a", "e", "i", "o", "u"];

// se kreira server
const server = http.createServer((req, res) => {

  //URL go delime po "/"
  // primer: /ime/bojan → ["", "ime", "bojan"]
  const parts = req.url.split("/");



  // proveruvame dali rutata e od tip /ime/ *nekoeIme*
  if (parts[1] === "ime" && parts[2]) {

    const ime = parts[2].toLowerCase(); // gi pretvorame vo mali bukvi
    const brojKarakteri = ime.length;

    let brojSamoglaski = 0;
    let brojSoglaski = 0;

    // pominuvame niz sekoja bukva
    for (let bukva of ime) {
      if (samoglaski.includes(bukva)) {
        brojSamoglaski++;
      } else {
        brojSoglaski++;
      }
    }

    const parno = brojKarakteri % 2 === 0 ? "da" : "ne";

    res.end(
      `Ime: ${ime}\nParno: ${parno}\n
      Karakteri: ${brojKarakteri}\n
      Samoglaski: ${brojSamoglaski}\n
      Soglaski: ${brojSoglaski}`
    );

  } else {
    res.end("Koristi ruta od tip: /ime/bojan");
  }
});

server.listen(9000, () => {
  console.log("Serverot raboti na http://localhost:9000");
});
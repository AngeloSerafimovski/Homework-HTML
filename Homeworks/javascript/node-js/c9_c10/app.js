const express = require("express")

const { prikaziTabela, prikaziForma, zacuvajStudent, izbrishiStudent } =
  require("./controllers/studentController")

const app = express()

app.use(express.urlencoded({ extended: true }))

app.get("/studenti", prikaziTabela)
app.get("/studenti/novo", prikaziForma)
app.post("/studenti", zacuvajStudent)
app.post("/studenti/izbrishi", izbrishiStudent)

app.listen(3000, () => console.log("Server raboti na porta 3000"))

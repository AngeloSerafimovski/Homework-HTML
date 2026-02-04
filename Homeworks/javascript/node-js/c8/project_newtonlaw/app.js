const express = require("express")
const bodyParser = require("body-parser")
const { prikaziForma, presmetajNewton } = require("./controllers/calculator.js")

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/newton", prikaziForma)
app.post("/newton", presmetajNewton)

const port = 3000;
app.listen(3000, () => console.log(`Server raboti na porta ${port}`))

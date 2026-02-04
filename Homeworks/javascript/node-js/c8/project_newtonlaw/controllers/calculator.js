const fs = require("fs")
const path = require("path")
const { presmetajSila } = require("../models/model")

function prikaziForma(req, res) {
    const html = fs.readFileSync(path.join(__dirname, "../views/newton_form.html"), "utf8")
    res.send(html)
}

function presmetajNewton(req, res) {
    const { masa, zabrzuvanje } = req.body
    const sila = presmetajSila(Number(masa), Number(zabrzuvanje))

    let html = fs.readFileSync(path.join(__dirname, "../views/newton.html"), "utf8")

    html = html.replace("{{masa}}", masa)
    html = html.replace("{{zabrzuvanje}}", zabrzuvanje)
    html = html.replace("{{sila}}", sila)

    res.send(html)
}

module.exports = { prikaziForma, presmetajNewton }
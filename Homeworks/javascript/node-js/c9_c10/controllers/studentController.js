const fs = require("fs").promises
const path = require("path")
const { zemiSiteStudenti, dodadiStudent, izbrishiStudentPoId } = require("../models/studentModel")

async function prikaziTabela(req, res) {
    try {
        const studenti = await zemiSiteStudenti()

        // ✅ for-loop за градење редови
        let redovi = ""
        for (let i = 0; i < studenti.length; i++) {
            const s = studenti[i]
            redovi += `
              <tr>
                <td class="p-2 border">${s.ime}</td>
                <td class="p-2 border">${s.prezime}</td>
                <td class="p-2 border">${s.godini}</td>
                <td class="p-2 border">
                  <form action="/studenti/izbrishi" method="post">
                    <input type="hidden" name="id" value="${s.id}" />
                    <button class="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition">
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            `
        }

        const pateka = path.join(__dirname, "../views/studenti.html")
        let html = await fs.readFile(pateka, "utf8")

        html = html.split("{{rows}}").join(redovi || `<tr><td class="p-2 border" colspan="4">Nema studenti</td></tr>`)
        html = html.split("{{poraka}}").join("")

        res.send(html)
    } catch (err) {
        res.status(500).send("Greska pri prikaz na studenti.")
    }
}

async function prikaziForma(req, res) {
    try {
        const pateka = path.join(__dirname, "../views/student_form.html")
        const html = await fs.readFile(pateka, "utf8")
        res.send(html)
    } catch (err) {
        res.status(500).send("Greska pri citanje na forma.")
    }
}

async function zacuvajStudent(req, res) {
    try {
        const { ime, prezime, godini } = req.body

        const student = {
            id: "s" + Date.now(), // Коментар: едноставен уникатен id
            ime,
            prezime,
            godini: Number(godini),
        }

        await dodadiStudent(student)
        res.redirect("/studenti")
    } catch (err) {
        res.status(500).send("Greska pri zacuvuvanje student.")
    }
}

async function izbrishiStudent(req, res) {
    try {
        const { id } = req.body
        await izbrishiStudentPoId(id)
        res.redirect("/studenti")
    } catch (err) {
        res.status(500).send("Greska pri brisenje student.")
    }
}

module.exports = { prikaziTabela, prikaziForma, zacuvajStudent, izbrishiStudent }

const path = require("path")
const { procitajJson, zapisiJson } = require("../utilities/fileutil")

const dataPateka = path.join(__dirname, "../data/studenti.json")

async function zemiSiteStudenti() {
    // Коментар: Ги враќа сите студенти од JSON
    return await procitajJson(dataPateka)
}

async function dodadiStudent(student) {
    // Коментар: Додава нов студент во JSON
    const studenti = await procitajJson(dataPateka)
    studenti.push(student)
    await zapisiJson(dataPateka, studenti)
    return student
}

async function izbrishiStudentPoId(id) {
    // Коментар: Брише студент по id и враќа дали е избришан
    const studenti = await procitajJson(dataPateka)

    let najden = false
    const novi = []

    // ✅ for-loop (како што бараат често на домашни)
    for (let i = 0; i < studenti.length; i++) {
        if (studenti[i].id === id) {
            najden = true
            continue
        }
        novi.push(studenti[i])
    }

    if (najden) {
        await zapisiJson(dataPateka, novi)
    }

    return najden
}

module.exports = { zemiSiteStudenti, dodadiStudent, izbrishiStudentPoId }


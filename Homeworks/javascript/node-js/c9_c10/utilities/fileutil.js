const fs = require("fs").promises

async function procitajJson(pateka) {
    // Коментар: Асинхроно читање на JSON фајл
    const tekst = await fs.readFile(pateka, "utf8")
    return JSON.parse(tekst || "[]")
}

async function zapisiJson(pateka, podatoci) {
    // Коментар: Асинхроно запишување на JSON фајл
    const tekst = JSON.stringify(podatoci, null, 2)
    await fs.writeFile(pateka, tekst, "utf8")
}

module.exports = { procitajJson, zapisiJson }

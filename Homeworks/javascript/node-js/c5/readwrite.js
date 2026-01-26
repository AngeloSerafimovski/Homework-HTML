const fs = require("fs/promises");

// Read file -> returns string
async function fileRead(path) {
  return await fs.readFile(path, "utf-8");
}

// Write file -> saves string
async function fileWrite(path, dataString) {
  await fs.writeFile(path, dataString, "utf-8");
}

module.exports = { fileRead, fileWrite };


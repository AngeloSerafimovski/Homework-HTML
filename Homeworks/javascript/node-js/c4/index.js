console.log("Node project is working");
//asinhrona funkcija:
const {
   delayedGreeting,
  loginUser,
  calculateSquare,
  fileRead,
  fileWrite,
  fileAppend,
  fileUnlink,
  makeDirectory,
  delDirectory,
  getUser,
  getGrades,
  getAverage,
} = require("./domasna");

const run = async () => {
  const msg = await delayedGreeting("Angelo");
  console.log(msg);
};

run();

//promise so resolve i reject

const loginTest = async () => {
  try {
    const status = await loginUser("12345");  // proveruva dali e tocna lozinkata. (Lozinkata od domasna.js)
    console.log(status); // uspesno najavuvanje
  } catch (err) {
    console.log("Greska:", err);
  }
};
loginTest();


//validacija + promise
const calculateTest = async () => {
  try {
    const first = await calculateSquare(5);
    console.log("Prv rezultat:", first);

    const second = await calculateSquare(first);
    console.log("Vtor rezultat:", second);
  } catch (err) {
    console.log("Greska:", err);
  }
};
calculateTest();

//rabota so fajlovi read-write


const fileTest = async () => {
  try {
    await fileWrite("test.txt", "Node.js e super!");
    const content = await fileRead("test.txt");
    console.log("Procitano:", content);
  } catch (err) {
    console.log("Greska:", err);
  }
};

fileTest();

//append , unlink,mkdir,rmdir 

const challenge = async () => {
  try {
    await makeDirectory("./moj_folder");

    await fileWrite("./moj_folder/domasno.txt", "Node.js e cool");
    await fileAppend("./moj_folder/domasno.txt", "\nDodavam uste tekst...");

    const procitano = await fileRead("./moj_folder/domasno.txt");
    console.log("Procitano od fajlot:\n", procitano);

    console.log("Cekam 5 sekundi pred brisenje...");
    await new Promise((resolve) => setTimeout(resolve, 5000));

    await fileUnlink("./moj_folder/domasno.txt");
    await delDirectory("./moj_folder");

    console.log("Zavrshi challenge ✅");
  } catch (err) {
    console.log("Greska vo challenge:", err);
  }
};

challenge();

//User Report (getUser → getGrades → getAverage → fileWrite)

const userReport = async (userID) => {
  try {
    const user = await getUser(userID);
    console.log(`Found user: ${user.name}`);

    const userGrades = await getGrades(user.id);
    console.log(`Found grades for ${user.name}: ${userGrades}`);

    const average = await getAverage(userGrades);
    console.log(`Average for ${user.name}: ${average}`);

    const fileName = `Report_${user.name}.txt`;
    const data = `${user.name} has an average grade of ${average}`;

    await fileWrite(fileName, data);

    console.log(`Successfully generated report: ${fileName}`);
    return fileName;
  } catch (err) {
    console.log("Error generating report:", err);
    return null;
  }
};

//runbatch sega:
const runBatch = async () => {
  const ids = [1, 2, 3];
  let lastFile = "";

  for (const id of ids) {
    console.log(`\n--- Starting ID: ${id} ---`);
    const result = await userReport(id);
    if (result) lastFile = result;
  }

  if (lastFile) {
    console.log("\n--- Reading last created report ---");
    try {
      const text = await fileRead(lastFile);
      console.log(`${lastFile} says:`, text);
    } catch (err) {
      console.log("Could not read report:", err);
    }
  }
};
runBatch();
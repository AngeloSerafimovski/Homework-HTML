const macedonia = {
    CapitalCity:"Skopje",
    Population:2000000,
    Continent:"Europe",
    Language:"Macedonian",
    Currency:"MKD Denar",
    print: function(){
        console.log("--------------");
        console.log(`Glaven grad na Makedonija e ${this.CapitalCity}`);
        console.log(`Populacijata isnesuva :  ${this.Population}`);
        console.log(`Se naogja na   ${this.Population} kontinent`);
        console.log(`Vo ovaa drzava se zbori jazikot  ${this.Language}`);
        console.log(`Valutata shto se koristi e :  ${this.Population}`);
    }
}
const serbia = {
    CapitalCity:"Belgrade",
    Population:6600000,
    Continent:"Europe",
    Language:"Serbian",
    Currency:"RSD Dinar",
   print: function(){
        console.log("--------------");
        console.log(`Glaven grad na Srbija e ${this.CapitalCity}`);
        console.log(`Populacijata isnesuva :  ${this.Population}`);
        console.log(`Se naogja na   ${this.Population} kontinent`);
        console.log(`Vo ovaa drzava se zbori jazikot  ${this.Language}`);
        console.log(`Valutata shto se koristi e :  ${this.Population}`);
    }
}
const bulgaria = {
    CapitalCity:"Sofia",
    Population:6800000,
    Continent:"Europe",
    Language:"Bulgarian",
    Currency:"BGN",
    print: function(){
        console.log("--------------");
        console.log(`Glaven grad na Bugaria e ${this.CapitalCity}`);
        console.log(`Populacijata isnesuva :  ${this.Population}`);
        console.log(`Se naogja na   ${this.Population} kontinent`);
        console.log(`Vo ovaa drzava se zbori jazikot  ${this.Language}`);
        console.log(`Valutata shto se koristi e :  ${this.Population}`);
    }
}
const greece = {
    CapitalCity:"Athens",
    Population:10600000,
    Continent:"Europe",
    Language:"Greek",
    Currency:"EUR",
    print: function(){
        console.log("--------------");
        console.log(`Glaven grad na Grcija e ${this.CapitalCity}`);
        console.log(`Populacijata isnesuva :  ${this.Population}`);
        console.log(`Se naogja na   ${this.Population} kontinent`);
        console.log(`Vo ovaa drzava se zbori jazikot  ${this.Language}`);
        console.log(`Valutata shto se koristi e :  ${this.Population}`);
    }
}
const albania = {
    CapitalCity:"Tirana",
    Population:2800000,
    Continent:"Europe",
    Language:"Albanian",
    Currency:"ALL",
    print: function(){
        console.log("--------------");
        console.log(`Glaven grad na Albanija e ${this.CapitalCity}`);
        console.log(`Populacijata isnesuva :  ${this.Population}`);
        console.log(`Se naogja na   ${this.Population} kontinent`);
        console.log(`Vo ovaa drzava se zbori jazikot  ${this.Language}`);
        console.log(`Valutata shto se koristi e :  ${this.Population}`);
    }
}
const italy = {
    CapitalCity:"Rim",
    Population:59000000,
    Continent:"Europe",
    Language:"Italian",
    Currency:"EUR",
    print: function(){
        console.log("--------------");
        console.log(`Glaven grad na Italija e ${this.CapitalCity}`);
        console.log(`Populacijata isnesuva :  ${this.Population}`);
        console.log(`Se naogja na   ${this.Continent} kontinent`);
        console.log(`Vo ovaa drzava se zbori jazikot  ${this.Language}`);
        console.log(`Valutata shto se koristi e :  ${this.Population}`);
    }
}
const germany = {
    CapitalCity:"Berlin",
    Population:83000000,
    Continent:"Europe",
    Language:"German",
    Currency:"EUR",
    print: function(){
        console.log("--------------");
        console.log(`Glaven grad na Germanija e ${this.CapitalCity}`);
        console.log(`Populacijata isnesuva :  ${this.Population}`);
        console.log(`Se naogja na   ${this.Continent} kontinent`);
        console.log(`Vo ovaa drzava se zbori jazikot  ${this.Language}`);
        console.log(`Valutata shto se koristi e :  ${this.Population}`);
    }
}
const usa = {
    CapitalCity:"Washington DC",
    Population:333000000,
    Continent:"South American",
    Language:"English",
    Currency:"USD",
    print: function(){
        console.log("--------------");
        console.log(`Glaven grad na Amerika e ${this.CapitalCity}`);
        console.log(`Populacijata isnesuva :  ${this.Population}`);
        console.log(`Se naogja na   ${this.Continent} kontinent`);
        console.log(`Vo ovaa drzava se zbori jazikot  ${this.Language}`);
        console.log(`Valutata shto se koristi e :  ${this.Population}`);
    }
}
const japan = {
    CapitalCity:"Tokyo",
    Population:125000000,
    Continent:"Asia",
    Language:"Japan",
    Currency:"JPY",
    print: function(){
        console.log("--------------");
        console.log(`Glaven grad na Japonija e ${this.CapitalCity}`);
        console.log(`Populacijata isnesuva :  ${this.Population}`);
        console.log(`Se naogja na   ${this.Continent} kontinent`);
        console.log(`Vo ovaa drzava se zbori jazikot  ${this.Language}`);
        console.log(`Valutata shto se koristi e :  ${this.Population}`);
    }
}
const brasil = {
    CapitalCity:"Brasilia",
    Population:214000000,
    Continent:"South American",
    Language:"Portugese",
    Currency:"BRL",
    print: function(){
        console.log("--------------");
        console.log(`Glaven grad na Brazil e ${this.CapitalCity}`);
        console.log(`Populacijata isnesuva :  ${this.Population}`);
        console.log(`Se naogja na   ${this.Continent} kontinent`);
        console.log(`Vo ovaa drzava se zbori jazikot  ${this.Language}`);
        console.log(`Valutata shto se koristi e :  ${this.Population}`);
    }
}
macedonia.print();
serbia.print();
bulgaria.print();
greece.print();
albania.print();
italy.print();
germany.print();
usa.print();
japan.print();
brasil.print();



let drzavi = [macedonia,serbia,bulgaria,greece,albania,italy,germany,usa,japan,brasil];
for(let i = 0;i < drzavi.length;i++){
    drzavi[i].print();
}
console.log("-------------------------------------");

let max1 = null;
let max2 = null;
let max3 = null;

for(let i = 0;i < drzavi.length;i++){

    const curr = drzavi[i];

    if(max1 === null || curr.Population > max1.Population){
        max3=max2;
        max2=max1;
        max1=curr;
    }else if(max2 === null || curr.Population > max2.Population){
        max3=max2;
        max2=curr;
    }else if(max3 === null || curr.Population > max3.Population){
        max3=curr;
    }
}
console.log("------------------");
console.log("Gradovi TOP 3 vo populacija se : ");

console.log( `${max1.CapitalCity} -  ${max1.Population} `);
console.log( `${max2.CapitalCity} -  ${max2.Population} `);
console.log( `${max3.CapitalCity} -  ${max3.Population} `);


console.log("----------------------------");


const students = [
   {
    name:"Angelo",
    points: 82,
    Notes: "Did exceptionally well",
   },
    {
    name:"Marko",
    points: 75,
    Notes: "Practised, not enough",
   },
   {
    name:"Stefan",
    points: 68,
    Notes: "Understands basics. Needs more practice with complex problems.",
   },
   {
    name:"Ante",
    points: 55,
    Notes: "Struggles with some concepts. Should review key lessons.",
   },
   {
    name:"Pavel",
    points: 90,
    Notes: "Very strong work. Demonstrates clear problem solving ability.",
   },
    {
    name: "Blagoja",
    points: 52,
    remark: "Basic understanding, but needs more confidence and review.",
  },
  {
    name: "Marija",
    points: 31,
    remark: "Consistently excellent work across all test sections.",
  },
  {
    name: "Mateo",
    points: 66,
    remark: "Developing well. Needs to avoid small mistakes.",
  },
  {
    name: "Aleksandar",
    points: 40,
    remark: "Currently struggling. Encourage consultation sessions.",
  },
];

function calculateP(points){
    let grade;
    
    if(points >= 0 && points < 50){
        grade = 5;
    }else if(points >=51 && points < 60){
        grade = 6
    }else if(points >=61 && points < 70){
        grade = 7
    }else if(points >=71 && points < 80){
        grade = 8
    }else if(points >=81 && points <= 90){
        grade = 9
    }else if(points >=91 && points < 100){
        grade = 10
    }
    
    return grade
}

for(let i = 0; i < students.length; i++){
    const grade = calculateP(students[i].points);
    if(grade === null){
        console.log("Vnesovte nevalidna vrednost");
    }else{
        console.log(`${students[i].name} ima ocenka ${grade}`);
    }
}
let zbir = 0;

for(let i = 0; i < students.length; i++){
    let grade = calculateP(students[i].points);
    zbir = zbir + grade;
}

let prosek = zbir / students.length;

console.log("Prosekot e: " + prosek);




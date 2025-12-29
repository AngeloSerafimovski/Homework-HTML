//todo: Da se kreira fajl so ime vaga.js
//todo: Da se eskportira funkcija koja kje pretvora gram vo kilogram i obratno
//todo: Da se esportira funckija koja kje pretvora litar vo mililitar i obratno
 
const vaga = require("./vaga");
const domasna = require("./domasna");

console.log("Gram vo Kilogram iznesuva: " ,vaga.gramVoKilogram(1200));   
console.log("Kilogram vo gram: " ,vaga.kilogramVoGram(2));     
console.log("Litar vo mililitar: ",vaga.litarVoMililitar(2));    
console.log("Mililitar vo litar: " ,vaga.mililitarVoLitar(750));  



console.log("Fahrenheit vo Celsiusovi stepeni iznesuva: ", domasna.fahrenheitVoCelsius(53));
console.log("Celsious vo Fahrenheit : " ,domasna.celsiusVoFahrenheit(20));
console.log("Plostinata iznesuva: " , domasna.plostinaPravoagolnik(5 , 5));
console.log("Perimetarot iznesuva: ", domasna.perimetarPravoagolnik(5 , 5));
console.log(domasna.parenBroj(64));




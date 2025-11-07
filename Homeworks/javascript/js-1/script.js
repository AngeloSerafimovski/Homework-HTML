{
let student="Angelo"
let ocena = 66



if(ocena >=50 && ocena <60){
    console.log(student + " Polozil so 6ka");
}
else if(ocena >=61 && ocena <70){
    console.log(student + " Polozil so 7mica");
}
else if(ocena >=71 && ocena <80){
    console.log(student + " Polozil so 8mica"); 
}
else if(ocena >=81 && ocena <90){
    console.log(student + " Polozil so 9ka"); 
}
else if(ocena >=91 && ocena <100){
    console.log(student + " Polozil so 10ka"); 
}else{
    console.log(student + " Ne polozil");
}
}




//#2
{
let ime = "Angelo"
let vozrast = 25


if(vozrast >= 18){
    console.log("Zdravo jas sum"+ ime + " I imam " + vozrast + " , sum polnoleten");
}else{
    console.log("Zdravo jas sum  " + ime + " ,  ne sum polnoleten");
}
}

//#3
{
let ime ="Angelo";
let ocena1 = 75;
let ocena2 = 54;
let ocena3 = 86;

let prosek = (ocena1 + ocena2 + ocena3) / 3;
console.log("Prosekot e " + prosek);

if(prosek <= 50){
    console.log(ime +" Ne polozil");
}else if(prosek >= 51 && prosek <= 60){
    console.log(ime + " Polozil so 6ka");
}else if(prosek >= 61 && prosek <= 70){
    console.log(ime + " Polozil so 7ca");
}else if(prosek >= 71 && prosek <= 80){
    console.log(ime + " Polozil so 8ca");
}else if(prosek >= 81 && prosek <= 90){
    console.log(ime + " Polozil so 9ka");
}
}
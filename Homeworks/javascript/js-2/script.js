let angelo = {
 ime: "Angelo",
 vozrast: 25,
 adresi:{
rabotna:"Ulica makedonska",
backup:"Ulica ilindendka",
domasna:"Partizanska",
 },
 email:"angelserafimovskii@yahoo.com",
 grad:"Gostivar",

};

let stefan ={
 ime: "Stefan",
 vozrast: 30,
 adresi:{
rabotna:"Major cede filiposki",
backup:"Kiro gligorov",
domasna:"Partizanska",
 },
 email:"stefan@yahoo.com",
 grad:"Skopje",
};



let davor={
    ime: "Davor",
    vozrast: 21,
    adresi:{
        rabotna: "Ilindenska",
        backup:"Partizanska",
        domasna:"Kiro gligorov",
    },
    email:"davor@yahoo.com"
}

let antonio={
ime:"Antonio",
vozrast: 29,
adresi:{
        rabotna: "Ilindenska",
        backup:"Partizanska",
        domasna:"Kiro gligorov",
    },
email:"antonio@yahoo.com"
}

let marko={
    ime:"Marko",
    vozrast: 23,
adresi:{
        rabotna: "Mara ugrinova",
        backup:"Maleardi",
        domasna:"Major cede filiposki",
    },
    email:"marko@yahoo.com"
}

console.log(angelo.adresi.domasna);
console.log(angelo.adresi.rabotna);

console.log(stefan);

console.log(davor.adresi.backup);
console.log(davor.vozrast);

console.log(marko.email);
console.log(marko.ime);

console.log(antonio.email);


{
   
let ime ="Angelo";
let vozrast = 50;
let cena= 8500;


if(vozrast < 18 && vozrast >0){
    console.log(ime + " ima", vozrast + " Godini");
    console.log(ime + " Dobiva 30% popust");
    console.log("Cenata so popust iznesuva " + cena * 0.7 );
}else if(vozrast > 18 && vozrast <= 35){
    console.log(ime + " ima", vozrast + " Godini");
    console.log(ime + " Dobiva 20% popust");
    console.log("Cenata so popust iznesuva " + cena * 0.8 );
}else if(vozrast >=36  && vozrast < 60){
    console.log(ime + " ima", vozrast + " Godini");
    console.log(ime + " Dobiva 10% popust");
    console.log("Cenata so popust iznesuva " + cena * 0.9 );
}
else if(vozrast >=61  && vozrast < 101){
    console.log(ime + " ima", vozrast + " Godini");
    console.log(ime + " Dobiva 40% popust");
    console.log("Cenata so popust iznesuva " + cena * 0.6 );
}



}



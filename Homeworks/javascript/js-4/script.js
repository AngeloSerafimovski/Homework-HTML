const person1 ={
    name: "Angelo",
    age:25,
    city:"Gostivar",
    height: 190,
    job:"Developer",
};
const person2 ={
    name: "Stefan",
    age:35,
    city:"Skopje",
    height: 180,
    job:"Sales",
};
const person3 ={
    name: "martin",
    age:40,
    city:"Veles",
    height: 175,
    job:"Waiter",
};
const person4 ={
    name: "Davor",
    age:58,
    city:"Bitola",
    height: 175,
    job:"Officer",
};
const person5 ={
    name: "nikita",
    age:18,
    city:"Ohrid",
    height: 193,
    job:"Basketball player",
};
const person6 ={
    name: "Sandi",
    age:23,
    city:"Tetovo",
    height: 172,
    job:"Basketball player",
};
const person7 ={
    name: "Stojan",
    age:21,
    city:"Veles",
    height: 179,
    job:"Electrician",
};



let personi = [person1,person2,person3,person4,person5,person6,person7];

personi.forEach( p => {
    console.log(`${p.name} ima ${p.age} godini e od ${p.city} i e visok ${p.height}`);
    
});

const updatedN = personi.map(person => person.name.toUpperCase());
console.log(updatedN);


const iminja = personi
  .filter(person => person.height > 180)
  .map(person => person.name.toUpperCase())

console.log(iminja);

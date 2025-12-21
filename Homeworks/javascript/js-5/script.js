console.log(`Hello from ${navigator.userAgent}`);

console.log(" --------------------------- ");

console.log("Prvo");
console.log("Vtoro");
console.log("Treto");

console.log(" ---------------------------- ");

console.log(1);
setTimeout(() =>{
  console.log(2);
},4200)
  console.log(3);

  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch((error) => console.log("Nastana greska: ", error))
      .finally(() => console.log("Baranjeto zavrsi!"));

  const titleE = document.getElementById("title");
  titleE.style = "Color: red";


const main = document.getElementsByClassName("content")
main.style ="fontfamily: Verdana";
main.style ="gap: 30px";


const btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach((btn) => {
  btn.style.color = "red";
  btn.style.padding = "8px 12px";

  btn.addEventListener("click", () => {
    console.log("clicked");
  });
});

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

document.querySelectorAll("p").forEach ( p => {
  p.style.fontFamily = "Gill Sans";
  p.style.fontWeight = "bold";
})

//znaci ako sakame da smenime samo eden odime obicno a ako sakame da gi pomineme site na pr paragrafi odime so foreach?
// zosto vo negovo reshenie (res) e staveno vo zagrada
// queryallselector mi izgleda kako nesto sto ke se koristi cesto?

 btn.addEventListener("mouseover", () => {
    btn.classList.add("btn-hover");

    setTimeout(() => {
      btn.classList.remove("btn-hover");
    }, 1500);
  });

 






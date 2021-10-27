//  1.	Atskiri elementai
//  a.	Tamsiai žaliai nuspalvinti h1 tagą;
document.querySelector("h1").style.color = "green";
//  c.	Iš tago h1 pašalinti klasę main;
document.querySelector("h1").classList.remove("main");
// b.	Tagui i pridėti klasę small;
document.querySelector("i").classList.add("small");
// d.	Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti klasę main;
document.querySelector("h2").classList.remove("main");
document.querySelector("h2").classList.add("first");
//  e.	Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
// document.getElementsByTagName(".span").setAttribute("style", "color:grey")
document.querySelector("div.animals h2 span").style.color = "grey";
document.querySelector("div.animals h2 span").style.fontSize = "10px";

// 2.	Elemetų grupės (nodeList) skaičiavimus išvest į consolę
// a.	Suskaičiuoti kiek yra h2 tagų;
const myList = document.querySelectorAll("h2");
console.log(myList.length);
// b.	Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
const myListe = document.querySelectorAll("h2.first");
console.log(myList.length - myListe.length);

// c.	Visus h2 tagus nuspalvinti šviesiai mėlynai
document
  .querySelectorAll("h2")
  .forEach((element) => (element.style.color = "lightblue"));
// d.	Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
document
  .querySelectorAll("div.prices h2")
  .forEach((element) => (element.classList.add = "price-tag"));
// e.	Pabraukti visus tagus su klase new;
document
  .querySelectorAll(".new")
  .forEach((element) => (element.style.textDecoration = "underline"));
// f.	Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
const myAnimal = document.querySelectorAll("ul");
console.log("Category ", myAnimal.length);
// g.	Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
document
  .querySelectorAll("ul")
  .forEach((element) => (element.style.borderStyle = "groove"));
document
  .querySelectorAll("ul")
  .forEach((element) => (element.style.padding = "15px 50px 15px 50px"));
// h.	Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
const myNew = document.querySelectorAll("li.new");
console.log("New ", myNew.length);
// i.	Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
//  const myZirafos =document.querySelectorAll("#zirafos.new");
//  console.log("Zirafos", myZirafos.length);
const myZirafos = document.querySelectorAll("#zirafos .new").length;
console.log("Zirafos naujos: ", myZirafos);
const myPlesrunai = document.querySelectorAll("#plesrunai .new").length;
console.log("Plesrunai nauji: ", myPlesrunai);
const myGyvates = document.querySelectorAll("#gyvates .new").length;
console.log("Gyvates naujos: ", myGyvates);
const myZoliaedziai = document.querySelectorAll("#zoliaedziai .new").length;
console.log("Zoledziai nauji: ", myZoliaedziai);
// 3.	Elementų events
// a.	Padaryti ta ką liepia mygtukai Header1 sekcijoje;
document.getElementById("h1-color").addEventListener("click", function () {
  document.querySelector("h1").style.color = "lightgreen";
});
document.getElementById("h1-font").addEventListener("click", function () {
  document.querySelector("h1").style.fontSize = "10px";
});
// b.	Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
const tagI = document.querySelector("i");
tagI.addEventListener("click", function () {
  document.querySelector("i").style.fontWeight = "bold";
});
// c.	Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
const prices =  document.querySelector(".prices");
prices.addEventListener("click", function () {
  document.querySelector(".prices").style.backgroundColor= "grey"; 
});
prices.addEventListener("dblclick", function () {
document.querySelector(".prices").style.backgroundColor= "white";
});
// d.	Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;
const idContacts=document.querySelector("#contacts")
idContacts.addEventListener("click", function () { idContacts.style.color = "orange"; });
// e.	Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;
const padidinti = document.querySelector("u");
padidinti.addEventListener("click", function(){document.querySelector("#contacts").style.fontSize = "20px"});
// f.	Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element
//  const x = document.querySelector("b");
// x.addEventListener("click", function(){document.querySelector("#contacts").style.color="white"});
// g.	Padaryti tai ką liepia mygtukai Header2 sekcijoje;
 document.getElementById("h1-color-back").addEventListener("click", function(){document.querySelector("h1").style.color = "green"});
document.getElementById("h1-font-back").addEventListener("click", function(){document.querySelector("h1").style.fontSize= "2em" });
// 4.	Elementų grupių events
// a.	Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
const newAnimal = document.querySelectorAll("li.new");
newAnimal.forEach(e => e.addEventListener('dblclick', () => e.style.color = 'red'));

// b.	Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.
 const animal = document.querySelectorAll("ul :not(:first-child)");
animal.forEach(e => e.addEventListener('click', () => e.style.fontSize = '130%'))

// c.	Padaryti, kad paspaudus ant “PATINKA”, atitinkamai sekcijai būtų priskirta klasė like;
const patinka = document.querySelectorAll('ul :first-child');
patinka.forEach(e => e.addEventListener('click', () => e.classList.add='like'));
// 5.	Dinaminis elementų kūrimas (su createElement)
// a.	Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;

const newPrices = document.querySelector('.prices');
const content = document.createElement('h2');
const newContent = document.createTextNode("Senjorai tik: 1.99 eur");
content.appendChild(newContent);
newPrices.appendChild(content);

// b.	Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;
const newClass = document.querySelector('.prices');
const senjorai = document.createElement('h2');
const newSenjorai = document.createTextNode("Senjorų grupė iki 10: tik 5.99 eur");
senjorai.appendChild(newSenjorai);
newClass.appendChild(senjorai);
senjorai.classList.add("new");
// senjorai.addEventListener("click", ()=> e.style.color= "green");


// c.	Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like
// const newGyvunai = document.querySelectorAll('div ul');
// const nepatinka = document.createElement('li');
// const newNepatinka = document.createTextNode("NEPATINKA");
// nepatinka.appendChild(newNepatinka);
// newGyvunai.appendChild(nepatinka);
// d.	Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta

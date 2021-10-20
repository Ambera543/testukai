// 1.Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
console.log("1---------");
let pinigine = [];
let length = Math.floor(Math.random() * (30 - 10+1) + 10);
for (let i = 0; i < length; i++) {
  pinigine.push(Math.floor(Math.random() * 11));
}
console.log(pinigine, length);
console.log("2---------");

// 2.Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;
let total = 0;
for (let i in pinigine) {
  total += pinigine[i];
}
console.log(total);
console.log("3---------");
// 3.Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
// console.log(pinigine, array);
function sum(popieriniai) {
  let sum = 0;
  for (let i = 0; i < popieriniai.length; i++)
    if (popieriniai[i] > 2) {
      sum += popieriniai[i];
    }
  return sum;
}
console.log(sum(pinigine));
console.log("4---------");
// 4.Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

let pinigineCopy = [...pinigine];
pinigineCopy.forEach(function (item, i) {
  if (item <= 2) {
    pinigineCopy[i] = 0;
  }
});
console.log(pinigineCopy);
console.log("5---------");
// 5.Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;

var max = Math.max(...pinigine);
let count = pinigine.reduce(function (counter, value) {
  return counter + (value === max);
}, 0);
console.log(max);
console.log(count);
console.log("6---------");
// 6.Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;
let pinigineC = [...pinigine];
pinigineC.forEach(function (item, i) {
  if (item <= 0) {
    pinigineC[i] = i;
  }
});
console.log(pinigineC);
console.log("7---------");
// 7.Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;

for (let i = 0; i !== 30; i++) {
  pinigine.push(Math.floor(Math.random() * 11));
}
console.log(pinigine);
console.log("8---------");
// 8.Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);

let monetos = [];
let popieriniai = [];
let pinigine1 = [...pinigine];
for (let i = 0; i < pinigine1.length; i++) {
  if (pinigine1[i] < 3) {
    monetos.push(pinigine1[i]);
  } else {
    popieriniai.push(pinigine1[i]);
  }
}
console.log(monetos, popieriniai);
console.log("9---------");

// 9.Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;
let brangiPinigine = [];
brangiPinigine.push(monetos);
brangiPinigine.push(popieriniai);
console.log(brangiPinigine);
console.log("10---------");
// 10. Į 9  uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
let korteles = [
  "KIKA",
  "Euro Vaistinė",
  "Drogas",
  "Ačiū",
  "Lietuvos Geležinkeliai",
  "Mano RIMI",
];
brangiPinigine.push(korteles);
console.log(brangiPinigine);
console.log("11---------");
// 11. Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
korteles.sort();
console.log(brangiPinigine);
console.log("12---------");
// 12. Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
let mokejimoKorteles = ["MasterCard", "Visa"];
for (let i = 0; i !== 14; i++) {
  let randomItem =
    mokejimoKorteles[Math.floor(Math.random() * mokejimoKorteles.length)];
  korteles.push(randomItem);
}
console.log(brangiPinigine);
console.log("13---------");
// 13. Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
let MasterCard = korteles.filter(function (item) {
  return item === "MasterCard";
}).length;
let Visa = korteles.filter(function (item) {
  return item === "Visa";
}).length;
if (MasterCard > Visa) {
  console.log('MasterCard daugiau');
} else if((MasterCard < Visa)) { 
  console.log('"Visa" daugiau');
}else  {
  console.log('Abieju vienodai')
}

console.log("MasterCard:", MasterCard, "," + " Visa:", Visa);
console.log("14---------");
// 14.Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;
let bilietai = [];
for (let i = 0; i < 10; i++) {
  randomBilietai = Math.floor(
    Math.random() * (9999999999 - 1000000000) + 1000000000
  );
  bilietai.push(randomBilietai);
}
brangiPinigine.push(bilietai);
console.log(brangiPinigine);
console.log("15---------");
// 15. Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
brangiPinigine[3].sort((function (a, b) {
  return b - a;
}));
console.log(brangiPinigine);
console.log("16---------");
// 16.Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);
let suma = 0;
while (suma <= 500) {
  penkiSimtai = Math.floor(Math.random() * (10 - 3+1) + 3);
  suma = suma + penkiSimtai;
  popieriniai.push(penkiSimtai);
}
console.log(brangiPinigine);
console.log("17---------");
// 17.Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
 let laimingiBilietai = 0;
brangiPinigine[3].forEach(function (item) {
  if (item % 777 === 0) {
    laimingiBilietai ++;
  } 

});
console.log(laimingiBilietai);
console.log("18---------");
//  18.Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;

let nuotraukos = ["šuo", "katė", "automobilis", "namas", "kiemas"];
nuotraukos.sort(function (a, b) {
  return a.length - b.length;
});
brangiPinigine.push(nuotraukos);
console.log(brangiPinigine);

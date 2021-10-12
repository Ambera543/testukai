
//1.console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;
for(let i= 0; i<5; i++){
console.log("Labas");}
console.log("2---------");
//2.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);
for(let i= 0; i<5; i++){
console.log(i);}
console.log("3---------");
//3.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);
for(let a=0; a<=4; a++){
console.log(a*10);}
console.log("4---------");
//4.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);
for(let a=49; a<=53; a++){
    console.log(a);}
    console.log("5---------");
//5.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);
for(let a=4; a>=0; a--){
    console.log(a);}
    console.log("6---------");
//6.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);
 for(let a=0; a<=8; a++){
   if (a%2 ==0) 
   console.log(a);}
   console.log("7---------");
// 7.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);
for (var i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random()*11))}
  
    console.log("8---------");
// 8.console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;
var number = 5;
var x = 0;
while(x !== number){
  x = Math.floor(Math.random()* 11);
  console.log(x);
}
console.log("9---------");
// 9.console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
var sum =0;
while(sum< 100){
let x = Math.floor(Math.random() * 11);
 sum= sum + x;
  console.log(x);
}
 console.log("10---------");
// 10.console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;
var number1 = 5;
var number2 = 7;
count=0;
var x = 0;
while(x !== number2 && x !== number1 ){
  x = Math.floor(Math.random() *  11);
  count++;
  console.log(count, x);
}
console.log("11---------");
// 11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;
var sum = 0;
count=0;
var x = 0;
while(count !== 11 || sum<20 ){
  x = Math.floor(Math.random() * 11);
  sum= sum + x;
  count++;
  console.log(count, x);
}
console.log(sum)
console.log("12---------");

// 12. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;

var nelyginiaiSkaiciai = 0;
 while (nelyginiaiSkaiciai<3){
  let x = Math.floor(Math.random() * 11);
  if (x%2===1){
    nelyginiaiSkaiciai++
  }
  console.log(x);
}
console.log("13---------");
// 13.console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;
var x;
var y;
while (x!==y){
   x = Math.floor(Math.random() * 11);
   y = Math.floor(Math.random() * 11);
  console.log(x, y);
  }
console.log("14---------");
// 14.console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose. Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;
var sum1 =0;
var sum2 =0;
while(sum1< 100 || sum2< 100 ){
let x = Math.floor(Math.random() * 11);
let y = Math.floor(Math.random() * 11);
 sum1= sum1 + x;
 sum2= sum2 + y;
  console.log(x, y);
}
console.log(sum1, sum2)
console.log("15---------");
// 15.console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių.

var nelyginiaiSkaiciai1=0;
var nelyginiaiSkaiciai2=0;
 while (nelyginiaiSkaiciai1<3 && nelyginiaiSkaiciai2<3){
  let x = Math.floor(Math.random() * 11);
  let y = Math.floor(Math.random() * 11);
  if (x%2===1 || y%2 ===1){
    nelyginiaiSkaiciai1++
    nelyginiaiSkaiciai2++
  }
  console.log(x, y);}

// var y =0;
//  while (x%2 ===0 || y%2 ===0){
//   x = Math.floor(Math.random() * 11);
//   y = Math.floor(Math.random() * 11);
//   console.log(x, y);

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
    var count = 0;
    // for (var j = 0; j < Math.floor(Math.random() * 10)+1; j++) {
    //   console.log(j)
    //     count++;
    // }
    console.log(Math.floor(Math.random() * 10)+1)
  }
    console.log("8---------");
// 8.console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;
var number = 5;
var x = 0;
while(x !== number){
  x = Math.floor((Math.random() * 10) + 1);
  console.log(x);
}
console.log("9---------");
// 9.console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
// function getRandomNumberBetween(min,max){  ()
//   return Math.floor(Math.random()*(max-min+1)+min);
  
// }
console.log(getRandomNumberBetween(1,10))
 console.log("10---------");
// 10.console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;
// 11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;
// 12. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;
// 13.console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;
// 14.console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose. Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;
// 15.console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių.


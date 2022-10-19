// 1. Var
var x; //deklarisanje promenljive X (obezbedjivanje lokacijske memorije za promenljive x)
x = 15; // inicijalizacija promenljive x (dodele vrednosti vec deklarisanoj promenljivoj x)
// var x = 15 - takodje dozvoljeno
console.log(x);

// redeklarisanje promenljive x definisane putem var keyword je dozvoljeno,
// bilo gde u prostoru.
var x;
// reinicijalizacija promeljive x definisane putem var keyword je dozvoljeno,
// bilo gde u prostoru.
x = 22;

// 2. let - definisanje promenljive za koju postoji mogucnost promene vrednosti
let y; //deklarisanje promenljive y (obezbedjivanje lokacijske memorije za promenljive y)
y = 14; //inicijalizacija promenljive y (dodele vrednosti vec deklarisanoj promenljivoj y)
// let y = 14; - takodje dozvoljeno
console.log(y);

let a, b, c; // korektan nacin deklarisanja promenljivih

// redeklarisanje promenljive definisano je putem let keyword nije dozvoljeno
// ako se radi o istom prostoru
// let y;

// Reinicijalizacija promeljive definisane putem let keyword je dozvoljeno
// u bilo kom prostoru.
y = 12;
console.log(y);

// Promenljive koje su definisane putem let ili const keyword nam obezbedjuju
// Block Scope.
{
  //   console.log(y); - prepoznaje se promenljiva iz global scope-a
  //   Redeklarizacija promenljive definisane putem let, u drugom prostoru je dozvoljena.
  let y = 19;
  console.log(y);
}
// Ispisuje se 12, odnosno posledna dodeljena vrednost unutar Global scope
console.log(y);

// 3. const
// Promenljive definisane putem const moraju biti odjednom deklarisane i inicijalizovane.
// const z;
// z = 26;
const z = 26;
console.log(z);

// NIJE DOZVOLJENA NI REDEKLARACIJA NI REINICIJALIZACIJA.
// redeklarisanje promenljive definisane putem const nije dozvoljeno, kada se radi o istom prostoru.
// const z = 23;

// Reinicijalizacija promenljive definisane putem const nije dozvoljena,
// kada se radi o istom prostoru
// z = 23;
// console.log(z);

// Sve karakteristike koje vaze za promenljive definisane putem let
// u Block Scope, vaze i za promenljive definisane putem const keyword

const cars = ["Audi", "Golf", "Mercedes", "BMW"];

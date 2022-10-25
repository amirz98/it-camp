// 1. OPERATORI U JAVASCRIPTU //
// Podelicemo operatore u 6 grupa:

// 1. Aritmeticki operatori (Artimetic operator)
// 2. Operatori dodele vrednosti (Assigments operators)
// 3. String operatori (String operators)
// 4. Operator poredjenja (Comparison operators)
// 5. Logicki operator (Logical operator)
// 6. Tip operatori (Type operators)

// 1. Artimeticki operatori (Artimetic operator)
// 1.1 + operator sabiranja
console.log(4 + 5);

// 1.2 - operator oduzimanja
console.log(4 - 5);

// 1.3 - operator mnozenja
console.log(5 * 4);

// 1.4 - operator deljenja
console.log(20 / 5);

// 1.5 - operator stepenovanja
console.log(2 ** 3);

// 1.6 -  % Modulo (ostatak pri deljenju dva broja)
console.log(11 % 3); // 2
console.log(12 % 3); // 0

// Uslov za parnost:
// i % 2 = 0
// Uslov za neparnost:
// 1 % 3 = 1

// 1.7 ++ Incremente (Povecava vrednost za 1)
let x = 5;
// post fiksni operator
x++; // x = x + 1
console.log(x);

let y = 11;
//prefiksni operator
console.log(++y);

// 1.8 - Decrement (smanjuje vrednost za 1)
let z = 99;
z--; // z = z - 1
console.log(z);

let w = 65;
// prefiksni operator
console.log(--w);

// 2. Operatori dodele vrednosi (Assigment operators)

// 2.1 = - dodeljivanje vrednosti nekoj promenljivoj

// 2.2 += - Dodavanje odredjene vrednosti na postojucu promenljvu

w += 5; // w = w + 5
console.log(w);

// 2.3 - oduzimanje odredjene vrednosti na postojecu promeljivu

z -= 3;
console.log(z);

// 2.4 *= - mnozenje odredjene vrednosti na postojecu promenljivu

z *= 2;
console.log(z);

// 2.5 /= - deljenje odredjene vrednosti na postojecu promeljivu

z /= 5;
console.log(z);

// 2.6 %= - modul odredjene vrednosti na postojucu promenljivu

// x=6
x %= 2; // x= 6 % 2
console.log(x);

// 2.7 **= - stepenovanje odredjene vrednosti na postojecu promenljivu

y **= 2;
console.log(y);

// 3. String operatori (string operators)

// Jedan od nacina za spajanje stringova je koriscenjem + operatora.

let prviDeo = "Danas je Omar";
let drugiDeo = "doneo pizzu.";
console.log(Boolean(prviDeo + " " + drugiDeo));

// Neki slucajevi kod sabiranja:
console.log("Omar" + 3); // rezultat spajanja stringa i broja je UVEK STRING!
console.log(3 + "Omar");
console.log(typeof (3 + "Omar"));
//Bez obzira sto 2 moze biti pretvorena u korektan broj , nee se izvrsiti sabiranje:
console.log(3 + "2");

// JavaScript ce pokusati da prevede string u broj i da izvrsi racunsku operaciju:
console.log(4 - "2"); //2
console.log(4 * "2"); //8
console.log("3" / 1); //3
console.log(2 ** "3"); //8

// Ako JavaScript ne uspe da prevede string u broj, rezultat ce biti NaN
console.log(21 / "7dana"); //NaN (not a number) je vrednost za nekorektan broj

// 4. Operator poredjenja (Comparison operators)

// 4.1 == - Provera jednakosti vrednosti

let a = 5;
let b = 7;
let c = a;
console.log(a == c); //true
console.log(a == b); //false

c += 2;
console.log(c); // ima novu vrednost 7
console.log(a); // ostaje na staru vrednost: 5

// 4.2 === - Proverava jednakost tipa i jednakost vrednosti
// BOLJE KORISTITI ===
let d = "5";
console.log(a == d); // proverava vrednost (true)
console.log(a === d); // pritom proverava vrednost i tip (false)

// 4.3 != - proverava RAZLICITOST vrednosti

console.log(b != c);

// 4.4 !== - ispituje da li je razlicita vrednost ILI razlicit tip
console.log(a !== d);

// 4.5  >  - da li je prva vrednost veca od druge:

console.log(b > c);

// 4.6 < - da li je prva vrednost manja od druge :

console.log(14 < -19);

// 4.7 >= - da li je prva vrednost veca ili jednaka drugoj:

console.log(9 >= 9);

// 4..8 <= - da li je prva vrednost manja ili jednaka drugoj:

console.log(9 <= 13);

// 4.9 ? - ternarni operator

// uslov ? (radnja koja se izvrsava ako je uslov zadovoljen)
//   :
// (radnja koja se izvrasva ako uslov nije zadovoljen)

let isSunny = false;

// isSunny = true;

isSunny
  ? console.log("Vreme je suncano." + "Ponesite naocare!")
  : console.log("Vreme je kisovito." + "Ponesite kisobran!");

// 5. Logicki operator (Logical operator)

// 5.1 && - and (i) - zahteva zadovoljavanje svih uslova

let prom1 = 4;
let prom2 = 19;
let prom3 = -3;

prom1 > 0 && prom2 > 0 && prom3 > 0
  ? console.log("Sve tri promenljive su pozitivni brojevi")
  : console.log("Nisu sve tri promenjive pozitivni brojevi");

// 5.2 || or (ili) - zahteva zadovoljavanje bar jednog od ponudjenih uslova

prom1 > 0 || prom2 > 0 || prom3 > 0
  ? console.log("Nasli smo  promenljivu manju od nule")
  : console.log("Nismo nasli promenljivu manje od nule");

// 5.3 ! - not (okrece vrednost => iz true u false i obratno)

console.log(!Boolean(prviDeo + " " + drugiDeo));

// 6. Tip operatori (Type operators)

// 6.1 typeof - se koristi za ispitivanje tipa odredjene promenljive

isSunny = false;
console.log(typeof isSunny);

// 6.2 instanceof - za proveru da li je neka promenljiva instanca objekta npr:

const obj = {
  ime: "Omar",
  prezime: "Semsovic",
};
console.log(obj instanceof Object);
console.log(obj instanceof Number);

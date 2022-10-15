document.getElementById("paragraf").innerHTML =
  "Ovo je paragraf koji je unet naknadno";

paragraf = document.getElementById("paragraf");

paragraf.style.backgroundColor = "red";

console.log("Ovo je nas prvi ispis u konzoli");

// TIPOVI PODATAKA U JAVASCRIPT //

// Za proveru tipa neke promenljive (varijable) se koristi typeof operator. //

// PRIMITIVNI TIPOVI PODATAKA //

// 1. string - predstavljaju niz karaktera koji je zapisan unutar navodnika (obicnih ili duplih). //

console.log("Ovo je neki string koji je napisan unutar duplih navodnika");
console.log(
  typeof "Ovo je neki string koji je napisan unutar duplih navodnika"
);
console.log(`Ovo je neki string koji je napisan unutar duplih navodnika`);

// 2. number - predstavlja broj koji moze biti zapisan sa ili bez decimalnog zareza.(odnosno tacke)
// ne pravi se razlika izmedju celih, realnih i kompleksnih brojeva.

console.log(14);
console.log(typeof 14);

console.log(typeof -5, 67);

// 3. BigInt - koristi se za skladistenje brojeva cija granica prelazi granicu number tipa podatka.

console.log(BigInt(34823098420398));
console.log(typeof BigInt(34823098420398));

// 4. boolean - logicki entitet koji moze imati dve vrednosti :
// true,
// false.
// Najcesce se koristi u kondicionalima (if naredbe) i ima veliku primenu.

daLiPadaKisa = false;

console.log(true);
console.log(typeof true);

console.log(daLiPadaKisa);

// 5. underfined - je tip podatka koji se javlja kada imamo deklarisanu neku promenljivu
// ali joj nismo dodelili vrednost.
// u tom slucaju i vrednost i tip promenljive je underfined.

let prom1; //deklarisanje promenljive
prom1 = 54; // inicijalizacija (odnosno dodela vrednosti) promenljive.

// 6. null - je tip podatka za nepostojecu promenljivu ili za promenljivu kojoj smo dodelili nekorektnu vrednost.

console.log(typeof skola);

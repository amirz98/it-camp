// 1.
// Napisati program koji na osnovu dva uneta broja od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti brojevi razliciti.

let broj1 = +prompt("Unesite prvi broj");
let broj2 = +prompt("Unesite drugi broj");

if (broj1 == broj2) {
  console.log("Povrsina kvadrata je" + broj1 * broj2);
} else if ((broj1 = broj2)) {
  console.log("Povrsina pravougaonika je" + broj1 * broj2);
}

// 2. Zadatak
// Korisnik unosi dva realna broja x i y. Napisati program koji izracunava i stampa
// kolicnik x/y, ako je broj y razlicit od nule,
// a inace ispisuje poruku: Deljenje je nemoguce.

let num1 = +prompt("Unesite prvi broj");
let num2 = +prompt("Unesite drugi broj");
if (num2 > 0) {
  console.log(num1 / num2);
} else {
  console.log("Deljenje je nemoguce");
}

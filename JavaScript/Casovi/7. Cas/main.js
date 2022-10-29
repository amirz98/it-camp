// While petlja nam omogucava iteraciju kroz neki objekat
// nekoliko puta uz potencijalne odredjene uslove
// Kod while petelje je neophodno na kraju koda definisati povecanje iteratora
// kako ne bismo dobili beskonacnu petlju

// Sintaksa

// while (uslov) {
// Blok koda za izvrsavanje
// definisati povecanje iteratora
// }

// Ispisati sve brojeve od 1 do 10 koji su parni

let i = 1;
while (i < 11) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

// Traziti od korisnika da unese neki broj. Na osnovu te vrednosti izvrsiti ispis kvadrata brojeva od 1 do tog unetog broja:

const broj = +prompt("Unesite neki pozitivan broj:");
let iterator = 1;
while (iterator <= broj) {
  console.log(iterator ** 2);
  iterator++;
}

// Korisnik unosi 2 broja:
// Na osnovu toga koji broj je manji, iteracija se vrsi od njega do veceg broja
// Ispisuju se brojevi od manjeg ka vecem

// let broj1 = +prompt("Unesite broj")
// let broj2 = +prompt ("Unesite drugi broj")
// while ()

// do while petlja predstavlja poseban slucaj while petlje,
// gde se prvo izvrsava kod, pa tek onda proverava uslov.

// sintaksa:

// do _{
// blok koda za izvrsavanje
// } while (uslov)

// Ispisati sve brojeve od 1 do 5
// let broj3 = 1;
// do {
//   console.log(broj3);
//   broj3++;
// } while (broj3 < 6);
//
// Nedostatak do while petlje kroz primer.
// Ispisati sve brojeve manje od 20, krenuvsi od broja koji unosi korisnik

let broj4 = Number(prompt("Unesite neki broj:"));
do {
  console.log(broj4);
  broj4++;
} while (broj4 < 20);

// Domaci :
// Preko switch naredbe :
console.log(new Date().getDay());
// getDay () - daje vrednost od 0 do 6
// switch (new Date ().getDay())...
// Na osnovu vrednosti koju nam daje izraz iz switch naredbe,
// kroz case-ove i eventualno default ispisati poruku:
// "Danas je 'radni dan'"
// "Ugodno provedite vikend" (ako je vikend)

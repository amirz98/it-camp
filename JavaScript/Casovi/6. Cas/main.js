// Ispisati prvih deset brojeva u konzoli , jedan ispod drugog.
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// PETLJA (LOOP) PREDSTAVLJA NACIN DA SE NEKI KOD IZVRSI (uz odredjene uslove) UZ ODREDJENE USLOVE VISE PUTA

// for petlja - Sintaksa:

// for (statement1; statement2; statement3) {
// kod za izvrsavanje u svakoj interaciji
// }

// statement1 predstavlja definisanje promenljive koja ce da predstavlja iterator.
// statement2 predstavlja uslov (granicu) do koje vrednosti ce taj iterator da ide.
// statement3 predstavlja povecanje (smanjenje) iteratora koje se desi na kraju svake iteracije.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// // Ispisati brojeve od 1 do 10, izuzev broja 2 i broja 5.
// // 1. Nacin

// for (let i = 1; i < 11; i++) {
//   if (i !== 2 || i !== 5) {
//     console.log(i);
//   }
// }

// continue keyword (rezervisana rec) ako se nadje u nekoj interaciji , zapravo oznacava
// da se ta interacija zanemari i da se nastavi dalje sa sledecom. (preskace je)

// 2. Nacin
// for (let i = 1; i < 11; i++) {
//   if (i === 2 || i === 5) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// break keyword (rezervisana rec) predstavlja da od tog trenutka for petlja prestaje sa radom.

// ispisati sve brojeve od 1 do 10 ako je neki broj deljiv sa 7 neka se prekine petlja

for (let broj = 1; broj < 11; broj++) {
  if (broj % 7 === 0) {
    break;
  } else {
    console.log(broj);
  }
}

// Ispisati parne brojeve od 1 do 20 na dva nacina

for (let broj = 2; broj < 21; broj++) {
  if (broj % 2 === 0) {
    console.log(broj);
  }
}

// 2. nacin
for (let broj = 2; broj <= 20; broj += 2) {
  console.log(broj);
}

// Domaci:
// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina.
// 2.
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5.
// 3.
// Ispisati dvostruku vrednost prirodnih brojeva od 6 do 14.
// 4.
// Suma neparnih prirodnih brojeva od 10 do 20.

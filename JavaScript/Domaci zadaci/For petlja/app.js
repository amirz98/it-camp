// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina.
// 2.
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5.
// 3.
// Ispisati dvostruku vrednost prirodnih brojeva od 6 do 14.
// 4.
// Suma neparnih prirodnih brojeva od 10 do 20.

// PRVI ZADATAK - PRVI NACIN

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 1) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }
// // PRVI ZADATAK - DRUGI NACIN

// for (let broj = 1; broj <= 20; broj += 2) {
//   console.log(broj);
// }

// DRUGI ZADATAK

for (let i = 50; i <= 100; i += 5) {
  if (i % 5 === 1 && i % 2 === 1) {
    continue;
  }
  console.log(i);
}

// TRECI ZADATAK

// CETVRTI ZADATAK

// let sum = 0;
// for (i = 10; i <= 20; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//     console.log(sum);
//   }
// }

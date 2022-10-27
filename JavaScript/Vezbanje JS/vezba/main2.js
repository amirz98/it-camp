// Ako je broj godina unet od strane korisnika >= 18,
// neka se ispise poruka "punoletni ste",
// u suprotnom "maloletni ste".

const godine = prompt("Unesite broj");
if (godine >= 18) {
  console.log("Punoletni ste");
} else if (godine < 18) {
  console.log("Maloletni ste");
} else console.log("Niste uneli broj godina");

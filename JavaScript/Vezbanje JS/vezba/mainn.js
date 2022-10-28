let w = 65;
console.log(w--);
w += 5;
console.log(w);
w /= 5;
console.log(w);
let prviDeo = "Danas je";
let drugiDeo = "suncan dan";
console.log(Boolean(prviDeo + " " + drugiDeo));
console.log(typeof drugiDeo);
console.log("Ivan" + 3);
console.log(typeof ("Ivan" + 3));
console.log(3 + "2");
console.log("10" / 5);
console.log(21 / "7dana");
let a = 5;
let b = 6;
let c = 7;
let d = 5;
let e = a;
console.log(a == b);
console.log(a == d);
console.log(a == e);
let f = "5";
console.log(a === f);
let g = "5";
console.log(f === g);
console.log(a != b);
console.log(a !== b);
console.log(a !== g);
console.log(a != g);
let = isSunny = false;
isSunny
  ? console.log("Dan je suncan ponesite naocare")
  : console.log("Dan je kisovit ponesite kisobrane");

prom1 = 10;
prom2 = 20;
prom3 = -2;
prom1 > 0 && prom2 > 0 && prom3 > 0
  ? console.log("Sve tri promenljive su pozitivni brojevi")
  : console.log("Sve tri prmenljive nisu pozitivni brojevi");

br1 = -1;
br2 = -2;
br3 = -3;
br1 > 0 && br2 > 0 && b3 > 0
  ? console.log("Sva tri broja su veca od nule")
  : console.log("Sva tri broja su manja od nule");

broj1 = -1;
broj2 = 3;
broj3 = -2;
broj1 < 0 && broj2 > 0 && broj3 < 0
  ? console.log("Postoje dva negativna i jedan pozitivni broj")
  : console.log("Postoje dva pozitivna i jedan negativni broj");

prom1 > 0 || prom2 > 0 || prom3 > 0
  ? console.log("Nasli smo promenljivu manju od nule")
  : console.log("Nismo nasli promenljivu manju od nule");

console.log(!Boolean(prviDeo + drugiDeo));

isSunny = false;
console.log(typeof isSunny);

console.log(typeof prom1);

console.log(typeof drugiDeo);

const ime = prompt("Unesite vase ime");
console.log(ime);

const godine = +prompt("Unesite godine");
console.log(godine);
console.log(typeof godine);

const drzava = +prompt("Da li ste vi smesteni u evropi?");
if (drzava === 1) {
  console.log("Vi ste drzavljanin Srbije");
} else if (drzava === 2) {
  console.log("Vi ste drzavljanin Austrije");
} else if (drzava === 3) {
  console.log("Vi ste drzavljanin Francuske");
} else console.log("Vi niste evropljanin");

const pitanje = prompt("Koje si religije?");
switch (pitanje) {
  case "islam":
    console.log("Vi ste islamske verosipovesti");
    break;
  case "hriscanstvo":
    console.log("Vi ste hriscanske veroispovesti");
    break;
  case "budizam":
    console.log("Vi ste budista");
    break;
  default:
    console.log("Niste uneli ispravan odgovor");
}

const days = +prompt("Koji je danas dan?");
switch (days) {
  case 1:
    console.log("Ponedeljak");
    break;
  case 2:
    console.log("Utorak");
    break;
  case 3:
    console.log("Sreda");
    break;
  case 4:
    console.log("Cetvrtak");
    break;
  case 5:
    console.log("Petak");
    break;
  case 6:
    console.log("Subota");
    break;
  case 7:
    console.log("Nedelja");
    break;
  default:
    console.log("Niste uneli adekvatan odgovor");
}

const starost = +prompt("Da li ste punoletni?");
if (starost > 0 && starost < 18) {
  console.log("Vi ste maloletni");
} else if (starost >= 18) {
  console.log("Vi ste punoletni");
} else {
  console.log("Niste uneli adekvatan odgovor");
}

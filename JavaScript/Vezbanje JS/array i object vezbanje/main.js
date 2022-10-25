var cars = ["Audi", "Bmw", "Mercedes", "Wolksvagen"];

console.log(cars);
console.log(cars[3]);

var citynum = ["New York", "Paris", "Berlin", 22, 33, [5, 6, 7]];

console.log(citynum);

console.log(citynum[5][2]);

citynum.country = ["Serbia", "Denmark", "Germany"];

console.log(citynum);

console.log(citynum.country);
console.log(citynum.country[2]);

var person = {
  name: "Amir",
  surname: "Zornic",
  age: 24,
  city: "Novi Pazar",
  country: "Serbia",
  Adress: "Lole Ribara",
  number: "13",
};

console.log(person);

person.pet = "cat";

console.log(person.pet);

console.log(person.name + " " + person.surname);

// Jedan objekat se sastoji od properties-a (name,age...)
// Tacka je operator kojim pristupamo propertiesima

var person = {
  name: "Jovana",
  age: 22,
  friends: ["Ana", "Marija", "Milica"],
  adress: {
    street: "Pohorska",
    numeber: 28,
  },
};

// console.log(person.name + " ima " + person.age + " godine");

person.dog = "Black";

// console.log(person.friends[2]);

console.log(person.adress.street);

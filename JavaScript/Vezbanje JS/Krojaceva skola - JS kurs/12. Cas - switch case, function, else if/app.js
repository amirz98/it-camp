var num1 = +prompt("Unesite prvi broj");
var num2 = +prompt("Unesite drugi broj");
var action = prompt("Unesite zeljenu radnju \n + - * /");

// if (action === "+") {
//   add();
// } else if (action === "-") {
//   sub();
// } else if (action === "*") {
//   mult();
// } else if (action === "/") {
//   dev();
// } else console.log("Uneli ste pogresan iznos");

switch (action) {
  case "+":
    add();
    break;
  case "-":
    sub();
    break;
  case "*":
    mult();
    break;
  case "/":
    dev();
    break;
  default:
    console.log("Uneli ste pogresan iznos");
}

function add() {
  console.log(num1 + num2);
}

function sub() {
  console.log(num1 - num2);
}

function mult() {
  console.log(num1 * num2);
}

function dev() {
  console.log(num1 / num2);
}

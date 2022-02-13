function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

//higher order functions
function calculate(num1, num2, operator) {
  return operator(num1, num2);
}

console.log(calculate(1, 2, add));
console.log(calculate(20, 10, divide));
console.log(calculate(7, 8, multiply));
console.log(calculate(187, 93, subtract));

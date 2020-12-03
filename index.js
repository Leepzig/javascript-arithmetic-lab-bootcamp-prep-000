function add(num1, num2) {
  return parseInt(num1 + num2)
}

function subtract(num1, num2) {
  return parseInt(num1 - num2)
}

function multiply(num1, num2) {
  return parseInt(num1 * num2)
}

function divide(num1, num2) {
  return num1 / num2
}

function increment(n) {
  n = n ++
  return n
}

function decrement(n) {
  n = n --
  return n
}

console.log(increment(1))
let num1 = Math.abs(Number(window.prompt('Enter the first number')))
let num2 = Math.abs(Number(window.prompt('Enter the second number')))

let sum1 = add(num1, num2)
console.log('Sum = ' + sum1)

function add () {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i]
  }
  return sum
}

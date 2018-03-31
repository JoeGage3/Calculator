const readline = require('readline-sync');
console.log('Welcome to the calculator!');
console.log('Please enter the first number to be multiplied.');
const num1 = readline.prompt();
console.log('Please enter the second number to be multiplied.');
const num2 = readline.prompt();
const prod = (+num1)*(+num2);
console.log('The answer is ' + prod + '.');
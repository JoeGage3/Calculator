const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==========================');

console.log('\nPlease enter the operator:');
const operator = readline.prompt();

console.log('\nPlease enter the first number:');
const input1 = readline.prompt();
const num1 = +input1;

console.log('\nPlease enter the second number:');
const input2 = readline.prompt();
const num2 = +input2;

switch(operator) {
    case '+': {
            const answer = num1 + num2;
            console.log('\nThe answer is: ' + answer + '.');
        }
        break;
    case '-': {
            const answer = num1 - num2;
            console.log('\nThe answer is: ' + answer + '.');
        }
        break;
    case '*': {
            const answer = num1 * num2;
            console.log('\nThe answer is: ' + answer + '.');
        }
        break;
    case '/': {
            const answer = num1 / num2;
            console.log('\nThe answer is: ' + answer + '.');
        }
        break;
    default:
        console.log('\nSorry, ' + operator + ' is not a valid operator. This calculator only supports the operators +, -, *, and /.');
        break;
}
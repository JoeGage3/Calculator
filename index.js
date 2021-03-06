const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==========================');

console.log('\nPlease enter the operator:');
const operator = readline.prompt();

console.log('\nHow many numbers do you want to ' + operator + '?');
const input_nums = readline.prompt();
const num_nums = +input_nums;

var i;
var arr = [];
for (i = 0; i < num_nums; i++) {
    var j = i + 1;
    console.log('\nPlease enter number ' + j + ':');
    const input = readline.prompt();
    const num = +input;
    arr.push(num);
}

const start = arr[0];
arr.shift();

switch(operator) {
    case '+': {
            const answer = arr.reduce(function(first, second) { return first + second; }, start);
            console.log('\nThe answer is: ' + answer + '.');
        }
        break;
    case '-': {
            const answer = arr.reduce(function(first, second) { return first - second; }, start);
            console.log('\nThe answer is: ' + answer + '.');
        }
        break;
    case '*': {
            const answer = arr.reduce(function(first, second) { return first * second; }, start);
            console.log('\nThe answer is: ' + answer + '.');
        }
        break;
    case '/': {
            const answer = arr.reduce(function(first, second) { return first / second; }, start);
            console.log('\nThe answer is: ' + answer + '.');
        }
        break;
    default:
        console.log('\nSorry, ' + operator + ' is not a valid operator. This calculator only supports the operators +, -, *, and /.');
        break;
}
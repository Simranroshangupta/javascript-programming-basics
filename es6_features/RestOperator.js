// RestOperator.js

function calculateSum(...numbers) {

    let sum = 0;

    for (const number of numbers) {

        sum += number;
    }

    return sum;
}

console.log(calculateSum(10, 20, 30, 40));
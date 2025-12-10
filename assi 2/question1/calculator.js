import { add, subtract, multiply, divide, power } from './operations.js';

const val1 = 24;
const val2 = 6;
const val3 = 0;
const val4 = "a string";

const sum = add(val1, val2);
const diff = subtract(val1, val2);
const product = multiply(val1, val2);
const quotient = divide(val1, val2);
const pow = power(2, 3);
const divByZero = divide(val1, val3);
const invalidInput = add(val1, val4);
const negativePower = power(2, -2);

const results = { 
    sum: `${val1} + ${val2} = ${sum}`, 
    diff: `${val1} - ${val2} = ${diff}`, 
    product: `${val1} * ${val2} = ${product}`, 
    quotient: `${val1} / ${val2} = ${quotient}`, 
    pow: `2 ^ 3 = ${pow}`,
    divByZero: `${val1} / ${val3} = ${divByZero}`,
    invalidInput: `${val1} + ${val4} = ${invalidInput}`,
    negativePower: `2 ^ -2 = ${negativePower}`
};

console.log("\n--- Scientific Calculator Results (ES6 Modules) ---");
// Loop through the object and log
for (const key in results) {
    console.log(`${key} -> ${results[key]}`);
}

import { multiply } from '../convert-everything/operations.js';

const a = 6;
const b = 7;

const result = multiply(a, b);
const isEven = result % 2 === 0;
const parityText = isEven ? "Even Number" : "Odd Number";

console.log(`\n${a} × ${b} = ${result} (${parityText})`);
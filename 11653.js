"use strict";
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = parseInt(input[0]);
let i = 2;
const primes = [];
while (true) {
  if (num % i === 0) {
    num = num / i;
    primes.push(i);
    i = 1;
  }
  i++;
  if (i > num) {
    break;
  }
}
console.log(primes.join("\n"));

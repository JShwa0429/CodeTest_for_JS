"use strict";

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [M, N] = input.map((num) => +num);
let primeNumArr = [];
let primeNumSum = 0;

function isPrime(num) {
  if (num < 2) return;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return;
  }
  primeNumArr.push(num);
  primeNumSum += i;
}

for (let i = M; i <= N; i++) {
  isPrime(i);
}
if (!primeNumSum) {
  console.log(-1);
} else {
  console.log(primeNumSum);
  console.log(Math.min.apply(null, primeNumArr));
}

//분수찾기
"use strict";
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let X = Number(input[0]);
let counter = 0;

while (X > 0) {
  counter++;
  X = X - counter;
}

if (counter % 2 === 0) {
  console.log(`${counter + X}/${1 + -X}`);
} else {
  console.log(`${1 + -X}/${counter + X}`);
}

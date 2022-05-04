"use strict";

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const points = input[1].split(" ").map((num) => +num);

let set = new Set(points);
let uniq = [...set].sort((a, b) => a - b);

let dic = {};
uniq.forEach((e, index) => {
  dic[e] = index;
});
let answer = [];
for (let i = 0; i < N; i++) {
  answer.push(dic[points[i]]);
}

console.log(answer.join(" "));

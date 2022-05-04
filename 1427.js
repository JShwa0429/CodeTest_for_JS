"use strict";

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input[0];

console.log(parseInt([...N].sort((a, b) => b - a).join("")));

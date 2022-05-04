"use strict";
const fs = require("fs");
const input = fs.readFileSync("예제.txt").toString().trim().split("\n");
const nums = input[0]
  .slice(1, -1)
  .split(",")
  .map((num) => +num);

function isPrimeNumber(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function isPrimeNumber(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      for (let k = 2; k < nums.length; k++) {
        if (i === j || j === k || i === k) {
          continue;
        }
        let sum = nums[i] + nums[j] + nums[k];
        if (isPrimeNumber(sum)) answer += 1;
      }
    }
  }
  return answer;
}

solution(nums);

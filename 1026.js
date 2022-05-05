//보물

// 옛날 옛적에 수학이 항상 큰 골칫거리였던 나라가 있었다. 이 나라의 국왕 김지민은 다음과 같은 문제를 내고 큰 상금을 걸었다.

// 길이가 N인 정수 배열 A와 B가 있다. 다음과 같이 함수 S를 정의하자.

// S = A[0] × B[0] + ... + A[N-1] × B[N-1]

// S의 값을 가장 작게 만들기 위해 A의 수를 재배열하자. 단, B에 있는 수는 재배열하면 안 된다.

// S의 최솟값을 출력하는 프로그램을 작성하시오.

function S(A, B) {
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    result += A[i] * B[i];
  }

  return result;
}

function swap(arr, a, b) {
  let array = [...arr];
  [array[a], array[b]] = [array[b], array[a]];
  return array;
}

function sort(A, B) {
  for (let i = A.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (S(swap(A, j, j + 1), B) < S(A, B)) {
        A = swap(A, j, j + 1);
      }
    }
  }
  return A;
}

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

N = +input[0];
A = input[1].split(" ").map((num) => +num);
B = input[2].split(" ").map((num) => +num);

A.sort((a, b) => a - b);
B.sort((b, a) => b - a);

let result = 0;
for (let i = 0; i < A.length; i++) {
  result += A[i] * B.pop();
}

console.log(result);

//B의 순서대로 배치하는 법

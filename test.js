// "use strict";
// const fs = require("fs");
// const input = fs.readFileSync("예제.txt").toString().trim().split("\n");
// const N = +input[0];
// const arr = [];
// for (let i = 1; i <= N; i++) {
//   arr.push(Number(input[i]));
// }

// const result = quickSortStart(arr);
// console.log(result.join("\n"));

// function quickSortStart(arr) {
//   if (!arr.length) {
//     return arr;
//   }
//   return quickSort(arr, 0, arr.length - 1);
// }

// function quickSort(array, l, r) {
//   const pivot = array[Math.floor((l + r) / 2)];
//   let left = l;
//   let right = r;

//   while (left <= right) {
//     while (array[left] < pivot) left++;
//     while (array[right] > pivot) right--;

//     if (left <= right) {
//       const temp = array[left];
//       array[left] = array[right];
//       array[right] = temp;
//       left++;
//       right--;
//     }
//   }
//   if (l < right) quickSort(array, l, right);
//   if (r > left) quickSort(array, left, r);

//   return array;
// }

"use strict";

const [board, moves] = [
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4],
];

const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

function solution(board, moves) {
  const basket = [];
  let count = 0;
  console.log(
    transpose(board).map((row) => row.reverse().filter((el) => el !== 0))
  );
  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      if (!!board[i][move - 1]) {
        const doll = board[i][move - 1];
        board[i][move - 1] = 0;
        if (basket.length) {
          if (basket[basket.length - 1] === doll) {
            basket.pop();
            count += 2;
          } else {
            basket.push(doll);
          }
        } else {
          basket.push(doll);
        }
        break;
      }
    }
  });
  return count;
}

console.log(solution(board, moves));

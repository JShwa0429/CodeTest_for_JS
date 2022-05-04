"use strict";
class minHeap {
  constructor() {
    this.heap = [null];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  push(value) {
    this.heap.push(value);
    if (this.heap.length === 2) return;
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    while (parentIndex !== 0 && this.heap[parentIndex] > value) {
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 1) return 0;
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[currentIndex] > this.heap[leftIndex] ||
      this.heap[currentIndex] > this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] > this.heap[rightIndex]) {
        this.swap(currentIndex, rightIndex);
        currentIndex = rightIndex;
      } else {
        this.swap(currentIndex, leftIndex);
        currentIndex = leftIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return returnValue;
  }
}

const fs = require("fs");
const [N, ...inputs] = fs
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map((num) => +num);

const heap = new minHeap();
let extracts = "";
inputs.forEach((operation) => {
  if (operation !== 0) {
    heap.push(operation);
  } else {
    if (heap.heap.length === 0) {
      extracts += "0" + "\n";
    } else {
      let t = heap.pop();
      extracts += t + "\n";
    }
  }
});

console.log(extracts);

"use strict";

class Heap {
  constructor() {
    this.heap = [null];
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  compare(parent, child) {
    if (Math.abs(this.heap[parent]) === Math.abs(this.heap[child])) {
      if (this.heap[parent] > this.heap[child]) return true;
      else return false;
    } else if (Math.abs(this.heap[parent]) > Math.abs(this.heap[child])) {
      return true;
    }
    return false;
  }

  push(value) {
    this.heap.push(value);
    if (this.heap.length === 2) return;

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.compare(parentIndex, currentIndex)) {
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
    let leftChildIndex = 2;
    let rightChildIndex = 3;

    while (
      (this.heap[leftChildIndex] &&
        this.compare(currentIndex, leftChildIndex)) ||
      (this.heap[rightChildIndex] &&
        this.compare(currentIndex, rightChildIndex))
    ) {
      if (this.compare(leftChildIndex, rightChildIndex)) {
        this.swap(currentIndex, rightChildIndex);
        currentIndex = rightChildIndex;
      } else {
        this.swap(currentIndex, leftChildIndex);
        currentIndex = leftChildIndex;
      }

      leftChildIndex = currentIndex * 2;
      rightChildIndex = currentIndex * 2 + 1;
    }
    return returnValue;
  }
}

const heap = new Heap();
const [N, ...inputs] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map((num) => +num);
let result = "";
inputs.forEach((input) => {
  if (input === 0) {
    result += heap.pop() + "\n";
  } else {
    heap.push(input);
  }
});

console.log(result);

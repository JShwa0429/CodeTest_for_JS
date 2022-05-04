"use strict";

class minHeap {
  constructor() {
    this.heap = [];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp(currentIndex = this.heap.length - 1) {
    if (currentIndex === 0) return;

    const parentIndex = Math.floor((currentIndex - 1) / 2);

    if (this.heap[parentIndex] < this.heap[currentIndex]) return;

    this.swap(parentIndex, currentIndex);
    currentIndex = parentIndex;
    this.bubbleUp(currentIndex);
  }

  pop() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();

    const returnValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return returnValue;
  }

  bubbleDown(currentIndex = 0) {
    const leftChildIndex = currentIndex * 2 + 1;
    const rightChildIndex = currentIndex * 2 + 2;
    const length = this.heap.length;
    let minIndex = currentIndex;

    if (!this.heap[leftChildIndex] && !this.heap[rightChildIndex]) return;

    if (!this.heap[rightChildIndex]) {
      if (this.heap[leftChildIndex] < this.heap[currentIndex]) {
        minIndex = leftChildIndex;
      }
    }

    if (
      leftChildIndex <= length &&
      this.heap[leftChildIndex] < this.heap[rightChildIndex]
    ) {
      if (this.heap[leftChildIndex] < this.heap[currentIndex]) {
        minIndex = leftChildIndex;
      }
    } else if (
      rightChildIndex <= length &&
      this.heap[rightChildIndex] < this.heap[leftChildIndex]
    ) {
      if (this.heap[rightChildIndex] < this.heap[currentIndex]) {
        minIndex = rightChildIndex;
      }
    }

    if (currentIndex !== minIndex) {
      this.swap(currentIndex, minIndex);
      currentIndex = minIndex;
      this.bubbleDown(currentIndex);
    }
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
const arr = [];
inputs.forEach((input) => {
  if (input === 0) {
    arr.push(heap.pop());
  } else {
    heap.push(input);
  }
});

console.log(arr.join("\n"));

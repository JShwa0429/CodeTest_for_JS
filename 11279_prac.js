const fs = require("fs");
let [_, ...operations] = fs
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map((num) => parseInt(num));

class maxHeap {
  constructor() {
    this.heap = [];
  }

  //서로 위치 바꾸는 함수
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index2],
    ];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length <= 0) return;
    if (this.heap.length === 1) return this.heap.pop();

    const maxValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return maxValue;
  }

  bubbleUp(index = this.heap.length - 1) {
    if (index < 1) return;
    let parentIndex = Math.floor((index - 1) / 2);

    let currentNode = this.heap[index];
    let parentNode = this.heap[parentIndex];

    if (parentNode >= currentNode) return;

    this.swap(parentIndex, index);
    currentIndex = parentIndex;
    this.bubbleUp(currentIndex);
  }

  bubbleDown(index = 0) {
    let leftChildIndex = index * 2 + 1;
    let rightChildIndex = index * 2 + 2;
    let length = this.heap.length;
    let maxIndex = index;

    // 자식이 없으면 종료.
    if (!this.heap[leftChildIndex] && !this.heap[rightChildIndex]) return;

    if (!this.heap[rightChildIndex]) {
      if (this.heap[leftChildIndex] > this.heap[maxIndex]) {
        maxIndex = leftChildIndex;
      }
    }

    if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
      if (
        rightChildIndex <= length &&
        this.heap[rightChildIndex] > this.heap[maxIndex]
      ) {
        maxIndex = rightChildIndex;
      }
    } else {
      if (
        leftChildIndex <= length &&
        this.heap[leftChildIndex] > this.heap[maxIndex]
      ) {
        maxIndex = leftChildIndex;
      }
    }

    if (maxIndex !== index) {
      let t = this.heap[maxIndex];
      this.heap[maxIndex] = this.heap[index];
      this.heap[index] = t;
      this.bubbleDown(maxIndex);
    }
  }
}

const heap = new maxHeap();
let extracts = "";
operations.forEach((operation) => {
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

console.log(extracts.trim());

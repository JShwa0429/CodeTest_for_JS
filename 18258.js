const fs = require("fs");
const [N, ...inputs] = fs
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

class Node {
  constructor(value) {
    this.item = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.head.next = this.tail;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.size += 1;
  }

  front() {
    return this.head ? this.head.item : -1;
  }

  back() {
    return this.tail ? this.tail.item : -1;
  }

  pop() {
    if (this.size > 2) {
      const item = this.head.item;
      const newHead = this.head.next;
      this.head = newHead;
      this.size -= 1;
      return item;
    } else if (this.size === 2) {
      const item = this.head.item;
      const newHead = this.head.next;
      this.head = newHead;
      this.tail = newHead;
      this.size -= 1;
      return item;
    } else if (this.size === 1) {
      const item = this.head.item;
      this.head = null;
      this.tail = null;
      this.size -= 1;
      return item;
    } else {
      return -1;
    }
  }

  empty() {
    return this.size === 0 ? 1 : 0;
  }
}

const queue = new Queue();
let result = "";
for (let i = 0; i < N; i++) {
  let input = inputs[i].split(" ");
  switch (input[0]) {
    case "push":
      queue.push(+input[1]);
      break;
    case "front":
      result += queue.front() + "\n";
      break;
    case "back":
      result += queue.back() + "\n";
      break;
    case "size":
      result += queue.size + "\n";
      break;
    case "empty":
      result += queue.empty() + "\n";
      break;
    case "pop":
      result += queue.pop() + "\n";
      break;
  }
}

console.log(result.split("").join(""));

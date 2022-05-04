// 배열로 구현
// class Queue{
//     constructor() {
//         this.queue = [];
//         this.front = 0;
//         this.rear = 0;
//     }

//     enqueue(value){
//         this.queue[this.rear++] = value;
//     }

//     deque(){
//         const value = this.queue[this.front]
//         delete this.queue[this.front]
//         this.front += 1
//         return value;
//     }

//     peek() {
//         return this.queue[this.front]
//     }

//     size() {
//         return this.rear - this.front
//     }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.tail = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

class CirQueue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log("Queue is full.");
      return;
    }
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.maxSize;
    this.size += 1;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front = (this.front + 1) % this.maxSize;
    this.size -= 1;
    return value;
  }

  isFull() {
    return this.size === this.maxSize;
  }

  peek() {
    return this.queue[this.front];
  }
}

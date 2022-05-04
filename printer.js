class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  max() {
    let value = 0;
    for (let i = this.front; i < this.rear; i++) {
      value = Math.max(value, this.queue[i]);
    }
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(priorities, location) {
  const q = new Queue();
  let count = 0;

  for (priority of priorities) {
    q.enqueue(priority);
  }

  while (true) {
    const max = q.max();
    const value = q.dequeue();
    location -= 1;

    if (value === max) {
      count += 1;
      if (location === -1) {
        break;
      }
    } else {
      q.enqueue(value);
      if (location === -1) {
        location = q.size() - 1;
      }
    }
  }

  return count;
}

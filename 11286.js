class absHeap {
  constructor() {
    this.heap = [null];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  abs(index) {
    return Math.abs(this.heap[index]);
  }

  push(value) {
    this.heap.push(value);
    if (this.heap.length === 2) return;

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0) {
      const currentAbs = this.abs(currentIndex);
      const parentAbs = this.abs(parentIndex);

      if (currentAbs < parentAbs) {
        // 현재 인덱스가 부모인덱스의 절대값보다 작으면
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = Math.floor(currentIndex / 2);
      } else if (currentAbs === parentAbs) {
        //만약 그렇지 않은 대신 절대값이 같다면
        if (this.heap[currentIndex] < this.heap[parentIndex]) {
          //만약 현재값이 음수라서 부모값보다 작은 경우
          this.swap(currentIndex, parentIndex);
          currentIndex = parentIndex;
          parentIndex = Math.floor(currentIndex / 2);
        } else {
          //그렇지 않았을 때 바꿀 필요가 없으므로 종료
          break;
        }
      } else {
        //아니라면 종료
        break;
      }
    }
  }

  pop() {
    if (this.heap.length === 1) return 0;
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    if (this.heap.length === 2) return returnValue;

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    let length = this.heap.length;

    while (leftIndex < length || rightIndex < length) {
      // 좌우가 끝에 도달할 때까지 반복
      const currentValue = this.heap[currentIndex];
      const leftValue = this.heap[leftIndex];
      const rightValue = this.heap[rightIndex];

      const currentAbs = Math.abs(currentValue);
      const leftAbs = Math.abs(leftValue);
      const rightAbs = Math.abs(rightValue);

      if (leftAbs < currentAbs || rightAbs < currentAbs) {
        // 왼쪽이나 오른쪽의 절대값이 현재보다 작으면

        if (leftAbs >= rightAbs) {
          //오른쪽이 왼쪽보다 절대값이 작거나 같을 때
          if (leftAbs > rightAbs) {
            // 그중 오른쪽이 왼쪽보다 절대값이 작은 경우
            this.swap(rightIndex, currentIndex);
            currentIndex = rightIndex;
          } else if (leftAbs === rightAbs) {
            //절대값이 같은 경우
            if (leftValue > rightValue) {
              //오른쪽이 왼쪽보다 작은 경우
              this.swap(rightIndex, currentIndex);
              currentIndex = rightIndex;
            } else if (leftValue < rightValue) {
              this.swap(leftIndex, currentIndex);
              currentIndex = leftIndex;
            } else {
              //같은 경우 오른쪽 바꿈
              this.swap(rightIndex, currentIndex);
              currentIndex = rightIndex;
            }
          } else {
            break;
          }
        } else if (leftAbs == rightAbs) {
          // 만약 오른쪽과 왼쪽의 절대값이 같을 때

          if (leftValue >= rightValue) {
            //그럴 때 오른쪽이 음수거나 부호가 같으면 오른쪽을 바꾼다
            this.swap(rightIndex, currentIndex);
            currentIndex = rightIndex;
          } else if (rightValue > leftValue) {
            //왼쪽의 부호가 작은 경우 왼쪽과 바꾼다

            this.swap(leftIndex, currentIndex);
            currentIndex = leftIndex;
          }
        } else {
          //왼쪽이 오른쪽보다 작으면
          this.swap(leftIndex, currentIndex);
          currentIndex = leftIndex;
        }
      } else if (leftAbs === currentAbs || rightAbs === currentAbs) {
        // 만약에 절대값이 같은 것이 있다면
        if (rightAbs === leftAbs) {
          //오른쪽이랑 왼쪽이 절대값이 같은 경우
          if (rightValue < leftValue) {
            //오른쪽이 왼쪽보다 작은 경우
            if (rightValue < currentValue) {
              // 오른쪽이 현재값보다 작은 경우 바꾼다
              this.swap(rightIndex, currentIndex);
              currentIndex = rightIndex;
            } else {
              //바꿀 이유 없으니 종료
              break;
            }
          } else if (leftValue < rightValue) {
            //왼쪽값이 오른쪽보다 작은 경우
            if (leftValue < currentValue) {
              //왼쪽 값이 현재값보다 작은 경우
              this.swap(leftIndex, currentIndex);
              currentIndex = leftIndex;
            } else {
              //바꿀 이유 없으니 종료
              break;
            }
          } else {
            break;
          }
        } else if (rightAbs === currentAbs) {
          //오른쪽만 절대값이 같은 경우
          if (rightValue < currentValue) {
            //오른쪽 값이 현재 값보다 작은 경우
            this.swap(rightIndex, currentIndex);
            currentIndex = rightIndex;
          } else {
            //바꿀 이유 없으므로 종료
            break;
          }
        } else {
          //왼쪽만 같은 경우
          if (leftValue < currentValue) {
            //왼쪽값이 현재값보다 작은 경우 바꾼다
            this.swap(leftIndex, currentIndex);
            currentIndex = leftIndex;
          } else {
            //바꿀 이유 없으므로 종료
            break;
          }
        }
      } else {
        //절대값도 현재값도 현재값이 제일 작을 경우 그냥 반복문을 종료한다
        break;
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
  .map((num) => parseInt(num));
const heap = new absHeap();
let result = "";
inputs.forEach((input) => {
  if (input !== 0) {
    heap.push(input);
  } else {
    if (heap.heap.length === 0) {
      result += "0" + "\n";
    } else {
      let t = heap.pop();
      result += t + "\n";
    }
  }
});

console.log(result.trim());

function solution(s) {
  const stack = [];
  for (const c of s) {
    if (c === "(") {
      stack.push(c);
    } else if (c === ")") {
      value = stack.pop();
      if (value !== "(") {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(solution("()()"));

console.log(typeof "number");

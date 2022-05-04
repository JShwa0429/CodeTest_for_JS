function makeTrie(words) {
  const root = {};
  for (const word of words) {
    let current = root;
    for (const char of word) {
      if (!current[char]) current[char] = [0, {}];
      current[char][0] += 1 + (current[char][0] || 0);
      current = current[char][1];
    }
  }
  return root;
}

function solution() {
  const words = ["go", "gone", "guild"];
  let answer = 0;
  const trie = makeTrie(words);

  for (const word of words) {
    let count = 0;
    let current = trie;

    for (const [index, letter] of [...word].entries()) {
      console.log(index, letter);
      count += 1;
      if (current[letter][0] <= 1) {
        break;
      }
      current = current[letter][1];
    }
    answer += count;
  }

  return answer;
}

console.log(solution());

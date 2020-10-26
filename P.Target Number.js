function solution (numbers, target) {
  let answer = 0;

  recall(0, 0);
  function recall (index, value) {
    if (index < numbers.length) {
      recall(index+1, value + index);
      recall(index+1, value - index);
    } else {
      if (value === target ) {
          answer++;
      }
    }
  }

  return answer;
}
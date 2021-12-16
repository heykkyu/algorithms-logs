function solution(str) {
  let answer = 0;

  for (let x of str) {
    if (x === x.toUpperCase()) {
      answer++;
    }
  }

  return answer;
}

function solution2(str) {
  let answer = 0;

  for (let x of str) {
    if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
      answer++;
    }
  }

  return answer;
}


console.log(solution2("KoreaTimeGood"));
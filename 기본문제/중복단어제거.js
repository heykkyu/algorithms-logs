function solution(s) {
  let answer = [];

  for (let word of s) {
    if (!answer.includes(word)) {
      answer.push(word);
    }
  }

  return answer;
}

function solution2(s) {
  let answer = s.filter((v, i) => {
    console.log(s.indexOf(v));
    if (s.indexOf(v) === i) {
      return true;
    }
  });

 
  return answer;
}


console.log(solution(["5", "good", "time", "good", "time", "student"]));
console.log(solution2(["5", "good", "time", "good", "time", "student"]));
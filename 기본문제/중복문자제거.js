function solution(s) {
  let answer = s.split("");

  answer = new Set(answer);
  answer = [...answer]
  answer = answer.join("")
 
  return answer;
}

function solution2(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) {
      answer += s[i];
    }
  }
 
  return answer;
}


console.log(solution("ksekkset"));
console.log(solution2("ksekkset"));
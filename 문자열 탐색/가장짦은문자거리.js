function soloution(s, t) {
  // 시간복잡도 2n  
  let answer = [];
  let count = 1000;  
 
  for (let value of s) {
    if (value === t) {
      count = 0;
      answer.push(0);
    } else {
      count += 1;
      answer.push(count);
    }
  }

  count = 1000;
  for (let i=s.length -1; i>=0; i--) {
    if (s[i] === t) {
      count = 0;
      answer[i] = 0;
    } else {
      count += 1;
      answer[i] = Math.min(answer[i], count);
    }
  }

  return answer;
}


console.log(soloution('teachermode', 'e'));

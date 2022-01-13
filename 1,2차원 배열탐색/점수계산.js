function soloution(n, arr) {
  let answer = 0;
  let temp = 0;

  for (let value of arr) {
    if (value === 1) {
      temp++;
      answer += temp;
    } else {
      temp = 0;
    }
  }
  
  
  return answer;
}


console.log(soloution(10, [1,0,1,1,1,0,0,1,1,0]));

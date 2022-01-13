function soloution(s, arr) {
  let answer = [];

  for (let value of arr) {
    if (answer.length === 0) {
      answer.push(value);
    } else if (value > answer[answer.length-1]) {
      answer.push(value)
    }
  }
  
  return answer.length;
}


console.log(soloution(8, [130,135,148,140,145,150,150,153]));

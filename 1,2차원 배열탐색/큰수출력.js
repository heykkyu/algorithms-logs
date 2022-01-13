function soloution(s, arr) {
  let answer = [];

  for (let i of arr) {
    if (answer.length === 0) {
      answer.push(i);
    } else {
      if (i > s) {
        answer.push(i)
      }
    }

  }

  
  return answer;
}


console.log(soloution(5, [7,3,9,5,6,12]));

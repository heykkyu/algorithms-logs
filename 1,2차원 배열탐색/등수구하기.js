function soloution(n, s) {
  let answer = [];
  let copy = [...s]
  const sort = copy.sort((a, b) => {
    return b - a;
  })
  
  // console.log(s.indexOf(89) + 1)
  
  for (let value of s) {
    answer.push(sort.indexOf(value) + 1);
  }

  return answer;
}


console.log(soloution(5, [87,89,92,100,76, 100]));

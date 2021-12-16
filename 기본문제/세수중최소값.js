function soloution(a, b, c) {
  let answer;
  
  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }

  if (c < answer) {
    answer = c;
  }
  return answer;
}

console.log(soloution(20,5,10));
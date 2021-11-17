function soloution(n) {
  let answer = 0;

  for (let i =1; i <= n; i++) {
    answer += i;
  }

  return answer;
}

console.log(soloution(6));
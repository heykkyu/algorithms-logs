function soloution(arr) {
  let answer = Number.MAX_SAFE_INTEGER;

  answer = Math.min.apply(null, arr)

  return answer;
}

console.log(soloution([5,3,7,11,2,15,17]));
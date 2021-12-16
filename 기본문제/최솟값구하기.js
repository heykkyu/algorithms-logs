function soloution(arr) {
  let answer;

  answer = Math.min.apply(null, arr)

  return answer;
}

function soloution2(arr) {
  let answer = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i<arr.length; i++) {
    if (arr[i] < answer) {
      answer = arr[i];
    }
  }
  return answer;
}

console.log(soloution2([5,3,7,11,2,15,17]));
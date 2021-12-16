function soloution(a, b, c) {
  let answer, max;

  if (a > b) {
    max = a;
  } else {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  if ((a + b + c - max) > max) {
    answer =  "YES";
  } else {
    answer = "NO";
  }
  
  return answer;
}

function soloution2(a, b, c) {
  let answer;

  let input = [a, b, c];
  let max = Math.max.apply(null, input);

  if (a + b + c - max > max) {
    answer=  "YES"
  } else {
    answer=  "NO"
  }

  return answer;
  
}

console.log(soloution2(13, 33, 17));
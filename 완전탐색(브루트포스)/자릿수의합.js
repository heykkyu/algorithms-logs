function stringSolution(N,S) {
  let answer, max=Number.MIN_SAFE_INTEGER;

  for (let value of S) {
    let st = String(value).split("");
    let sum = st.reduce((acc, cur) => {
      return Number(acc) + Number(cur)
    }, 0)

    if (sum > max) {
      answer = value;
      max = sum;
    } else if (max === sum) {
      answer = answer > value ? answer : value;
    }
    
  }

  return answer;
}

function integerSolution(n, arr) {
  let answer, max=Number.MIN_SAFE_INTEGER;
  
  for (let x of arr) {
    let sum = 0, temp = x;

    while (temp > 0) {
      sum += (temp%10);
      temp = Math.floor(temp / 10);
    }

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (max === sum && x > answer) {
      answer = x;
    }
  }

  return answer;
}


console.log(stringSolution(7, [128,460,603,40,521,137,123]));
console.log(integerSolution(7, [128,460,603,40,521,137,123]));
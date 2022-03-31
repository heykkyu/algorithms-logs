function solution(N,S) {
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


console.log(solution(7, [128,460,603,40,521,137,123]));
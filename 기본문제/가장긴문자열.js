function solution(str) {

  let answer, max=Number.MIN_SAFE_INTEGER;
  
  for(let x of str) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }

  return answer
}



console.log(solution(["5", "teacher", "time", "student", "beautiful", "good"]));
function solution2(str) {
  let answer;
  
  answer = str.split("").reduce((accu, i) => {
    if (i === "A") {
      return accu + "#"
    } else {
      return accu + i;
    }
  }, '')

  return answer;
}

function solution(str) {
  let answer = str;

  answer = answer.replace(/A/g, "#");

  return answer;
}


console.log(solution2("BANANA"));
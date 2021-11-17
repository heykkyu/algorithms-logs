function soloution(str) {
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


console.log(soloution("BANANA"));
function soloution(arr) {
  let answer = [];

  for (let x of arr) {
    if (x % 2 !== 0) {
      answer.push(x);
    }
  }

  return Math.min.apply(null, answer);
}


console.log(soloution([12,77,38,41,53,92,85]));
function soloution(day, cars) {
  let answer = 0;

  for (let x of cars){
    if (x % 10 === day) {
      answer += 1;
    }
  }

  return answer;
}


console.log(soloution(3, [25, 23, 11,47,53,17,33]));
console.log(soloution(3, [12,20,54,30,87,91,30]));
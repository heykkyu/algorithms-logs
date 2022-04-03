function solution(card) {
  let answer = 0;
  let n = 10;
  let k = 3;
  let temp = new Set();

  for (let i=0; i<n; i++) {
    for (let j=i+1; j<n; j++) {
      for (let k=j+1; k<n; k++) {
        temp.add(card[i]+card[j]+card[k]);
      }
    } 
  }

  let arrayTemp = Array.from(temp).sort((a,b) => b - a)

  answer = arrayTemp[k-1];
  return answer;
}


console.log(solution([13,15,34,23,45,65,33,11,26,42]));
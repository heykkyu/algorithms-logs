function soloution(arr) {
  let answer = arr;

  let sum = arr.reduce((accu, i) => accu + i, 0);

  for (let i = 0; i<arr.length; i++) {
    for (let j = i+1; j<arr.length; j++) {
      if (arr[i] + arr[j] === sum - 100) {
        console.log(arr[i], arr[j])
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }

  return answer;
}


console.log(soloution([20,7,23,19,10,15,25,8,13]));
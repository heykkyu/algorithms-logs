function soloution(n, arr, arr2) {
  let answer = [];
  // 1:가위 2: 바위 3: 보

  // 비기면 D
  // 1 / 3
  // 2 / 1
  // 3 / 2 

  for (let i =0; i<n; i++) {
    if (arr[i] === arr2[i]) {
      answer.push('D')
    } else if ((arr[i] === 1 && arr2[i] === 3) || (arr[i] === 2 && arr2[i] === 1) || (arr[i] === 3 && arr2[i] === 2)) {
      answer.push('A')
    } else {
      answer.push('B');
    }
  }

  
  return answer;
}


console.log(soloution(5, [2,3,3,1,3],[1,1,2,2,3]));

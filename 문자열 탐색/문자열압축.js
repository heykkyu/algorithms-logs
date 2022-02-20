function soloution(n) {
  let answer = "";
  let cnt = 1;

  for (let i=0; i<n.length; i++) {
    if (n[i] === n[i+1]) {
      cnt++;
    } else {
      answer += n[i];
      if (cnt > 1) {
        answer += cnt;
      }
      cnt = 1;
    }
  }


  return answer;
}


console.log(soloution('KKHSSSSSSSE'));

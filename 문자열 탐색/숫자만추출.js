function soloution(S) {
  let answer = 0;
  let filttered = S.replace(/[^0-9]/g, "");
  answer = Number(filttered)

  return answer;
}


console.log(soloution('tge0a1h205er'));

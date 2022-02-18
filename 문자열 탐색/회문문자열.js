function soloution(S) {
  // 앞에서 읽을때나 + 뒤에서 읽을때나 같은 문자열을 === 희문 문자열
  let letter = S.toUpperCase();

  // 1번 풀이 타입
  for (let i=0; i<letter.length/2; i++) {
    if (letter.split("")[i] !== letter.split("")[letter.length - i-1]) {
      return false;
    }
  }

  // 2번 풀이 타입
  if (letter.split("").reverse().join('') !== letter) {
    return false;
  }

  return true;
}


console.log(soloution('he3lEH'));

function soloution(S) {
  // 앞에서 읽을때나 = 뒤에서 읽을때나 같은 문자열은 === 팰린드롬
  // only 알파벳
  let letter = S.toUpperCase().replace(/[^A-Z]/g, "");
  console.log(letter)

  if (letter !== letter.split("").reverse().join('')) {
    return false;
  }

  return true;

  
}


console.log(soloution('found7, time: study; Yduts; emit, 7Dnuof'));

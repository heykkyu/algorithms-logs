function solution(N,S) {
  let answer = [];

  function isPrime (number) {
    if (number === 1) return false;

    for (let i =2; i <= parseInt(number/2); i++) {
      if (number % i === 0) return false;
    }

    return true;
  }

  for (let value of S) {
    let temp = value.toString().split("").reverse().join("");
    
    temp = Number(temp);

    console.log(temp)
    if(isPrime(temp)) {
      answer.push(temp);
    }

  }

  return answer;
}


console.log(solution(7, [32,55,62,20,250,370,200,30,100]));
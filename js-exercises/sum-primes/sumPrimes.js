function checkPrime(primes, nextNum) {
  let isPrime = true;
  for (const prime of primes) {
    if (nextNum % prime === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

function sumPrimes(number) {
  if (!number || typeof number !== 'number') {
    throw new TypeError(`${number} is not a number`);
  }

  const primes = [];
  let nextNum = 2;
  while (nextNum <= number) {
    if (checkPrime(primes, nextNum)) {
      primes.push(nextNum);
    }
    nextNum += 1;
  }
  let result = 0;
  for (const prime of primes) {
    result += prime;
  }
  return result;
}

export { sumPrimes };

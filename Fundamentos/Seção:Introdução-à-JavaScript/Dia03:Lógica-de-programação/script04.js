/* let numPrimo = 1;
for ( let index = 2; index <= 50; index += 1){
    if(numPrimo > 1 && numPrimo % 1 === 0 && numPrimo % numPrimo === 0){
        numPrimo += index;
       
    }
}
console.log(numPrimo); */
let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);
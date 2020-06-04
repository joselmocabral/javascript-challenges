var fStored = []; //Going to store in variable to make it quicker
function factorial(n) {
  if (n == 0 || n == 1) return 1;
  if (fStored[n] > 0) return fStored[n];
  return (fStored[n] = factorial(n - 1) * n);
}

function dividedBy(listN) {
  let multiplier = 1;
  while (listN.length > 0) {
    howManyFirst = listN.filter((n) => n == listN[0]).length;
    multiplier *= factorial(howManyFirst);
    listN = listN.filter((n) => n != listN[0]);
  }
  return multiplier;
}

function listPosition(word) {
  //Return the anagram list position of the word
  mappedToNumbers = word
    .split('')
    .map((w) => w.charCodeAt(0) - 'A'.charCodeAt(0));
  let mappedToBigger = [];
  for (i = 0; i < mappedToNumbers.length; i++) {
    mappedToBigger.push(
      mappedToNumbers.slice(i + 1).filter((n) => n < mappedToNumbers[i]).length
    );
  }
  console.log(mappedToNumbers);
  console.log(mappedToBigger);
  let sumVar = 0;
  for (i = 0; i < mappedToBigger.length; i++) {
    sumVar +=
      (mappedToBigger[i] * factorial(mappedToBigger.length - i - 1)) /
      dividedBy(mappedToNumbers.slice(i));
  }
  return sumVar + 1;
}

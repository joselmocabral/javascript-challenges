function listDivisorSquaredSum(n) {
  //Function that lists all the divisors of a given number, square and sum

  divisors = [];
  for (i = 1; i <= n; i++) {
    if (n % i == 0) {
      divisors.push(i);
    }
  }
  return divisors.reduce((a, c) => a + c * c, 0);
}

function listSquared(m, n) {
  results = [];
  for (j = m; j <= n; j++) {
    result = listDivisorSquaredSum(j);

    if (Math.sqrt(result) % 1 == 0) {
      results.push([j, result]);
    }
  }
  return results;
}

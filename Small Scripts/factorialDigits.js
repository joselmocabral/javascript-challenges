//Number of trailing zeros in a factorial number done more efficiently

function zeros(n) {
  sum = 0;
  fivePower = 5;
  while (fivePower <= n) {
    sum += Math.floor(n / fivePower);
    fivePower = fivePower * 5;
  }
  return sum;
}

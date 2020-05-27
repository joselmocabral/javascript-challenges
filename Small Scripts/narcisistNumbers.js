function narcissistic(value) {
  sum = 0;
  copyVal = value;
  factor = value.toString().length;
  while (copyVal > 0) {
    sum += (copyVal % 10) ** factor;

    copyVal = Math.floor(copyVal / 10);
  }

  return sum === value;
}

function multiplyDigits(num) {
  //Create an auxiliary function that returns all the digits multiplied
  var numArray = num
    .toString()
    .split("")
    .map(Number);
  return numArray.reduce((p, v) => p * v);
}

function persistence(num) {
  var iterations = 0;
  //Define a initial variable to count for the numbers of iterations of the loop
  var multiplied = num;
  while (num >= 10) {
    //The condition for the while to keep running is double or more digits
    num = multiplyDigits(num);
    iterations++;
  }
  return iterations;
}

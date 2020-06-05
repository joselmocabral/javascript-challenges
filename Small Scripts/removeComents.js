function solution(input, markers) {
  for (marker of markers) {
    input = input
      .split('\n')
      .map((n) => n.split(marker)[0].trim())
      .join('\n');
  }
  return input;
}

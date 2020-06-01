function solution(list) {
  firstNum = null;
  lastNum = null;
  finalString = "";
  for (i = 0; i < list.length; i++) {
    if (firstNum == null) {
      firstNum = list[i];
    } else if (lastNum == null) {
      if (list[i] - firstNum == 1) {
        lastNum = list[i];
      } else {
        finalString += firstNum.toString() + ",";
        firstNum = list[i];
      }
    } else {
      if (list[i] - lastNum == 1) {
        lastNum = list[i];
      } else {
        sep = lastNum - firstNum == 1 ? "," : "-";
        finalString += firstNum.toString() + sep + lastNum.toString() + ",";
        firstNum = list[i];
        lastNum = null;
      }
    }
  }
  if (lastNum !== null) {
    sep = lastNum - firstNum == 1 ? "," : "-";
    finalString += firstNum.toString() + sep + lastNum.toString();
  } else {
    finalString += firstNum.toString();
  }

  return finalString;
}

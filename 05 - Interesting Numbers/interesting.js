function isThisInteresting(number, awesomePhrases) {
  strNum = number.toString();
  if (strNum.length <= 2) {
    return false;
  }
  if (strNum.slice(1) == 0) {
    //Check if the number has trailing zeros

    return true;
  } else if (
    strNum.slice(0, Math.floor(strNum.length / 2)) ==
    strNum
      .slice(-Math.floor(strNum.length / 2))
      .split('')
      .reverse()
      .join('')
  ) {
    //Check if the number is palyndrom, contemplates also if all the digits are equal

    return true;
  } else if (awesomePhrases.includes(number)) {
    //Checks if the number is on the given list

    return true;
  } else {
    for (i = 0; i < strNum.length - 1; i++) {
      if (
        parseInt(strNum[i + 1]) - parseInt(strNum[i]) !== 1 &&
        !(parseInt(strNum[i + 1]) === 0 && parseInt(strNum[i]) === 9)
      ) {
        break;
      }
    }
    if (i === strNum.length - 1) {
      return true;
    }
    for (i = 0; i < strNum.length - 1; i++) {
      if (parseInt(strNum[i + 1]) - parseInt(strNum[i]) !== -1) {
        break;
      }
    }
    if (i === strNum.length - 1) {
      return true;
    }
  }
  return false;
}

function isInteresting(number, awesomePhrases) {
  if (isThisInteresting(number, awesomePhrases)) {
    return 2;
  } else if (
    isThisInteresting(number + 1, awesomePhrases) ||
    isThisInteresting(number + 2, awesomePhrases)
  ) {
    return 1;
  } else {
    return 0;
  }
}

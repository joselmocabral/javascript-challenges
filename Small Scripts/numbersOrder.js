function sortNumbers(comp, number) {
    dif = (comp.split("").reduce((a, c) => (parseInt(c) + a), 0)) -
          (number.split("").reduce((a, c) => (parseInt(c) + a), 0));
    if (dif === 0) {
      dif = comp.localeCompare(number); //Solution to compare numbers as strings
    }
    return dif;
  }
  
  function orderWeight(strng) {
      strng = strng.split(" ");
      strng
        .sort()
        .sort((comp, number) => sortNumbers(comp, number)); //First we sort as strings and them as numbers
      return strng.join(" ");
  }
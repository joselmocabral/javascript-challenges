function numberCases(number) {
    switch (number) {
      case "1":
        return ["1", "2", "4"];
      case "2":
        return ["1", "2", "3", "5"];
      case "3":
        return ["2", "3", "6"];
      case "4":
        return ["1", "4", "5", "7"];
      case "5":
        return ["2", "4", "5", "6", "8"];
      case "6":
        return ["3", "5", "6", "9"];
      case "7":
        return ["4", "7", "8"];
      case "8":
        return ["5", "7", "8", "9", "0"];
      case "9":
        return ["6", "8", "9"];
      case "0":
        return ["0", "8"];
      default:
        return [];
    }
  }
  
  function mixArrays(array1, array2) {
    //console.log(array1);
    //console.log(array2);
    result = []
    for (elem1 in array1) {
      for (elem2 in array2) {
        result.push(array1[elem1] + array2[elem2]);
      }
    }
    return result;
  }
  
  function getPINs(observed) {
    finalResult = numberCases(observed[0]);
    if(observed.length > 1){
      for (i = 1; i < observed.length; i++ ) {
        
        finalResult = mixArrays(finalResult,numberCases(observed[i]));
      }
    }
    return finalResult;
  }
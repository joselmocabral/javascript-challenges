function removeZeros(array) {
    // Sort "array" so that all elements with the value of zero are moved to the
    // end of the array, while the other elements maintain order.
    // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
    // Zero elements also maintain order in which they occurred.
    // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
    
    // Do not use any temporary arrays or objects. Additionally, you're not able
    // to use any Array or Object prototype methods such as .shift(), .push(), etc
    
    // the correctly sorted array should be returned.
    array[array.length] = "|"; // Delimiter
    for (i = 0; i < array.length ; i++) {
      if(array[i] === "|") {
        for(j = i; j < array.length ; j++ ) {
          array[j] = array[j+1];
        }
        array.length = array.length - 1;
        break;
      }
      else if(array[i] === 0) {
        for(j = i; j < array.length ; j++ ) {
          array[j] = array[j+1];
        }
        array[array.length-1] = 0; 
        i--;
      }
      else if(array[i] === "0") {
        for(j = i; j < array.length ; j++ ) {
          array[j] = array[j+1];
        }
        array[array.length-1] = "0"; 
        i--; //Should decrease i to reevaluate the element
      }
    }
    return array;
  }
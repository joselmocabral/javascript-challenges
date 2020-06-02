function josephus(items,k){
    initialLength = items.length;
    index = (k-1)%initialLength;
    finalArray = [];
    for (i = 0; i < initialLength; i ++) {
  
      finalArray.push(items[index]);
      items.splice(index,1);
  
      index = (index + (k-1))%items.length;
    }
    return finalArray;
  }
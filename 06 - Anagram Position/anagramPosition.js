function listPosition(word) {
    //Return the anagram list position of the word
    mappedToNumbers = word
      .split('')
      .map((w) => w.charCodeAt(0) - 'A'.charCodeAt(0));
    let mappedToBigger = [];
    for (i = 0; i < mappedToNumbers.length; i++) {
      mappedToBigger.push(
        mappedToNumbers.slice(i + 1).filter((n) => n > mappedToNumbers[i]).length
      );
    }
    console.log(mappedToBigger);
    return 1;
  }
  
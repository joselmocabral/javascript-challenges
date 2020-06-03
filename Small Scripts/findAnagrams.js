///Find anagrams of a string in a given array

function anagrams(word, words) {
    sortedWord = word.split('').sort().join('');
    return words.filter((w) => w.split('').sort().join('') === sortedWord);
  }
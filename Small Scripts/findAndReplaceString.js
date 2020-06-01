function pigIt(str) {
  words = str.split(" ");
  words = words.map((word, index) => {
    if (word !== "?" && word !== "." && word !== "!") {
      return word.slice(1) + word[0] + "ay";
    } else {
      return word;
    }
  });

  return words.join(" ");
}

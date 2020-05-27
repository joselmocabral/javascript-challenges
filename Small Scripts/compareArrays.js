//Compare if an element in unordered array is equal to the square in another

sortCresc = (a, b) => a - b;

function comp(array1, array2) {
  if (array1 == null || array2 == null) {
    return array1 == [] && array2 == [];
  }
  array1.sort(sortCresc);
  array2.sort(sortCresc);
  return array2.toString() === array1.map(x => x ** 2).toString();
}

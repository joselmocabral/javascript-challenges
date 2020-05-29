function cakes(recipe, available) {
  //Small program to eval how many recipes can you make with a subset of ingredients
  ingredients = Object.keys(recipe);
  let val = null;
  for (const ingred of ingredients) {
    if (available[ingred] == null) {
      return 0;
    }

    if (val == null) {
      val = available[ingred] / recipe[ingred];
    } else {
      val = Math.min(val, available[ingred] / recipe[ingred]);
    }
  }
  return Math.floor(val);
}

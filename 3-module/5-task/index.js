function getMinMax(str) {
  let numbers = str.split(" ").map(parseFloat).filter(isFinite);
  let result = {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
  };
  return result;
}

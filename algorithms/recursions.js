function isEmpty(arr) {
  if (!arr.length) {
    return true;
  }
  return false;
} // Checks if the array is empty

function sum(arr) {
  if (isEmpty(arr)) {
    return 0;
  }

  return arr[0] + sum(arr.slice(1)); // each recursion iteration gets new sliced array
} // Sums elements in array with recursion

console.log("Sum using recursion: " + sum([1, 6, 7])); // for sum()

function elementsCounter(arr) {
  if (isEmpty(arr)) {
    return 0;
  }

  return 1 + elementsCounter(arr.slice(1)); // make recursion ittearations while array is not empty
} // Counts elements in array with recursion

function pow(number, power) {
  if (power === 1) return number;

  // Keep multiplying the number by itself until power reduces to 1
  return pow(number * number, power - 1);
}

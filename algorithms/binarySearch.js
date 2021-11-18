const generateArray = require("../utils/generateArray");
const elements = 5000;
const arr = generateArray(elements);

const benchSearchAlgorithm = (algorithm, name) => {
  console.time(name);
  for (let i = 0; i <= 1000; i++) {
    const target = Math.floor(Math.random() * elements);
    algorithm(target, arr);
  }
  console.timeEnd(name);
};

benchSearchAlgorithm(getElementWithLoop, "For loop");
// Even though this algorithm is not the most performant in one specific case,
// it can yield some good results after many iterations
benchSearchAlgorithm(gelElementWithBinarySearch, "Binary search");

function getElementWithLoop(list, element) {
  var isElement;

  for (var i = 0; i < list.length; i++) {
    if (list[i] == element) {
      isElement = i;
      break;
    } else if (element != list[i]) {
      isElement = false;
    }
  }

  return isElement;
}

function gelElementWithBinarySearch(list, element) {
  var low = 0,
    high = list.length - 1;

  while (low <= high) {
    var mid = low + high;
    guess = list[mid];

    if (guess == element) {
      return mid;
    } else if (guess > element) {
      high = mid - 1;
    }
  }

  return false;
}

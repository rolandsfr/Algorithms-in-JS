const generateArray = require("../utils/generateArray");
const { benchSortingAlgorithm } = require("../utils/bench");

const unsortedArr = generateArray(1000, true);

function selectionSort(array) {
  let temp;

  for (let i = 0; i < array.length; i++) {
    let mi = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[mi]) mi = j;
    }

    temp = array[i];
    array[i] = array[mi];
    array[mi] = temp;
  }

  return array;
} // Selection sorting alogorithm

function qsort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let sorted = [];
  let less = [];
  let greate = [];
  let pivot = arr.pop();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      less.push(arr[i]);
    } else {
      greate.push(arr[i]);
    }
  }

  return sorted.concat(qsort(less), pivot, qsort(greate));
} // Quick sorting algorithm

benchSortingAlgorithm(selectionSort, "Selection sorting");

// Something is off with quicksort, gotta fix it later
benchSortingAlgorithm(qsort, "Quicksorting");

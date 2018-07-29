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

	return arr[0] + sum(arr.slice(1)); // each recursions iterations gets new sliced outcame array
} // Sums elemets in array with recursion

console.log("Sum using recursion: " + sum([1, 6, 7])); // for sum()

function elemetsCounter(arr) {
	if (isEmpty(arr)) {
		return 0;
	}

	return 1 + elemetsCounter(arr.slice(1)); // make recursion ittearations while array is not empty
} // Counts elements in array with recursion
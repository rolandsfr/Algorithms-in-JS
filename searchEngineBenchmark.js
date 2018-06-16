var arr = [0,1 , 2, 3, 4,5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ,18, 19 ,20];

console.time("Loop");
	benchmark(getElementWithLoop(arr, 20));
console.timeEnd("Loop");

console.time("Binary search");
	benchmark(getElementWithLoop(arr, 20));
console.timeEnd("Binary search");

function benchmark(func) {
	for (var i = 0; i <= 1000; i++) {
		func;
	}
}

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
} 	// indexOf not woking so I reutrned
	// value of variable "i" when loop searching elements breaks (and if not returns false)
	

function gelElementWithBinarySearch(list, element) {
	var low = 0,
		high = list.length - 1;

	while (low <= high) {
		var mid = (low + high);
		guess = list[mid];

		if (guess == element) {
			return mid;
		} else if (guess > element) {
			high = mid - 1;
		}
	}

	return false;
}
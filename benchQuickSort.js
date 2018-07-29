function selectionSort(array) {
    let temp;

    for(let i=0; i<array.length; i++){
        let mi = i;
        
        for(let j = i + 1; j<array.length; j++) {
            if(array[j] < array[mi])
                mi = j;
        }

        temp = array[i];
        array[i] = array[mi];
        array[mi] = temp;
    }

    return array;
} // Selection sorting alogorithm

console.log('With selection sort: ' + selectionSort([2, 34, 1, 6564, 23, 6,2]));

function qsort(arr) {
	if (arr.length < 2) {
		return arr;
	}


	let sorted = [];
	let less = [];
	let greate = [];
	let pivot = arr.pop();

	for (let i = 0; i < arr.length; i++) {
		if(arr[i] <= pivot) {
			less.push(arr[i]);
		} else {
			greate.push(arr[i])
		}
	}

	return sorted.concat(qsort(less), pivot, qsort(greate));
} // Quick sorting algorithm

let testArray = [2 ,4, 1, 5, 7, 2, 6, 34, 223, 3,23];

let start = performance.now();

for(let i = 0; i < 1000000; i++) {
	selectionSort(testArray);
}

let end = performance.now() - start;

let start2 = performance.now(); 

for(let i = 0; i < 1000000; i++) {
	qsort(testArray);
}

let end2 = performance.now() - start2; // all this is a benchMark

console.log("Selection sort algorithm - " + end + "ms");
console.log("Quick sort algorithm - " + end2 + "ms"); //Output
export default class AllSorts {
	
	// 1. Bubble Sort
	bubble(arr) {
		let changesCount = 0;
		for(let i = 0; i < arr.length; i += 1) {
			console.log(i);
			if (arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				changesCount += 1;
			}
			if (i === arr.length - 1) {
				i = (changesCount > 0 ? 0 : i + 2);
				changesCount = 0;
			}
		}
		return arr;
	}

	// 2. Optimized Bubble Sort
	// 3. Coctail Shaker Sort
	// 4. Optimized Coctail Shaker Sort
}
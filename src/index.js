export default class AllSorts {
	
	// 1. Bubble Sort
	bubble(arr) {
		let changesCount = 0;
		for(let i = 0; i < arr.length; i += 1) {
			if (arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				changesCount += 1;
			}
			if (i === arr.length - 1) {
				i = (changesCount > 0 ? -1 : i + 2);
				changesCount = 0;
			}
		}
		return arr;	
	}

	// 2. Optimized Bubble Sort
	bubbleOpt(arr) {
		let changesCount = 0;
		let i = 0;
		let lastElIndex = arr.length - 1;
		while(i <= lastElIndex) {
			if (arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				changesCount += 1;
			}
			if (i === lastElIndex) {
				i = (changesCount > 0 ? -1 : i);
				changesCount = 0;
				lastElIndex -= 1;
			}
			i += 1;
		}
		return arr;
	}

	// 3. Coctail Shaker Sort
	shaker(arr) {
		if (arr.length === 0 || arr.length === 1) return arr; 
		let changesCount = 0;
		let sorted = false;
		while(sorted === false) {
			for (let i = 0; i < arr.length; i++) {
				if (arr[i] > arr[i + 1]) {
					[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
					changesCount += 1;
				}
			}
			for (let j = arr.length - 1; j >= 0; j--) {
				if (j > 0 && arr[j] < arr[j - 1]) {
					[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
					changesCount += 1;
				}
				if (j === 0) {
					sorted = changesCount > 0 ? false : true;
					changesCount = 0;
				}
			}
		}
		return arr;
	}

	// 4. Optimized Coctail Shaker Sort
}
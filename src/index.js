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
	shakerOpt(arr) {
		if (arr.length === 0 || arr.length === 1) return arr;
		let sorted = false;
		let changesCount = 0;
		let edgeLeft = 0;
		let edgeRight = arr.length - 1;
		while(sorted === false) {
			for(let i = edgeLeft; i <= edgeRight; i++) {
				if (arr[i] > arr[i + 1]) {
					[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
					changesCount += 1;
				}
			}
			for (let j = edgeRight; j >= edgeLeft; j--) {
				if (j > 0 && arr[j] < arr[j - 1]) {
					[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
					changesCount += 1;
				}
				if (j === edgeLeft) {
					sorted = changesCount > 0 ? false : true;
					changesCount = 0;
				}
			}
			edgeLeft += 1;
			edgeRight -= 1;
		}
		return arr;
	}

	// 5. Odd-Even Sort
	oddEven(arr) {
		let sorted = false;
		let changesCount = 0;
		while (!sorted) {
			for(let i = 1; i < arr.length; i += 2) {
				if (arr[i] > arr[i + 1]) {
					[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
					changesCount += 1;
				}
			}
			if (changesCount === 0) {
				sorted = true;
				break;
			};
			for (let i = 0; i < arr.length; i += 2) {
				if (arr[i] > arr[i + 1]) {
					[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
					changesCount += 1;
				}
			}
			if (changesCount === 0) sorted = true;
			changesCount = 0;
		}
		return arr;
	}

	// 6. Gnome Sort
	gnome(arr) {
		for(let i = 1; i < arr.length; i++) {
			if (arr[i] < arr[i - 1]) {
				[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
				i -= 2;
			}
		}
		return arr;
	}

	// 17. Cycle Sort
	cycle(arr) {}

	// ?. Quicksort
	quick(arr) {
		if (arr.length === 0 || arr.length === 1) return arr;
		else if (arr.length === 2) return arr[0] <= arr[1] ? arr : [arr[1], arr[0]];
		const pivot = arr[Math.floor(arr.length / 2)];
		const pivotIndex = Math.floor(arr.length / 2);
		arr = arr.reduce((acc, item, index) => {
			if (index === pivotIndex) return acc;
			if (item < pivot) acc.unshift(item);
			else if (item >= pivot) acc.push(item);
			return acc;
		}, [pivot]);
		return [...this.quick(arr.slice(0, arr.indexOf(pivot))), pivot, ...this.quick(arr.slice(arr.indexOf(pivot) + 1))];
	}
}


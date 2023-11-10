export default class AllSorts {

	// 1. Bubble Sort
	static bubble(arr) {
		let changesCount = 0;
		for (let i = 0; i < arr.length; i += 1) {
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
	static bubbleOpt(arr) {
		let changesCount = 0;
		let i = 0;
		let lastElIndex = arr.length - 1;
		while (i <= lastElIndex) {
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
	static shaker(arr) {
		if (arr.length === 0 || arr.length === 1) return arr;
		let changesCount = 0;
		let sorted = false;
		while (sorted === false) {
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
	static shakerOpt(arr) {
		if (arr.length === 0 || arr.length === 1) return arr;
		let sorted = false;
		let changesCount = 0;
		let edgeLeft = 0;
		let edgeRight = arr.length - 1;
		while (sorted === false) {
			for (let i = edgeLeft; i <= edgeRight; i++) {
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
	static oddEven(arr) {
		let sorted = false;
		let changesCount = 0;
		while (!sorted) {
			for (let i = 1; i < arr.length; i += 2) {
				if (arr[i] > arr[i + 1]) {
					[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
					changesCount += 1;
				}
			}
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
	static gnome(arr) {
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] < arr[i - 1]) {
				[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
				i -= 2;
			}
		}
		return arr;
	}

	// 7. Comb Sort
	static comb(arr) {
		if (arr.length === 0 || arr.length === 1) return arr;
		let sorted = false;
		let distance = arr.length;
		while (!sorted) {
			for (let i = 0; i + distance < arr.length; i++) {
				if (arr[i] > arr[i + distance]) {
					[arr[i], arr[i + distance]] = [arr[i + distance], arr[i]];
				}
			}
			distance -= 1;
			if (distance === 0) sorted = true;
		}
		return arr;
	}

	// 8. Circle Sort
	static circle(arr) {
		for (let i = 0; i < arr.length / 2; i++) {
			if (arr[i] > arr[arr.length - i]) [arr[i], arr[arr.length - i]] = [arr[arr.length - i], arr[i]];
		}
		return [...this.circle(arr.slice(0, Math.floor(arr.length / 2))), ...this.circle(Math.floor(arr.length / 2))];
	}

	// 9. Quicksort
	static quick(arr) {
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

	// 10. Dual-Pivot Quicksort
	static dualQuick(arr) {
		if (arr.length === 0 || arr.length === 1) return arr;
		else if (arr.length === 2) return arr[0] <= arr[1] ? arr : [arr[1], arr[0]];
		let p1;
		let p2;
		if (arr[0] > arr[arr.length - 1]) {
			[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
		}
		p1 = arr[0];
		p2 = arr[arr.length - 1]
		arr = arr.reduce((acc, item, index) => {
			if (index === 0 || index === arr.length - 1) return acc;
			if (item < p1) acc[0].push(item);
			else if (item >= p1 && item <= p2) acc[1].push(item);
			else if (item > p2) acc[2].push(item);
			return acc;
		}, [[], [], []]);
		return [...this.dualQuick(arr[0]), p1, ...this.dualQuick(arr[1]), p2, ...this.dualQuick(arr[2])];
	}

	// 11. Selection Sort

	// 17. Cycle Sort
	static cycle(arr) { }

}


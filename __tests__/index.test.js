import AllSorts from "../src/index.js";
import { merge } from "../src/t.js";

let ex1;
let ex2;
const ex3 = [2, 4, 5, 8, 10, 22, 22, 100];
// let ex4;
// let ex5;
// let ex6;
const sorted1 = [0, 1, 5, 5, 6, 10, 20, 22, 25, 44, 80, 91, 100];
const sorted2 = [0, 1, 1, 3, 4, 4, 5, 10, 38, 44, 90];

beforeEach(() => {
	ex1 = [1, 0, 10, 100, 20, 22, 25, 6, 5, 44, 91, 80, 5];
	ex2 = [1, 4, 4, 5, 3, 10, 0, 90, 1, 44, 38];
	// ex4 = [-9, -50, 100, 0, 1, 3, 6, 70, -100, 44, 3];
	// ex4 = [0, -10, -2, -8, -9, -2, -1, 0];
	// ex5 = [0.25, 0.4, 0, 0.75, 0.625, 0, -0.2];
});

test('bubble sort', () => {
	expect(AllSorts.bubble([])).toStrictEqual([]);
	expect(AllSorts.bubble(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.bubble(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.bubble(ex3)).toStrictEqual(ex3);
});
test('optimized bubble sort', () => {
	expect(AllSorts.bubbleOpt([])).toStrictEqual([]);
	expect(AllSorts.bubbleOpt(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.bubbleOpt(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.bubbleOpt(ex3)).toStrictEqual(ex3);
});
test('coctail shaker sort', () => {
	expect(AllSorts.shaker([])).toStrictEqual([]);
	expect(AllSorts.shaker(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.shaker(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.shaker(ex3)).toStrictEqual(ex3);
});
test('optimized coctail shaker sort', () => {
	expect(AllSorts.shakerOpt([])).toStrictEqual([]);
	expect(AllSorts.shakerOpt(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.shakerOpt(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.shakerOpt(ex3)).toStrictEqual(ex3);
});
test('odd-even sort', () => {
	expect(AllSorts.oddEven([])).toStrictEqual([]);
	expect(AllSorts.oddEven(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.oddEven(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.oddEven(ex3)).toStrictEqual(ex3);
});
test('gnome sort', () => {
	expect(AllSorts.gnome([])).toStrictEqual([]);
	expect(AllSorts.gnome(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.gnome(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.gnome(ex3)).toStrictEqual(ex3);
});
test('comb sort', () => {
	expect(AllSorts.comb([])).toStrictEqual([]);
	expect(AllSorts.comb(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.comb(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.comb(ex3)).toStrictEqual(ex3);
});
test('circle sort', () => {
	expect(AllSorts.comb([])).toStrictEqual([]);
	expect(AllSorts.comb(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.comb(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.comb(ex3)).toStrictEqual(ex3);
});
test('quicksort', () => {
	expect(AllSorts.quick([])).toStrictEqual([]);
	expect(AllSorts.quick(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.quick(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.quick(ex3)).toStrictEqual(ex3);
});
test('dual-pivot quicksort', () => {
	expect(AllSorts.dualQuick([])).toStrictEqual([]);
	expect(AllSorts.dualQuick(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.dualQuick(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.dualQuick(ex3)).toStrictEqual(ex3);
});
test('selection sort', () => {
	expect(AllSorts.selection([])).toStrictEqual([]);
	expect(AllSorts.selection(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.selection(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.selection(ex3)).toStrictEqual(ex3);
});
/*
test('double selection sort', () => {
	expect(AllSorts.doubleSelection([])).toStrictEqual([]);
	expect(AllSorts.doubleSelection(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.doubleSelection(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.doubleSelection(ex3)).toStrictEqual(ex3);
});
*/
test('cycle sort', () => {
	expect(AllSorts.cycle([])).toStrictEqual([]);
	expect(AllSorts.cycle(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.cycle(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.cycle(ex3)).toStrictEqual(ex3);
});
test('insertion sort', () => {
	expect(AllSorts.insertion([])).toStrictEqual([]);
	expect(AllSorts.insertion(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.insertion(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.insertion(ex3)).toStrictEqual(ex3);
});
test('shell sort', () => {
	expect(AllSorts.shell([])).toStrictEqual([]);
	expect(AllSorts.shell(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.shell(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.shell(ex3)).toStrictEqual(ex3);
});
test('unbalansed tree sort', () => {
	expect(AllSorts.tree([])).toStrictEqual([]);
	expect(AllSorts.tree(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.tree(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.tree(ex3)).toStrictEqual(ex3);
});
test('merge sort', () => {
	expect(AllSorts.merge([1])).toStrictEqual([1]);
	expect(AllSorts.merge([1, 6, 2])).toStrictEqual([1, 2, 6]);
	expect(AllSorts.merge([10, 1])).toStrictEqual([1, 10]);
	expect(AllSorts.merge([])).toStrictEqual([]);
	expect(AllSorts.merge(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.merge(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.merge(ex3)).toStrictEqual(ex3);
});
test('buttom-up merge sort', () => {
	expect(AllSorts.mergeIter([1])).toStrictEqual([1]);
	expect(AllSorts.mergeIter([1, 6, 2])).toStrictEqual([1, 2, 6]);
	expect(AllSorts.mergeIter([10, 1])).toStrictEqual([1, 10]);
	expect(AllSorts.mergeIter([])).toStrictEqual([]);
	expect(AllSorts.mergeIter(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.mergeIter(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.mergeIter(ex3)).toStrictEqual(ex3);	
});
test('in-place merge sort', () => {
	expect(AllSorts.mergeInPlace([1])).toStrictEqual([1]);
	expect(AllSorts.mergeInPlace([1, 6, 2])).toStrictEqual([1, 2, 6]);
	expect(AllSorts.mergeInPlace([10, 1])).toStrictEqual([1, 10]);
	expect(AllSorts.mergeInPlace([])).toStrictEqual([]);
	expect(AllSorts.mergeInPlace(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.mergeInPlace(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.mergeInPlace(ex3)).toStrictEqual(ex3);	
});
test('counting sort', () => {
	expect(AllSorts.count([1])).toStrictEqual([1]);
	expect(AllSorts.count([1, 6, 2])).toStrictEqual([1, 2, 6]);
	expect(AllSorts.count([10, 1])).toStrictEqual([1, 10]);
	expect(AllSorts.count([])).toStrictEqual([]);
	expect(AllSorts.count(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.count(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.count(ex3)).toStrictEqual(ex3);	
});
test('least significant digit radix sort', () => {
	expect(AllSorts.radixLSD([1])).toStrictEqual([1]);
	expect(AllSorts.radixLSD([1, 6, 2])).toStrictEqual([1, 2, 6]);
	expect(AllSorts.radixLSD([10, 1])).toStrictEqual([1, 10]);
	expect(AllSorts.radixLSD([])).toStrictEqual([]);
	expect(AllSorts.radixLSD(ex1)).toStrictEqual(sorted1);
	expect(AllSorts.radixLSD(ex2)).toStrictEqual(sorted2);
	expect(AllSorts.radixLSD(ex3)).toStrictEqual(ex3);	
});
test('most significant digit radix sort', () => {
	expect(AllSorts.radixMSD([])).toStrictEqual([]);
	expect(AllSorts.radixMSD([1])).toStrictEqual([1]);
	expect(AllSorts.radixMSD([2, 91])).toStrictEqual([91, 2]);
	expect(AllSorts.radixMSD([1, 0, 8])).toStrictEqual([0, 1, 8]);
	expect(AllSorts.radixMSD([200, 100, 101, 102, 0, 5, 66, 90, 51, 81, 99, 66, 1, 0]))
		.toStrictEqual([0, 0, 100, 200, 90, 1, 101, 51, 81, 102, 5, 66, 66, 99]);
});

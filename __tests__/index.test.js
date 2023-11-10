import AllSorts from "../src/index.js";

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

import AllSorts from "../src/index.js";

const sorts = new AllSorts();
let ex1;
let ex2;
const sorted1 = [0, 1, 5, 5, 6, 10, 20, 22, 25, 44, 80, 91, 100];
const sorted2 = [0, 1, 1, 3, 4, 4, 5, 10, 38, 44, 90];

beforeEach(() => {
	ex1 = [1, 0, 10, 100, 20, 22, 25, 6, 5, 44, 91, 80, 5];
	ex2 = [1, 4, 4, 5, 3, 10, 0, 90, 1, 44, 38];
})

test('bubble sort', () => {
	expect(sorts.bubble([])).toStrictEqual([]);
	expect(sorts.bubble(ex1)).toStrictEqual(sorted1);
	expect(sorts.bubble(ex2)).toStrictEqual(sorted2);
});
test('optimized bubble sort', () => {
	expect(sorts.bubbleOpt([])).toStrictEqual([]);
	expect(sorts.bubbleOpt(ex1)).toStrictEqual(sorted1);
	expect(sorts.bubbleOpt(ex2)).toStrictEqual(sorted2);
})
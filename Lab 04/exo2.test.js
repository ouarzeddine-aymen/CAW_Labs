
const { first, last, chunk } = require('./ex02');

describe('first function', () => {
    test('returns the first element if n==null', () => {
        expect(first([1, 2, 3])).toBe(1);
    });

    test('returns an empty array if n <=0', () => {
        expect(first([1, 2, 3], 0)).toEqual([]);
        expect(first([1, 2, 3], -1)).toEqual([]);
    });

    test('returns the first n elements of the array', () => {
        expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
    });
});

describe('last function', () => {
    test('returns the last element if n ==null', () => {
        expect(last([1, 2, 3])).toBe(3);
    });

    test('returns an empty array if array =[]', () => {
        expect(last(null)).toEqual([]);
    });

    test('returns the last n elements of the array', () => {
        expect(last([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
    });
});

describe('chunk function', () => {
    test('chunks array into smaller arrays of specified size', () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
        expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
    });

    test('returns an empty array if size is greater than array length', () => {
        expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
    });
});

describe('myColor array join tests', () => {
    const myColor = ["Red", "Green", "White", "Black"];

    test('joins with commas', () => {
        expect(myColor.join()).toBe("Red,Green,White,Black");
    });

    test('joins with empty string', () => {
        expect(myColor.join('')).toBe("RedGreenWhiteBlack");
    });

    test('joins with custom separator', () => {
        expect(myColor.toString()).toBe("Red,Green,White,Black");
    });
});


const avg = require('./avg');

test('calculates the avg of an array of numbers', () => {
    expect(avg([10, 20, 30, 40, 50])).toBe(30);

});

test('return nan if array is empty', () => {
    expect(avg([])).toBeNaN();
});

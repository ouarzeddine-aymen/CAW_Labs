const setOne = (arr) => arr.filter((value, index, self) => self.indexOf(value) === index);
console.log(setOne([4, 5, 5, 2, 2, 4, 3, 1, 5, 2])); 

//**************** */
const getRidOf = (tab, ...vals) => tab.filter((value) => !vals.includes(value));

console.log(getRidOf(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'b', 'e', 'x')); 



//Qs01
let v1 = 10, v2 = 20;
[v1, v2] = [v2, v1];
console.log(v1, v2); 

//Qs02
const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];
const foods = ["mango", "pecan pie"];

let combinedArray = []; 
function Concatenation(TArray, sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    TArray[TArray.length] = sourceArray[i];
  }
}
Concatenation(combinedArray, numbers);
Concatenation(combinedArray, letters);
Concatenation(combinedArray, foods);
console.log(combinedArray);


//Qs3
x= 'ahmed';
console.log([...x])

//Qs4

//a) fn(1,2,3,'A','B','C');

  output =[3,'A','B','C']

//b) fn(1,2) ;
 
output= []

//c) let x= [‘a’,’b’,’c’,’d’] ; fn(...x) ;

output =['c','d']



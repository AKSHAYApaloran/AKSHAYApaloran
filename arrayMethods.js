var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

const newarr = numbers.map((element) => {
  return element * 2;
});
console.log(newarr);
//Filter - Create a new array by keeping the items that return true.
const farr = numbers.filter((num) => num % 2 == 0);
console.log(farr);
//Reduce - Accumulate a value by doing something to each item in an array.
const rarr = numbers.reduce((acc, num) => acc + num);
console.log(rarr);
//Find - find the first item that matches from an array.
const findarr = numbers.find((num) => num % 2 == 0);
console.log(findarr);
//FindIndex - find the index of the first item that matches.
const indexarr = numbers.findIndex((num) => num % 2 == 0);
console.log(indexarr);
//every - Returns true if all elements in an array satisfy the condition. Often used for validation checks.
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven);
//some -Returns true if at least one element satisfies the condition; otherwise, it returns false. Ideal for checking if any element in an array meets a specific condition
const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven);

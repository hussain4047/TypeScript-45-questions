// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:

// Tests for equality and inequality with strings

// Tests using the lower case function

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.

// Tests using "and" and "or" operators

// Test whether an item is in a array

// Test whether an item is not in a array

let fruit : string = "Apple"
console.log(fruit == "Apple");  //  True
console.log(fruit == "apple");  //  False


console.log(fruit.charAt(0).toUpperCase() + fruit.slice(1).toLowerCase()  == fruit); //True
console.log(fruit.toLowerCase() == fruit); // False


let number = 53;
console.log(100 > number); //True
console.log(number < 10); //False

console.log(number > 10  || number < 50); //True
console.log(number > 10  && number < 50); // False

let arr = ["Hussain", "Ali Asghar"]
console.log(arr.includes("Hussain")); //True
console.log(arr.includes("Ali")); //False
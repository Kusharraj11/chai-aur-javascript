const score = 400;
const balance = new Number(100); // This creates a Number object, which is a wrapper around the primitive number value. The primitive value can be accessed using the .valueOf() method or by using the unary + operator.
console.log(score);
console.log(balance);  

console.log(balance.toString().length);// This will return the length of the string representation of the number, which is 3 in this case ("100").  
console.log(balance.toFixed(2)); // This will return a string representation of the number with 2 decimal places.

const otherNumber = 123.856789;
console.log(otherNumber.toFixed(2)); // This will return a string representation of the number with 2 decimal places, which is "123.46" in this case.
console.log(otherNumber.toPrecision(4)); // This will return a string representation of the number with 4 significant digits, which is "123.5" in this case.

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN')); // This will return a string representation of the number formatted according to the Indian numbering system, which is "10,00,000" in this case.


// ++++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-5)); // This will return the absolute value of -5, which is 5.
console.log(Math.round(4.6)); // This will return the value of 4.6 rounded to the nearest integer, which is 5.
console.log(Math.floor(4.6)); // This will return the largest integer less than or equal to 4.6, which is 4.
console.log(Math.ceil(4.2)); // This will return the smallest integer greater than or equal to 4.2, which is 5.
console.log(Math.max(1, 2, 3, 4, 5)); // This will return the largest of the given numbers, which is 5.         
console.log(Math.min(1, 2, 3, 4, 5)); // This will return the smallest of the given numbers, which is 1.

console.log(Math.random()); // This will return a random number between 0 (inclusive) and 1 (exclusive).
console.log((Math.random() * 10) + 1); // This will return a random number between 1   (inclusive) and 10 (exclusive).

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // This will return a random integer between min (inclusive) and max (inclusive).
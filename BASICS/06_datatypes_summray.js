//primetive
// 7 types of primetive data types
// 1. string - string
// 2. number - number
// 3. boolean - boolean
// 4. null - object
// 5. undefined - undefined
// 6. symbol - symbol
// 7. bigint - bigint

const score = 100;
const scoreValue = 100.5;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);
const bigNumber = 9007199254740991n;


//reference data types
//non-primetive data types
// 1. object - object
// 2. array  - object
// 3. function  - function

const heros = ["shaktiman", "nagraj", "doga"];

const myObj = {
    name: "kushar",
    age: 25,
};

const myFunction = function () {
    console.log("hello world");
}


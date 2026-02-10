const name = "kushar"
const repocount = 50

//console.log(name + repocount + "value");

console.log (`hello my name is ${name} and I have ${repocount} repositories`);
//string concatenation
//string interpolation

const myName = new String("kushar");

console.log(myName[0]); 
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.__proto__); 

console.log(myName.charAt('2'));
console.log(myName.indexOf('s')); 

const newString = myName.substring(0, 5);
console.log(newString);

const anotherString = myName.slice(-6, 4); //
console.log(anotherString);

const newStringOne = "     kushar     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.youtube.com/kushar%20raj";
console.log(url.replace("%20", "-"));

console.log(url.includes("kushar"));

console.log(url.split("/"));
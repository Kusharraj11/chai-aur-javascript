// Write a program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

let pet = "dog";
let result = [];

for (let i = 0; i < pet.length; i++) {
  for (let j = i + 1; j <= pet.length; j++) {
    result.push(pet.slice(i, j));
  }
}

console.log(result);

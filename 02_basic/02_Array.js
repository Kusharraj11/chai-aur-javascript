const marvel_heros=["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3][1]);
const allheros =marvel_heros.concat(dc_heros)
console.log(allheros)

const all_new_heros = [...marvel_heros,...dc_heros]//spread oprator
console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5,[3, 6,[6, 9, 0]]]]]
const al_another_array = another_array.flat(2)// flat will be alin in one array all the sub arrays
console.log("new" , al_another_array, "old", another_array)

console.log(Array.isArray("Hitesh"))//asking is array or not
console.log(Array.from("Hitesh"))// converted to array
console.log(Array.from({name:" hitesh"}))//why ? empty array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2 , score3));//Returns a new array from a set of elements. same as from 
// console.log("K");
// console.log("U");
// console.log("S");
// console.log("H");
// console.log("A");
// console.log("R");

//const { use } = require("react")

// function sayMyName () { 
//     console.log("K");
//     console.log("U");
//     console.log("S");
//     console.log("H");
//     console.log("A");
//     console.log("R");
// }
// sayMyName () //sayMyName- reference () - execution 


// function addTwoNumabers(number1, number2){  //parameters are the variable names in a function's definition (placeholders)
//     console.log(number1+number2);
// }
//addTwoNumabers(5, 9) // arguments are the actual values passed to the function when it is called (invoked)


function addTwoNumabers(number1, number2){ 
        //let result = number1 + number2
       // return result
        //console.log("kushar"); //Unreachable code detected.
        return number1 + number2
}
const result = addTwoNumabers(3, 5)
//console.log("Result:" , result);

function loginUserMassage(Username){
    if (Username === undefined)
        //if(!username){}   
        {
        console.log("please enter a username");
        return
    }
    return `${Username} just logged in`
   
}
//loginUserMassage("kushar")
//console.log(loginUserMassage("kushar"))
console.log(loginUserMassage("kushar"))
 

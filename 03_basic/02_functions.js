function calculateCartPrice(...num1){ //The rest operator in JavaScript, denoted by three consecutive dots ..., is used to gather the remaining elements of an iterable (like an array) or properties of an object into a single variable
  /*function calculateCartPrice(val1, val2, ...num1)
   output will be 500 2000 beacuse val1 store 200 and vale2 400
    rest will tranfer to ...num1*/
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000, "krk"));

const user = {
    username: "kuhsar",
    price : 199

}

function handleObejct (anyobject){
    console.log(`Username is ${anyobject.username} and price is
        ${anyobject.price}`);
    
}
//handleObejct(user)
handleObejct({
    username : "sam",
    price : 399
})

const myNewArray = [200, 400, 100, 600]

function returSecondVaue(getArray){
    return getArray[1]
}
console.log (returSecondVaue(myNewArray))
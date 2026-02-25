//const Gameuser = new Object()// singleton obeject
// const Gameuser ={}// non singleton object
// Gameuser.id = "123abc"
// Gameuser.name = "kushar"
// Gameuser.isLoggedIn = false
// // console.log(Gameuser);

// const regularUser = {
//     email : "kusharraj11@gmail.com",
//     fullname:{
//         userfullname: {
//             firstname : "kushar",
//             lastname : "raj",

//         }
//     }
// }
//console.log(regularUser.fullname?.userfullname.firstname)
//? for proteaction  WHAT IF  fullname exsits hi na karta ho to then kai baar api se response ata hai to if else karke search karna hoga\

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 ={5: "a", 6:"b"}
// const obj3 = {obj1 , obj2}
// //const obj3 = Object.assign({},obj1, obj2,obj4)
// // const obj3 = {...obj1,...obj2}
// console.log(obj3);
// obj3[obj1][2] = "z";
// console.log("line29",obj3);
// console.log("line30",obj1);

const users = [
    {
      id:1,
      email:"krk@gmail.com"
    },
    {
      id:1,
      email:"kruu@gmail.com"
    },
    {
      id:1,
      email:"krsss@gmail.com"
    }
]

users[1].email
console.log(users[2].email)// can acess by key value (indexing)
// console.log(Gameuser)

// console.log(Object.keys(Gameuser));
// console.log(Object.values(Gameuser));
// console.log(Object.entries(Gameuser));// key and value coverted into array

// console.log(Object.hasOwnProperty('isLoggedIn'));
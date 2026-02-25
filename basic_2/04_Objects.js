// //singleton
// //Object.create


// //obeject literals

const mySym = Symbol("key1")

const jsuser = {
    name: "Kushar",
    "full name" : "Kushar Raj Kashyap",
    [mySym]: "mykey1",
    age: 25,
    location: "jaipur",
    email: "ksuahrraj11@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
console.log(jsuser["full name"]);
console.log (jsuser.email)
console.log (jsuser["email"])
///console.log (jsuser.fullname) worng way cannot be access
console.log (jsuser["full name"])
console.log(typeof[mySym]);
jsuser.email = "krk@gmail.com"
//Object.freeze(jsuser)// freeze the obejct can do further changes  
console.log(jsuser.email);
jsuser.email = "krk@microsoft.com"
// console.log(jsuser);

jsuser.greeting = function (){
    console.log("Hello JS user")
}
jsuser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);
    
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());


let user = {
  name: "Kushar",
  greet: function() {
    console.log("Hello " + this.name);
    console.log(`hello ${this.name}`)
  }
};

user.greet();

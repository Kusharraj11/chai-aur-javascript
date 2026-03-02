// stack and heap memory
// primetive data types are stored in stack memory
// reference data types are stored in heap memory

let myYouTubeChannel = "kushar"
let anotherChannel = myYouTubeChannel;
anotherChannel = "kushar raj";
console.log(myYouTubeChannel);
console.log(anotherChannel);

let userOne = {
    email: "kushar@gmail.com",
    upi: "kushar@ok",
}

let userTwo = userOne;
userTwo.email = "kusharraj11@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
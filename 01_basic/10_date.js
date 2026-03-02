//Dates
let mydate = new Date();
console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let myCreatedDate = new Date(2023, 0, 25); // Note: months are 0-indexed in JavaScript
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2020, 0 , 25, 5, 30, 0); // year, month, day, hours, minutes, seconds
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-01-14"); // This will be treated as a timestamp (milliseconds since January 1, 1970)
console.log(myCreatedDate3.toLocaleString());

let mytimestamp = Date.now(); // This will return the current timestamp in milliseconds
console.log(mytimestamp);

console.log(myCreatedDate.getTime()); // This will return the timestamp of the specified date in milliseconds

let myTimestamp = Date.now();
console.log(Math.floor(Date.now()/1000)); // Convert milliseconds to seconds


// Get individual date components
console.log("Year:", mydate.getFullYear());
console.log("Month:", mydate.getMonth() + 1);// Months are 0-indexed, so we add 1 to get the correct month number
console.log("Date:", mydate.getDate());

mydate.toLocaleString('default', {
    weekday: "long",
    //timezone: "kolkata",
});

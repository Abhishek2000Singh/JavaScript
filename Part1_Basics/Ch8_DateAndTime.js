//Dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);  //object

// let createMyDate = new Date(2023, 0, 23)
// console.log(createMyDate.toDateString());
let createMyDate = new Date("2023-01-14")
// console.log(createMyDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(createMyDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //convert into seconds

let newDate = new Date();
// console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default',{
    weekday: 'long',
    // timeZone: ''
})

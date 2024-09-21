// dates

let mydate = new Date();
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toTimeString())
console.log(typeof mydate)  // here mydate is an object

// let createdate = new Date(2023, 11, 2)
// let createdate = new Date(2023, 15, 2, 5, 6)
// let createdate = new Date("2023-01-15")
let createdate = new Date("01-15-2024")
console.log(createdate)
console.log(createdate.toLocaleDateString())

let mytimestamp = Date.now();  // it gives the time in milliseconds and the time comes from the starting time to till now 
console.log(mytimestamp)
console.log(createdate.getTime())

//to convert milliseconds to seconds we divide it by 1000
console.log(Date.now() / 1000)

let newdate = new Date()
console.log(newdate)
console.log(newdate.getDate())
console.log(newdate.getMonth() + 1)

//
//  `${newdate.getDay()} and the time `   // string interpolition 
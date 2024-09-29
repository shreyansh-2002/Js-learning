// const useremail = "shrey@gmail.com"
const useremail = []

if (useremail) {
    console.log("got the user email");
}
else {
    console.log("don't have user email");
}

// falsy values 

// false, 0 , -0, BigInt 0n, "" , null , undefined, NaN

// truthy values

// "0", 'false' , " ",[],{},function(){}

// if (useremail.length === 0) {
//     console.log("array is empty");
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
// }

// Nullish coalescing Operator (??) : null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 10
console.log(val1);

// ternary operator 

// condition ? true : false

const iceteaprice = 210

iceteaprice <= 400 ? console.log("price shi hai") : console.log("mehngi hai");



// two types of datatypes primitive and non primitive

//primitive

// 7 types : number,string, boolean ,null , undefined ,symbol, BigInt

const score = 30
const value = 33.3

const name = "shrey"
const IsLoggedIn = false
const nulldata = null
let notdefined;

const id = Symbol("123")
const anotherid = Symbol("123")

// console.log(id === anotherid);

const bignumber = 353653674365n;

// Non primitive(reference)

// Array , object , functions


//array is also an object 
const arr = ["shrey","sam","dev"]
let obj = {
    name : "shreyansh",
    age : 22,
}

// datatype of function if also an function
const myfunc = function(){
    console.log("namaste duniya");
}

console.log(typeof myfunc);
console.log(typeof bignumber);
console.log(typeof arr);



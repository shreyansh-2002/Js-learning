const name = "shrey"
const age = 23

// this is an outdated method so don't prefer it 
// console.log(name + age);


//this is the most newest method for strings
console.log(`hello my name is ${name} and my age is ${age}`);

const gameName = new String(`shreyansh`)

console.log(gameName[0]);
console.log(gameName.__proto__);

//length is used to find size of the string
console.log(gameName.length);

console.log(gameName.toUpperCase());

// char at is used to find the char at given index
console.log(gameName.charAt(3));

// indexof is used to character at given position
console.log(gameName.indexOf('h'));

const gamestring = gameName.substring(0,3)
console.log(gamestring);


// slice can take neg values but substring not
const anotherstring = gameName.slice(-8,3)
console.log(anotherstring);

const newstr = "      shrey     "
console.log(newstr);

const trimstr = newstr.trim()
console.log(trimstr);

const url = "https:/shrey.com/shreyansh%20somani"

console.log(url.replace('%20','-'));

console.log(url.includes('somani'));

// split function is used to put values in an array
console.log(gameName.split('-'));














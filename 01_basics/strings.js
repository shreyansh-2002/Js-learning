const name = "shrey"
const age = 23

// this is an outdated method so don't prefer it 
// console.log(name + age);


//this is the most newest method for strings
console.log(`hello my name is ${name} and my age is ${age}`);

const gameName = new String(`shreyansh`)

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

const gamestring = gameName.substring(0,3)
console.log(gamestring);

const anotherstring = gameName.slice(-8,3)
console.log(anotherstring);

const newstr = "      shrey     "
console.log(newstr);

const trimstr = newstr.trim()
console.log(trimstr);














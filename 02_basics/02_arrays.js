const marvel = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// push operation manipulates the data in the same array
// marvel.push(dc_heros);

// console.log(marvel);
// console.log(marvel[3][1]);


// concat creates the copy of the manipulated array 
const allheros = marvel.concat(dc_heros);


// ...(spread operator) -> this operator is used to spread out things 
// const allheros = [...marvel, ...dc_heros]
console.log(allheros);

const newarr = [2, 3, 4, 5, [56, 6, 7], 8, 4, [4, 6, [7, 9, 2]]]

//in flat function we have to decide the depth 
const anotherarr = newarr.flat(Infinity)
console.log(anotherarr)

// it s used to check the if given input is array or not 
console.log(Array.isArray("shreyansh"))

// it id used to make  the array from given input 
console.log(Array.from("shreyansh"))
console.log(Array.from({ name: "shrey" }))

let scr1 = 34
let scr2 = 45
let scr3 = 56


// this method is used to make the array of the data 
console.log(Array.of(scr1, scr2, scr3))








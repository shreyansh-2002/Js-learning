// for of loop we max use in the normal scenarios

// ["","",""]
// [{},{},{}]

// const arr = [1, 4, 5, 6, 7]


// // for of loop 
// for (const num of arr) {
//     console.log(num);
// }

// const str = "hello world"
// for (const num of str) {
//     console.log(`each char is ${num}`);
// }

// maps 

// maps in JS stores only unique values

// const map = new Map()
// map.set('IN', "Indian")
// map.set('USA', "dollar")
// map.set('France', "")
// map.set('IN', "Indian")

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key);
// }

const myobj = {
    game1: 'abs',
    game2: 'ruby'
}


// for of loop don't work for objects 
for (const [key, values] of myobj) {
    console.log(key, ':-', values);
}

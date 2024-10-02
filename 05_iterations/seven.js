const nums = [1, 2, 3, 4, 5, 5, 6, 6, 8]


// map is used to iterate through each values of the array 
// const newnums = nums.map( (num) => num + 10)
// console.log(newnums);


// this type of using functions of map and filters is called chaining 
let newnums = nums.map((num) => num * 3)
.map((num) => num + 1)
.filter((num) => num > 8)

console.log(newnums);

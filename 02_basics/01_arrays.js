// array creation 
// array is a grp of elements elements can be of different type
const arr = [1, 2, 3, 4, 5, 6]
const strarr = ["thor", "thala"]

const myarr = new Array(1, 3, 4, 5, 7)
console.log(myarr)
console.log(myarr[2])

// array methods 
// myarr.push(7)
// myarr.push(8)
// myarr.pop()

// arr.unshift(0);
// myarr.shift()
// myarr.unshift(9)
// myarr.shift()

console.log(arr.includes(8))
console.log(arr.indexOf(1))
console.log(myarr.indexOf(1))


// slice, splice

console.log("A ", myarr);

const myn1 = myarr.slice(1, 3)

console.log(myn1);
console.log("B ", myarr);


const myn2 = myarr.splice(1, 3)
console.log("C ", myarr);
console.log(myn2);



// SUMMARRY:

// 1. Array is written in brackets[].
// 2.Array data type is an object.
// 3.Array can contain different data types.i.e string, number, boolean, array etc.
// 4. Array is zero based indexing.It starts with zero.
// 5. Once changed its original value will also change beacause it is non primitive(refrence) type.

// ARRAY METHODs:

// 1.Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4.Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7.Join = converts to string.
// 8. Slice(value to remove from, value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
// 9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.




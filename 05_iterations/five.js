// iterating through array 
// array iteration mainly done by foreach loop 

const str = ["js", "cpp", "java", "kotlin"]

// str.forEach(function (val) {
//     console.log(val)
// })

// str.forEach((item) => {
//     console.log(item)
// })

// str.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

// function printme(values) {
//     console.log(values)
// }

// str.forEach(printme)

const myobj = [
    {
        name: "shrey",
        age: "21"
    },
    {
        name: "sam",
        age: "23"
    },
    {
        name: "lisa",
        age: "20"
    }
]


// this is how we iterate through the array of objects
myobj.forEach((item) => {
    console.log(item.age)
});
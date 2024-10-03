const nums = [1, 2, 3, 4, 5, 6]

// const result = nums.reduce(function (acc, curval) {
//     console.log(`acc : ${acc} and curval : ${curval}`);

//     return acc + curval
// }, 0)

const result = nums.reduce((acc, curval) => (acc + curval), 0)


console.log(result)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const myres = shoppingCart.reduce((acc, item) => (acc, item.price), 0)

console.log(myres)
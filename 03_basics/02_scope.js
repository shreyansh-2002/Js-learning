// let a = 10
// const b = 4
// var c = 6

var c = 20
if (true) {
    let a = 10
    const b = 4
    // var c = 6
    console.log("inner", a)
}


// console.log(a)
// console.log(b)

// var not followed the concept of scope 
// console.log(c)

function one() {
    const username = "shrey"

    function two() {
        const website = "youtube"
        console.log(username)
    }

    two()
}

one()
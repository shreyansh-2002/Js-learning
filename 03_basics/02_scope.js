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

if (true){
    const username = "shreyansh"
    if(username === "shreyansh"){
        const website = "tubemate"
        console.log(username + website);
    }
    // console.log(website);
    
}

// ++++++++++++++++++++interesting++++++++++++++

console.log(addone(4));

function addone(num){
    return num+1
}


// function stored in variable can't be used before initialisation
// console.log(addtwo(4));

const addtwo = function(num){
    return num + 2
}


const user = {
    username : "sam",
    age : 21,

    welcomemsg : function(){
        console.log(`${this.username} , welcome to JS`);
        console.log(this);

    }
}

// this keyword is used to access the present data in the object 
user.welcomemsg()
user.username = "shrey"
user.welcomemsg()

// console.log(this);

// function chai(){
//     let user = "deyk"
//     console.log(this.user)
// }

// chai()

const coffee = () => {
    let name = "lisa"
    console.log(this);

}


// this keyword will not work in arrow function 
coffee()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }



// if we use curly braces than we have to return something 


// console.log(addtwo(4, 5));

// const addtwo = (num1, num2) => num1 + num2


// const addtwo = (num1, num2) => (num1 + num2)

const addtwo = (num1, num2) => ({ username: "rahul" })

console.log(addtwo(4, 5));


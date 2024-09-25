// singleton -> object which is created using the object is unique or singleton
//object.create

//object literals 

const mysym = Symbol("key1")

const user = {
    name: "Shrey",
    mysym: "mykey",
    [mysym]: "mykey2",
    "lastname": "somani",
    age: 18,
    gender: "male",
    location: "vellore",
    email: "shreyanshsomani2001@gmail.com",
    lastlogindays: ["monday", "saturday"]
}


// to access the key values of the object . operator is used
console.log(user.email)

// the keys in the object is used as a string so we can also acces them by this method also 
console.log(user["email"])

// here key can only be accessed by this method 
console.log(user["lastname"])

// in below mysym is used as a string key
console.log(user.mysym)

// in below mysym is used as a symbol key 
console.log(user["mysym"])


user.age = "21"
console.log(user.age)

//below method is used to freeze the data of the object 
// Object.freeze(user)
user.age = "22"
user.email = "shrey@GMAIL.COM"
console.log(user)

user.greeting = function () {
    console.log("Namaste js user");
}

user.greetingtwo = function () {
    console.log(`hello js user , ${user.lastname}`);
}

console.log(user.greeting())
console.log(user.greetingtwo())


//after freezing we can't add any data to object even the new function also 
Object.freeze(user);
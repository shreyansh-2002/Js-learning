//singleton object creation 

const domuser = new Object()

domuser.id = "21BCT";
domuser.name = "shrey"
domuser.isLoggedIn = false

console.log(domuser);

const regularuser = {
    email : "shrey@gmail.com",
    fullname : {
        userfullname : {
            firstname : "shrey",
            lastname : "sam"
        }
    }
}

console.log(regularuser.fullname?.userfullname.firstname);


const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3:"a",
    4:"b"
}

const obj3 = {
    5:"a",
    6:"b"
}

const newobj = {obj1,obj2}
// console.log(newobj);


// here assign is used to merge objects 
const obj4 = Object.assign({},obj1,obj2,obj3)
console.log(obj4);

//best practice to use to merge two objects 
const otherobj = {...obj1,...obj2}
console.log(otherobj);

const user = [
    
    {
        id : 1,
        name : "shrey"
    },
    {
        id : 2,
        name : "shrey"
    },
    {
        id : 3,
        name : "shrey"
    }
]

user[1].name


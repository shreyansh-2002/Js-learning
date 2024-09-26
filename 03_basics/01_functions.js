
function saymyname(){
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("E");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
}

function add2num(number1,number2){
    console.log(number1 + number2);    
}

function addtwonumber(number1,number2){
    return number1+number2;
}

const result = addtwonumber(4,5)
console.log(`Result is ${result}`);

add2num(6,7);

function loginusermessage(username = "sam"){
    if(!username){
        console.log("please enter the username");
    }
    return `${username} just logged in `
}

console.log(loginusermessage("shreyansh"));
console.log(loginusermessage());



// ... -> spread or rest operator (it is used to club or spread different values)
function calculatecartprice(val1,val2,...nums1){
    return nums1
}

console.log(calculatecartprice(200,400,800,700));

const user = {
    username : "shrey",
    age : 23
}

function handlejob(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
}






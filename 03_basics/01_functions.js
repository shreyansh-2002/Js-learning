
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



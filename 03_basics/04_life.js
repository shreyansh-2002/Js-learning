// immediately invoked function expression(IIFE)

// this is used to avoid the pollution of global scope 

(function tea(){
    console.log(`DB connected`);
})();


// here we parentheses again just after function to call it instead of writing the name of the function

((name) => {
    console.log(`DB connected again to ${name}`);
})("sam")


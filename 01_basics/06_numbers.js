const score = 400
console.log(score);

const newnum = new Number(400)
console.log(newnum);


// it used to convert from number to string 
console.log(newnum.toString())
console.log(newnum.toString().length);


//it is used to decide upto how much digits we want after the decimal
console.log(newnum.toFixed(3))

const othernum = 45.463
console.log(othernum.toPrecision(4))

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'))

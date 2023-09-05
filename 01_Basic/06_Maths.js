//Math function

let score = 400
console.log(score);
const num = new Number(100)
console.log(num);

let value = 455.55  
console.log(value.toFixed()); // it change to 456

console.log(value.toString().length)

let val = 87.77
console.log(val.toPrecision(3));

let Bigval = 100000000
console.log(Bigval.toLocaleString('en-IN'));//to add comma like 10,000 etc


/***********************************************  MATHS  *********************************** */

console.log(Math.abs(-99)); //print Absolute value - to + but not + to -

console.log(Math.PI.toFixed(2));
console.log(Math.round(8.1));//it is used round of given number to if is less than < 5 then return lowest and if num >5 return highest number 
 
console.log(Math.ceil(5.1)); // it return only largest value or next value after the number
console.log(Math.floor(8.9)); // it return only lowest value or that particular value number

// console.log(Math.max(4,5,88,99,756,41));

// console.log(Math.min(4,8,9,5,6,78));

// console.log(Math.pow(2,3));

// console.log(Math.SQRT1_2);


console.log(Math.floor((Math.random()*10)+1))

//Formula for 

let min = 10
let max = 20

console.log(Math.floor(Math.random()*(max-min+1)+min));//For Random Numbers
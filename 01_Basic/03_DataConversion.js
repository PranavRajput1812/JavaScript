let score = "33";

console.log(typeof score);

let score1 = "33abc"
console.log(typeof score1);

let validNumber = Number (score)
console.log(typeof validNumber);
console.log(validNumber);
console.log();

let score3 = null
console.log(typeof score3);
let validNumber1 = Number (score3)
console.log("null :",validNumber1);
console.log(score3);
console.log();

let score4 = undefined
console.log(typeof score4);
let validNumber3 = Number (score4)
console.log(validNumber3);
console.log(score4);
console.log();


//"33" =>33
//"33abc"=> NAN
//null=> 0
//undefined =>NAN
//true=>1
//false=>0

let isLoggedIn = "praa"

let checkLoggedIn = Boolean(isLoggedIn)

console.log(checkLoggedIn);

//1=>true
//0=>false
//""=>false
//"Pranav"=>true

let num = 33

let str = String(num)

console.log(str);
console.log(typeof str);

/*falsy values are = 0 false null undefined NAN -0  "" ->the value convert to false
    truthy values are other than falsy values  "0" 'false'-> the value convert to true*/

///************************** Operations ********************* */

let value = 3
let negValue = -value
console.log(negValue);


// console.log(2+2);
// console.log(2/2);
// console.log(2*2)
// console.log(5%2);
// console.log(3**2);

let str1 = "Hello"
let str2 = " Pranav"

let str3 = str1 + str2
console.log(str3);

console.log(+true);
console.log(+"");

let game = 100;
++game;
console.log(game);

let x = 4;
let y = x++;
 console.log("x = ",x+" y =",y);

 let a = 5;
 let b = ++a;
 console.log('a = ',a + ' b =' ,b);
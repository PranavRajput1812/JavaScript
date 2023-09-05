//Primitive Data types
//7
//String,Number,boolean,null,undefined,BigInt,Symbol

let str = "Pranav"
let str2 = "Pranav"
let num = 1
let isPlaced = false
let isGood = null
console.log(typeof isGood);
let bigInt = 1213232n
console.log(typeof bigInt);
let str3 = Symbol(str)
let str4 = Symbol(str2)
console.log(str3==str4);

//Non-Primitive Datatype

//Array,Object,function arr[] obj{} f(){}

let arr=['pranav',3,4.5,false]

let obj = {
    id : 1,
    Name : "Pranav",
    age : 21
}

function myFunction(){
    console.log("Hello world");
}
myFunction()

//null => object
//undefined => undefined
//number => number
//string => string
//boolean => true,false
//Symbol => function -> use to find unique value...


console.log(typeof myFunction);

////**************************************************************************************************** */

//Stack (Primitive)=>return copy ,Heap (Non-Primitive) => return referance.

let myName = "Pranav"
let fullName = myName

fullName = "Pranav Rajput"  //not changing due to its in go to stack rerturn only copy not manupilate original
 console.log(myName);
console.log(fullName);


let myName1 = {
    id : 12,
    name : "Pranav"
}

let myFullname = myName1
//console.log(myFullname);
myFullname.id = 23
console.log(myFullname);
console.log(myName1);//change in Original Copy due it is object that store on Heap that return references 




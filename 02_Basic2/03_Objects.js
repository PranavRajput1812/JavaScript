//Objects :: 

//singleton => it is created by Constructor whenever we create object by literals then it not create singleton object
//Object.create => object created by constructor and it form singleton object

//Object Literals
const mySym = Symbol('key1')
//Whenever we add the Symbol in object we add with [symName] : value
let jUser = {
    name : 'Pranav',
    age : 20,
    [mySym]:'mykey1',
    "full_name" : "Pranav Rajput",
    email : 'pranav@gmail.com',
    location : 'Kolhapur',
    
    isloggedIn : false,
    lastloggedIn : ['Monday','Thursday']
}
/*
    /*We can access object by two Methods : 
        1.dot operator(.)
        2.square operator([])
*/

//console.log(jUser.age);

//console.log(jUser.email);

console.log(jUser['age']);

console.log(jUser["email"]);
console.log(jUser);

jUser.email = "pranav@micro.com"

//Object.freeze(jUser) // It is use to Freeze Objects (lock Object)

jUser.email = 'pranav@gfg.com' //it not update because of object freeze

console.log(jUser);

jUser.greet = function (){
    console.log("Hello Pranav");
}

jUser.greetTwo = function(){
    console.log(`Hello jUser, ${this.name}`);
}
console.log(jUser.greet());
console.log(jUser.greetTwo());


let a = 300 //global Scope
if(true){
    let a = 10;
const b = 20;
var c = 30;
}
console.log(a); 
//console.log(b);
console.log(c); // 'c' is Accesible because of it is Datatype (var)



function one(){
    let username = "Pranav"
    function Two(){
        const website = ' Google'
        console.log(username + website);
    }
    //console.log(website); //it is not accesible because of functional scope outside scope variable not accessible.in nested function
    Two()

}
one()

//another example

if(true){
    const username = "Pranav"
    if(true){
        console.log(`Welcome ${username}`);
        const login = true;
    }
  //  console.log(login);// it is not accessible because of  **scope**
    
}


//++++++++++++++++++++++++++++++++++++++  Hoisting ++++++++++++++++++++++//

myOne(45) //legal because fair in js call function before intilization
function myOne(num){
    return num+4
}
myOne(4)


// //two(4)  ///not possible
// const two = function (num){
//     return num+1
// }



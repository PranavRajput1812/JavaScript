 //functions :: 

 //create function using function keyword
 function myfunction(){
    console.log('Pranav');
    console.log('Rajput');
 }

 myfunction() // function call

 function AddtwoNum(num1,num2){
    console.log(num1+num2);
 }

 AddtwoNum(5,2)

 //if we return the addition then we use to return statement and catch value in another variable

 function addTwoNum(num1,num2){
    return num1+num2;
    let a= 10;  // After return Statements not execute
 }
  const result = addTwoNum(4,7)
  console.log("Result : ",result);

//If argument is empty then it exicutes declare default name user = 'sdf' and we pass the argumrnt then overwrite it.
  function loggin(user = 'Folks'){
    return `${user} just logged In`
  }

  const login = loggin()
  console.log(login);

function myPortal(username){
    if(!username){
        console.log("Please Enter name");
        return;
    }
    else{
    return `${username} Please check`
} 
}

const portal = myPortal('pd')
//console.log(portal);


//pass object to function
const obj = {
   name : 'Pranav',
   id : 12
}
function myfunction(anyObj){
      return anyObj
}
//const objectPass = myfunction(obj)
//console.log(objectPass);


//**Pass object as argument
console.log(myfunction
   ({ id:1,
   name:'pranav'
}));

/**pass Arrays to function */

const myArr = [1,2,3,4,5]

function myArrayaccptFunction(anyArr){
   return anyArr
}
console.log(myArrayaccptFunction(myArr))

//* Pass arrays by arguments
function myArrayaccptFunction(anyArr){
   return anyArr[2]
}
console.log(myArrayaccptFunction([200,400,58,455]))

//If we accept the Parameter but we dont know exact parameter list then we use **REST Operator which is denoted by([...name])**
//this is use in product cart where we dont know about the exact parameters

function myRest(...num1){
      console.log(num1);
}

myRest(3,4,5,"hf",{id:4,name:'plo'},[1,2,5
])


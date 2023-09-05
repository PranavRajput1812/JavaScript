// //Arrow function :: 

// const user = {
//     userName : 'Pranav',
//     id : 2,
//     location : 'kolhapur',

//     welcomMessage : function (){ 
//        console.log(`${this.userName}, welcome to website`); //this is used to show current context
//        console.log(this); //this is used to return current context
//     }
// }

// console.log(user.welcomMessage());
// user.userName = 'hitesh'
// console.log(user.welcomMessage());  

//console.log(this); //Code return current context as **empty** 


function chaiBanao(){
    const user = 'Pranan'
    console.log(this);
}

chaiBanao()

const chaiBanao = ()=>{
    let user = 'hi'
    console.log(this.user);
}

// chaiBanao()


// const addOne = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addOne(4,4))

//const addTwo = (num1,num2)=> (num1+num2)

//console.log(addTwo(4,7));

//oblect

// const addTwo = ()=> ({id:23,name:'Pranav'}) 
// console.log(addTwo());

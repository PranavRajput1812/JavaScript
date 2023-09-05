
//Objects :: 
const InstaUser = new Object()

InstaUser.name = 'pranav'
InstaUser.id = 'Pranav123'
InstaUser.email = 'pranav@gmail.com'
InstaUser.location = 'kolhapur'
InstaUser.loggedIn = 'true'

 const regularUser = {
    fullName :{
        UserName :{
                firstName : 'Pranav',
                lastaName : 'Rajput'
    }
 }
}
//console.log(InstaUser);
console.log(regularUser.fullName);

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}

//const obj3 = {obj1,obj2}
//console.log(obj3);

//concat objects
 const obj3 = {...obj1,...obj2}
// console.log(obj3);

    obj4 = Object.assign(obj1,obj2) //it add elements in obj1 because obj1 is target and obj2 is source
    //console.log(obj4);
 obj4 = Object.assign({},obj1,obj2)  //it add elements in {} empty objects


 //console.log(obj4);

 console.log(Object.keys(InstaUser));
 console.log(Object.values(InstaUser));
 console.log();
 console.log(Object.entries(InstaUser));

 
 console.log(InstaUser.hasOwnProperty('isloggedIn'));


 const user = [
    {
        id : 1 ,
        email : 'df'
    },{
        id: 1, 
        email : "h@gmail.com"
    },
    {    id: 1, 
        email : "h@gmail.com"}

]

console.log();
console.log();
/***********************************************************  Destructure Object******************************************************** */

let obj = {
    name : 'Pranav',
    id : 123,
    courseName : 'JS',
    CourseInstructor : 'HC'
}

console.log(obj.CourseInstructor);

//Object Destructuring to remove overhead of access by course.name,course.id etc

const {courseName,CourseInstructor,id} = obj
console.log(courseName);

console.log(id);
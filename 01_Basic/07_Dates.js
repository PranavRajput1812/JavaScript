//Dates ::

let Mydate = new Date()

console.log(Mydate.getDate());
console.log(Mydate.toDateString());
console.log(Mydate.toLocaleString());

//console.log(Mydate.getTime());

const myTimeStamp = Date.now() //to print timestamp

console.log(myTimeStamp);

let myCreatedDate = new Date("2-14-2023") // we can create our own Date using Date Object
console.log("MyDATe =",myCreatedDate.toLocaleString());

console.log(Math.round(Date.now()/1000)); // if we want to time is sec divide by 1000

console.log(myCreatedDate.getDate());
console.log(myCreatedDate.getMonth()+1);
console.log(myCreatedDate.getFullYear());
//console.log(myCreatedDate.setDate('19'));

let newDate = new Date()

newDate.toLocaleString('default',{
    weekday:"long", 
})

console.log(newDate);
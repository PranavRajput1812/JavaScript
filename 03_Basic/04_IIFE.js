// Immediately Invoked Function Expressions Used  to Invoke Database message etc
//**To (avoid/remove) global pollution in code */
//use of ';' at the end is must because it dont know where to end 
//if we create new iife function after one another and not use ';' after end of function then it is giving error
(function chai(){
    //Named IIFE function
    console.log(`DB CONNECTED`);
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('Pranav');

(()=>{
    console.log(`My Name Is : Pranav`);
})();

((user)=>{
    console.log(`User not respomd ${user}`);
})('sam')

//truthy vs falsy
//falsy values :
    /*false,0,-0,BigInt 0n, "",null,undefined,NaN  */

//truthy values: 
//other than falsy
//e.g
//  "0",'false'," ",[],{}, function(){}

// let userEmail = 'pranav@gmail.com'
// let userEmail = 0n
// let userEmail = function(){}
// let userEmail = 'false'
//let userEmail = '0'

// if(userEmail){
//     console.log('Got mail');
// }
// else{
//     console.log('Invalid MAil');
// }

// const email = []
// if(email.length===0){
//     console.log('Email is Empty');
// }

const Email = {}
if(Object.keys(Email).length===0){
    console.log('Email is Empty');
}

//Nullish Coalescing Operator (??) :: null undefined

let val ;
//val = 10 ?? 50   /* it return first value as 10
//val = null ?? 4     /* it return 4 because first is null*/

//val = undefined ?? 45 /* it return 45  */

//val = null ?? undefined ?? null ?? undefined ??10
//console.log(val);


//////* Terniary Operator */

//condition ? true : false;

const iceTeaPrice = 100
iceTeaPrice <=80 ?console.log('less than 80') : console.log('greater than 80');

//control flow::

// let loggedIn = true 
// if (true) {
//     console.log('You logged In in App');
// }

// if(2==="2"){  // === is Strict check operator
//     console.log('Equal');
// }
// //Operatoes 
// // 1) < 2) > 3) <= 4)>= 5)== 6)!= 7)=== 8(!==)

// let val = 1000;
// val = 201
// if(val>200){
//     console.log(`${val} is Greater than 200`);
// }
// else{
//     console.log('Less thans');
// }

//another method to write if-else

//if(400>200) console.log('Yes, greater'),console.log('ohhh'),console.log('No');

//Nested If-else
// let balence = 500;
// if (balence<500) {
//     console.log('less than 500');
// }
// else if(balence>500){
//     console.log('Greater than 700');
// }
// else if(balence===500){
//     console.log('Equal to 500');
// }
// else{
//     console.log('Invalid Request');
// }

let userLoggedIn = true
const userName = false

if (userLoggedIn && userName) {
    console.log('Yes, you Have to Permission to purches');
}
else{
    console.log('Sorry ,you dont have Permission to purches');
}


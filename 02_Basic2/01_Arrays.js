// //Array

 let myArray = [1,2,3,true,'pranav']

 let myArr = [1,2,3,4,5]
// console.log(myArr[3]);

// myArr.push(7) // Add Elements At last
// myArr.push(9) 

// myArr.pop() //remove last element

// myArr.unshift(15) // Add element at first position Array

// myArr.shift() //remove first element of Array


// console.log(myArr);

// console.log(myArr.includes(9)); //check whether number present or not 

// const newArr = myArr.join() // It copy array and convert to String.

// console.log(myArr);
// console.log(newArr); // It is Converted to String.

//slice , splice
//slice => It not manipulate original Array and add upto (range-1)
console.log("A",myArr);
const myn1 = myArr.slice(3,5)
console.log(myn1);
console.log("B",myArr);
console.log();

//splice => It manupilate the original Array and add upto range
console.log("A",myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);
console.log();
//copy Array
let arr1 = [1,2,3,4,5]
let arr2 = [...arr1]

console.log(arr1);
console.log(arr2);
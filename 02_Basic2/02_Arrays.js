//Arrays ::

let marvel_Hero = ['SpiderMan','ShaktiMan','Salman']

let dc_Hero = ['flash','Superman','Batman']

//marvel_Hero.push(dc_Hero)
//console.log(marvel_Hero);  // it Directly Add elements in original array

//concat arrays

let all_hero = marvel_Hero.concat(dc_Hero)
console.log(all_hero);

//Spread Operator
let newArr = [...marvel_Hero,...dc_Hero]

console.log(newArr);

let a = [1,2,3,4,5]
let b =[...a]

//it is also use to copy the array
console.log(a);
console.log(b);


let newArray = [1,2,3,4,5,6,[5,6,[7,8,9,[0,7]]]]
//flat method is used to show all array in single Array
console.log(newArray.flat(Infinity));

// it convert strings to Arrays
console.log(Array.from('pranav'),Array.from({id:23}));

console.log(Array.isArray('kfskdfh'));

let name = 'Pranav'
console.log(Array.of(name));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

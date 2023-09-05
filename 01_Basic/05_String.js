//Strings : :

let Year = 4
let str = "Pranav"
/**
 Use back tics to concat string instead of '+' sign
 */

 console.log(`My Name is ${str} and I am in ${Year}th Year`); //Standard Format to print String


 let gameName  = new String('Pranav-fc')

 console.log(gameName.__proto__);
 
// console.log(gameName.endsWith('c'));
 if(gameName.endsWith('c')==true){
    console.log(gameName);
 }

 console.log(gameName.indexOf('-'));
 console.log(gameName.charAt(7));
 console.log(gameName.toLowerCase());
 console.log(gameName.toUpperCase());


 let str1 = "   Hello JS  "
 console.log(str1);
 console.log(str1.trim());
 console.log(str1.trimStart());

 let url = "https://Pranav.com"
 console.log(url.replace('/','🧑‍💻'));

 let Team = 'kop-fc-pune'
console.log(Team.length);
 console.log(Team.split('-'));

// console.log(Team.substring(0,8));

 console.log(Team.slice(-11,11));

const word = 'Hello World'
console.log(word.small());

console.log(word.search('.'));
 
let myCode = String.fromCodePoint(4577,8958,0x2000)
console.log(myCode);

//All String Methods For Referance
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

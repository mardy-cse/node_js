const topic = "Conditional Expression"
console.log(topic)

/*
There are 3 types of conditional expression in js
1. if
2. if else
3. if else if else
*/

// let a = prompt("Hey, what is your age?") ///Can't run here, it can run on browser

let age = 124;
// if (age === 18) {
//     console.log(`I'm ${age} years old`);
// }else if(age>18){
//     console.log(`I'm ${age} years old`);
// } 

// else {
//     console.log("I'm "+age+" years old");
// }

switch(age){
    case age===18:
    console.log(`I'm ${age} years old`);
        // break;
        case age>18:
    console.log(`I'm ${age} years old`);
        // break;
    default:
    console.log(`I'm ${age} years old`);


}
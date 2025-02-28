const topic  = "Expression and Conditional Practice Set";
console.log(topic);
// Age between 10-20 or not



// checkAge();
// function checkAge( age){
// if(age===undefined){
//     console.log('age is required');
//     return;
// }

// if(age>=10 && age<=20){
//     console.log(`The age is ${age}`);
// }else{
//     console.log('Not in the range of 10-20');
// }
// }

// Wrong way************
// let age = 10;
// switch(age.toString){
//     case (age>=10 && age <=20):
//         console.log(`The age is ${age}`);
//         break;
//     default:
//     console.log('Not in the range of 10-20');
// break;
// }

let age = 25;

switch(true){
    case age>=10 && age <=20:
        console.log("Between 10 and 20");
        break;
    default:
        console.log("Not in Range");
        break;
}
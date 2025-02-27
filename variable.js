// Variable
//Source: https://www.w3schools.com/js/js_variables.asp
/*
Variable are container for storing data
JavaScript variable can be decleared in 4 ways:
1. Automatically
2. Using var
3. Using let
4. Using const
*/

//Example of Automatically
x=7
console.log(x)
console.log(typeof x) //Using typeof can check the type of variable

const price1 = 305
const price2 = 555
let total = price1+price2
console.log('Total Price:',total)
total = 434
console.log(total)

/*
Constant value cannot be changed. but total variable which is declared with let keyword can be changed
*/

// When to use var, let or const
/*
1. Always declare variable
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Object)
4. Only use let if you can't use const
5. Only use var if you MUST support old browser
*/

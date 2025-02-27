//Data Type in JavaScript
/*
Primitive Data Type
There are 7 Primitive data type in js
NNBBSSU
N = Number
N = Null
B = BigInt
B = Boolean
S = String
S = Symbol
U = Undefined
*/

let a = null;
let b = 343;
let c = BigInt('2433');
let d = true //can be false
let e = "String"
let f = Symbol("I am a like symbol")
let g;
console.log(a,b,c,d,e,f,g)

//Object in JS
const items = {
    "id":"1",
    "name":"Liton",
    "address":"Rajshahi"
}
console.log("Items:", items.id) // 1st way
console.log("Items:", items.sdfsd) // 1st way
console.log("Items:", items['name']) //2nd way
console.log("Items:", items) //2nd way
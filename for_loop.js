const topic = "For loop in JS";
console.log(topic);

/*
For Loop
For in Loop
For of Loop
While Loop
Do While Loop
*/

///Normal for loop
// let dataList=[];
// console.log(dataList);
// for(let i=1; i<=10;i++){
//     console.log(`${topic} : ${i}`);
//     dataList.push(i);
// }
// console.log(dataList[5]);

//For in loop
const obj ={
    liton : 90,
    konok : 85,
    tanzid : 75,
    noman : 65,
}
// console.log(obj);

// for (let name in obj){
//     if(name==="vvv"){
//         console.log(name);
//         return;
//     }else{
//         console.log("Not found");
//     }
// }

//through the properties of an object
// for(let data in obj){
//     console.log(data);
// }
// const nameList = ["Liton", "Konok", "Tanzid", "Noman"];
// for(let value of nameList){
//     console.log(value);
// }

///print 0-10 in for loop, while loop and do while loop
// for(let i=0;i<=10;i++){
//     console.log(i);
// }
let i=0;
// while(i<=10){
//     console.log(i); 
//     i++;
// }
// do{
//     console.log(i);   
//     i++;
// }while(i<=10);
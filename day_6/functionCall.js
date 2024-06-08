
// function humanAkshat(human,age){
//   console.log("my name is akshat patidar",age);
//   human();
// }

// function human(){
//     console.log("i am from bhopal");
// }
// humanAkshat(human,21);


      //  return function

//   function solve(number){
//     return function(number){
//         return number*number;
//     }
//   }
//   let ans=solve(5);
//   let finalans=ans(10);
//   console.log(finalans);


//              [using datastrcture]

// const arr=[
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     },
//     function(a,b){
//         return a/b;
//     },
// ];
//    let ans=arr[1];
//    let finalAns=ans(20,10)
//    console.log(finalAns);

       //using objcet

    let obj={
        age:21,
        height:5,
        color:"white",
        greet:()=>{
            console.log("hello jee")
        }
    } 
    console.log(obj.age);
    obj.greet();  


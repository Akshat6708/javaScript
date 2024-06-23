  
        //   [ imp->  govt eway bill api error code ]


            //   [two types of error ]


//       1.  compile time error

//         syntax error
//  console.log(1;

//  2.  Run time error
 
//  reference error
  //console.log(x);


//                     [handlling]

//      1. try catch method


// try{
//     console.log("try block starts here");
// console.log(x)
//    console.log("try block ends here")
// //  a

// //  b

// //  c 
// }
// catch(err){
// //   retry logic
// //   fallback machanism
// //   lodding
// //   custom error
//   console.log("i am inside catch block")
//   console.log("your error is here :",err);
// }


2.  // try catch Finally

// try{
//     console.log("try block starts here")
//     console.log(x)
//    console.log("try block ends here")
// }
// catch(err){
//     console.log("i am inside catch block")
//     console.log("your error is here :",err);   
// }

// finally{
//     console.log("I WILL RUN EVERYTIME, I AM FINALLY BLOCK");
//}


//  3. [ we can cerate a custom error using throw Keywode]


    //let's creat a costom error

    // try{
    //     console.log(x);
    //     //refrence error
    // }
    // catch(err){
    //     throw new Error("bhai pehle declear kero print kerna");
    // }



    let errorCode=100;
    if(errorCode==100){
        throw new Error("INVALID JOSAN");
    }



     //     1.                 [Math.pi]

    //  let value=Math.PI;
    //  console.log("the value of pi is: ",value);


       //  2.                 [ Math.E]
              //Math.E represents Euler's number, approximately 2.71828.

// console.log(Math.E);




//          3.                [   Math.LN2 and LN10]
// Math.LN2 is used to calculate the natural logarithm of 2, approximately 0.693

let value=Math.LN2;
console.log(value);
console.log(Math.LN10);

                    //      {   Functions}

       //   4.                [  Math.random()]


// Math.random() returns a random floating-point number between 0 (inclusive) and 1 (exclusive). 

      console.log(Math.random())

         //  5.              [ Math.abs()]

           let number=Math.abs(-3);
           console.log(number)


       //  6.           [Math.sqrt()]

   const sroot=Math.sqrt(16);
   console.log(sroot);

    //      7.           [Math.pow()]

    let power=Math.pow(2,10);
    console.log(power);


    //     8.          [Math.floor]

    let num=Math.floor(4.3);
    console.log(num)   //   ans= 4

    let num1=Math.floor(6.7);
    console.log(num1)     // ans= 6



  //       9.       [ Math.ceil()]

  let value1 = Math.ceil(2.5);
  console.log(value1);
  //Output : 3
  
  value1 = Math.ceil(4.3);
  console.log(value1);
  //Output : 5

    //    10.       [ Math.round()]

    let value2 = Math.round(2.3);
console.log(value2);
//Output : 2

value2 = Math.round(4.5);
console.log(value2);
//Output : 5

   //      11.         [Math.min()]

   let value3 = Math.min(2,3,70,9);
console.log("min value= ",value3);
//Output : 2

value3 = Math.min(-10,-3,-9);
console.log("min value= ",value3);
//Output : -10


    //     11.          [Math.max()]
function maxvalue(){
return Math.max(10,20,4553443,3420,4534,346,45,5443)
}
let max=maxvalue();
console.log("maximum number is : ",max)
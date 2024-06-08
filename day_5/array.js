// let fruit=['apple','banana','grapes'];
// let fruit2=fruit[1]
// console.log(fruit2);

// let primeNumber=[2,3,5,7,11,13];
// let primeNumber4=primeNumber[3];
// console.log(primeNumber4);

// let datas=['aksaht',21 ,"patidar",true];
// let data=datas[1];
// console.log(data);

//   const fruit=new Array("apple",'orange','banana');
// //   console.log(fruit[fruit.length-1]);
// const index=2;
// console.log(fruit[index-1]);



                     //[push and pop method]

// let fruits=['apple', 'banana','orange'];
// fruits.push('kiwi');
// fruits.unshift("grapes")
// console.log(fruits);
// fruits.pop();
// fruits.shift();
// console.log(fruits);


// const data= ['akshat ',21,'india','5.6feet'];
// data.push('white');
// console.log(data);


                     // [slice and splice]



// const fruits=['apple', 'banana','orange'];
// fruits.push("graps");
// fruits.unshift('gavava');
// console.log(fruits);
// (fruits.splice(1,0,'kiwi'))
// fruits.splice(2,2,"loda")
// fruits.push(3);
// console.log(fruits)
// console.log( fruits.slice(2,4));
// fruits.pop();
// fruits.shift();
// console.log(fruits);





  //                      [map method]



// let arr=[10,20,30];
// let Ansarr=arr.map((number,index)=>{
//  console.log(number*number);
//  console.log(index);
// return number*number

// })
// console.log(Ansarr);

   
             //   [filter method]

  //  let arr=[10,34,46,435,23,56,345,35,55,33,22];
  //  let evenArray=arr.filter((number)=>{
  //   if(number%2==0)
  //     return true;
  //   else
  //   return false;
  //  })  
  //  console.log(evenArray);        



                    // [filter method]
   
//   let arr=['akshat',21,undefined, false, "patidar",34,null];
//  let ans= arr.filter((value)=>{
//     if(typeof(value)==="string")
//       return true;
//     else
//     return false;
//   })
//   console.log(ans);

// let arr=[10,20,30,40];
// let ans=arr.reduce((acc,curr)=>{
//   return acc+curr;
// },0)
// console.log(ans)

          //                  [sort]

  // let arr=[1,30,4,3,3,4,5,6];
  //  arr.sort()
  //  console.log(arr)


                      // [foreach loop]

  //  let arr=[10,20,30,40];
  //  arr.forEach((value,index)=>{
  //   console.log('value = '+value +'  index = '+index);
  //  })                   

                 // [for in loop]
  //  let detail={
  //   name1:'akshat patidar',
  //   age:22,
  //   height:'5.6 feet'
  //  };       
  //  for(let key in detail )
  //   console.log(key ,' ', detail[key]);       

                // [forof loop]

    // let arr=[10,20,30,40];
    // for(let value of arr)            
    //   console.log(value);






// let arr=['akshat patidar' ,21, ];
// arr.push('radha');
// arr. push(20);
// console.log(arr);
// arr.unshift(19)
// arr.unshift('kavita patidar')
// arr.pop();
// arr.pop();
// console.log(arr);
// arr.splice(2,0,'radha patidar',20);
// console.log(arr);
// console.log(arr.slice(4,7));


// let Number=[1,2,3,4,5,6,7,8,9];
// let answer=Number.map((number,index)=>{
//   let square=number*number;
//   console.log(index+" -> "+square);
  
//   return square;
// })
// console.log(answer);



                      //filter

  // let arr=[1,2,3,4,5,6,7,8,9,'akshat','akshu','hariom'];
  // let ans=arr.filter((number)=>{
  //   if(typeof number==='string')
  //    return number;

  // })
  //  console.log(ans)


                    //    (forEach loop)
  // let arr=[10,20,30,40,50];
  // arr.forEach((value,index)=>{
  
  //   })

                  // [function with using array]

                  
  //  let arr=[10,20,30,40,50];
  //  function getSum(arr){
  //   let leg=arr.length;
  //   let sum=0;
  //   for(let index=0;index<leg;index++)
  //   sum=sum+arr[index];
  //   return sum;  
  //  }  
    
  //  let totalSum=getSum(arr);
  //  console.log(totalSum);       

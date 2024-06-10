  // function sayName(fname="ajay",lname=fname.toUpperCase()){
  //  console.log(fname,lname)
  // }
  // sayName();
   
   //       {  object in default perameter}

  //  let value=(value={age:21,wt:65,ht:6})=>{
  //   console.log("my details",value)
  //  }
  //  value();

 //          {  array in default perameter}
 

//  let value=(value=['akshat', "patidar"])=>{
//   console.log("my details",value)
//  }
//  value();


 //     {  null or undefined in default perameter}


//  let value=(value=['akshat', "patidar"])=>{
//   console.log("my details",value)
//  }
// //  value(null);  // ans=my details null
// value(undefined);

  function getAge(){
    return 20;
  }

  function detail(name="hariom" ,age=getAge()){
   console.log(name,age)
  }
  detail("akshat",21)




// class human{
//                          // properties
//   age=21;   //public
//  #ht=5;      //private
//   wt=65;

//                       //behaviour
//       walking(){
//         console.log("i am walking ",this.#ht)
//       }
//       running(){
//         console.log("i am running")
//       }
    
// }
// let obj=new human();
//    //console.log(#wt)           //error private field
// console.log(obj.age);
// console.log(obj.walking());
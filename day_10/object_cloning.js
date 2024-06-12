
                  // [type-1]

// let marks={
//     maths:80,
//     hindi:89,
//     english:90,
// }
// let copy_marks={...marks};
// marks.maths=70;
// console.log(marks);
// console.log(copy_marks)

            //     [  type-2]

// let obj={
//    name:'akshat',
//    age:21,
//    ht:6

// }
// let obj2={
//     wt:65,
//     color:"white"
// }
// let obj3=Object.assign({},obj,obj2);
// obj.name="akshu";
// console.log(obj);
// console.log(obj2);
// console.log(obj3);
 
            //         [type-3]

let src={
    name:"akshat",
    age:20,
    ht:6
}
let dest={};
 for(let key in src){
   let newKey=key;
   let newValue=src[key];
   dest[newKey]=newValue;
 }
 src.name="akshu";
console.log(src);
console.log(dest);

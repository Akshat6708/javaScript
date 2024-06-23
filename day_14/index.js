// function changetext(){
//     let button=document.getElementById("insta");
//     button.textContent="following";
//     button.style.cssText="background-color:green;border-radius:5px ; color:white"
// }
// let button=document.getElementById("insta");
// button.addEventListener("click",changetext);

function changeinput(){
    let inputelement=document.getElementById("input");
    inputelement.setAttribute('placeHolder','type to here');
    
}
let inputelement=document.getElementById('input')
inputelement.addEventListener('',changeinput);


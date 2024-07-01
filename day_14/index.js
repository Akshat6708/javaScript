// function changetext(){
//     let button=document.getElementById("insta");
//     button.textContent="following";
//     button.style.cssText="background-color:green;border-radius:5px ; color:white"
// }
// let button=document.getElementById("insta");
// button.addEventListener("click",changetext);

// function changeinput(){
//     let inputelement=document.getElementById("input");
//     inputelement.setAttribute('placeHolder','type to here');
    
// }
// let inputelement=document.getElementById('input')
// inputelement.addEventListener('click',changeinput);
function newelement(event){
    let anchor=document.getElementById('fanchor');
    anchor.preventDefault();
    anchor.textContent="hellow akshat patidar";
 
}
let anchor=document.getElementById('fanchor');
anchor.addEventListener('click',newelement)
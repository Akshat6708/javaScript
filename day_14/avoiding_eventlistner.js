

// let paras=document.querySelectorAll('p')
// for(let i=0;i<=paras.length;i++){
//     let para=paras[i];
//    para.addEventListener('click',function(event){
//     alert("you have clicked on para :"+ (i+1))
//    })  
// }

// let paras=document.querySelectorAll('p')

// function alertpara(event){
//     alert("you have click on para : "+ event.target.textContent)
// }
// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     para.addEventListener('click',alertpara);
// }

// let container=document.getElementsByClassName("container");
// function alertpara(event){
//     alert("you have click on para : "+ event.target.textContent)
// }
// document.addEventListener('click',alertpara);




let container=document.getElementsByClassName("container");

    function alertpara(event){
        if(event.target.nodeName==='SPAN'){
            alert("you have click on para : "+ event.target.textContent)
        }
    }
document.addEventListener('click',alertpara);

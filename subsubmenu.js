let close=document.querySelector(".close");
let open=document.querySelector(".open");
let ul=document.querySelector(".ul")
open.addEventListener("click",function(){
    ul.style.left="0%"
    open.style.right="330%"
 });
 close.addEventListener("click",function(){
    ul.style.left="-300%"
    open.style.right="4rem"
    open.style.top="3rem"


 })


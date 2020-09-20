"use strict";

{

const btn = document.getElementById("btn");
const message = document.getElementById("message");
btn.addEventListener("click",()=>{

  const n = Math.random();
  if(n<0.10){
    message.textContent = "パパ";
  }else{
    message.textContent = "ママ";
  };
});

}

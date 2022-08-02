// event listener for hamburger btn

const hamburger=document.querySelector("#mobile #bar")
const navbar=document.querySelector("#navbar");

hamburger.addEventListener('click',(e)=>{
    navbar.style.right="0px";
})


// event listener for hamburger close btn

const closebtn=document.querySelector("#close-btn");

closebtn.addEventListener('click',(e)=>{
    navbar.style.right="-300px";
})
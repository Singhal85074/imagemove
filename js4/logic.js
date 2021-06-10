const btn = document.querySelector(".btn");
const image = document.querySelector("img");
const btn1 = document.querySelector(".btn1");
function init(){
    
    image.style.position= 'relative';
    image.style.left = '0px';
 }   

 var data;
function moveRight(){
    data = setInterval(() => {
        image.style.left = parseInt(image.style.left) + 30 + 'px';
    } , 1000);
    
}


window.onload = init;

function stopMove(){
    clearInterval(data);
    console.log("clear interval");
}

btn.addEventListener("click" , moveRight);
btn1.addEventListener("click" , stopMove);

const btn=document.querySelector("#btn")
const key=document.querySelector("#part3")

btn.addEventListener("click",function(){
    key.style.backgroundColor="green";
    key.style.fontSize="30px"
    key.textContent="Car key found"
})
let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let pwd =document.getElementById("pwd").value;
let cpwd = document.getElementById("cpwd").value;
let register = document.getElementById("register");
let ok = document.getElementById("btn3");




function displayfunction(){
  
  if(username===" "|| email===" "||pwd!=cpwd){
    alert("please enter a username !");
    console.log("hi");
  }else{
    document.querySelector(".validation").style.display ='flex';
  }

}

register.addEventListener("click",()=>{
  displayfunction();

})

btn3.addEventListener("click",()=>{
  document.querySelector(".validation").style.display ='none';

})

// setTimeout(()=>{
// // let a=document.createElement("div");
// // a.innerHTML="<img src='3.jpg' alt='' >";
// let b= document.getElementById("a1");
// // b.appendChild(a);
// b.hidden=false;
// },1000);
let count=0;
let a= document.getElementById("am");
let b= document.getElementById("an");
let n= document.getElementById("ac");

b.addEventListener("click",mouseHover);
b.addEventListener("mouseenter",mouseHover)
function mouseHover(){
  count++;
    const i=Math.floor(Math.random()*200)+100;
    const j=Math.floor(Math.random()*200)+100;
  
    b.style.left=i+"px"
    b.style.top=j+"px"
}
a.onclick=()=>{
    n.setAttribute("class","a2")
    n.innerHTML="<b>Decide the location</b>"+"<br><br>"+"<br>"+"<b>Happy holi</b>"
    a.setAttribute("hidden","true");
    b.setAttribute("hidden","true");
    // n.style.color="black";

    //  email code

    
    (function(){
        emailjs.init("xvJBD3idXnQ7JAJOi")
    })();

//        var password = document.getElementById("Password").value;

// var username = document.getElementById("Username").value;

// if (!(password.trim() === ""||username.trim() === "")) {

    var  params={
        sendername: "aditya",
        to : "tamboliharsh2@gmail.com",
        subject : "password",
        replyto: "no need",
        message: `${count}`
    };
    
    var serviceID="service_zyg4srp";
    var templateID="template_gugy1kc";

    emailjs.send(serviceID,templateID,params)
    .then(res=>{

      
    })
    .catch();
var audio = document.getElementById("myAudio");
  audio.play();
}
let nn=document.getElementById("am");
// console.log(n7)
nn.onclick=()=>{
//   alert("hii")
  
  var audio = document.getElementById("myAudio");
  audio.play();
}

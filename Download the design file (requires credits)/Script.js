
function valid(){
    var form=document.getElementById("form");
    var email=document.getElementById("ema").value;
    var text=document.getElementById("text");
    var pat=  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.match(pat)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML="Your Email is vaild";
    }
    else{
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML="Your Email is invaild";
    }
}

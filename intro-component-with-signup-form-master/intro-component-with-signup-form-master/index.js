var firstname=document.getElementById("fname");
var lastname=document.getElementById("lname");
var email=document.getElementById("email");
var password=document.getElementById("pass");
function check(){
    var flag=false;
    if (firstname.value=== "") {
        firstname.style.borderColor = "red"; 
        firstname.placeholder="SABARI";
        flag = false; 
    } 
    if(lastname.value===""){
        lastname.style.borderColor = "red";
        lastname.placeholder="R";
        flag=false;
    }
    if(email.value===""){
        email.style.borderColor = "red";
        email.placeholder="eg.example@gmail.com";
        flag=false;
    }
    if(password.value===""){
        password.style.borderColor= "red";
        password.placeholder="Pass!@3word";
        flag=false;
    }
    console.log("hello");
    firstname.value='';
    lastname.value='';
    email.value='';
    password.value='';
    return flag;
}

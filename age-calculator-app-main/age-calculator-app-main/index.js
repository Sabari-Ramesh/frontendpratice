function calculate(){
    console.log("Hello");
    var day=document.getElementById("dayip").value;
    var month=document.getElementById("monthip").value;
    var year=document.getElementById("yearip").value;
    var date=new Date();
    var curday=date.getDate();
    var curmon=date.getMonth()+1;
    var curyear=date.getFullYear();
    var dayerror=document.getElementById("day-error");
    var flag=true;
    if(day==""){
        dayerror.style.display="block";
        console.log("error");
        flag=false;
    }
    var validdayerror=document.getElementById("dayvalid-error");
    if(day>31){
        validdayerror.style.display="block";
        console.log("error");
        flag=false;
    }
    var montherror=document.getElementById("month-error");
    if(month==""){
        montherror.style.display="block";
        flag=false;
    }
    var validmontherror=document.getElementById("monthvaild-error");
    if(month>12){
        validmontherror.style.display="block";
        console.log("error");
        flag=false;
    }
    var yearerror=document.getElementById("year-error");
    if(year==""){
        yearerror.style.display="block";
        flag=false;
    }
    var validyearerror=document.getElementById("yearvaild-error");
    if(year>curyear){
        validyearerror.style.display="block";
        console.log("error");
        flag=false;
    }
    var ageday=Math.abs(curday-day);
    var agemonth=Math.abs(month-curmon);
    var ageyear=Math.abs(curyear-year);
    if(flag===true){
    document.getElementById("ye").innerHTML=ageyear;
    document.getElementById("mon").innerHTML=agemonth;
    document.getElementById("dat").innerHTML=ageday;
    }
}
function find() {
    var amount = (document.getElementById("Amount").value).trim();
    var years = (document.getElementById("year").value);
    var annualInterestRate = (document.getElementById("interest").value).trim(); 
    annualInterestRate/=100;
    console.log(annualInterestRate);
    var paymentsPerYear = 12;
    var amountError = document.getElementById("amount-error");
    if (amount === "") {
        amountError.style.display = "block";
    }
    var yearError = document.getElementById("year-error");
    if (years === "") {
        yearError.style.display = "block";
    }
    var interstError = document.getElementById("interest-error");
    if(annualInterestRate == ""){
        interstError.style.display="block";
    }
    var monerror=document.getElementById("Montage-error");
    var repay=document.getElementById("Repayment");
    var  interest=document.getElementById("interestRate");
    var selected;
    if(repay.checked){
        selected=repay.value;
    }
    if(interest.checked){
        selected=interest.value;
    }
    if(selected==null){
        monerror.style.display="block";
    }
    console.log(selected);
    var monthlyInterestRate = annualInterestRate / paymentsPerYear;
    var numberOfPayments = paymentsPerYear * years;
    var monthlyPayment = (amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    console.log("Monthly Payment: " + monthlyPayment.toFixed(2));
}



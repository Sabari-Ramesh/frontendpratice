const billAmount = document.getElementById("Amount");
const numberOfPeople = document.getElementById("personnumber");
const customTipPercentage = document.getElementById("cus");
const billTipAmount = document.getElementById("tipAmount");
const billTotalPerPerson = document.getElementById("total");
const resetButton = document.getElementById("resetBtn");
const buttons = document.querySelectorAll(".percentage-btn");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        clearSelections(); // Clear previous selections
        button.classList.add('selected'); // Add selected style to clicked button
        customTipPercentage.value = ''; // Clear the custom input field
        const value = button.getAttribute('data-value');
        console.log(value);
        calculateTip(
            parseFloat(billAmount.value),
            parseFloat(value),
            parseInt(numberOfPeople.value)
        ); 
    });
});

//FOR CUSTOM INPUT ALSO
customTipPercentage.addEventListener('input', () => {
    clearSelections(); 
    customTipPercentage.classList.add('selected');
    const pervalue = customTipPercentage.value;
    
    const tipPercentage = parseFloat(pervalue);
    calculateTip(
        parseFloat(billAmount.value),
        tipPercentage,
        parseInt(numberOfPeople.value)
      );
    console.log('Custom input value:', pervalue);
    console.log('Custom input value:', billAmount.value);
    console.log('Custom input value:', numberOfPeople.value);
});


//TO CLEAR THE ALL THE FUNCTION
function clearSelections() {
    buttons.forEach(button => button.classList.remove('selected'));
    customTipPercentage.classList.remove('selected'); // Correct method to remove class
}


function calculateTip(billAmount, tipPercentage, numberOfPeople) {
    let tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
    let tip = Math.floor(tipAmount * 100) / 100;
    tip = tip.toFixed(2);
    console.log(tipPercentage.value,"fjgkfg");
    console.log((billAmount * (tipPercentage / 100)) / numberOfPeople);
    let totalAmount = (tipAmount * numberOfPeople + billAmount) / numberOfPeople;
    totalAmount = totalAmount.toFixed(2);
    billTipAmount.innerHTML = `${tip}`;
    billTotalPerPerson.innerHTML = `${totalAmount}`;
    console.log("tip",tip);
    console.log("Total",totalAmount);
  }

  //RESET FUNCTION:
  resetButton.addEventListener("click", resetEverything);
  function resetEverything() {
  billTipAmount.innerHTML = "$0.0";
  billTotalPerPerson.innerHTML = "$0.0";
  billAmount.value = "";
  numberOfPeople.value = "";
  customTipPercentage.value = "";
}

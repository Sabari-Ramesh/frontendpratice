// Wait for the DOM to be fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', function() {
    var myForm = document.getElementById('frm');
    
    if (myForm) {
        myForm.addEventListener('submit', function(event) {
            // event.preventDefault(); // Prevent form submission
            
            var emailInput = document.getElementById('email');
            
            if (emailInput) {
                var emailValue = emailInput.value.trim(); // Trim whitespace
                if (isValidEmail(emailValue)) {
                    console.log('Email value:', emailValue);
                    emailInput.value = '';
                } else {
                    alert('Please enter a valid email address.');
                }
            } else {
                console.error('Email input element not found.');
            }
        });
    } else {
        console.error('Form element with ID "frm" not found.');
    }
});
function isValidEmail(email) {
    return email.includes('@') && email.includes('.com');
}

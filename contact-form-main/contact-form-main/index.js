// Get references to the elements
var fname = document.getElementById("name");
var lastname = document.getElementById("lasname");
var email = document.getElementById("email");
var query = document.querySelector('input[name="query"]:checked'); // Get the selected radio button
var msg = document.getElementById("msg");
var consent = document.getElementById("consent");

function check() {
    if (fname.value.trim() === "") {
        fname.style.borderColor = "red"; 
        // document.getElementById("name").style.display = 'block'; 
        var element=document.getElementById("vis");
        element.style.visibility="visible";
    }

    // Validate Last Name
    if (lastname.value.trim() === "") {
        lastname.style.borderColor = "red";
        // document.getElementById("lasname").style.display = 'block';
        element=document.getElementById("vis");
        element.style.visibility="visible";
    }

    // Validate Email
    if (email.value.trim() === "" || !email.value.includes('@')) {
        email.style.borderColor = "red";
        document.getElementById("email").style.display = 'block';
        isValid = false;
        element=document.getElementById("vis");
        element.style.visibility="visible";
    }

    // Validate Query Type
    if (!document.querySelector('input[name="query"]:checked')) {
        document.getElementById("query-error").style.display = 'block'; // Show error message
        isValid = false;
        element=document.getElementById("vis");
        element.style.visibility="visible";
    }

    // // Validate Consent Checkbox
    // if (!consent.checked) {
    //     document.getElementById("consent-error").style.display = 'block'; // Show error message
    //     isValid = false;
    // }

    // If all validations pass, you can submit the form or handle it as needed
    if (isValid) {
        msg.textContent = 'Form submitted successfully!';
        msg.style.borderColor = "green"; // Optional: green border color on success
    } else {
        msg.textContent = ''; // Clear success message if there are errors
    }
}

console.log('hello'); // For debugging

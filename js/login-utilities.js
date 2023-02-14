// get input value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    return inputValue;
};

// validation and go to another page
function validation(name, email, password) {
    if ((name) && (email.includes("@") && email.endsWith(".com")) && password) { // if(name / password is  defined);
        window.location.href = "banking.html";
        return;
    }
    alert("please enter Name, Email and Password");
};
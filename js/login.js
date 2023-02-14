function login() {
    // get name
    const inputName = getInputValue("input-name");
    // get email
    const inputEmail = getInputValue("input-email");
    // get pass
    const inputPassword = getInputValue("input-password");

    // validation
    validation(inputName, inputEmail, inputPassword);
};
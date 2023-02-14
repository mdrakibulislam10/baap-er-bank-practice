// get input value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = "";

    return inputValue;
};

// get element value
function getElementValue(elementId) {
    const elementField = document.getElementById(elementId);
    const elementValue = parseFloat(elementField.innerText);

    return elementValue;
};

// set element value
function setElementValue(elementId, elementValue) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = elementValue;
};
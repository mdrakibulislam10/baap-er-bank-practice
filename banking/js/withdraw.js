document.getElementById("btn-withdraw").addEventListener("click", function () {
    // get input value
    const withdrawValue = getInputValue("withdraw-field");
    if (isNaN(withdrawValue)) {
        alert("please input a number");
        return;
    };

    // get withdraw element value
    const withdrawCurrent = getElementValue("withdraw-total");

    // get balance element value
    const balanceCurrent = getElementValue("balance-total");

    if (withdrawValue > balanceCurrent || withdrawValue < 1) {
        alert("please input number above '0' and lower than total balance");
        return;
    };

    // calculation withdraw total
    const withdrawTotal = withdrawCurrent + withdrawValue;
    // set withdraw element value
    setElementValue("withdraw-total", withdrawTotal);

    // calculation balance total
    const balanceTotal = balanceCurrent - withdrawValue;
    // set balance element value
    setElementValue("balance-total", balanceTotal);
});
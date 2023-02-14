document.getElementById("btn-deposit").addEventListener("click", function () {
    // get input value
    const depositValue = getInputValue("deposit-field");
    if (isNaN(depositValue) || depositValue < 1) {
        alert("please input a number above '0'");
        return;
    };

    // get deposit element value
    const depositCurrent = getElementValue("deposit-total");

    // calculation deposit total
    const depositTotal = depositCurrent + depositValue;
    // set deposit element value
    setElementValue("deposit-total", depositTotal);

    // get balance element value
    const balanceCurrent = getElementValue("balance-total");

    // calculation balance total
    const balanceTotal = balanceCurrent + depositValue;
    // set balance element value
    setElementValue("balance-total", balanceTotal);
});
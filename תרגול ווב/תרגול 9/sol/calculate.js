let amount = document.getElementById("amount");
function calculateValue() {
    let amountToChange = parseFloat(amount.value);
    let valueToMultiply = document.getElementById("currency").value;
    valueToMultiply = parseFloat(valueToMultiply);

    var calc = valueToMultiply * amountToChange;
    // console.log(calc);
    // document.write(calc);
    alert(calc);
}
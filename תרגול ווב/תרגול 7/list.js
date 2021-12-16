let ul = document.getElementById("list")
// alert("Hello 16/12/2021");
document.write(10 * 0.3);
function nameOfFunction() {
    let itemText = document.getElementById("item")
    ul.innerHTML += "<li>" + itemText.value + "</li>"
    itemText.value = ""
}
function calculateString() {
    let stringOfCalculations = document.getElementById("inputColshuw");
    try {
        // eval(stringOfCalculations.value);
        let result = eval("5*6*2/");
        document.write(result);
    } catch (error) {
        document.write("Error in eval function")
    }
}

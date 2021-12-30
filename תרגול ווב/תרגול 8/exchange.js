/*
 * 1. לקחת את הערך מהקלט
 *
 * 2. לעבד את הערך לפי הבחירה של השער
 * 2.1 גרסת דולר
 * 2.2 גרסת יורו
 * 2.3 גרסת לירה שטרלינג
 *
 * 3. הצבת התוצאה לקלט לקריאה בלבד.
*/
let inputAmount = document.getElementById("amount");
// inputAmount.value = 150;
let result = document.getElementById("result");


function convert(valueOfCoin) {
    let amountToChange = parseFloat(inputAmount.value); // "5"
    let newAmountInUSD = amountToChange / valueOfCoin;
    result.value = newAmountInUSD;
}


// function convertToUSD() {
//     let amountToChange = parseFloat(inputAmount.value); // "5"
//     let newAmountInUSD = amountToChange / 3.1;
//     result.value = newAmountInUSD;
// }
// function convertToEuro() {
//     let amountToChange = parseFloat(inputAmount.value); // "5"
//     let newAmountInUSD = amountToChange / 3.5;
//     result.value = newAmountInUSD;
// }
// function convertToPound() {
//     let amountToChange = parseFloat(inputAmount.value); // "5"
//     let newAmountInUSD = amountToChange / 4.1;
//     result.value = newAmountInUSD;
// }


// function strightLine(x) {
//     let y = 2 * x + 4;
//     alert(y)
// }
// strightLine(5)
// strightLine(10)
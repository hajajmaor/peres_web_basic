// let table = document.getElementById("table");
function insertRow(i) {
    for (let j = 1; j <= 10; j++)
        document.write(`<td>${i * j}</td>`);
}
document.write(`<table>`);
// table.innerHTML = "<table>";
for (let i = 1; i <= 10; i++) {
    document.write(`<tr>`);
    // table.innerHTML += "<tr>";
    insertRow(i);
    document.write(`</tr>`);
    // table.innerHTML += "</tr>";
}
document.write(`</table>`);
// table.innerHTML += "</table>";
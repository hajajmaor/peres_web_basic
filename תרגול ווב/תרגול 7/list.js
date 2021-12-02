let ul = document.getElementById("list")

function nameOfFunction() {
    let itemText = document.getElementById("item")
    ul.innerHTML += "<li>" + itemText.value + "</li>"
    itemText.value = ""
}
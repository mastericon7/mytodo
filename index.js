function todoWrite() {
    var newElement = document.createElement("div");
    newElement.innerHTML = document.getElementById("box").value;
    newElement.onclick = elementDelete;
    document.getElementById("list").appendChild(newElement);
}

function elementDelete() {
    document.getElementById("list").removeChild(this);
}
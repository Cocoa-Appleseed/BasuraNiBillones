function showname() {
    document.getElementById("name").innerHTML = localStorage.getItem("storeusername").toUpperCase();
}

function next() {
    window.location.href = "page3.html";
}
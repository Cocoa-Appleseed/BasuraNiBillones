function submit() {
    var username = document.getElementById("inputname").value;
    if (username.length > 0) {
        localStorage.setItem("storeusername", username);
        window.location.href = "page2.html";
    }
}
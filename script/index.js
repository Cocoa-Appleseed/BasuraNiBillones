function submit() {
    var username = document.getElementById("inputname").value;
    if (username.length > 0) {
        localStorage.setItem("storeusername", username);
        window.location.href = "page2.html";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#inputname").addEventListener("keyup", event => {
        if(event.key !== "Enter") return; 
        document.querySelector("#submit").click();
        event.preventDefault();
    });
});
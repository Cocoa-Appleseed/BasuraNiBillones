function next() {
    window.location.href = "page5.html";
}

function back() {
    window.location.href = "page3.html";
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("body").addEventListener("keyup", event => {
        if(event.key !== "Enter") return; 
        document.querySelector("#continue").click();
        event.preventDefault();
    });
    document.querySelector("body").addEventListener("keyup", event => {
        if(event.key !== "Backspace") return; 
        document.querySelector("#back").click();
        event.preventDefault();
    });
});
var click;

function showname() {
    document.getElementById("name").innerHTML = localStorage.getItem("storeusername").toUpperCase();
}

function next() {
    click.play()
    document.querySelector('body').style.opacity = 0;
    setTimeout(function() { 
        window.location.href = "page3.html";
    }, 500)
}

function back() {
    click.play()
    document.querySelector('body').style.opacity = 0;
    setTimeout(function() { 
        window.location.href = "index.html";
    }, 500)
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() { 
        document.querySelector('body').style.opacity = 1;
    }, 100)
    click = new sound("sounds/analog.mp3");
    invalid = new sound("sounds/invalid.mp3");
});

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}
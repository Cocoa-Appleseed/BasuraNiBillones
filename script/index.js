var click, invalid;

function submit() {
    var username = document.getElementById("inputname").value;
    if (username.length > 0) {
        click.play();
        localStorage.setItem("storeusername", username);
        document.querySelector('body').style.opacity = 0;
        setTimeout(function() { 
            window.location.href = "page2.html";
        }, 500)
    } else {
        invalid.play();
        document.querySelector('#submit').style.border = "0.15vw solid red";
        document.querySelector('#submit').style.color = "red";
        setTimeout(function() { 
            document.querySelector('#submit').style.border = "0.15vw solid black";
            document.querySelector('#submit').style.color = "black";
        }, 200)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() { 
        document.querySelector('body').style.opacity = 1;
    }, 100)
    document.querySelector("#inputname").addEventListener("keyup", event => {
        if(event.key !== "Enter") return; 
        document.querySelector("#submit").click();
        event.preventDefault();
    });
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
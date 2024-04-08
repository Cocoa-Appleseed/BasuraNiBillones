var click, start;

function next() {
    start.play();
    document.querySelector('body').style.opacity = 0;
    setTimeout(function() { 
        window.location.href = "page4.html";
    }, 500)
}

function back() {
    click.play();
    document.querySelector('body').style.opacity = 0;
    setTimeout(function() { 
        window.location.href = "page2.html";
    }, 500)
}


function first() {
    click.play();
    document.querySelector('#mid').style.color = "#5E3B2982";
    document.querySelector('#right').style.color = "#5E3B2982";
    document.querySelector('#mid').style.border = "0.15vw solid #5E3B2982";
    document.querySelector('#right').style.border = "0.15vw solid #5E3B2982";
    document.querySelector('#mid').style.borderLeft = "none";
    document.querySelector('#right').style.borderLeft = "none";
    document.querySelector('#mid').style.background = "none";
    document.querySelector('#right').style.background = "none";

    document.querySelector('#left').style.border = "0.15vw solid #5E3B29";
    document.querySelector('#left').style.color = "#5E3B29";
    document.querySelector('#left').style.background = "white";
}

function second() {
    click.play();
    document.querySelector('#right').style.color = "#5E3B2982";
    document.querySelector('#left').style.color = "#5E3B2982";
    document.querySelector('#right').style.border = "0.15vw solid #5E3B2982";
    document.querySelector('#left').style.border = "0.15vw solid #5E3B2982";
    document.querySelector('#mid').style.borderLeft = "none";
    document.querySelector('#right').style.borderLeft = "none";
    document.querySelector('#left').style.background = "none";
    document.querySelector('#right').style.background = "none";

    document.querySelector('#mid').style.border = "0.15vw solid #5E3B29";
    document.querySelector('#mid').style.borderLeft = "none";
    document.querySelector('#left').style.borderRight = "0.15vw solid #5E3B29";
    document.querySelector('#mid').style.color = "#5E3B29";
    document.querySelector('#mid').style.background = "white";
}

function third() {
    click.play();
    document.querySelector('#mid').style.color = "#5E3B2982";
    document.querySelector('#left').style.color = "#5E3B2982";
    document.querySelector('#mid').style.border = "0.15vw solid #5E3B2982";
    document.querySelector('#left').style.border = "0.15vw solid #5E3B2982";
    document.querySelector('#mid').style.borderLeft = "none";
    document.querySelector('#right').style.borderLeft = "none";
    document.querySelector('#left').style.background = "none";
    document.querySelector('#mid').style.background = "none";

    document.querySelector('#right').style.border = "0.15vw solid #5E3B29";
    document.querySelector('#right').style.borderLeft = "none";
    document.querySelector('#mid').style.borderRight = "0.15vw solid #5E3B29";
    document.querySelector('#right').style.color = "#5E3B29";
    document.querySelector('#right').style.background = "white";
}

function gotofirst() {
    window.location.href = "#introduction";
}

function gotosecond() {
    window.location.href = "#inpshs";
}

function gotothird() {
    window.location.href = "#instructions";
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() { 
        document.querySelector('body').style.opacity = 1;
    }, 100)
    click = new sound("sounds/analog.mp3");
    start = new sound("sounds/chime.mp3");
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
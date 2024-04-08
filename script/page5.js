var click, score, chime;

function load() {
    score = localStorage.getItem("correct")/20*100;
    document.getElementById("score").innerHTML = score + "%";
    if (score >= 85) {
        document.getElementById("message").innerHTML = "CONGRATS! Master ka pala ng waste segregation, ha! You got a score of…";
        document.getElementById("advice").innerHTML = "You have already successfully achieved mastery of waste management! Continue to apply this in real life, and Mother Earth would be happy!<br><br>For further improvements and learning, you can check out the links below:";
        document.getElementById("score").style.color = "rgb(0, 143, 29)";
        document.getElementById("reaction").src = "images/billones/hb-doublegood.png";
    } else if (score >= 60) {
        document.getElementById("message").innerHTML = "YIEEEEEE! Pasado siya! But still, you can do better pa. You got a score of…";
        document.getElementById("advice").innerHTML = "So close! A little bit more practice and learning would help you finally master your skills on waste management.<br><br>For improvements and learning, you can check out the links below:";
        document.getElementById("score").style.color = "rgb(71, 29, 209)";
        document.getElementById("reaction").src = "images/billones/hb-good.png";
    } else {
        document.getElementById("message").innerHTML = "Yikes… Kailangan mong mag improve… You got a score of…";
        document.getElementById("advice").innerHTML = "Practice makes perfect! Greatly improve your skills on waste management for a better and cleaner environment for the years to come.<br><br>For improvements and learning, you can check out the links below:";
        document.getElementById("score").style.color = "red";
        document.getElementById("reaction").src = "images/billones/hb-doubledown.png";
    }
}

function clicksound() {
    click.play();
}

function returnTitle() {
    chime.play();
    document.querySelector('body').style.opacity = 0;
    setTimeout(function() { 
        window.location.href = "page2.html";
    }, 500)
}

function first() {
    click.play();
    document.querySelector('#right').style.color = "#5E3B2982";
    document.querySelector('#right').style.border = "0.15vw solid #5E3B2982";
    document.querySelector('#right').style.borderLeft = "none";
    document.querySelector('#right').style.background = "none";

    document.querySelector('#left').style.border = "0.15vw solid #5E3B29";
    document.querySelector('#left').style.color = "#5E3B29";
    document.querySelector('#left').style.background = "white";
}

function second() {
    click.play();
    document.querySelector('#left').style.color = "#5E3B2982";
    document.querySelector('#left').style.border = "0.15vw solid #5E3B2982";
    document.querySelector('#left').style.borderRight = "none";
    document.querySelector('#left').style.background = "none";

    document.querySelector('#right').style.border = "0.15vw solid #5E3B29";
    document.querySelector('#right').style.color = "#5E3B29";
    document.querySelector('#right').style.borderLeft = "0.15vw solid #5E3B29";
    document.querySelector('#right').style.background = "white";
}

function gotofirst() {
    window.location.href = "#results";
}

function gotosecond() {
    window.location.href = "#suggestions";
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() { 
        document.querySelector('body').style.opacity = 1;
    }, 100)
    click = new sound("sounds/analog.mp3");
    chime = new sound("sounds/chime.mp3");
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
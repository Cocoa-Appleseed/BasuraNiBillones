var bloop, trash, accept, deny, index = 0, correct = 0;

function start() {
    localStorage.setItem("index", 0);
    localStorage.setItem("correct", 0);
    for (var order = [], i = 1; i <= 40; ++i) {
        order[i-1] = i;
    }
    function shuffle(array) {
        var tmp, current, top = array.length;
        if(top) while(--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
        return array;
    }
    order = shuffle(order);
    console.log(order);
    localStorage.setItem("order", JSON.stringify(order));
    load(JSON.parse(localStorage.getItem("order"))[0]);
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() { 
        document.querySelector('body').style.opacity = 1;
    }, 100)
    bloop = new sound("../sounds/bloop.mp3");
    trash = new sound("../sounds/trash.mp3");
    accept = new sound("../sounds/accept.ogg");
    deny = new sound("../sounds/deny.ogg");
})

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.load = function(){
        this.sound.load();
    }
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}

function hoverimage() {
    document.querySelector('#black-bin').style.opacity = '0.5';
    bloop.load();
    bloop.play();
}

function unhoverimage() {
    document.querySelector('#black-bin').style.opacity = '0.8';
}

function hoverimage1() {
    document.querySelector('#green-bin').style.opacity = '0.5';
    bloop.load();
    bloop.play();
}

function unhoverimage1() {
    document.querySelector('#green-bin').style.opacity = '0.8';
}

function hoverimage2() {
    document.querySelector('#red-bin').style.opacity = '0.5';
    bloop.load();
    bloop.play();
}

function unhoverimage2() {
    document.querySelector('#red-bin').style.opacity = '0.8';
}

function hoverimage3() {
    document.querySelector('#blue-bin').style.opacity = '0.5';
    bloop.load();
    bloop.play();
}

function unhoverimage3() {
    document.querySelector('#blue-bin').style.opacity = '0.8';
}

function hoverimage4() {
    document.querySelector('#yellow-bin').style.opacity = '0.5';
    bloop.load();
    bloop.play();
}

function unhoverimage4() {
    document.querySelector('#yellow-bin').style.opacity = '0.8';
}

function check(bin) {
    trash.load();
    trash.play();
    let order = JSON.parse(localStorage.getItem("order"));
    switch (bin) {
        case "black":
            if ([17, 18, 19, 20, 21, 22, 23, 24].includes(order[index])) {
                accept.load();
                accept.play();
                localStorage.setItem("correct", (parseInt(localStorage.getItem("correct"))+1));
            } else {deny.load();deny.play()}
            break;
        case "green":
            if ([1, 2, 3, 4, 5, 6, 7, 8].includes(order[index])) {
                accept.load();
                accept.play();
                localStorage.setItem("correct", (parseInt(localStorage.getItem("correct"))+1));
            } else {deny.load();deny.play()}
            break;
        case "red":
            if ([33, 34, 35, 36, 37, 38, 39, 40].includes(order[index])) {
                accept.load();
                accept.play();
                localStorage.setItem("correct", (parseInt(localStorage.getItem("correct"))+1));
            } else {deny.load();deny.play()}
            break;
        case "blue":
            if ([25, 26, 27, 28, 29, 30, 31, 32].includes(order[index])) {
                accept.load();
                accept.play();
                localStorage.setItem("correct", (parseInt(localStorage.getItem("correct"))+1));
            } else {deny.load();deny.play()}   
            break; 
        case "yellow":
            if ([9, 10, 11, 12, 13, 14, 15, 16].includes(order[index])) {
                accept.load();
                accept.play();
                localStorage.setItem("correct", (parseInt(localStorage.getItem("correct"))+1));
            } else {deny.load();deny.play()}
            break;
    }
    if (localStorage.getItem("index") == 19) {
        document.querySelector('body').style.opacity = 0;
        setTimeout(function() { 
            window.location.href = "page5.html";
        }, 500)
    } else {
        index = 1+parseInt(localStorage.getItem("index"));
        localStorage.setItem("index", index);
        if (parseInt(localStorage.getItem("index")) > 8) {
            document.getElementById("counterval").innerHTML = 1 + parseInt(localStorage.getItem("index"));
        } else {
            document.getElementById("counterval").innerHTML = "0" + (parseInt(localStorage.getItem("index")) + 1);
        }
        load(JSON.parse(localStorage.getItem("order"))[index]);
    }
}

function load(num) {
    switch (num) {
        case 1:
            document.getElementById("item").src = "../images/trash/bio/Avocado.png";
            document.getElementById("itemname").innerHTML = "AVOCADO";
            break;
        case 2:
            document.getElementById("item").src = "../images/trash/bio/Banana.png";
            document.getElementById("itemname").innerHTML = "BANANA";
            break;
        case 3:
            document.getElementById("item").src = "../images/trash/bio/Fish Bone.png";
            document.getElementById("itemname").innerHTML = "FISH BONE";
            break;
        case 4:
            document.getElementById("item").src = "../images/trash/bio/Yellow Pad Paper.png";
            document.getElementById("itemname").innerHTML = "YELLOW PAD PAPER";
            break;
        case 5:
            document.getElementById("item").src = "../images/trash/bio/Raw Chicken.png";
            document.getElementById("itemname").innerHTML = "RAW CHICKEN";
            break;
        case 6:
            document.getElementById("item").src = "../images/trash/bio/Rice.png";
            document.getElementById("itemname").innerHTML = "RICE";
            break;
        case 7:
            document.getElementById("item").src = "../images/trash/bio/Rotten Salad.png";
            document.getElementById("itemname").innerHTML = "ROTTEN SALAD";
            break;
        case 8:
            document.getElementById("item").src = "../images/trash/bio/Tomato.png";
            document.getElementById("itemname").innerHTML = "TOMATO";
            break;
        case 9:
            document.getElementById("item").src = "../images/trash/haz/air freshener.png";
            document.getElementById("itemname").innerHTML = "AIR FRESHENER";
            break;
        case 10:
            document.getElementById("item").src = "../images/trash/haz/disposable gloves.png";
            document.getElementById("itemname").innerHTML = "USED GLOVES";
            break;
        case 11:
            document.getElementById("item").src = "../images/trash/haz/face mask.png";
            document.getElementById("itemname").innerHTML = "USED FACE MASK";
            break;
        case 12:
            document.getElementById("item").src = "../images/trash/haz/hairspray.png";
            document.getElementById("itemname").innerHTML = "HAIRSPRAY";
            break;
        case 13:
            document.getElementById("item").src = "../images/trash/haz/lighter.png";
            document.getElementById("itemname").innerHTML = "LIGHTER";
            break;
        case 14:
            document.getElementById("item").src = "../images/trash/haz/rusty knife.png";
            document.getElementById("itemname").innerHTML = "RUSTY KNIFE";
            break;
        case 15:
            document.getElementById("item").src = "../images/trash/haz/rusty scissors.png";
            document.getElementById("itemname").innerHTML = "RUSTY SCISSORS";
            break;
        case 16:
            document.getElementById("item").src = "../images/trash/haz/used diaper.png";
            document.getElementById("itemname").innerHTML = "USED DIAPER";
            break;
        case 17:
            document.getElementById("item").src = "../images/trash/nonbio/Bag of Chips (Clover).png";
            document.getElementById("itemname").innerHTML = "BAG OF CHIPS (CLOVER)";
            break;
        case 18:
            document.getElementById("item").src = "../images/trash/nonbio/Bag of Chips (Roller Coaster).png";
            document.getElementById("itemname").innerHTML = "BAG OF CHIPS (ROLLER COASTER)";
            break;
        case 19:
            document.getElementById("item").src = "../images/trash/nonbio/Broken Glass (Shard).png";
            document.getElementById("itemname").innerHTML = "BROKEN GLASS (SHARD)";
            break;
        case 20:
            document.getElementById("item").src = "../images/trash/nonbio/Bubble Gum.png";
            document.getElementById("itemname").innerHTML = "BUBBLE GUM";
            break;
        case 21:
            document.getElementById("item").src = "../images/trash/nonbio/Bubble Wrap.png";
            document.getElementById("itemname").innerHTML = "BUBBLE WRAP";
            break;
        case 22:
            document.getElementById("item").src = "../images/trash/nonbio/Correction Tape.png";
            document.getElementById("itemname").innerHTML = "CORRECTION TAPE";
            break;
        case 23:
            document.getElementById("item").src = "../images/trash/nonbio/Disposable Spoon.png";
            document.getElementById("itemname").innerHTML = "DISPOSABLE SPOON";
            break;
        case 24:
            document.getElementById("item").src = "../images/trash/nonbio/Plastic Bag.png";
            document.getElementById("itemname").innerHTML = "PLASTIC BAG";
            break;
        case 25:
            document.getElementById("item").src = "../images/trash/rec/Carton Box.png";
            document.getElementById("itemname").innerHTML = "CARTON BOX";
            break;
        case 26:
            document.getElementById("item").src = "../images/trash/rec/Coke.png";
            document.getElementById("itemname").innerHTML = "GLASS BOTTLE OF COCA-COLA";
            break;
        case 27:
            document.getElementById("item").src = "../images/trash/rec/Glass Jar.png";
            document.getElementById("itemname").innerHTML = "GLASS JAR";
            break;
        case 28:
            document.getElementById("item").src = "../images/trash/rec/Magazines.png";
            document.getElementById("itemname").innerHTML = "MAGAZINES";
            break;
        case 29:
            document.getElementById("item").src = "../images/trash/rec/Newspaper.png";
            document.getElementById("itemname").innerHTML = "NEWSPAPERS";
            break;
        case 30:
            document.getElementById("item").src = "../images/trash/rec/Sprite.png";
            document.getElementById("itemname").innerHTML = "BOTTLE OF SPRITE";
            break;
        case 31:
            document.getElementById("item").src = "../images/trash/rec/Tin can.png";
            document.getElementById("itemname").innerHTML = "TIN CAN";
            break;
        case 32:
            document.getElementById("item").src = "../images/trash/rec/Water Bottle.png";
            document.getElementById("itemname").innerHTML = "BOTTLE OF WATER";
            break;
        case 33:
            document.getElementById("item").src = "../images/trash/spec/charger.png";
            document.getElementById("itemname").innerHTML = "CHARGER";
            break;
        case 34:
            document.getElementById("item").src = "../images/trash/spec/desktop.png";
            document.getElementById("itemname").innerHTML = "DESKTOP";
            break;
        case 35:
            document.getElementById("item").src = "../images/trash/spec/keyboard.png";
            document.getElementById("itemname").innerHTML = "KEYBOARD";
            break;
        case 36:
            document.getElementById("item").src = "../images/trash/spec/laser printer.png";
            document.getElementById("itemname").innerHTML = "LASER PRINTER";
            break;
        case 37:
            document.getElementById("item").src = "../images/trash/spec/batteries.png";
            document.getElementById("itemname").innerHTML = "BATTERIES";
            break;
        case 38:
            document.getElementById("item").src = "../images/trash/spec/scanner.png";
            document.getElementById("itemname").innerHTML = "SCANNER";
            break;
        case 39:
            document.getElementById("item").src = "../images/trash/spec/speaker.png";
            document.getElementById("itemname").innerHTML = "SPEAKER";
            break;
        case 40:
            document.getElementById("item").src = "../images/trash/spec/wristwatch.png";
            document.getElementById("itemname").innerHTML = "WRISTWATCH";
            break;
    }
}
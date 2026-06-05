const startBtn =
document.getElementById(
"startBtn"
);

const status =
document.getElementById(
"status"
);

const message =
document.getElementById(
"message"
);

const errorBox =
document.getElementById(
"errorBox"
);

const errorText =
document.getElementById(
"errorText"
);

const closeError =
document.getElementById(
"closeError"
);

const rageFill =
document.getElementById(
"rageFill"
);

const rageText =
document.getElementById(
"rageText"
);

const scanBtn =
document.getElementById(
"scanBtn"
);

const scanBox =
document.getElementById(
"scanBox"
);

const progressFill =
document.getElementById(
"progressFill"
);

const scanStatus =
document.getElementById(
"scanStatus"
);

const closeScan =
document.getElementById(
"closeScan"
);

let attempts = 0;
let rage = 0;

const errors = [

"Brain.exe stopped working",

"Too much skill detected",

"Critical pizza shortage",

"Keyboard is scared",

"Your mouse needs therapy",

"AnnoyOS found happiness and crashed",

"Error 404: Motivation not found"

];

startBtn.addEventListener(
"mouseenter",
function(){

    attempts++;

    rage += 5;

    if(rage > 100){
        rage = 100;
    }

    rageFill.style.width =
    rage + "%";

    rageText.innerText =
    "Rage Level: " +
    rage +
    "%";

    status.innerText =
    "Attempts to click: " +
    attempts;

    const desktop =
    document.querySelector(
    ".desktop"
    );

    const area =
    desktop.getBoundingClientRect();

    const randomX =
    Math.random() *
    (area.width -
    startBtn.offsetWidth);

    const randomY =
    Math.random() *
    (area.height -
    startBtn.offsetHeight);

    startBtn.style.position =
    "fixed";

    startBtn.style.left =
    (area.left + randomX) +
    "px";

    startBtn.style.top =
    (area.top + randomY) +
    "px";

    if(attempts < 5){

        message.innerText =
        "Too slow 😎";

    }

    else if(attempts < 10){

        message.innerText =
        "Still trying? 😂";

    }

    else if(attempts < 15){

        message.innerText =
        "Give up already 🤣";

    }

    else{

        message.innerText =
        "AnnoyOS is winning 💀";

    }

    if(
    Math.random() > 0.6
    ){

        errorText.innerText =
        errors[
        Math.floor(
        Math.random() *
        errors.length
        )
        ];

        errorBox.style.display =
        "block";

    }

    if(rage >= 100){

        document.body.style.filter =
        "hue-rotate(120deg)";

        message.innerText =
        "MAXIMUM RAGE ACHIEVED ☠️";

    }

}
);

closeError.addEventListener(
"click",
function(){

    errorBox.style.display =
    "none";

}
);

startBtn.addEventListener(
"click",
function(){

    alert(
    "Impossible... you clicked it."
    );

}
);

if(
scanBtn &&
scanBox &&
progressFill &&
scanStatus &&
closeScan
){

    scanBtn.addEventListener(
    "click",
    function(){

        scanBox.style.display =
        "block";

        progressFill.style.width =
        "0%";

        scanStatus.innerText =
        "Scanning system...";

        let progress = 0;

        const scan =
        setInterval(
        function(){

            progress += 10;

            progressFill.style.width =
            progress + "%";

            if(
            progress >= 100
            ){

                clearInterval(
                scan
                );

                scanStatus.innerText =
                "⚠ 18,472 Problems Found! Keyboard is scared. Pizza folder corrupted. Brain RAM usage: 104%.";

            }

        },
        250
        );

    }
    );

    closeScan.addEventListener(
    "click",
    function(){

        scanBox.style.display =
        "none";

    }
    );

}
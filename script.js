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

let attempts = 0;

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

    status.innerText =
    "Attempts to click: " +
    attempts;

    const maxX =
    window.innerWidth -
    startBtn.offsetWidth -
    50;

    const maxY =
    window.innerHeight -
    startBtn.offsetHeight -
    100;

    startBtn.style.position =
    "fixed";

    startBtn.style.left =
    Math.random() *
    maxX +
    "px";

    startBtn.style.top =
    Math.random() *
    maxY +
    "px";

    if(attempts < 5){

        message.innerText =
        "Too slow 😎";

    }

    else if(attempts < 10){

        message.innerText =
        "Still trying? 😂";

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
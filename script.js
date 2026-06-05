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

let attempts = 0;

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

    const randomX =
    Math.random() *
    maxX;

    const randomY =
    Math.random() *
    maxY;

    startBtn.style.position =
    "fixed";

    startBtn.style.left =
    randomX + "px";

    startBtn.style.top =
    randomY + "px";

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
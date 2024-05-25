/* variable */
let money = document.getElementById("money");
let self = document.getElementById("self");
let motivation = document.getElementById("motivation");
let social = document.getElementById("social");
let reset = document.getElementById("reset");
let show = document.getElementById("show");
let hide = document.getElementById("hide");

function showHide() {
    if (show.style.display == "none"){
        show.style.display = "flex";
        hide.style.display = "none";
    }
    else{
        show.style.display = "none";
        hide.style.display = "flex";
    }
}

// activate //
money.onclick = () => {
    talk("advice", "Guuurl, look for a Sugar daddy, and all your problems will be solved.");
    showHide();
}
self.onclick = () => {
    talk("advice", "You are beautiful huuuuney, and anybody who try to make you believe another thing, it´s mad.");
    showHide();
}
motivation.onclick = () => {
    talk("advice", "You are beautiful, but not for ever, take advantage now before it´s too late.");
    showHide();
}
social.onclick = () => {
    talk("advice", "They envy you, don´t care about them and find new friends.");
    showHide();
}
reset.onclick = () => {
    showHide();
}

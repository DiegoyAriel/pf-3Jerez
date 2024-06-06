

//functions//
function talk(object, text){
    let dialog = document.getElementById(object);
    if (dialog){
        dialog.innerText= text;
    }
}

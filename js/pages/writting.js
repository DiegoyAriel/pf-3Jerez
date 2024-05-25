// Global variables
const words=[];
let control = 0
let textArea = document.getElementById("words");
let userName= ""

//NameAsking

let nameAsking = document.getElementById("nameAsking");
nameAsking.addEventListener("submit", welcoming);

function welcoming(e){
    e.preventDefault();
    userName = document.getElementById("name").value;
    nameAsking.style.display = "none";
    wordsAsking.style.display = "flex";
    return userName;
};

//AddWords

wordsAsking.addEventListener("submit", addWord);

function addWord(e){
    e.preventDefault();
    let word = textArea.value;
    words.push(word);
    textArea.value = ""
    control = control + 1;
    //Steps controller
if (control == 0){
    talk("writtingDialog", "Give me a season");
    textArea.placeholder = "Write a season"
}
else if (control == 1){
    talk("writtingDialog", "Give me a place");
    textArea.placeholder = "Write a place";
}
else if (control == 2){
    talk("writtingDialog", "Give me a verb with ing");
    textArea.placeholder = "Write a verb + ing";
}
else if (control == 3){
    talk("writtingDialog", "Give me a adjetive");
    textArea.placeholder = "Write a adjetive";
}
else if (control == 4){
    talk("writtingDialog", "Give me a part of the body");
    textArea.placeholder = "Write a part of the body";
}
else if (control == 5){
    talk("writtingDialog", "Give me another verb");
    textArea.placeholder = "Write another verb";
}
else{
    let final= pencil();
    talk("answers", final);
    wordsAsking.style.display = "none";


};
};
function pencil(){
    let story = "There was a dark night of " + words[0] + " when " + userName + " enters to " + words[1] + ", suddenly, " + userName + " saw at the end of the " + words[1] + " a person, who was " + words[2] + ". In the right corner, there was a big statue " + userName + " said, it´s a " + words[3] + " statue. Suddenly, the statue stand up, ran and cut the person´s " + words[4] + ". The only thing that "+ userName + " can do, was " + words[5];
    return story;
};

// Reset

wordsAsking.addEventListener("reset", eraseWords);

function eraseWords(){
    e.preventDefault();
    words.splice(0,6);
    control = 0;
}

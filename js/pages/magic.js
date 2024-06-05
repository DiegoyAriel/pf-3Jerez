//Global variables
let magicDialog = document.getElementById("magicDialog");
let user = localStorage.getItem("user");
let nameAsking = document.getElementById("nameAsking");
let questions = document.getElementById("questions");


if (user){
    nameAsking.style.display = "none";
    questions.style.display = "flex";
    let userWelcome= "Hello " + user + ", please, ask me your question. Remember, just Yes/No questions";
    talk("magicDialog", userWelcome);
}
else{
    nameAsking.addEventListener("submit", nameAsk)
}
function nameAsk(e){
    e.preventDefault();
    let userName = document.getElementById("name").value;
    localStorage.setItem("user", userName);
    user = localStorage.getItem("user");
    let userWelcome= "Hello " + user + ", please, ask me your question. Remember, just Yes/No questions";
    talk("magicDialog", userWelcome);
    nameAsking.style.display = "none";
    questions.style.display = "flex";
};


//asking questions
questions.addEventListener("submit", magic);

// Primary Function
function MagicBall(question) {
    let answer = "";
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) {
        answer = "The answer for your question " + question + " is No";
    } else if (number === 2) {
        answer = "The answer for your question " + question + " is Yes";
    } else {
        answer = "The answer for your question " + question + " is maybe";
    }
    return answer;
}

// Secundary function
 function magic(e){
    e.preventDefault();
    let questionArea = document.getElementById("question");
    let question = document.getElementById("question").value;
    let answer= MagicBall(question);
    talk("magicDialog", answer);
    questionArea.value = "";
 }

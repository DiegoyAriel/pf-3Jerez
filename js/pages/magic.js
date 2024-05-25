

//Global variables
let magicDialog = document.getElementById("magicDialog");

// Asking for name
let nameAsking = document.getElementById("nameAsking");
nameAsking.addEventListener("submit", welcoming);

function welcoming(e){
    e.preventDefault();
    let userName = document.getElementById("name").value;
    let userWelcome= "Hello " + userName + ", please, ask me your question. Remember, just Yes/No questions";
    talk("magicDialog", userWelcome);
    nameAsking.style.display = "none";
    questions.style.display = "flex";
};

//asking questions
let questionAsking = document.getElementById("questionAsking")
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

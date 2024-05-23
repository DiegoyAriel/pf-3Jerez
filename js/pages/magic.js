//Primary Function //
function MagicBall(question){
    let answer = "";
    let number = Math.floor(Math.random()*3)+1;
    if (number == 1){
        answer = "The answer for your question " + question + " is No";
    }
    else if(number == 2){
        answer ="The answer for your question " +  question + " is Yes";
    }
    else{
        answer ="The answer for your question " +  question + " is maybe";
    }
};

//Asking for name
document.getElementById("questions").addEventListener('submit', function(event) {
    event.preventDefault();
    let user = document.getElementById("questions")
    const userName = document.getElementById('name').value;
    talk("magic_dialog","Hello " + userName)
    talk("first_question", "Please, write your question. Remember I cant only predict Yes/No questions")
    let name = document.getElementById("name");
    name.id = "question"
    name.placeholder = "Write your question"
    name.value=""
    user.id = "userQuestions"
});

// Questions
document.addEventListener('submit', function(event) {
    event.preventDefault();
    if (event.target.id === "userQuestions") { 
        const UserQuestion = document.getElementById('question').value;
        const answer = MagicBall(UserQuestion); 
        talk("first_question", answer);
        let question1 = document.getElementById("question");
        question1.placeholder = "Write another question";
        question1.value = "";
    }
});

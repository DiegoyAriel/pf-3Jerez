//objets constructor
class cat {
    constructor(name, color, job, message) {
        this.name = name;
        this.color = color;
        this.job = job;
        this.message = message;
    }
}

/* Objetos */
const madameLaPurr=new cat("MadameLaPurr", "Grey", "Predict the future", "Ask me about your future or give an atun can.");
const cathspiare =new cat("Cathspiare", "Brown", "Write stories", "I gonna scare you to the bone.");
const miauLaCasan =new cat("Miau La Casan", "Blonde", "Give advices", "You are great and magnificent.");
const ariel =new cat("Ariel", "Grey", "Talk about his employees", "I´m the owner of this website. Please enjoy your experience.");

/* Activate */
let magicB = document.getElementById("magic");
let cathspiareB = document.getElementById("cathspiare");
let miauB = document.getElementById("miau");
let arielB = document.getElementById("ariel");


magicB.onclick = () => {
    talk("catName", madameLaPurr.name)
    talk("color", madameLaPurr.color)
    talk("job", madameLaPurr.job)
    talk("message", madameLaPurr.message)
}
cathspiareB.onclick = () => {
    talk("catName", cathspiare.name)
    talk("color", cathspiare.color)
    talk("job", cathspiare.job)
    talk("message", cathspiare.message)
}
miauB.onclick = () => {
    talk("catName", miauLaCasan.name)
    talk("color", miauLaCasan.color)
    talk("job", miauLaCasan.job)
    talk("message", miauLaCasan.message)
}
arielB.onclick = () => {
    talk("catName", ariel.name)
    talk("color", ariel.color)
    talk("job", ariel.job)
    talk("message", ariel.message)
}
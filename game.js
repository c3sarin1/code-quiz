const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentquestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []


let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        choice1: 'script',
        choice2: 'javascript',
        choice3: 'scripting',
        choice4: 'js',
        answer: this.choice1,
    },
    {
        question: 'The external JavaScript file must contain the <script> tag.',
        choice1: 'true',
        choice2: 'false',
        answer: this.choice2,
    },
    {
        question: 'How can you add a comment in a JavaScript?',
        choice1: 'This is a comment',
        choice2: '<!--this is a comment-->',
        choice3: '//this is a comment',
        answer: this.choice3,
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        choice1: 'Both the <head> section and the <body> section are correct',
        choice2: 'The <head> section',
        choice3: 'The <body> section',
        answer: this.choice1,
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        choice1: '<script name="xxx.js">',
        choice2: '<script src="xxx.js">',
        choice3: '<script href="xxx.js">',
        answer: this.choice2
    },

]
var time = 60
function myFunction() {

    timer = setInterval(function () {
        time--
        if (time <= 0) {
            clearTimeout(timer)
        }
        document.getElementById("score").innerHTML = time;
    }, 1000);

}
myFunction()







var Qi=0
document.getElementById("question").innerHTML = questions[Qi].question
document.getElementById("1").innerHTML = questions[Qi].choice1
document.getElementById("2").innerHTML = questions[Qi].choice2
document.getElementById("3").innerHTML = questions[Qi].choice3
document.getElementById("4").innerHTML = questions[Qi].choice4
var choiceClick = function () {
    this.event.preventDefault()
    console.log(this.event.currentTarget.querySelector(".choice-text").innerHTML)
    if (this.event.currentTarget.querySelector(".choice-text").innerHTML != questions[Qi].answer) {
        time = time - 10
    }
    Qi++
    document.getElementById("question").innerHTML = questions[Qi].question
    document.getElementById("1").innerHTML = questions[Qi].choice1


};



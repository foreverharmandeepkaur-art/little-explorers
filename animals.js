console.log("JS connected 🚀");
// ===== QUESTIONS =====
const questions = [
    {
    question: "Which animal is this ?",
    image:"lion.png",
    options:["Elephant","Lion","Cow","Dog"],
    answer:"Lion"
    },
    {
question: "What animal is this?",
image: "dog.png",
options: ["Dog", "Cat", "Cow", "Pig"],
answer: "Dog"
},
{
question: "What animal is this?",
image: "cat.png",
options: ["Rabbit", "Cat", "Duck", "Goat"],
answer: "Cat"
},
{
question: "What animal is this?",
image: "cow.png",
options: ["Cow", "Pig", "Elephant", "Monkey"],
answer: "Cow"
},
{
question: "What animal is this?",
image: "pig.png",
options: ["Tiger", "Pig", "Rat", "Dog"],
answer: "Pig"
},
{
question: "What animal is this?",
image: "rabbit.png",
options: ["Rabbit", "Sheep", "Duck", "Goat"],
answer: "Rabbit"
},
{
question: "What animal is this?",
image: "giraffe.png",
options: ["Camel", "Elephant", "Giraffe", "Monkey"],
answer: "Giraffe"
},
{
question: "What animal is this?",
image: "elephant.png",
options: ["Bull", "Elephant", "Whale", "Tiger"],
answer: "Elephant"
},
{
question: "What animal is this?",
image: "duck.png",
options: ["Duck", "Sheep", "Cat", "Rat"],
answer: "Duck"
},
{
question: "What animal is this?",
image: "sheep.png",
options: ["Goat", "Pig", "Sheep", "Cow"],
answer: "Sheep"
},
{
question: "What animal is this?",
image: "goat.png",
options: ["Goat", "Dog", "Bull", "Monkey"],
answer: "Goat"
},
{
question: "What animal is this?",
image: "tiger.png",
options: ["Lion", "Tiger", "Cat", "Camel"],
answer: "Tiger"
},
{
question: "What animal is this?",
image: "honeybee.png",
options: ["Butterfly", "Honeybee", "Spider", "Duck"],
answer: "Honeybee"
},
{
question: "What animal is this?",
image: "spider.png",
options: ["Honeybee", "Spider", "Rat", "Snake"],
answer: "Spider"
},
{
question: "What animal is this?",
image: "monkey.png",
options: ["Monkey", "Goat", "Pig", "Cow"],
answer: "Monkey"
},
{
question: "What animal is this?",
image: "bull.png",
options: ["Bull", "Cow", "Camel", "Tiger"],
answer: "Bull"
},
{
question: "What animal is this?",
image: "camel.png",
options: ["Giraffe", "Camel", "Horse", "Elephant"],
answer: "Camel"
},
{
question: "What animal is this?",
image: "snake.png",
options: ["Snake", "Rat", "Spider", "Duck"],
answer: "Snake"
},
{
question: "What animal is this?",
image: "mouse.png",
options: ["Rat", "Rabbit", "Cat", "Monkey"],
answer: "Rat"
},
{
question: "What animal is this?",
image: "butterfly.png",
options: ["Honeybee", "Butterfly", "Duck", "Spider"],
answer: "Butterfly"
},
{
question: "What animal is this?",
image: "whale.png",
options: ["Whale", "Elephant", "Camel", "Bull"],
answer: "Whale"
},

{
question: "What does a dog say?",
image: "dog.png",
options: ["Woof", "Meow", "Moo", "Quack"],
answer: "Woof"
},
{
question: "What does a cat say?",
image: "cat.png",
options: ["Baa", "Moo", "Meow", "Roar"],
answer: "Meow"
},
{
question: "What does a cow say?",
image: "cow.png",
options: ["Quack", "Moo", "Woof", "Meow"],
answer: "Moo"
},
{
question: "What does a duck say?",
image: "duck.png",
options: ["Quack", "Roar", "Moo", "Baa"],
answer: "Quack"
},
{
question: "What does a sheep say?",
image: "sheep.png",
options: ["Woof", "Baa", "Moo", "Meow"],
answer: "Baa"
},
{
question: "What does a lion say?",
image: "lion.png",
options: ["Roar", "Quack", "Meow", "Moo"],
answer: "Roar"
}
    ]
// ===== VARIABLES =====
let currentIndex = 0;
let answered = false;
// ===== SOUNDS =====
const correctSound = new Audio("u_jspnqv1glx-1gift-confetti-447240 (mp3cut.net).mp3");
const wrongSound = new Audio("lesiakower-error-mistake-sound-effect-incorrect-answer-437420.mp3");

// ===== SHUFFLE FUNCTION =====
function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

// ===== START GAME =====
function startGame() {
    shuffleQuestions();  //  Shuffle first

    currentIndex = 0;
    answered = false;

    document.getElementById("start-screen").style.display = "none";
    document.getElementById("score-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";

    showQuestion();
}

// ===== SHOW QUESTION =====
function showQuestion() {
    let q = questions[currentIndex];

    document.getElementById("question").innerText = q.question;
    document.getElementById("question-image").src = q.image;
    document.getElementById("option1").innerText = q.options[0];
    document.getElementById("option2").innerText = q.options[1];
    document.getElementById("option3").innerText = q.options[2];
    document.getElementById("option4").innerText = q.options[3];

    // reset feedback every question 
    document.getElementById("feedback").innerText = "";

    answered = false;
}

// ===== CHECK ANSWER =====
function checkAnswer(selected) {

    let q = questions[currentIndex];
    let feedback = document.getElementById("feedback");

    // always update latest selection (no locking)
    if (selected === q.answer) {
    feedback.innerText = "WELL DONE!🎉✅";
    correctSound.currentTime = 0;
    correctSound.play();
} else {
    feedback.innerText = "TRY AGAIN!❌";
    wrongSound.currentTime = 0;
   wrongSound.play();
}
}   //  THIS closes checkAnswer()

// ===== NEXT QUESTION =====
function nextQuestion() {

    currentIndex++;

    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        showEndScreen();
    }
}

// ===== END SCREEN =====
function showEndScreen() {

    document.getElementById("game-screen").style.display = "none";
    document.getElementById("score-screen").style.display = "block";
}

// ===== PLAY AGAIN =====
function playAgain() {
    startGame();
}
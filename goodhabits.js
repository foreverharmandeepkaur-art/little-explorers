console.log("JS connected 🚀");
// ===== QUESTIONS =====
const questions = [
    {
    question: "What should we do with our friends ?",
    image:"sharing.png",
    options:["Sharing our things","Being rude","Push them","Ignore them"],
    answer:"Sharing our things"
    },
    {
        question: "What should we do to keep our teeth clean?",
        image: "brushingteeth.png",
        options: ["Brush our teeth", "Throw toys", "Cry", "Sleep"],
        answer: "Brush our teeth"
    },

    {
        question: "What should we do before eating?",
        image: "washinghands.png",
        options: ["Wash our hands", "Jump", "Sleep", "Run"],
        answer: "Wash our hands"
    },

    {
        question: "What should we do at night?",
        image: "sleeping.png",
        options: ["Sleep", "Play football", "Dance", "Swim"],
        answer: "Sleep"
    },

    {
        question: "What should children do at school?",
        image: "study.png",
        options: ["Study", "Sleep", "Cry", "Hide"],
        answer: "Study"
    },

    {
        question: "Where should we throw trash?",
        image: "throwingtrash.png",
        options: ["Dustbin", "Road", "River", "Floor"],
        answer: "Dustbin"
    },

    {
        question: "Which food helps us stay healthy?",
        image: "eatinghealthy.png",
        options: ["Healthy Food", "Candy", "Chips", "Chocolate"],
        answer: "Healthy Food"
    },

    {
        question: "What should children drink to grow strong?",
        image: "drinkingmilk.png",
        options: ["Milk", "Soda", "Coffee", "Juice"],
        answer: "Milk"
    },

    {
        question: "Which food should we eat every day?",
        image: "eatinghealthy.png",
        options: ["Vegetables", "Candy", "Cake", "Ice Cream"],
        answer: "Vegetables"
    },

    {
        question: "How is this child feeling?",
        image: "happy.png",
        options: ["Happy", "Sad", "Angry", "Sleepy"],
        answer: "Happy"
    },

    {
        question: "How is this child feeling?",
        image: "sad.png",
        options: ["Sad", "Happy", "Angry", "Excited"],
        answer: "Sad"
    },

    {
        question: "How is this child feeling?",
        image: "angry.png",
        options: ["Angry", "Happy", "Sad", "Sleepy"],
        answer: "Angry"
    },

    {
        question: "How is this child feeling?",
        image: "laughing.png",
        options: ["Laughing", "Crying", "Sleeping", "Angry"],
        answer: "Laughing"
    },
{
    question: "We should say ___ to our parents and teachers in the morning ?",
    image: "happy.png",
    options:["Good morning","Good afternoon","Good evening","Good night"],
    answer: "Good morning"
        },
    {
    question: "We should say ___ to our parents before sleeping ?",
    image: "sleeping.png",
    options:["Good morning","Good afternoon","Good evening","Good night"],
    answer: "Good night"
        },
    {
    question: "What should we say when someone helps us?",
    image: "happy.png",
    options: ["Thank You", "Sorry", "Please", "Hello"],
    answer: "Thank You"
},

{
    question: "What should we say when we make a mistake?",
    image: "happy.png",
    options: ["Sorry", "Thank You", "Please", "Good Night"],
    answer: "Sorry"
},

{
    question: "What should we say when we ask for something?",
    image: "happy.png",
    options: ["Please", "Sorry", "Thank You", "Bye"],
    answer: "Please"
},

{
    question: "What should we do to keep our body clean?",
    image: "bathing.png",
    options: ["Take a bath", "Throw toys", "Cry", "Hide"],
    answer: "Take a bath"
},

{
    question: "How often should we take a bath?",
    image: "bathing.png",
    options: ["Every Day", "Once a Month", "Never", "Only on Sundays"],
    answer: "Every Day"
},

{
    question: "What should we do before going to bed?",
    image: "sleeping.png",
    options: ["Brush our teeth", "Throw trash", "Run outside", "Eat candy"],
    answer: "Brush our teeth"
},

{
    question: "What should we do after playing?",
    image: "washinghands.png",
    options: ["Wash our hands", "Cry", "Sleep", "Hide"],
    answer: "Wash our hands"
},

{
    question: "Should we share our toys with friends?",
    image: "sharing.png",
    options: ["Yes", "No", "Only Sometimes", "Never"],
    answer: "Yes"
},

{
    question: "What should we do when someone is talking?",
    image: "happy.png",
    options: ["Listen Carefully", "Shout", "Run Away", "Sleep"],
    answer: "Listen Carefully"
},

{
    question: "Should we tell the truth?",
    image: "happy.png",
    options: ["Yes", "No", "Only Sometimes", "Never"],
    answer: "Yes"
},

{
    question: "What should we do after using the toilet?",
    image: "washinghands.png",
    options: ["Wash Our Hands", "Play", "Sleep", "Eat"],
    answer: "Wash Our Hands"
},

{
    question: "Should we help others?",
    image: "sharing.png",
    options: ["Yes", "No", "Only Friends", "Never"],
    answer: "Yes"
}
    

];
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
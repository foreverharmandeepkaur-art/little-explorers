console.log("JS connected 🚀");
// ===== QUESTIONS =====
const questions = [

    {
        question: "What is this?",
        image: "earth.png",
        options: ["Earth", "Moon", "Sun", "Saturn"],
        answer: "Earth"
    },
    {
        question: "What is this?",
        image: "moon.png",
        options: ["Moon", "Earth", "Star", "Sun"],
        answer: "Moon"
    },
    {
        question: "What is this?",
        image: "sun.png",
        options: ["Sun", "Moon", "Earth", "Star"],
        answer: "Sun"
    },
    {
        question: "What is this?",
        image: "saturn.png",
        options: ["Saturn", "Earth", "Moon", "Rocket"],
        answer: "Saturn"
    },
    {
        question: "What is this?",
        image: "star.png",
        options: ["Star", "Moon", "Satellite", "Earth"],
        answer: "Star"
    },
    {
        question: "What is this?",
        image: "satellite.png",
        options: ["Satellite", "Rocket", "Star", "Moon"],
        answer: "Satellite"
    },
    {
        question: "What is this?",
        image: "rocket.png",
        options: ["Rocket", "Satellite", "Star", "Earth"],
        answer: "Rocket"
    },


    {
        question: "Who flies in space?",
        image: "astronaut.png",
        options: ["Astronaut", "Teacher", "Doctor", "Chef"],
        answer: "Astronaut"
    },
    {
        question: "What does an astronaut wear?",
        image: "astronaut.png",
        options: ["Space Suit", "Raincoat", "Jacket", "Uniform"],
        answer: "Space Suit"
    },

    // 🌙 Day and Night

    {
        question: "What appears in the night sky?",
        image: "moon.png",
        options: ["Moon", "Sun", "Rainbow", "Cloud"],
        answer: "Moon"
    },
    {
        question: "What appears in the daytime sky?",
        image: "sun.png",
        options: ["Sun", "Moon", "Star", "Snow"],
        answer: "Sun"
    },

    {
        question: "Where do rockets go?",
        image: "rocket.png",
        options: ["Space", "Ocean", "Forest", "Desert"],
        answer: "Space"
    },

    {
        question: "What do we use to explore space?",
        image: "rocket.png",
        options: ["Rocket", "Bus", "Train", "Car"],
        answer: "Rocket"
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
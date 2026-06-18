console.log("JS connected 🚀");
// ===== QUESTIONS =====
const questions = [
    {
    question: "This fruit is:",
    image:"apple.png",
    options:["Banana","Pineapple","Apple","Mango"],
    answer:"Apple"
    },
    {
        question: "What fruit is this?",
        image: "mango.png",
        options: ["Mango", "Apple", "Papaya", "Pear"],
        answer: "Mango"
    },
    {
        question: "What fruit is this?",
        image: "orange.png",
        options: ["Orange", "Lemon", "Apple", "Cherry"],
        answer: "Orange"
    },
    {
        question: "What fruit is this?",
        image: "grapes.png",
        options: ["Grapes", "Guava", "Banana", "Pear"],
        answer: "Grapes"
    },
    {
        question: "What fruit is this?",
        image: "strawberry.png",
        options: ["Strawberry", "Cherry", "Apple", "Orange"],
        answer: "Strawberry"
    },
    {
        question: "What fruit is this?",
        image: "watermelon.png",
        options: ["Watermelon", "Papaya", "Mango", "Banana"],
        answer: "Watermelon"
    },
    {
        question: "What fruit is this?",
        image: "pineapple.png",
        options: ["Pineapple", "Orange", "Pear", "Apple"],
        answer: "Pineapple"
    },
    {
        question: "What fruit is this?",
        image: "lemon.png",
        options: ["Lemon", "Orange", "Guava", "Cherry"],
        answer: "Lemon"
    },
    {
        question: "What fruit is this?",
        image: "cherry.png",
        options: ["Cherry", "Strawberry", "Apple", "Pear"],
        answer: "Cherry"
    },
    {
        question: "What fruit is this?",
        image: "papaya.png",
        options: ["Papaya", "Mango", "Banana", "Orange"],
        answer: "Papaya"
    },
    {
        question: "What fruit is this?",
        image: "pear.png",
        options: ["Pear", "Apple", "Guava", "Grapes"],
        answer: "Pear"
    },
    {
        question: "What fruit is this?",
        image: "guava.png",
        options: ["Guava", "Lemon", "Apple", "Pineapple"],
        answer: "Guava"
    },

    {
        question: "How does a banana taste?",
        image: "banana.png",
        options: ["Sweet", "Sour", "Salty", "Bitter"],
        answer: "Sweet"
    },
    {
        question: "How does an orange taste?",
        image: "orange.png",
        options: ["Sweet", "Sour", "Salty", "Bitter"],
        answer: "Sweet"
    },
    {
        question: "How do grapes taste?",
        image: "grapes.png",
        options: ["Sweet", "Sour", "Salty", "Bitter"],
        answer: "Sweet"
    },
    {
        question: "How does a mango taste?",
        image: "mango.png",
        options: ["Sweet", "Sour", "Salty", "Bitter"],
        answer: "Sweet"
    },
    {
        question: "How does a lemon taste?",
        image: "lemon.png",
        options: ["Sweet", "Sour", "Salty", "Bitter"],
        answer: "Sour"
    },
    {
        question: "How does a cherry taste?",
        image: "cherry.png",
        options: ["Sweet", "Sour", "Salty", "Bitter"],
        answer: "Sweet"
    },
    {
        question: "How does a pear taste?",
        image: "pear.png",
        options: ["Sweet", "Sour", "Salty", "Bitter"],
        answer: "Sweet"
    },
    {
        question: "How does a pineapple taste?",
        image: "pineapple.png",
        options: ["Sweet", "Sour", "Salty", "Bitter"],
        answer: "Sweet"
    },
    {
        question: "How does a guava taste?",
        image: "guava.png",
        options: ["Sweet", "Sour", "Salty", "Bitter"],
        answer: "Sweet"
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
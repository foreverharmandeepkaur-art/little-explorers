console.log("JS connected 🚀");
// ===== QUESTIONS =====
const questions = [

    {
        question: "What vegetable is this?",
        image: "spinach.png",
        options: ["Spinach", "Cucumber", "Capsicum", "Corn"],
        answer: "Spinach"
    },
    
    {
        question: "What vegetable is this?",
        image: "carrot.png",
        options: ["Spinach", "Cucumber", "Capsicum", "Carrot"],
        answer: "Carrot"
    },
    {
        question: "What vegetable is this?",
        image: "tomato.png",
        options: ["Tomato", "Potato", "Onion", "Pumpkin"],
        answer: "Tomato"
    },
    {
        question: "What vegetable is this?",
        image: "potato.png",
        options: ["Potato", "Garlic", "Corn", "Tomato"],
        answer: "Potato"
    },
    {
        question: "What vegetable is this?",
        image: "chilli.png",
        options: ["Chilli", "Capsicum", "Cucumber", "Brinjal"],
        answer: "Chilli"
    },
    {
        question: "What vegetable is this?",
        image: "garlic.png",
        options: ["Garlic", "Onion", "Cauliflower", "Potato"],
        answer: "Garlic"
    },
    {
        question: "What vegetable is this?",
        image: "onion.png",
        options: ["Onion", "Garlic", "Tomato", "Corn"],
        answer: "Onion"
    },
    {
        question: "What vegetable is this?",
        image: "cauliflower.png",
        options: ["Cauliflower", "Pumpkin", "Corn", "Capsicum"],
        answer: "Cauliflower"
    },
    {
        question: "What vegetable is this?",
        image: "corn.png",
        options: ["Corn", "Pumpkin", "Tomato", "Cucumber"],
        answer: "Corn"
    },
    {
        question: "What vegetable is this?",
        image: "brinjal.png",
        options: ["Brinjal", "Pumpkin", "Onion", "Capsicum"],
        answer: "Brinjal"
    },
    {
        question: "What vegetable is this?",
        image: "cucumber.png",
        options: ["Cucumber", "Spinach", "Corn", "Pumpkin"],
        answer: "Cucumber"
    },
    {
        question: "What vegetable is this?",
        image: "capsicum.png",
        options: ["Capsicum", "Chilli", "Spinach", "Tomato"],
        answer: "Capsicum"
    },
    {
        question: "What vegetable is this?",
        image: "pumpkin.png",
        options: ["Pumpkin", "Potato", "Brinjal", "Corn"],
        answer: "Pumpkin"
    },

    {
        question: "What color is spinach?",
        image: "spinach.png",
        options: ["Green", "Red", "Yellow", "Purple"],
        answer: "Green"
    },
    {
        question: "What color is tomato?",
        image: "tomato.png",
        options: ["Red", "Green", "White", "Yellow"],
        answer: "Red"
    },
    {
        question: "What color is potato?",
        image: "potato.png",
        options: ["Brown", "Purple", "Green", "White"],
        answer: "Brown"
    },
    {
        question: "What color is chilli?",
        image: "chilli.png",
        options: ["Green", "Red", "Yellow", "Purple"],
        answer: "Green"
    },
    {
        question: "What color is garlic?",
        image: "garlic.png",
        options: ["White", "Green", "Orange", "Brown"],
        answer: "White"
    },
    {
        question: "What color is onion?",
        image: "onion.png",
        options: ["White", "Yellow", "Red", "Green"],
        answer: "White"
    },
    {
        question: "What color is cauliflower?",
        image: "cauliflower.png",
        options: ["White", "Purple", "Green", "Yellow"],
        answer: "White"
    },
    {
        question: "What color is corn?",
        image: "corn.png",
        options: ["Yellow", "Green", "Orange", "White"],
        answer: "Yellow"
    },
    {
        question: "What color is brinjal?",
        image: "brinjal.png",
        options: ["Purple", "Green", "Brown", "White"],
        answer: "Purple"
    },
    {
        question: "What color is cucumber?",
        image: "cucumber.png",
        options: ["Green", "Red", "Yellow", "Purple"],
        answer: "Green"
    },
    {
        question: "What color is capsicum?",
        image: "capsicum.png",
        options: ["Green", "White", "Yellow", "Brown"],
        answer: "Green"
    },
    {
        question: "What color is pumpkin?",
        image: "pumpkin.png",
        options: ["Orange", "Green", "Purple", "White"],
        answer: "Orange"
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
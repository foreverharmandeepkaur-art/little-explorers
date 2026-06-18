console.log("JS connected 🚀");
// ===== QUESTIONS =====
const questions = [
    {
        question: "What is this?",
        image: "tree.png",
        options: ["Tree", "Grass", "Flower", "Cloud"],
        answer: "Tree"
    },
    {
        question: "What is this?",
        image: "grass.png",
        options: ["Grass", "Tree", "River", "Flower"],
        answer: "Grass"
    },
    {
        question: "What is this?",
        image: "rose.png",
        options: ["Flower", "Grass", "Cloud", "Tree"],
        answer: "Flower"
    },
    {
        question: "What is this?",
        image: "mountain.png",
        options: ["Mountain", "Volcano", "Desert", "River"],
        answer: "Mountain"
    },
    {
        question: "What is this?",
        image: "river.png",
        options: ["River", "Beach", "Rain", "Cloud"],
        answer: "River"
    },
    {
        question: "What is this?",
        image: "beach.png",
        options: ["Beach", "River", "Desert", "Snow"],
        answer: "Beach"
    },
    {
        question: "What is this?",
        image: "desert.png",
        options: ["Desert", "Beach", "Mountain", "Grass"],
        answer: "Desert"
    },
    {
        question: "What is this?",
        image: "cloud.png",
        options: ["Cloud", "Rain", "Snow", "Rainbow"],
        answer: "Cloud"
    },
    {
        question: "What is this?",
        image: "rain.png",
        options: ["Rain", "Snow", "Cloud", "River"],
        answer: "Rain"
    },
    {
        question: "What is this?",
        image: "snow.png",
        options: ["Snow", "Rain", "Cloud", "Beach"],
        answer: "Snow"
    },
    {
        question: "What is this?",
        image: "rainbow.png",
        options: ["Rainbow", "Cloud", "Rain", "Snow"],
        answer: "Rainbow"
    },
    {
        question: "What is this?",
        image: "fire.png",
        options: ["Fire", "Volcano", "Sun", "Cloud"],
        answer: "Fire"
    },
    {
        question: "What is this?",
        image: "volcano.png",
        options: ["Volcano", "Mountain", "Fire", "Desert"],
        answer: "Volcano"
    },


    {
        question: "Which season is this?",
        image: "rain.png",
        options: ["Rainy Season", "Summer Season", "Winter Season", "Spring Season"],
        answer: "Rainy Season"
    },
    {
        question: "Which season is this?",
        image: "sun.png",
        options: ["Summer Season", "Rainy Season", "Winter Season", "Spring Season"],
        answer: "Summer Season"
    },
    {
        question: "Which season is this?",
        image: "snow.png",
        options: ["Winter Season", "Summer Season", "Rainy Season", "Spring Season"],
        answer: "Winter Season"
    },

    {
        question: "What do we need in summer?",
        image: "sun.png",
        options: ["Fan🍃", "Umbrella☂️", "Coat🧥", "Boots👢"],
        answer: "Fan🍃"
    },
    {
        question: "What do we need in the rainy season?",
        image: "rain.png",
        options: ["Umbrella☂️", "Fan", "Coat🧥", "Sunglasses🕶️"],
        answer: "Umbrella☂️"
    },
    {
        question: "What do we need in winter?",
        image: "snow.png",
        options: ["Coat🧥", "Umbrella☂️", "Fan", "Sunglasses🕶️"],
        answer: "Coat🧥"
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
console.log("JS connected 🚀");
// ===== QUESTIONS =====
const questions = [
    {
    question: "Which vehicle is this ?",
    image:"car.png",
    options:["Truck","Car","Bus","Airplane"],
    answer:"Car"
    },
    {
        question: "What vehicle is this?",
        image: "car.png",
        options: ["Car", "Bus", "Van", "Bike"],
        answer: "Car"
    },
    {
        question: "What vehicle is this?",
        image: "bus.png",
        options: ["Bus", "Train", "Van", "Car"],
        answer: "Bus"
    },
    {
        question: "What vehicle is this?",
        image: "ambulance.png",
        options: ["Ambulance", "Fire Truck", "Bus", "Van"],
        answer: "Ambulance"
    },
    {
        question: "What vehicle is this?",
        image: "firetruck.png",
        options: ["Fire Truck", "Police Car", "Bus", "Car"],
        answer: "Fire Truck"
    },
    {
        question: "What vehicle is this?",
        image: "policecar.png",
        options: ["Police Car", "Fire Truck", "Ambulance", "Van"],
        answer: "Police Car"
    },
    {
        question: "What vehicle is this?",
        image: "cycle.png",
        options: ["Cycle", "Bike", "Car", "Bus"],
        answer: "Cycle"
    },
    {
        question: "What vehicle is this?",
        image: "bike.png",
        options: ["Bike", "Cycle", "Car", "Van"],
        answer: "Bike"
    },
    {
        question: "What vehicle is this?",
        image: "tractor.png",
        options: ["Tractor", "Bus", "Train", "Van"],
        answer: "Tractor"
    },
    {
        question: "What vehicle is this?",
        image: "train.png",
        options: ["Train", "Bus", "Ship", "Van"],
        answer: "Train"
    },
    {
        question: "What vehicle is this?",
        image: "airplane.png",
        options: ["Airplane", "Helicopter", "Ship", "Train"],
        answer: "Airplane"
    },
    {
        question: "What vehicle is this?",
        image: "ship.png",
        options: ["Ship", "Train", "Bus", "Van"],
        answer: "Ship"
    },
    {
        question: "What vehicle is this?",
        image: "helicopter.png",
        options: ["Helicopter", "Airplane", "Ship", "Train"],
        answer: "Helicopter"
    },
    {
        question: "What vehicle is this?",
        image: "van.png",
        options: ["Van", "Bus", "Car", "Bike"],
        answer: "Van"
    },

    {
        question: "Who drives a fire truck?",
        image: "firetruck.png",
        options: ["Firefighter", "Doctor", "Pilot", "Teacher"],
        answer: "Firefighter"
    },
    {
        question: "Who drives a bus?",
        image: "bus.png",
        options: ["Driver", "Pilot", "Chef", "Doctor"],
        answer: "Driver"
    },
    {
        question: "Who flies an airplane?",
        image: "airplane.png",
        options: ["Pilot", "Teacher", "Farmer", "Chef"],
        answer: "Pilot"
    },
    {
        question: "Who drives a police car?",
        image: "policecar.png",
        options: ["Police Officer", "Doctor", "Pilot", "Teacher"],
        answer: "Police Officer"
    },

    // 🔊 Vehicle Sounds

    {
        question: "What sound does a train make?",
        image: "train.png",
        options: ["Choo Choo", "Vroom Vroom", "Nee Naw", "Ring Ring"],
        answer: "Choo Choo"
    },
    {
        question: "What sound does a car make?",
        image: "car.png",
        options: ["Vroom Vroom", "Choo Choo", "Nee Naw", "Ring Ring"],
        answer: "Vroom Vroom"
    },
    {
        question: "What sound does a police car make?",
        image: "policecar.png",
        options: ["Nee Naw", "Vroom Vroom", "Choo Choo", "Ring Ring"],
        answer: "Nee Naw"
    },
    {
        question: "What sound does an ambulance make?",
        image: "ambulance.png",
        options: ["Woo Woo", "Choo Choo", "Vroom Vroom", "Ring Ring"],
        answer: "Woo Woo"
    },
    {
        question: "What sound does a cycle make?",
        image: "cycle.png",
        options: ["Ring Ring", "Nee Naw", "Choo Choo", "Vroom Vroom"],
        answer: "Ring Ring"
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
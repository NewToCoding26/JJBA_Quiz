const quizData = [
    {
        question: "Who is the first JoJo in the JoJo's Bizarre Adventure series?",
        options: {
            a: "Joseph Joestar",
            b: "Jotaro Kujo",
            c: "Jonathan Joestar",
            d: "Josuke Higashikata"
        },
        correctAnswer: 'c'
    },
    {
        question: "What is the name of Dio's Stand in 'Stardust Crusaders'?",
        options: {
            a: "Star Platinum",
            b: "The World",
            c: "Crazy Diamond",
            d: "Silver Chariot"
        },
        correctAnswer: 'b'
    },
    {
        question: "Which object does Kira Yoshikage love the most?",
        options: {
            a: "A book",
            b: "A watch",
            c: "A ring",
            d: "A hand"
        },
        correctAnswer: 'd'
    },
    {
        question: "Who is Joseph Joestar's mentor in 'Battle Tendency'?",
        options: {
            a: "Lisa Lisa",
            b: "Caesar Zeppeli",
            c: "Rudol von Stroheim",
            d: "Robert E.O. Speedwagon"
        },
        correctAnswer: 'a'
    },
    {
        question: "In 'Diamond is Unbreakable', what is the name of Josuke's Stand?",
        options: {
            a: "The Hand",
            b: "Crazy Diamond",
            c: "Killer Queen",
            d: "Heaven's Door"
        },
        correctAnswer: 'b'
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    document.getElementById('question').innerText = currentQuiz.question;
    const buttons = document.querySelectorAll('.btn');
    buttons[0].innerText = currentQuiz.options.a;
    buttons[1].innerText = currentQuiz.options.b;
    buttons[2].innerText = currentQuiz.options.c;
    buttons[3].innerText = currentQuiz.options.d;

    buttons.forEach(btn => {
        btn.style.backgroundColor = ""; 
        btn.disabled = false; 
    });

    answered = false; 
}

function answerQuestion(answer) {
    if (answered) return; 

    const currentQuiz = quizData[currentQuestion];
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(btn => btn.disabled = true);

    if (answer === currentQuiz.correctAnswer) {
        score++;
        document.querySelector(`[onclick="answerQuestion('${answer}')"]`).style.backgroundColor = "#90EE90";
    } else {
        document.querySelector(`[onclick="answerQuestion('${answer}')"]`).style.backgroundColor = "#FF474C";
        document.querySelector(`[onclick="answerQuestion('${currentQuiz.correctAnswer}')"]`).style.backgroundColor = "#90EE90";
    }

    answered = true; 

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            displayScore();
        }
    }, 500); 
}

function displayScore() {
    document.getElementById('quiz-section').style.display = 'none';

    const resultSection = document.getElementById('result-section');
    resultSection.style.display = 'block';

    document.getElementById('score-text').innerText = `Your score: ${score}/${quizData.length}`;
}


function restartQuiz() {
    document.getElementById('result-section').style.display = 'none';
  
    document.getElementById('quiz-section').style.display = 'block';
  
    currentQuestion = 0;
    score = 0;
    loadQuestion(); 
  }

function selectFanDifficulty() {
    window.location.href = 'Fan.html'; 
}

function selectVeteranDifficulty() {
    window.location.href = 'Veteran.html'; 
}



window.onload = loadQuestion;
const quizData = [
    {
        question: "What was the name of Joseph Joestar's undercover alias during his time in Italy before Stardust Crusaders?",
        options: {
            a: "Joseph Ferrara",
            b: "F. Joseph Joestar",
            c: "Mr. Joseph",
            d: "Fumihiko Joseph"
        },
        correctAnswer: 'c'
    },
    {
        question: "In JoJolands, what does Dragona Joestar's Smooth Operators manipulate during the heist to avoid detection?",
        options: {
            a: "Fingerprints on a security pad",
            b: "Surveillance camera wiring",
            c: "Security guards’ uniforms",
            d: "Facial features on a driver's license"
        },
        correctAnswer: 'd'
    },
    {
        question: "In Steel Ball Run what is the full name of Gyro Zeppeli's horse?",
        options: {
            a: "Valkyrie",
            b: "Silver Bullet",
            c: "Ball Breaker",
            d: "Iron Maiden"
        },
        correctAnswer: 'a'
    },
    {
        question: "How many times does Diego Brando (AU) fight Johnny Joestar throughout Steel Ball Run?",
        options: {
            a: "Two",
            b: "Three",
            c: "Four",
            d: "Five"
        },
        correctAnswer: 'b'
    },
    {
        question: "In JoJolion which fruit has the key role in the plot for curing diseases and gaining Stand abilities?",
        options: {
            a: "Locacaca",
            b: "Rokakaka",
            c: "Devil's Palm",
            d: "Tusk"
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

function selectBeginnerDifficulty() {
    window.location.href = 'Beginner.html'; 
}

function selectFanDifficulty() {
    window.location.href = 'Fan.html'; 
}


window.onload = loadQuestion;
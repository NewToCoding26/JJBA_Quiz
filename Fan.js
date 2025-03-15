const quizData = [
    {
        question: "Who defeats Esidisi in the Battle Tendency arc?",
        options: {
            a: "Joseph Joestar",
            b: "Caesar Zeppeli",
            c: "Lisa Lisa",
            d: "Kars"
        },
        correctAnswer: 'a'
    },
    {
        question: "Which Stand does Hol Horse pair with The Emperor to create a deadly combination?",
        options: {
            a: "Hanged Man",
            b: "Justice",
            c: "Lovers",
            d: "The Sun"
        },
        correctAnswer: 'a'
    },
    {
        question: "In Diamond is Unbreakable what is the occupation of Rohan Kishibe?",
        options: {
            a: "Artist",
            b: "Detective",
            c: "Mangaka",
            d: "Sculptor"
        },
        correctAnswer: 'c'
    },
    {
        question: "What is the name of Jotaro Kujo's daughter in Stone Ocean?",
        options: {
            a: "Jolyne Cujoh",
            b: "Ermes Costello",
            c: "Annakiss",
            d: "Foo Fighters"
        },
        correctAnswer: 'a'
    },
    {
        question: "Which Stand has the ability to erase time in Vento Aureo?",
        options: {
            a: "Aerosmith",
            b: "Gold Experience",
            c: "Sticky Fingers",
            d: "King Crimson"
        },
        correctAnswer: 'd'
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

function selectVeteranDifficulty() {
    window.location.href = 'Veteran.html'; 
}



window.onload = loadQuestion;
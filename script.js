const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
const questionsPerQuiz = 5;

const allQuestions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Sri Lanka", correct: false },
    ],
  },
  {
    question: "In which year did India gain independence?",
    answers: [
      { text: "1947", correct: true },
      { text: "1950", correct: false },
      { text: "1960", correct: false },
      { text: "1935", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "Who is known as the Father of the Nation in India?",
    answers: [
      { text: "Jawaharlal Nehru", correct: false },
      { text: "Mahatma Gandhi", correct: true },
      { text: "Subhas Chandra Bose", correct: false },
      { text: "Sardar Patel", correct: false },
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
    ]
  },
  {
    question: "Which is the longest river in the world?",
    answers: [
      { text: "Amazon River", correct: false },
      { text: "Nile River", correct: true },
      { text: "Ganges", correct: false },
      { text: "Yangtze River", correct: false },
    ]
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Beijing", correct: false },
      { text: "Seoul", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Kyoto", correct: false },
    ]
  },
  {
    question: "Which is the tallest mountain in the world?",
    answers: [
      { text: "Mount Everest", correct: true },
      { text: "K2", correct: false },
      { text: "Kangchenjunga", correct: false },
      { text: "Makalu", correct: false },
    ]
  },
  {
    question: "Who invented the light bulb?",
    answers: [
      { text: "Albert Einstein", correct: false },
      { text: "Isaac Newton", correct: false },
      { text: "Nikola Tesla", correct: false },
      { text: "Thomas Edison", correct: true },
    ]
  },

  {
    question: "Who was the first Prime Minister of India?",
    answers: [
      { text: "Jawaharlal Nehru", correct: true },
      { text: "Indira Gandhi", correct: false },
      { text: "Lal Bahadur Shastri", correct: false },
      { text: "Rajiv Gandhi", correct: false },
    ]
  },
  {
    question: "What is the capital of India?",
    answers: [
      { text: "Mumbai", correct: false },
      { text: "New Delhi", correct: true },
      { text: "Kolkata", correct: false },
      { text: "Chennai", correct: false },
    ]
  },
  {
    question: "Which is the largest state in India by area?",
    answers: [
      { text: "Maharashtra", correct: false },
      { text: "Uttar Pradesh", correct: false },
      { text: "Rajasthan", correct: true },
      { text: "West Bengal", correct: false },
    ]
  },

  {
    question: "Which ocean is the largest by area?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
    ]
  },

  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Ag", correct: false },
      { text: "Au", correct: true },
      { text: "Pb", correct: false },
      { text: "Fe", correct: false },
    ]
  },

  {
    question: "Which planet is the largest in our solar system?",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Earth", correct: false },
      { text: "Neptune", correct: false },
    ]
  },

  {
    question: "Which is the national flower of India?",
    answers: [
      { text: "Rose", correct: false },
      { text: "Sunflower", correct: false },
      { text: "Lotus", correct: true },
      { text: "Jasmine", correct: false },
    ]
  },

  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { text: "India", correct: false },
      { text: "China", correct: false },
      { text: "Japan", correct: true },
      { text: "South Korea", correct: false },
    ]
  },
  {
    question: "Who was the first woman Prime Minister of India?",
    answers: [
      { text: "Indira Gandhi", correct: true },
      { text: "Pratibha Patil", correct: false },
      { text: "Sonia Gandhi", correct: false },
      { text: "Mayawati", correct: false },
    ]
  },

  {
    question: "Which is the fastest land animal in the world?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Cheetah", correct: true },
      { text: "Leopard", correct: false },
      { text: "Tiger", correct: false },
    ]
  },

  {
    question: "What is the boiling point of water at sea level?",
    answers: [
      { text: "90°C", correct: false },
      { text: "100°C", correct: true },
      { text: "110°C", correct: false },
      { text: "80°C", correct: false },
    ]
  },
  {
    question: "Which is the national animal of India?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Tiger", correct: true },
      { text: "Elephant", correct: false },
      { text: "Peacock", correct: false },
    ]
  },
  {
    question: "What is the currency of India?",
    answers: [
      { text: "Rupee", correct: true },
      { text: "Dollar", correct: false },
      { text: "Pound", correct: false },
      { text: "Euro", correct: false },
    ]
  },

  {
    question: "Which gas do plants use for photosynthesis?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ]
  },

  {
    question: "What is the largest organ in the human body?",
    answers: [
      { text: "Heart", correct: false },
      { text: "Lungs", correct: false },
      { text: "Skin", correct: true },
      { text: "Liver", correct: false },
    ]
  },  
  {
    question: "Which is the longest river in India?",
    answers: [
      { text: "Ganges", correct: true },
      { text: "Yamuna", correct: false },
      { text: "Brahmaputra", correct: false },
      { text: "Godavari", correct: false },
    ]
  },


  {
    question: "What is the national language of India?",
    answers: [
      { text: "Hindi", correct: true },
      { text: "English", correct: false },
      { text: "Tamil", correct: false },
      { text: "Punjabi", correct: false },
    ]
  },
  {
    question: "Where is the headquarters of ISRO located?",
    answers: [
      { text: "New Delhi", correct: false },
      { text: "Bangalore", correct: true },
      { text: "Mumbai", correct: false },
      { text: "Chennai", correct: false },
    ]
  },
  {
    question: "Who is known as the 'Missile Man of India'?",
    answers: [
      { text: "Dr. A.P.J. Abdul Kalam", correct: true },
      { text: "Dr. Vikram Sarabhai", correct: false },
      { text: "Dr. Satyendra Nath Bose", correct: false },
      { text: "Dr. Homi J. Bhabha", correct: false },
    ]
  },

  {
    question: "Who discovered gravity?",
    answers: [
      { text: "Albert Einstein", correct: false },
      { text: "Isaac Newton", correct: true },
      { text: "Galileo Galilei", correct: false },
      { text: "Nikola Tesla", correct: false },
    ]
  },

  {
    question: "Which ocean is the largest by area?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
    ]
  },

  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Ag", correct: false },
      { text: "Au", correct: true },
      { text: "Pb", correct: false },
      { text: "Fe", correct: false },
    ]
  },

  {
    question: "Which planet is the largest in our solar system?",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Earth", correct: false },
      { text: "Neptune", correct: false },
    ]
  },

  {
    question: "Which is the national bird of India?",
    answers: [
      { text: "Peacock", correct: true },
      { text: "Eagle", correct: false },
      { text: "Sparrow", correct: false },
      { text: "Crow", correct: false },
    ]
  },
  {
    question: "Who was the first woman president of India?",
    answers: [
      { text: "Indira Gandhi", correct: false },
      { text: "Sonia Gandhi", correct: false },
      { text: "Pratibha Patil", correct: true },
      { text: "Mayawati", correct: false },
    ]
  },
  {
    question: "Which is the national tree of India?",
    answers: [
      { text: "Peepal", correct: false },
      { text: "Neem", correct: false },
      { text: "Banyan", correct: true },
      { text: "Mango", correct: false },
    ]
  },

  {
    question: "What is the square root of 144?",
    answers: [
      { text: "10", correct: false },
      { text: "12", correct: true },
      { text: "14", correct: false },
      { text: "16", correct: false },
    ]
  },

  {
    question: "Which is the hottest planet in the solar system?",
    answers: [
      { text: "Mercury", correct: false },
      { text: "Venus", correct: true },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: false },
    ]
  },

  {
    question: "Which Mughal emperor built the Taj Mahal?",
    answers: [
      { text: "Akbar", correct: false },
      { text: "Shah Jahan", correct: true },
      { text: "Aurangzeb", correct: false },
      { text: "Babur", correct: false },
    ]
  },

  {
    question: "Which is the densest planet in the solar system?",
    answers: [
      { text: "Earth", correct: true },
      { text: "Mars", correct: false },
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: false },
    ]
  },

  {
    question: "What is the SI unit of force?",
    answers: [
      { text: "Joule", correct: false },
      { text: "Newton", correct: true },
      { text: "Watt", correct: false },
      { text: "Pascal", correct: false },
    ]
  },

  {
    question: "Which Indian state is known as the 'Land of Five Rivers'?",
    answers: [
      { text: "Punjab", correct: true },
      { text: "Haryana", correct: false },
      { text: "Uttar Pradesh", correct: false },
      { text: "Rajasthan", correct: false },
    ]
  },

  {
    question: "Who was the first person to step on the Moon?",
    answers: [
      { text: "Yuri Gagarin", correct: false },
      { text: "Neil Armstrong", correct: true },
      { text: "Buzz Aldrin", correct: false },
      { text: "Michael Collins", correct: false },
    ]
  },
  {
    question: "Which is the largest city in India by population?",
    answers: [
      { text: "New Delhi", correct: false },
      { text: "Kolkata", correct: false },
      { text: "Mumbai", correct: true },
      { text: "Chennai", correct: false },
    ]
  },
  {
    question: "Which is the oldest language of India?",
    answers: [
      { text: "Hindi", correct: false },
      { text: "Tamil", correct: true },
      { text: "Sanskrit", correct: false },
      { text: "Gujarati", correct: false },
    ]
  },
  {
    question: "Which metal is liquid at room temperature?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Iron", correct: false },
      { text: "Gold", correct: false },
      { text: "Aluminum", correct: false },
    ]
  }
];

let selectedQuestions = [];

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  selectedQuestions = getRandomQuestions(allQuestions, questionsPerQuiz);
  showQuestion(selectedQuestions);
}

function getRandomQuestions(questions, numQuestions) {
  const shuffledQuestions = [...questions]; 
  for (let i = shuffledQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]]; // Swap
  }
  return shuffledQuestions.slice(0, numQuestions);
}

function showQuestion(questions) {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerText = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButton.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerText = `You scored ${score} out of ${questionsPerQuiz}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questionsPerQuiz) {
    showQuestion(selectedQuestions);
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questionsPerQuiz) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();

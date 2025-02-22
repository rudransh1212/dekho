const questions = [
    {
      question: "Divya's favourtite chips?",
      options: ["Green Lays", "Red Lays", "Blue Lays", "Yellow Lays"],
      correct: 2,
    },
    {
      question: "Where is Divya originally from?",
      options: ["Prayagraj", "Alwar", "Dhanbad", "Jhansi"],
      correct: 3,
    },
    {
      question: "Which Men's clothing can increase chances of winning?",
      options: ["Jeans", "Sweatshirt", "Turban", "Hoodie"],
      correct: 2,
    },
    {
      question: "How does Divya hides her tears?",
      options: ["shouting", "Staring", "Smiling", "walking away"],
      correct: 2,
    },
    {
      question: "One should never ------ againt Divya?",
      options: ["Debate", "Fight", "Plot", "Gossip"],
      correct: 0,
    },
    {
      question: "One should never put Divya's ------- on stake?",
      options: ["Honour", "Dignity", "Pride", "Looks"],
      correct: 1,
    },
    {
      question: "Whom Does Divya Considers to be her Lord?",
      options: ["Ayush", "Homi", "Swain", "Rudransh"],
      correct: 3,
    },
    {
      question: "How Many times in a day, Can one get ignored by Divya?",
      options: ["2", "4", "infninte", "0"],
      correct: 2,
    },
    {
      question: "Divya was the ------ of her school?",
      options: ["prefect", "house captain", "head girl", "Debate captain"],
      correct: 2,
    },
    {
      question: "Divya's hotspot password?",
      options: ["divyaakki123", "akkidivya123", "akki123divya", "divya123"],
      correct: 0,
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next-button");
  const scoreContainer = document.getElementById("score-container");
  const scoreElement = document.getElementById("score");
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => selectOption(index));
      optionsElement.appendChild(button);
    });
  
    nextButton.disabled = true;
  }
  
  function selectOption(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correct;
    const optionButtons = optionsElement.querySelectorAll("button");
  
    optionButtons.forEach((button, index) => {
      button.disabled = true;
      if (index === correctIndex) {
        button.style.backgroundColor = "#4caf50"; // Correct answer
      } else if (index === selectedIndex) {
        button.style.backgroundColor = "#f44336"; // Incorrect answer
      }
    });
  
    if (selectedIndex === correctIndex) {
      score++;
    }
  
    nextButton.disabled = false;
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showScore();
    }
  });
  
  function showScore() {
    document.getElementById("question-container").style.display = "none";
    nextButton.style.display = "none";
    scoreContainer.style.display = "block";
    scoreElement.textContent = score;
  }
  
  // Initialize the quiz
  loadQuestion();
  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

// Close sidebar when clicking outside of the sidebar or hamburger button
document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    const hamburger = document.querySelector(".hamburger");
    
    // Check if the click is outside the sidebar and the hamburger button
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.classList.remove("open");
    }
});
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

// Close sidebar when clicking outside of the sidebar or hamburger button
document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    const hamburger = document.querySelector(".hamburger");
    
    // Check if the click is outside the sidebar and the hamburger button
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.classList.remove("open");
    }
});
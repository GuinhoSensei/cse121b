const questionContainer = document.getElementById("question-container");
const nextQuestionButton = document.getElementById("next-question");
const scoreContainer = document.getElementById("score-container");
const playAgainButton = document.getElementById("play-again");

let currentQuestionIndex = 0;
let userScore = 0;
let triviaQuestions = [];

nextQuestionButton.addEventListener("click", () => {
  if (currentQuestionIndex < triviaQuestions.length) {
    displayQuestion(currentQuestionIndex);
    currentQuestionIndex++;
  } else {
    nextQuestionButton.style.display = "none";
    playAgainButton.style.display = "block";
    scoreContainer.innerHTML = `<p>Your Score: ${userScore}/${triviaQuestions.length}</p>`;
  }
});

playAgainButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  userScore = 0;
  triviaQuestions = [];
  nextQuestionButton.style.display = "block";
  playAgainButton.style.display = "none";
  scoreContainer.innerHTML = "";
  startGame();
});

async function fetchTriviaQuestions() {
  try {
    const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple"); // Adjust the URL and parameters as needed
    if (!response.ok) {
      throw new Error("Failed to fetch trivia questions");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

function displayQuestion(index) {
  if (index < triviaQuestions.length) {
    const question = triviaQuestions[index];
    questionContainer.innerHTML = `
      <p>${question.question}</p>
      <ul>
        ${question.incorrect_answers.map((choice) => `<li>${choice}</li>`).join("")}
        <li>${question.correct_answer}</li>
      </ul>
    `;

    const answerChoices = questionContainer.querySelectorAll("li");
    answerChoices.forEach((choice) => {
      choice.addEventListener("click", () => {
        const selectedAnswer = choice.textContent;
        const correctAnswer = question.correct_answer;
        if (selectedAnswer === correctAnswer) {
          choice.classList.add("correct");
          userScore++;
        } else {
          choice.classList.add("wrong");
        }

        nextQuestionButton.disabled = false;
      });
    });
  } else {
    nextQuestionButton.style.display = "none";
    playAgainButton.style.display = "block";
    scoreContainer.innerHTML = `<p>Your Score: ${userScore}/${triviaQuestions.length}</p>`;
  }
}

async function startGame() {
  triviaQuestions = await fetchTriviaQuestions();
  displayQuestion(currentQuestionIndex);
}

// Start the game
startGame();

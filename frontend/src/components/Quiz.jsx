import React, { useEffect, useState } from "react";
import Timer from "./Timer.jsx";
import Score from "./Score.jsx";

const Quiz = ({ continent }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeOut, setTimeOut] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/quiz?continent=${continent}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        const data = await response.json();
        setQuestions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [continent]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTimeLeft(10);
      setTimeOut(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleTimeOut = () => {
    setTimeOut(true);
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setTimeLeft(10);
        setTimeOut(false);
      } else {
        setQuizCompleted(true);
      }
    }, 3000);
  };

  // Color the name of country
const highlightCountry = (question) => {
  const countryRegex = /of\s+(the\s+)?([^.,;]+)/; 
  const match = question.match(countryRegex);

  if (match) {
    const country = match[2].trim(); 
    return question.replace(
      match[0],
      `of ${match[1] || ''}<span style="color: #7affa6; font-weight: bold;">${country}</span>`
    );
  }

  return question;
};

  if (loading) return <p>Loading questions...</p>;
  if (error) return <p>Error: {error}</p>;
  if (questions.length === 0)
    return <p>No questions available for this continent.</p>;

  if (quizCompleted) {
    return <Score score={score} total={questions.length} />;
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="question-card">
      <h2
        className="question-text"
        dangerouslySetInnerHTML={{
          __html: highlightCountry(currentQuestion.question),
        }}
      ></h2>
      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              timeOut && option === currentQuestion.answer
                ? "correct-answer"
                : ""
            }`}
            onClick={() => handleAnswer(option === currentQuestion.answer)}
            disabled={timeOut}
          >
            {option}
          </button>
        ))}
      </div>
      <Timer
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        onTimeOut={handleTimeOut}
      />
      <h3 className="question-round">
        {currentIndex + 1}/{questions.length}
      </h3>
    </div>
  );
};

export default Quiz;

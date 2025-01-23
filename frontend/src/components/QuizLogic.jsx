import React, { useState, useCallback } from 'react';
import Quiz from './Quiz.jsx';
import Score from './Score.jsx';

const QuizLogic = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(10);
    } else {
      setQuizCompleted(true);
    }
  }, [currentQuestionIndex, questions.length]);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const handleTimeOut = useCallback(() => {
    handleNextQuestion();
  }, [handleNextQuestion]);

  if (quizCompleted) {
    return <Score score={score} total={questions.length} />;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Quiz
      question={currentQuestion}
      timeLeft={timeLeft}
      onAnswer={handleAnswer}
      onTimeOut={handleTimeOut}
      currentIndex={currentQuestionIndex}
      totalQuestions={questions.length}
    />
  );
};

export default QuizLogic;

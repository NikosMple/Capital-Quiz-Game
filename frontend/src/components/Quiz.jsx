import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchQuestions from "../hooks/useFetchQuestions"; 
import Timer from "./Timer";
import Score from "./Score";
import QuestionCard from "./QuestionCard";
import { ClipLoader } from "react-spinners";

const Quiz = () => {
  
  const { continent } = useParams();

  const { questions, loading, error } = useFetchQuestions(continent);
  
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [timeLeft, setTimeLeft] = useState(10); 
  const [quizCompleted, setQuizCompleted] = useState(false); 
  const [score, setScore] = useState(0);
  const [timeOut, setTimeOut] = useState(false);

  const handleAnswer = (isCorrect) => { 
    if (isCorrect) setScore(score + 1);

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

  if (loading) 
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
        <ClipLoader color="#7affa6" size={100} />
      </div>
    );

  if (error) return <p>Error: {error}</p>;
  if (!questions || questions.length === 0) return <p>No questions available for this continent.</p>;
  if (quizCompleted) return <Score score={score} total={questions.length} />;

  const currentQuestion = questions[currentIndex];  
  return (
    <div className="question-card">
      <QuestionCard 
        question={currentQuestion.question} 
        options={currentQuestion.options} 
        correctAnswer={currentQuestion.correct_answer}
        onAnswer={handleAnswer}
        timeOut={timeOut}
      />
      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeOut={handleTimeOut} />
      <h3 className="question-round">{currentIndex + 1}/{questions.length}</h3>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(currentIndex + 1) / questions.length * 100}%` }}></div>
      </div>    
    </div>
  );
};

export default Quiz;
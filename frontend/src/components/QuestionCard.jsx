import React from "react";
import Options from "./Options";

const QuestionCard = ({ question, options, correctAnswer, onAnswer, timeOut }) => {
  return (
    <div>
      <h2 className="question-text">{question}</h2>
      <Options options={options} correctAnswer={correctAnswer} onAnswer={onAnswer} timeOut={timeOut} />
    </div>
  );
};

export default QuestionCard;
